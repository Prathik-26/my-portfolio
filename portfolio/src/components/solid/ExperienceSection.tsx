import { createSignal, For, Show } from "solid-js";

interface Technology {
  name: string;
  icon: string;
}

interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  website?: string;
  description: string;
  responsibilities: string[];
  technologies: Technology[];
}

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = createSignal("kakunje");

  const experiences: Experience[] = [
    {
      id: "freelance",
      company: "Freelance",
      role: "Vibe Coder",
      period: "October 2024 - Present",
      location: "Mangalore, India",
      description: "Building custom web solutions and learning everyday.",
      responsibilities: [
        "Develop end-to-end web applications based on client requirements",
        "Design and implement database schemas and APIs",
        "Create responsive and accessible user interfaces",
        "Maintain and update existing client projects",
        "Learn new things everyday",
      ],
      technologies: [
        { name: "React", icon: "i-logos-react" },
        { name: "Next.js", icon: " i-logos-nextjs-icon" },
        { name: "Astro", icon: " i-logos-astro-icon" },
        { name: "Solid", icon: "  i-logos-solidjs-icon" },
        { name: "TypeScript", icon: "i-logos-typescript-icon" },
        { name: "JavaScript", icon: "i-logos-javascript" },
        { name: "Python", icon: " i-logos-python" },
        { name: "ChakraUI", icon: "  i-simple-icons-chakraui" },
        { name: "NestJS", icon: " i-simple-icons-nestjs" },
        { name: "Express", icon: "i-simple-icons-express" },
        { name: "Node.js", icon: "i-logos-nodejs-icon" },
        { name: "MySQL", icon: "i-logos-mysql" },
        { name: "MongoDB", icon: "i-logos-mongodb-icon" },
        { name: "Tailwind CSS", icon: "i-logos-tailwindcss-icon" },
        { name: "Vercel", icon: "i-logos-vercel-icon" },
        { name: "GitHub", icon: "i-logos-github-icon" },
        { name: "VS Code", icon: "i-logos-visual-studio-code" },
        { name: "Postman", icon: "i-simple-icons-postman" },
      ],
    },
    {
      id: "notespace",
      company: "NoteSpace",
      role: "Web Engineer",
      period: "December 2023 - September 2024",
      location: "Tokyo, Japan",
      description:
        "Sole developer for a cafe website, delivered complete frontend and backend while collaborating with designers and client.",
      responsibilities: [
        "Built and maintained responsive landing pages using React, TypeScript, ChakraUI",
        "Collaborated with Japanese clients to understand requirements and deliver solutions",
        "Integrated RESTful APIs and managed application state",
        "Participated in code reviews and maintained high code quality standards",
        "Worked in an Agile environment with sprint planning and daily standups",
      ],
      technologies: [
        { name: "React", icon: "i-logos-react" },
        { name: "TypeScript", icon: "i-logos-typescript-icon" },
        { name: "ChakraUI", icon: "  i-simple-icons-chakraui" },
        { name: "CSS3", icon: "i-logos-css-3" },
        // { name: "Jotai", icon: " i-simple-icons-jotai" },
        { name: "Redux", icon: "i-simple-icons-redux" },
        { name: "Zod", icon: "i-simple-icons-zod" },
        { name: "Redis", icon: "i-logos-redis" },
        { name: "NestJS", icon: " i-simple-icons-nestjs" },
        { name: "REST API", icon: "i-mdi-api" },
        { name: "TypeORM", icon: "i-simple-icons-typeorm" },
        { name: "MySQL", icon: "i-logos-mysql" },
        { name: "Swagger/OpenAPI", icon: " i-simple-icons-swagger" },
        { name: "VS Code", icon: "i-logos-visual-studio-code" },
        { name: "GitLab", icon: " i-simple-icons-gitlab" },
      ],
    },
    {
      id: "kakunje",
      company: "Kakunje Software Private Limited",
      role: "Web Developer Intern",
      period: "Feb 2023 - April 2024",
      location: "Mangalore, India",
      website: "https://kakunjesoftware.com/",
      description:
        "Built a full‑stack web app (Fashion Academy) integrating front‑end and back‑end technologies.",
      responsibilities: [
        "Created responsive pages with HTML, CSS, JavaScript, Bootstrap for an optimized UX.",
        "Implemented PHP + MySQL for database CRUD and dynamic features.",
        "Used AJAX and jQuery for seamless server communication and interactivity.",
      ],
      technologies: [
        { name: "HTML", icon: " i-logos-html-5" },
        { name: "CSS3", icon: "i-logos-css-3" },
        { name: "JavaScript", icon: "i-logos-javascript" },
        { name: "Bootstrap", icon: " i-logos-bootstrap" },
        { name: "PHP", icon: " i-logos-php" },
        { name: "MySQL", icon: "i-logos-mysql" },
        { name: "AJAX", icon: "i-mdi-api" },
        { name: "jQuery", icon: "i-logos-jquery" },
        { name: "GitHub", icon: "i-logos-github-icon" },
      ],
    },
  ];

  const currentExperience = () =>
    experiences.find((exp) => exp.id === activeTab());

  return (
    <section id="experience" class="min-h-screen py-24">
      <div class="mb-16">
        <h2 class="text-textLight text-5xl md:text-6xl font-bold mb-6">
          Experience
        </h2>
        <p class="text-text text-lg md:text-xl max-w-2xl">
          My professional journey in software development across different
          companies and roles.
        </p>
      </div>

      <div class="flex flex-col md:flex-row gap-8">
        {/* Vertical Tab List */}
        <div class="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible border-b-2 md:border-b-0 md:border-l-2 border-accent border-opacity-20 pb-2 md:pb-0 md:pl-0">
          <For each={experiences}>
            {(exp) => (
              <button
                onClick={() => setActiveTab(exp.id)}
                class={`px-6 py-3 text-left font-mono text-sm transition-all duration-300 whitespace-nowrap md:whitespace-normal border-b-2 md:border-b-0 md:border-l-2 ${
                  activeTab() === exp.id
                    ? "border-accent text-accent bg-accent bg-opacity-10"
                    : "border-transparent text-text hover:bg-secondary hover:text-accent"
                }`}
              >
                {exp.company}
              </button>
            )}
          </For>
        </div>

        {/* Content Area */}
        <div class="flex-1">
          <Show when={currentExperience()}>
            {(exp) => (
              <div class="space-y-6 animate-fade-in">
                {/* Header */}
                <div>
                  <h3 class="text-textLight text-2xl md:text-3xl font-bold mb-2">
                    {exp().role}{" "}
                    <Show when={exp().website}>
                      <a
                        href={exp().website}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-accent hover:underline inline-flex items-center gap-1"
                      >
                        @ {exp().company}
                        <div class="i-mdi-open-in-new text-lg"></div>
                      </a>
                    </Show>
                    <Show when={!exp().website}>
                      <span class="text-accent">@ {exp().company}</span>
                    </Show>
                  </h3>

                  <div class="flex flex-wrap gap-4 text-text font-mono text-sm">
                    <span class="flex items-center gap-2">
                      <div class="i-mdi-calendar text-accent"></div>
                      {exp().period}
                    </span>
                    <span class="flex items-center gap-2">
                      <div class="i-mdi-map-marker text-accent"></div>
                      {exp().location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p class="text-text text-base md:text-lg leading-relaxed">
                  {exp().description}
                </p>

                {/* Responsibilities */}
                <div>
                  <h4 class="text-textLight text-lg font-semibold mb-4">
                    Key Responsibilities:
                  </h4>
                  <ul class="space-y-3">
                    <For each={exp().responsibilities}>
                      {(responsibility) => (
                        <li class="flex gap-3 text-text">
                          <span class="text-accent mt-1 flex-shrink-0">▹</span>
                          <span>{responsibility}</span>
                        </li>
                      )}
                    </For>
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 class="text-textLight text-lg font-semibold mb-4">
                    Technologies Used:
                  </h4>

                  {/* Grid instead of flex */}
                  <div class="grid gap-3 md:gap-4 grid-cols-[repeat(auto-fit,minmax(4.25rem,1fr))] overflow-visible">
                    <For each={exp().technologies}>
                      {(tech) => (
                        <div
                          class="group relative tech-tile aspect-square flex items-center justify-center rounded-xl border border-accent/20 bg-accent/5 hover:border-accent/80 hover:bg-accent/10 transition-all duration-300 overflow-visible"
                          aria-label={tech.name}
                        >
                          <div
                            class={`${tech.icon} text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-110`}
                          ></div>

                          {/* Floating tooltip */}
                          <span
                            class="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap
                       bg-secondary text-text px-2 py-1 rounded text-xs font-mono opacity-0
                       group-hover:opacity-100 z-50 shadow-lg border border-accent/20"
                          >
                            {tech.name}
                          </span>
                        </div>
                      )}
                    </For>
                  </div>
                </div>
              </div>
            )}
          </Show>
        </div>
      </div>
    </section>
  );
}
