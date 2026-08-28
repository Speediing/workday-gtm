struct Params {
  time: f32,
  texel: vec2f,
}

@group(0) @binding(0) var<uniform> params: Params;

fn hash21(p: vec2f) -> f32 {
  return fract(sin(dot(p, vec2f(127.1, 311.7))) * 43758.5453);
}

fn noise(p: vec2f) -> f32 {
  let i = floor(p);
  let f = fract(p);
  let u = f * f * (3.0 - 2.0 * f);
  let a = hash21(i);
  let b = hash21(i + vec2f(1.0, 0.0));
  let c = hash21(i + vec2f(0.0, 1.0));
  let d = hash21(i + vec2f(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

fn fbm(p: vec2f) -> f32 {
  var value = 0.0;
  var amp = 0.5;
  var x = p;
  for (var i = 0; i < 5; i = i + 1) {
    value += amp * noise(x);
    x = x * 2.03 + vec2f(1.7, 9.2);
    amp *= 0.5;
  }
  return value;
}

fn bloom(p: vec2f, center: vec2f, radius: f32) -> f32 {
  let q = p - center;
  let grain = fbm(q * 3.4 + center * 2.0);
  let d = length(q * vec2f(0.72, 1.0)) - radius * (0.75 + 0.45 * grain);
  return 1.0 - smoothstep(-0.08, 0.22, d);
}

@fragment
fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
  let aspect = params.texel.y / max(params.texel.x, 1.0e-6);
  let p = (uv - vec2f(0.5)) * vec2f(aspect, 1.0);
  let t = params.time * 0.08;

  let drift = vec2f(sin(t * 0.7), cos(t * 0.55)) * 0.03;
  let grain = noise(uv * 180.0) * 0.08;

  let orangeA = bloom(p + drift, vec2f(-0.22, 0.08), 0.42);
  let orangeB = bloom(p - drift * 1.2, vec2f(0.08, -0.18), 0.28);
  let blueA = bloom(p + vec2f(-drift.y, drift.x), vec2f(0.34, 0.12), 0.36);
  let blueB = bloom(p, vec2f(0.18, 0.28), 0.18);

  let orangeAmt = clamp(orangeA * 0.85 + orangeB * 0.55, 0.0, 1.0);
  let blueAmt = clamp(blueA * 0.8 + blueB * 0.45, 0.0, 1.0);

  let paper = vec3f(0.957, 0.925, 0.855);
  let orange = vec3f(0.886, 0.353, 0.078);
  let blue = vec3f(0.043, 0.361, 0.671);
  let wet = vec3f(0.82, 0.55, 0.38);

  var col = paper;
  col = mix(col, orange, orangeAmt * 0.55);
  col = mix(col, blue, blueAmt * 0.42);
  col = mix(col, wet, orangeAmt * blueAmt * 0.35);
  col += grain * 0.06;

  let edge = pow(max(orangeAmt, blueAmt), 1.6);
  var a = 0.22 + edge * 0.42;
  a = clamp(a, 0.0, 0.72);
  return vec4f(col * a, a);
}
