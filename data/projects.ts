export type Project = {
  slug: string;
  title: string;
  category: "Executive" | "Operations" | "Automation" | "Technology";
  label: string;
  description: string;
  role: string;
  tools: string[];
  outcome: string;
  images: string[];
  evidence: string;
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "executive-calendar-management",
    title: "Executive Calendar Management",
    category: "Executive",
    label: "Simulated Executive Support",
    description: "Structured daily and weekly executive schedules around meetings, planning blocks, travel, buffers, deep work and personal commitments.",
    role: "Executive scheduling & time management",
    tools: ["Google Calendar", "Scheduling", "Priority management"],
    outcome: "A structured executive calendar that protects focus time, makes commitments visible and reduces scheduling friction.",
    images: ["/work/daily-calendar.webp", "/work/weekly-calendar.webp"],
    evidence: "Daily and weekly calendar views demonstrate practical schedule architecture, meeting coordination, buffers and time-blocking.",
  },
  {
    slug: "executive-travel-planning",
    title: "Executive Travel Planning",
    category: "Executive",
    label: "Independent Portfolio Demonstration",
    description: "A six-day Dubai executive/luxury travel plan combining destination research, flight and accommodation comparison, transport, dining, activities, budgeting, safety and itinerary design.",
    role: "Travel research, planning & itinerary design",
    tools: ["Research", "PowerPoint", "Budgeting", "Source verification"],
    outcome: "A decision-ready itinerary that consolidates logistics and recommendations into an executive-friendly travel plan.",
    images: ["/work/travel-cover.webp"],
    evidence: "The presentation demonstrates destination research, flight/accommodation comparison, transport planning, daily scheduling and budget structure.",
    note: "Demonstration scenario using research and simulated planning; not a client booking.",
  },
  {
    slug: "meeting-management",
    title: "Executive Meeting Management",
    category: "Executive",
    label: "Independent Portfolio Demonstration",
    description: "A complete meeting workflow covering agenda preparation, structured discussion, minutes, decisions, responsibilities and follow-up actions.",
    role: "Meeting preparation, documentation & action tracking",
    tools: ["Meeting agenda", "Minutes", "Documentation", "Action tracking"],
    outcome: "A repeatable meeting process that converts discussion into clear decisions, owners and next actions.",
    images: ["/work/meeting-agenda.webp", "/work/meeting-minutes.webp"],
    evidence: "Agenda and minutes demonstrate structured preparation and professional post-meeting documentation.",
  },
  {
    slug: "sales-data-management",
    title: "Sales Data Management & Reporting",
    category: "Operations",
    label: "Spreadsheet Demonstration",
    description: "A structured Google Sheets exercise demonstrating calculations, filtering, data organization and summary reporting from a sales dataset.",
    role: "Spreadsheet data management & analysis",
    tools: ["Google Sheets", "FILTER()", "Formulas", "Data organization"],
    outcome: "Converted a raw sales table into filtered views and decision-ready summary metrics.",
    images: ["/work/sales-data.webp", "/work/sales-answer.webp", "/work/pencils-only.webp"],
    evidence: "The workbook demonstrates formula-driven totals, filtering and summary values such as total sales, pencil volume and average unit price.",
    note: "Synthetic demonstration data created for skills presentation.",
  },
  {
    slug: "technology-market-research",
    title: "Technology Market Research & Business Intelligence",
    category: "Operations",
    label: "Independent Research Demonstration",
    description: "Research and analysis of 18 technology companies using structured fields, source verification, categorization and comparative analysis.",
    role: "Research, data organization & analytical reporting",
    tools: ["Web research", "Data collection", "Report writing", "Comparative analysis"],
    outcome: "A structured research dataset and analytical report designed to support business understanding and decision-making.",
    images: ["/work/research-report.webp"],
    evidence: "The research covers company profiles, locations, industries, founding years, products/services, audiences, social presence, contacts and sources.",
    note: "Independent research demonstration; not commissioned client research.",
  },
  {
    slug: "zoho-slack-chatgpt-automation",
    title: "Zoho CRM + Slack + ChatGPT Automation",
    category: "Automation",
    label: "Automation Demonstration",
    description: "A connected CRM workflow demonstrating how Zoho CRM, Slack and ChatGPT can work together to streamline business tasks, communication and client operations.",
    role: "CRM configuration, integration & AI workflow design",
    tools: ["Zoho CRM", "Slack", "ChatGPT", "Forms", "Email templates"],
    outcome: "A connected operational workflow that reduces manual handoffs between CRM records, team communication and AI-assisted tasks.",
    images: ["/work/zoho.webp"],
    evidence: "The CRM workspace demonstrates leads, deals, tasks and meetings, while the integration work includes client-form and email-template creation.",
    note: "Demonstration environment using simulated data.",
  },
  {
    slug: "email-management",
    title: "Inbox Organization & Email Management",
    category: "Operations",
    label: "Workspace Demonstration",
    description: "An organized Gmail workspace demonstrating label architecture and retrieval-oriented inbox organization for multiple workstreams.",
    role: "Inbox organization & information management",
    tools: ["Gmail", "Labels", "Search", "Information architecture"],
    outcome: "A clearer inbox structure that separates learning, discovery calls, CRM, applications, interviews, offers and platform activity.",
    images: ["/work/email.webp"],
    evidence: "The screenshot demonstrates practical label-based organization across several recurring work categories.",
  },
];
