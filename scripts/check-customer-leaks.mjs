import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { extname } from "node:path";

const SELF = "scripts/check-customer-leaks.mjs";

const SKIP_EXACT = new Set([
  SELF,
  "package-lock.json",
]);

const SKIP_PREFIX = [".git/", "node_modules/", ".next/"];

const SKIP_EXT = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".webp",
  ".mp4",
  ".woff",
  ".woff2",
  ".ttf",
  ".otf",
  ".ico",
]);

const NAMES = [
  "datadog",
  "seagate",
  "concentrix",
  "krista",
  "madeline",
  "acme",
];

const MARKERS = [
  "brand-dd",
  "--dd-h",
  "standardize-room",
  "legal-redlines",
  "attach-engine",
  "632ca6",
  "4c1d82",
  "8d68ce",
  "9774d2",
];

const SOURCE_EXT = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".css",
  ".md",
  ".json",
  ".svg",
  ".wgsl",
  ".html",
]);

function trackedFiles() {
  const out = execSync("git ls-files -z", { encoding: "buffer" });
  return out
    .toString("utf8")
    .split("\0")
    .filter(Boolean);
}

function shouldScan(file) {
  if (SKIP_EXACT.has(file)) return false;
  if (SKIP_PREFIX.some((prefix) => file.startsWith(prefix))) return false;
  if (SKIP_EXT.has(extname(file).toLowerCase())) return false;
  return true;
}

function isUserFacing(file) {
  return SOURCE_EXT.has(extname(file).toLowerCase()) || file === "README.md";
}

const nameRe = new RegExp(`\\b(${NAMES.join("|")})\\b`, "i");
const markerRe = new RegExp(MARKERS.map((m) => m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), "i");
const emDash = "\u2014";

const files = trackedFiles().filter(shouldScan);
const errors = [];

for (const file of files) {
  let text;
  try {
    text = readFileSync(file, "utf8");
  } catch {
    continue;
  }

  const lines = text.split(/\r?\n/);
  lines.forEach((line, index) => {
    const n = index + 1;
    const nameHit = line.match(nameRe);
    if (nameHit) {
      errors.push(`${file}:${n} forbidden name ${nameHit[0]}`);
    }
    const markerHit = line.match(markerRe);
    if (markerHit) {
      errors.push(`${file}:${n} forbidden marker ${markerHit[0]}`);
    }
    if (isUserFacing(file) && line.includes(emDash)) {
      errors.push(`${file}:${n} forbidden em dash`);
    }
  });
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`ok ${files.length} files`);
