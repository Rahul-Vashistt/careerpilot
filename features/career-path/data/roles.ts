export type Resource = {
  label: string;
  provider: string;
  url: string;
};

export type RoleBlueprint = {
  title: string;
  summary: string;
  coreSkills: string[];
  niceSkills: string[];
  projects: { title: string; description: string }[];
  resources: Resource[];
  related: string[];
};

const roadmap = (slug: string, label: string): Resource => ({
  label,
  provider: "roadmap.sh",
  url: `https://roadmap.sh/${slug}`,
});

export const roleBlueprints: Record<string, RoleBlueprint> = {
  "Frontend Developer": {
    title: "Frontend Developer",
    summary:
      "Build the interfaces people actually see and use: fast, accessible and responsive web apps.",
    coreSkills: ["HTML", "CSS", "JavaScript", "Git", "React", "TypeScript", "Tailwind CSS", "Next.js"],
    niceSkills: ["Redux", "Jest", "Figma", "REST API"],
    projects: [
      { title: "Responsive portfolio site", description: "Show your work with a clean, accessible, mobile-first layout." },
      { title: "Data dashboard", description: "Fetch API data, handle loading and error states, add filters and charts." },
      { title: "Full storefront UI", description: "Product listing, cart and checkout flow built with Next.js." },
    ],
    resources: [
      roadmap("frontend", "Frontend Developer roadmap"),
      { label: "Learn web development", provider: "MDN", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development" },
      { label: "Learn React", provider: "react.dev", url: "https://react.dev/learn" },
    ],
    related: ["Full Stack Developer", "UI/UX Designer"],
  },

  "Backend Developer": {
    title: "Backend Developer",
    summary:
      "Design the APIs, databases and services that power products behind the scenes.",
    coreSkills: ["Git", "Node.js", "Express.js", "REST API", "PostgreSQL", "Prisma", "Docker", "System Design"],
    niceSkills: ["Redis", "WebSockets", "Linux", "GraphQL"],
    projects: [
      { title: "Authenticated REST API", description: "CRUD endpoints with validation, auth and a relational database." },
      { title: "Real-time chat service", description: "WebSocket server with rooms, persistence and basic rate limiting." },
      { title: "Containerised service", description: "Dockerise an API with caching, logging and a CI pipeline." },
    ],
    resources: [
      roadmap("backend", "Backend Developer roadmap"),
      { label: "Learn Node.js", provider: "nodejs.org", url: "https://nodejs.org/en/learn" },
      { label: "PostgreSQL tutorial", provider: "postgresql.org", url: "https://www.postgresql.org/docs/current/tutorial.html" },
    ],
    related: ["Full Stack Developer", "DevOps Engineer"],
  },

  "Full Stack Developer": {
    title: "Full Stack Developer",
    summary:
      "Own features end to end, from the database and API to the interface users click on.",
    coreSkills: ["HTML", "CSS", "JavaScript", "Git", "React", "Node.js", "TypeScript", "PostgreSQL", "REST API", "Next.js"],
    niceSkills: ["Prisma", "Docker", "Tailwind CSS", "Jest"],
    projects: [
      { title: "SaaS-style app with auth", description: "Sign-up, onboarding, dashboard and settings backed by a real database." },
      { title: "Collaborative tool", description: "A task or notes app with sharing, roles and live updates." },
      { title: "Production deployment", description: "Ship a project with CI, environment config, monitoring and a custom domain." },
    ],
    resources: [
      roadmap("full-stack", "Full Stack Developer roadmap"),
      { label: "Learn Next.js", provider: "nextjs.org", url: "https://nextjs.org/learn" },
      { label: "Learn web development", provider: "MDN", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development" },
    ],
    related: ["Frontend Developer", "Backend Developer"],
  },

  "Game Developer": {
    title: "Game Developer",
    summary:
      "Turn mechanics, physics and art into playable experiences on PC, console or mobile.",
    coreSkills: ["Problem Solving", "Object-Oriented Programming", "Data Structures & Algorithms", "Git", "C#", "C++"],
    niceSkills: ["Design Patterns", "Linux", "Teamwork"],
    projects: [
      { title: "2D platformer", description: "Movement, collisions, enemies and a few polished levels." },
      { title: "Multiplayer prototype", description: "Basic networking with two players sharing a session." },
      { title: "Game jam entry", description: "Design, build and publish a complete small game in a weekend." },
    ],
    resources: [
      roadmap("game-developer", "Game Developer roadmap"),
      { label: "Unity Learn", provider: "Unity", url: "https://learn.unity.com/" },
      { label: "Godot getting started", provider: "Godot Docs", url: "https://docs.godotengine.org/en/stable/getting_started/introduction/index.html" },
    ],
    related: ["Mobile Developer", "Backend Developer"],
  },

  "Mobile Developer": {
    title: "Mobile Developer",
    summary:
      "Create fast, native-feeling apps that live on people's phones.",
    coreSkills: ["JavaScript", "Git", "React", "TypeScript", "React Native", "REST API", "Firebase"],
    niceSkills: ["Flutter", "Android", "iOS", "Jest"],
    projects: [
      { title: "Habit tracker", description: "Local storage, notifications and a clean onboarding flow." },
      { title: "API-driven app", description: "Lists, search, pagination and offline-friendly caching." },
      { title: "Store-ready release", description: "Auth, analytics and a published beta build for testers." },
    ],
    resources: [
      roadmap("android", "Android Developer roadmap"),
      { label: "React Native docs", provider: "reactnative.dev", url: "https://reactnative.dev/docs/getting-started" },
      { label: "Flutter get started", provider: "flutter.dev", url: "https://docs.flutter.dev/get-started" },
    ],
    related: ["Frontend Developer", "Full Stack Developer"],
  },

  "Data Analyst": {
    title: "Data Analyst",
    summary:
      "Turn raw data into clear insights and decisions with queries, analysis and storytelling.",
    coreSkills: ["Critical Thinking", "MySQL", "Python", "PostgreSQL", "Communication", "Problem Solving"],
    niceSkills: ["Machine Learning", "Google Cloud", "Teamwork"],
    projects: [
      { title: "Exploratory analysis", description: "Clean and explore a public dataset, then document your findings." },
      { title: "Sales dashboard", description: "KPIs, trends and segments presented for a non-technical audience." },
      { title: "Case-study write-up", description: "A full question-to-recommendation analysis you can show in interviews." },
    ],
    resources: [
      roadmap("data-analyst", "Data Analyst roadmap"),
      { label: "Kaggle Learn", provider: "Kaggle", url: "https://www.kaggle.com/learn" },
      { label: "The Python tutorial", provider: "python.org", url: "https://docs.python.org/3/tutorial/" },
    ],
    related: ["Data Scientist", "AI/ML Engineer"],
  },

  "Data Scientist": {
    title: "Data Scientist",
    summary:
      "Use statistics and machine learning to model problems and predict what happens next.",
    coreSkills: ["Python", "Critical Thinking", "PostgreSQL", "Machine Learning", "PyTorch", "Communication"],
    niceSkills: ["TensorFlow", "Hugging Face", "Google Cloud"],
    projects: [
      { title: "Prediction model", description: "Feature engineering, validation and error analysis on a real dataset." },
      { title: "Experiment analysis", description: "Design and analyse an A/B test with clear conclusions." },
      { title: "End-to-end ML project", description: "From raw data to a deployed model behind a simple app." },
    ],
    resources: [
      roadmap("ai-data-scientist", "AI & Data Scientist roadmap"),
      { label: "Kaggle Learn", provider: "Kaggle", url: "https://www.kaggle.com/learn" },
      { label: "scikit-learn user guide", provider: "scikit-learn", url: "https://scikit-learn.org/stable/user_guide.html" },
    ],
    related: ["Data Analyst", "AI/ML Engineer"],
  },

  "AI/ML Engineer": {
    title: "AI/ML Engineer",
    summary:
      "Build, train and ship machine-learning systems that work reliably in production.",
    coreSkills: ["Python", "Data Structures & Algorithms", "Machine Learning", "PyTorch", "Docker", "Hugging Face", "Generative AI"],
    niceSkills: ["TensorFlow", "AWS", "Prompt Engineering", "OpenAI"],
    projects: [
      { title: "Fine-tuned model", description: "Adapt a pretrained model to a focused task and evaluate it." },
      { title: "RAG assistant", description: "Retrieval-augmented chatbot over your own documents." },
      { title: "Model in production", description: "Serve a model through an API with monitoring and versioning." },
    ],
    resources: [
      roadmap("ai-engineer", "AI Engineer roadmap"),
      { label: "PyTorch tutorials", provider: "pytorch.org", url: "https://pytorch.org/tutorials/" },
      { label: "Hugging Face courses", provider: "Hugging Face", url: "https://huggingface.co/learn" },
    ],
    related: ["Data Scientist", "Backend Developer"],
  },

  "DevOps Engineer": {
    title: "DevOps Engineer",
    summary:
      "Automate how software is built, shipped and run so teams can release with confidence.",
    coreSkills: ["Linux", "Git", "Docker", "Jenkins", "AWS", "Kubernetes", "Terraform"],
    niceSkills: ["Python", "GitHub", "Google Cloud"],
    projects: [
      { title: "CI/CD pipeline", description: "Automated test, build and deploy for a sample app." },
      { title: "Infrastructure as code", description: "Provision a cloud environment reproducibly with Terraform." },
      { title: "Kubernetes deployment", description: "Run a multi-service app with health checks and autoscaling." },
    ],
    resources: [
      roadmap("devops", "DevOps roadmap"),
      { label: "Docker get started", provider: "Docker Docs", url: "https://docs.docker.com/get-started/" },
      { label: "Kubernetes tutorials", provider: "kubernetes.io", url: "https://kubernetes.io/docs/tutorials/" },
    ],
    related: ["Backend Developer", "Cybersecurity Engineer"],
  },

  "Cybersecurity Engineer": {
    title: "Cybersecurity Engineer",
    summary:
      "Find weaknesses before attackers do and design systems that stay secure under pressure.",
    coreSkills: ["Linux", "Network Security", "Web Security", "OWASP", "Cryptography", "Ethical Hacking", "Penetration Testing"],
    niceSkills: ["Python", "Cybersecurity", "AWS"],
    projects: [
      { title: "Home security lab", description: "Set up an isolated lab and document attacks and defences." },
      { title: "Web app audit", description: "Test a deliberately vulnerable app against the OWASP Top 10." },
      { title: "Security report", description: "A professional write-up with findings, impact and remediation." },
    ],
    resources: [
      roadmap("cyber-security", "Cyber Security roadmap"),
      { label: "OWASP Top Ten", provider: "OWASP", url: "https://owasp.org/www-project-top-ten/" },
      { label: "Hands-on security rooms", provider: "TryHackMe", url: "https://tryhackme.com/" },
    ],
    related: ["DevOps Engineer", "Backend Developer"],
  },

  "UI/UX Designer": {
    title: "UI/UX Designer",
    summary:
      "Research users, shape flows and craft interfaces that feel obvious to use.",
    coreSkills: ["Critical Thinking", "UI/UX Design", "Figma", "Graphic Design", "Communication"],
    niceSkills: ["HTML", "CSS", "Teamwork"],
    projects: [
      { title: "App redesign case study", description: "Audit an existing product, define problems and propose improvements." },
      { title: "Design system starter", description: "Reusable components, tokens and usage guidelines in Figma." },
      { title: "End-to-end product design", description: "Research, wireframes, prototype and usability testing results." },
    ],
    resources: [
      roadmap("ux-design", "UX Design roadmap"),
      { label: "UX research & design articles", provider: "Nielsen Norman Group", url: "https://www.nngroup.com/articles/" },
      { label: "Figma help centre", provider: "Figma", url: "https://help.figma.com/hc/en-us" },
    ],
    related: ["Frontend Developer", "Mobile Developer"],
  },
};

export const fallbackBlueprint: RoleBlueprint = {
  title: "Your Career",
  summary:
    "A flexible path built around core professional skills and a portfolio that proves what you can do.",
  coreSkills: ["Problem Solving", "Critical Thinking", "Communication", "Teamwork", "Git"],
  niceSkills: ["Leadership", "Jira"],
  projects: [
    { title: "Portfolio piece", description: "Complete one project that shows how you think and work." },
    { title: "Collaborative project", description: "Work with others and document your contribution." },
    { title: "Case study", description: "Write up the problem, your approach and the result." },
  ],
  resources: [
    { label: "freeCodeCamp curriculum", provider: "freeCodeCamp", url: "https://www.freecodecamp.org/learn" },
    { label: "CS50 free course", provider: "Harvard", url: "https://cs50.harvard.edu/x/" },
    { label: "Developer Roadmaps", provider: "roadmap.sh", url: "https://roadmap.sh/" },
  ],
  related: ["Full Stack Developer", "Data Analyst"],
};

export function getBlueprint(role: string): RoleBlueprint {
  const blueprint = roleBlueprints[role];

  return blueprint ?? { ...fallbackBlueprint, title: role || fallbackBlueprint.title };
}
