import type { CroJob } from "./types";

export const JOBS: CroJob[] = [
  {
    id: "implementation-plan",
    number: 1,
    title: "Turn an implementation call into a plan",
    trigger: "An implementation call starts",
    backgroundAction: "Listening to the call and grouping the notes",
    problem:
      "Kickoff notes land in chat, a doc, and someone's head. The customer leaves without a plan they can run.",
    botJob:
      "Launch stays on the call, groups the decisions, and drafts the implementation plan. You review it before it goes out.",
    storyboard: [
      {
        when: "Minute 8",
        label: "The implementation call is live. Launch is already in the notes.",
        scene: "call",
        visual: {
          kind: "live-call",
          title: "Harbor implementation working session",
          people: [
            { initials: "YO", name: "You" },
            { initials: "CU", name: "Customer" },
            { initials: "PA", name: "Partner" },
          ],
        },
      },
      {
        when: "Minute 24",
        label: "Notes get grouped by decision, not by who talked.",
        scene: "notes",
        visual: {
          kind: "meeting-notes",
          timestamp: "14:24",
          speaker: "Note",
          note: "Customer asked for a phased go-live. Payroll first. Time and absence next. Security wants SSO named before any extra products.",
          tags: ["Phased go-live", "Payroll first", "SSO first"],
        },
      },
      {
        when: "Minute 36",
        label: "Launch drafts the plan while the call is still open.",
        scene: "deck",
        visual: {
          kind: "plan-draft",
          eyebrow: "Draft plan",
          headline: "Harbor implementation plan",
          next: "Tuesday working session",
          status: "Owners and phases filled in",
        },
      },
      {
        when: "After the call",
        label: "The implementation plan is ready to review.",
        scene: "send",
        artifact: {
          kind: "one-pager",
          title: "Harbor implementation plan",
          eyebrow: "Draft · not sent",
          sections: [
            {
              heading: "What we decided",
              body: "Phased go-live. Payroll is the first workstream. Time and absence follow after payroll is stable. SSO is named before any extra products.",
            },
            {
              heading: "Phase 1 · payroll",
              body: "Config, tenant access, and the first payroll parallel run. Customer ops owns the sample group. We own the build checklist.",
            },
            {
              heading: "Phase 2 · time and absence",
              body: "Starts after the first clean payroll run. Same working group. No extra products in this phase.",
            },
            {
              heading: "Next working session",
              body: "Tuesday. Bring the payroll sample group and the security owner for SSO. This draft stays with you until you send it.",
            },
          ],
        },
      },
    ],
    unlock:
      "A dated plan with owners, phases, and the next working session.",
    outcome:
      "The call ends with a plan the customer can use next week.",
    demo: {
      title: "Launch",
      subtitle: "Implementation call · plan draft",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "launch",
          name: "Launch",
          role: "bot",
          persona: "Sits in the implementation call and drafts the customer plan",
          color: "#E25A14",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "launch",
          kind: "routine",
          body: "Harbor implementation call started. I am in the notes and watching for decisions, owners, and the next session. The plan stays a draft.",
        },
        {
          id: "m2",
          from: "launch",
          kind: "text",
          body: "Grouped notes so far. Phased go-live. Payroll first. Time and absence next. SSO before any extra products. Writing that into the plan now.",
        },
        {
          id: "m3",
          from: "launch",
          kind: "text",
          body: "Still on the call. The Tuesday session is the next step. I put the sample group and the security owner on that invite line.",
        },
        {
          id: "m4",
          from: "launch",
          kind: "draft",
          draftLabel: "Implementation plan · not sent",
          artifact: {
            kind: "one-pager",
            title: "Harbor implementation plan",
            eyebrow: "Draft · not sent",
            sections: [
              {
                heading: "What we decided",
                body: "Phased go-live. Payroll is the first workstream. Time and absence follow after payroll is stable. SSO is named before any extra products.",
              },
              {
                heading: "Phase 1 · payroll",
                body: "Config, tenant access, and the first payroll parallel run. Customer ops owns the sample group. We own the build checklist.",
              },
              {
                heading: "Phase 2 · time and absence",
                body: "Starts after the first clean payroll run. Same working group. No extra products in this phase.",
              },
              {
                heading: "Next working session",
                body: "Tuesday. Bring the payroll sample group and the security owner for SSO.",
              },
            ],
          },
        },
        {
          id: "m5",
          from: "launch",
          kind: "system",
          body: "Nothing sent. The plan stays a draft until you tap Send.",
        },
      ],
    },
  },
  {
    id: "sourced-answer",
    number: 2,
    title: "Turn a hard question into a sourced draft",
    trigger: "A customer question lands",
    backgroundAction: "Checking product docs and internal notes",
    problem:
      "A hard question sits while product, CS, and the seller all get tagged. The customer waits.",
    botJob:
      "Relay finds the product answer and the matching internal note, then drafts a reply with sources. You send it.",
    storyboard: [
      {
        when: "Question lands",
        label: "A customer question comes in. Relay starts before you open it.",
        scene: "notes",
        visual: {
          kind: "inbound-question",
          sender: "Customer ops",
          subject: "What can start before the security review?",
          status: "Needs a sourced answer",
        },
      },
      {
        when: "Sources checked",
        label: "Product docs and internal notes are already open.",
        scene: "inspect",
        visual: {
          kind: "answers-found",
          sources: [
            { name: "Implementation guide", answer: "Planning can start" },
            { name: "Security checklist", answer: "Production access waits" },
            { name: "Project notes", answer: "First working group named" },
          ],
          status: "Sources attached",
        },
      },
      {
        when: "Draft waiting",
        label: "The sourced reply is ready. Nothing is sent.",
        scene: "send",
        artifact: {
          kind: "one-pager",
          title: "Harbor sourced reply",
          eyebrow: "Draft · not sent",
          sections: [
            {
              heading: "The question",
              body: "Customer ops asked which rollout steps can start before the security review is complete.",
            },
            {
              heading: "The answer",
              body: "Planning, owners, the first working group, and the config checklist can start now. Production access waits for the security review.",
            },
            {
              heading: "Sources",
              body: "The implementation guide, security checklist, and current project notes.",
            },
            {
              heading: "What we need back",
              body: "The working group owner and the security review date. The reply stays a draft until you send it.",
            },
          ],
        },
      },
    ],
    unlock: "A sourced draft with the product answer and the internal note.",
    outcome: "A sourced draft is waiting. Nothing is sent until you say so.",
    demo: {
      title: "Relay",
      subtitle: "Customer question · sourced draft",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "relay",
          name: "Relay",
          role: "bot",
          persona: "Finds product and internal answers, then drafts the reply",
          color: "#0B5CAB",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "relay",
          kind: "routine",
          body: "New Harbor question from customer ops. They want to know what can start before security review. Checking the approved rollout docs.",
        },
        {
          id: "m2",
          from: "relay",
          kind: "text",
          body: "The implementation guide says planning can start. The security checklist holds production access. Project notes already name the first working group.",
        },
        {
          id: "m3",
          from: "relay",
          kind: "draft",
          draftLabel: "Sourced reply · not sent",
          artifact: {
            kind: "one-pager",
            title: "Harbor sourced reply",
            eyebrow: "Draft · not sent",
            sections: [
              {
                heading: "The question",
                body: "Customer ops asked which rollout steps can start before the security review is complete.",
              },
              {
                heading: "The answer",
                body: "Planning, owners, the first working group, and the config checklist can start now. Production access waits for the security review.",
              },
              {
                heading: "Sources",
                body: "The implementation guide, security checklist, and current project notes.",
              },
            ],
          },
        },
        {
          id: "m4",
          from: "relay",
          kind: "draft",
          draftLabel: "Gmail reply · not sent",
          artifact: {
            kind: "gmail",
            title: "Reply to Harbor customer ops",
            to: "Harbor customer ops",
            subject: "Steps that can start before security review",
            body: "Hi,\n\nPlanning, owners, the first working group, and the config checklist can start now. Production access waits until the security review is complete.\n\nI checked the implementation guide, security checklist, and current project notes.\n\nSend the working group owner and the security review date and we will update the plan.\n\nDraft only. Nothing sent yet.",
          },
        },
        {
          id: "m5",
          from: "relay",
          kind: "system",
          body: "Nothing sent. The reply stays a draft until you tap Send.",
        },
      ],
    },
  },
  {
    id: "project-brief",
    number: 3,
    title: "Turn a weekly review into a project brief",
    trigger: "Friday review comes around",
    backgroundAction: "Scanning active work and grouping it by project",
    problem:
      "The week lives in chats. Leadership wants one table by project, not a pile of threads.",
    botJob:
      "Brief reads the week's work, groups it by project, and drafts the review table.",
    storyboard: [
      {
        when: "Friday morning",
        label: "Brief scans the active projects before the review.",
        scene: "inspect",
        visual: {
          kind: "project-scan",
          title: "Active Harbor work",
          items: [
            { name: "Payroll go-live", state: "Moved this week" },
            { name: "Absence rollout", state: "Waiting on sample group" },
            { name: "Reporting pack", state: "Draft in review" },
          ],
        },
      },
      {
        when: "Grouped",
        label: "Work is stacked by project, not by chat.",
        scene: "map",
        visual: {
          kind: "work-grouped",
          groups: [
            {
              project: "Payroll go-live",
              note: "Parallel run notes cleaned. Next is the sample group sign-off.",
            },
            {
              project: "Absence rollout",
              note: "Config is ready. Blocked on the sample group list.",
            },
            {
              project: "Reporting pack",
              note: "First draft is in review. No send until you say so.",
            },
          ],
        },
      },
      {
        when: "Review table",
        label: "The project brief is a table you can take into the meeting.",
        scene: "send",
        artifact: {
          kind: "table",
          title: "Harbor weekly project brief",
          caption: "Draft for Friday review. Edit before you send.",
          columns: ["Project", "What moved", "Stuck on", "Next"],
          rows: [
            [
              "Payroll go-live",
              "Parallel run notes cleaned",
              "Sample group sign-off",
              "Tuesday working session",
            ],
            [
              "Absence rollout",
              "Config ready",
              "Sample group list",
              "Hold until payroll is clean",
            ],
            [
              "Reporting pack",
              "First draft written",
              "Your review",
              "Send after you edit",
            ],
          ],
        },
      },
    ],
    unlock: "One project table for Friday. You edit, then send.",
    outcome: "The weekly review starts from a project table, not a chat dump.",
    demo: {
      title: "Brief",
      subtitle: "Weekly review · project table",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "brief",
          name: "Brief",
          role: "bot",
          persona: "Reads the week's work and drafts the project review table",
          color: "#0F7A5A",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "brief",
          kind: "routine",
          body: "Friday review window. Scanning active Harbor work and grouping it by project. Drafts only.",
        },
        {
          id: "m2",
          from: "brief",
          kind: "text",
          body: "Three projects moved. Payroll go-live, absence rollout, and the reporting pack. Stacking them in one table.",
        },
        {
          id: "m3",
          from: "brief",
          kind: "draft",
          draftLabel: "Weekly project brief · not sent",
          artifact: {
            kind: "table",
            title: "Harbor weekly project brief",
            caption: "Draft for Friday review. Edit before you send.",
            columns: ["Project", "What moved", "Stuck on", "Next"],
            rows: [
              [
                "Payroll go-live",
                "Parallel run notes cleaned",
                "Sample group sign-off",
                "Tuesday working session",
              ],
              [
                "Absence rollout",
                "Config ready",
                "Sample group list",
                "Hold until payroll is clean",
              ],
              [
                "Reporting pack",
                "First draft written",
                "Your review",
                "Send after you edit",
              ],
            ],
          },
        },
        {
          id: "m4",
          from: "brief",
          kind: "system",
          body: "Nothing sent. The table stays a draft until you tap Send.",
        },
      ],
    },
  },
];

export function getJob(id: string): CroJob | undefined {
  return JOBS.find((job) => job.id === id);
}
