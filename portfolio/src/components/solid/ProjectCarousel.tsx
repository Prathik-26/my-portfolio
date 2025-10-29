import { createSignal, For, Show, onMount } from "solid-js";
import createEmblaCarousel from "embla-carousel-solid";
import Autoplay from "embla-carousel-autoplay";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: string;
  featured?: boolean;
  image?: string;
  github?: string;
  live?: string;
}

export default function ProjectCarousel() {
  const [activeFilter, setActiveFilter] = createSignal<string>("all");
  const [emblaRef, emblaApi] = createEmblaCarousel(
    () => ({
      loop: false,
      align: "start",
      slidesToScroll: 1,
      skipSnaps: false,
      containScroll: "trimSnaps",
    }),
    () => [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "Personal portfolio website showcasing projects, skills, and professional experience. Features modern design, smooth animations, responsive layout, and optimized performance across all devices.",
      tech: ["Astro", "SolidJS", "UnoCSS", "TypeScript"],
      category: "web",
      github: "https://github.com/Prathik-26/my-portfolio",
    },
    {
      id: 2,
      title: "Personal Expense Tracker",
      description:
        "A comprehensive expense tracking application built with modern TypeScript. Features include real-time expense monitoring, category-based organization, data visualization, and detailed financial analytics to help users manage their personal finances effectively.",
      tech: ["React, TypeScript", "NodeJS", "Express", "Shadcn", "Python"],
      category: "web",
      // featured: true,
      github: "https://github.com/Prathik-26/personal-expense-tracker",
      live: "https://personal-expense-tracker-six-weld.vercel.app",
    },
    {
      id: 3,
      title: "Reddit Client Web App",
      description:
        "A modern Reddit client built with React and the latest web technologies. Features include infinite scrolling, real-time updates, advanced search functionality, and responsive design optimized for all devices.",
      tech: ["React", "TypeScript", "Reddit API", "Chakra UI"],
      category: "web",
      // featured: true,
      github: "https://github.com/Prathik-26/reddit-client",
      live: "https://reddit-client-blue.vercel.app/",
    },
    {
      id: 4,
      title: "Weather App",
      description:
        "Real-time weather application with beautiful UI and detailed forecasts. Built to practice API integration and state management with modern React patterns.",
      tech: ["React", "JavaScript", "OpenWeather API", "CSS"],
      category: "web",
      // image: "/assets/projects/weather-app.jpg",
      // featured: true,
      github: "https://github.com/yourusername/weather-app",
      live: "https://weather-app-bay-theta-59.vercel.app/",
    },
    {
      id: 5,
      title: "Blog Website",
      description:
        "Full-stack blog platform built with the MERN stack. Features include user authentication, rich text editor for creating posts, responsive Material-UI design, comment system, and a powerful admin dashboard for content management.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Material-UI"],
      category: "fullstack",
      // featured: true,
      github: "https://github.com/Prathik-26/Blog-Website",
    },
    {
      id: 6,
      title: "E-commerce Platform",
      description:
        "Modern e-commerce website developed with React and styled-components. Features a clean product catalog, shopping cart functionality, responsive design, and an intuitive user interface optimized for seamless online shopping experiences.",
      tech: ["React", "JavaScript", "CSS", "HTML", "Styled Components"],
      category: "web",
      // featured: true,
      github: "https://github.com/Prathik-26/Ecommerce-React",
    },
    {
      id: 7,
      title: "Clinic Database Management",
      description:
        "Comprehensive clinic management system for healthcare facilities. Manages patient records, appointments, medical history, prescriptions, and staff coordination. Built with a focus on data security and efficient healthcare workflow management.",
      tech: ["MariaDB", "PHP", "HTML", "CSS"],
      category: "fullstack",
      github: "https://github.com/Prathik-26/Clinic-Database-Management",
    },
    {
      id: 8,
      title: "Phonebook Management System",
      description:
        "Contact management system built using C++ for VTU coursework. Features include adding, editing, deleting, and searching contacts with efficient data structures. Demonstrates strong fundamentals in C++ programming and file handling.",
      tech: ["C++", "Data Structures", "File Handling"],
      category: "systems",
      github: "https://github.com/Prathik-26/Phonebook-Management-System",
    },
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "web", label: "Web Apps" },
    { id: "fullstack", label: "Full Stack" },
    { id: "systems", label: "Systems" },
  ];

  const filteredProjects = () => {
    if (activeFilter() === "all") {
      return projects;
    }
    return projects.filter((project) => project.category === activeFilter());
  };

  const handleFilterChange = (categoryId: string) => {
    setActiveFilter(categoryId);
    // Reset carousel to first slide when filter changes
    emblaApi()?.scrollTo(0);
  };

  const scrollPrev = () => emblaApi()?.scrollPrev();
  const scrollNext = () => emblaApi()?.scrollNext();

  // Get current slide index
  const [selectedIndex, setSelectedIndex] = createSignal(0);
  const [canScrollPrev, setCanScrollPrev] = createSignal(false);
  const [canScrollNext, setCanScrollNext] = createSignal(true);

  onMount(() => {
    const api = emblaApi();
    if (!api) return;

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);
    onSelect();
  });

  return (
    <div class="space-y-12">
      {/* Filter Buttons */}
      <div class="flex flex-wrap gap-3 justify-start">
        <For each={categories}>
          {(category) => (
            <button
              onClick={() => handleFilterChange(category.id)}
              class={`px-5 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                activeFilter() === category.id
                  ? "bg-accent text-primary shadow-lg shadow-accent/30"
                  : "bg-secondary border border-accent border-opacity-30 text-accent hover:border-opacity-100 hover:bg-accent hover:bg-opacity-10"
              }`}
            >
              {category.label}
            </button>
          )}
        </For>
      </div>

      {/* Projects Count & Navigation Header */}
      <div class="flex items-center justify-between">
        <p class="text-text font-mono text-sm">
          {filteredProjects().length}{" "}
          {filteredProjects().length === 1 ? "project" : "projects"}
        </p>

        {/* Navigation Arrows */}
        <div class="flex gap-3">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev()}
            class={`p-3 bg-secondary border border-accent rounded-lg transition-all duration-300 group ${
              canScrollPrev()
                ? "border-opacity-30 text-accent hover:border-opacity-100 hover:bg-accent hover:bg-opacity-10 cursor-pointer"
                : "border-opacity-10 text-accent opacity-30 cursor-not-allowed"
            }`}
            aria-label="Previous project"
          >
            <div class="i-mdi-chevron-left text-xl group-hover:scale-110 transition-transform"></div>
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext()}
            class={`p-3 bg-secondary border border-accent rounded-lg transition-all duration-300 group ${
              canScrollNext()
                ? "border-opacity-30 text-accent hover:border-opacity-100 hover:bg-accent hover:bg-opacity-10 cursor-pointer"
                : "border-opacity-10 text-accent opacity-30 cursor-not-allowed"
            }`}
            aria-label="Next project"
          >
            <div class="i-mdi-chevron-right text-xl group-hover:scale-110 transition-transform"></div>
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div class="relative">
        <div class="overflow-hidden overflow-y-visible" ref={emblaRef}>
          <div class="flex gap-6 py-2">
            <For each={filteredProjects()}>
              {(project) => (
                <div class="flex-[0_0_100%] md:flex-[0_0_calc(50%-0.75rem)] min-w-0">
                  <div class="group bg-secondary rounded-xl p-6 h-full hover:transform hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-accent relative overflow-hidden">
                    {/* Featured Badge */}
                    <Show when={project.featured}>
                      <div class="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-xs font-mono font-bold z-10">
                        Featured
                      </div>
                    </Show>

                    {/* Background Glow Effect */}
                    <div class="absolute inset-0 bg-accent opacity-0 group-hover:opacity-5 transition-opacity duration-300 blur-xl"></div>

                    {/* Content */}
                    <div class="relative z-10">
                      {/* Project Image Placeholder */}
                      <Show when={project.image}>
                        <div class="w-full h-48 bg-primary rounded-lg mb-4 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </Show>
                      <Show when={!project.image}>
                        {/* Gradient Placeholder */}
                        <div class="w-full h-48 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg mb-4 flex items-center justify-center">
                          <div class="i-mdi-code-braces text-accent text-6xl opacity-30"></div>
                        </div>
                      </Show>

                      {/* Project Header */}
                      <div class="flex items-start justify-between mb-3">
                        <h3 class="text-textLight text-xl md:text-2xl font-bold group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>

                        {/* Links Icons */}
                        <div class="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Show when={project.github}>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              class="text-text hover:text-accent transition-colors transform hover:scale-110"
                              aria-label="GitHub Repository"
                            >
                              <div class="i-simple-icons-github text-xl"></div>
                            </a>
                          </Show>
                          <Show when={project.live}>
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              class="text-text hover:text-accent transition-colors transform hover:scale-110"
                              aria-label="Live Demo"
                            >
                              <div class="i-mdi-open-in-new text-xl"></div>
                            </a>
                          </Show>
                        </div>
                      </div>

                      {/* Description */}
                      <p class="text-text text-sm md:text-base mb-6 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div class="flex flex-wrap gap-2">
                        <For each={project.tech}>
                          {(tech) => (
                            <span class="text-accent font-mono text-xs px-3 py-1.5 bg-accent bg-opacity-10 rounded-md border border-accent border-opacity-20 hover:bg-opacity-20 transition-colors">
                              {tech}
                            </span>
                          )}
                        </For>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>

        {/* Keyboard hint */}
        <p class="text-text text-xs font-mono text-center mt-6 opacity-50">
          Use arrow keys or swipe to navigate
        </p>
      </div>

      {/* Progress Dots */}
      <div class="flex justify-center gap-2">
        <For each={filteredProjects()}>
          {(_, index) => (
            <button
              onClick={() => emblaApi()?.scrollTo(index())}
              class={`h-2 rounded-full transition-all duration-300 ${
                selectedIndex() === index()
                  ? "w-8 bg-accent"
                  : "w-2 bg-accent bg-opacity-30 hover:bg-opacity-50"
              }`}
              aria-label={`Go to slide ${index() + 1}`}
            />
          )}
        </For>
      </div>

      {/* No Results Message */}
      <Show when={filteredProjects().length === 0}>
        <div class="text-center py-16">
          <div class="i-mdi-folder-open text-6xl text-text opacity-20 mb-4"></div>
          <p class="text-text text-lg">No projects found in this category.</p>
        </div>
      </Show>
    </div>
  );
}
