import { createSignal, onMount, onCleanup, For, Show } from "solid-js";

interface NavItem {
  id: string;
  label: string;
  number: string;
}

export default function Navigation() {
  const [activeSection, setActiveSection] = createSignal("");
  const [isScrolled, setIsScrolled] = createSignal(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = createSignal(false);

  const navItems: NavItem[] = [
    { id: "about", label: "About", number: "01" },
    { id: "experience", label: "Experience", number: "02" },
    { id: "projects", label: "Projects", number: "03" },
    { id: "contact", label: "Contact", number: "04" },
  ];

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      // Close mobile menu after navigation
      setIsMobileMenuOpen(false);
    }
  };

  // Track active section and scroll position
  onMount(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    // Close mobile menu on escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleEscape);
    handleScroll();

    onCleanup(() => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEscape);
    });
  });

  // Prevent body scroll when menu is open
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen());
    if (!isMobileMenuOpen()) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  return (
    <>
      <nav
        class={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled()
            ? "bg-secondary bg-opacity-95 backdrop-blur-sm shadow-lg py-4"
            : "py-6"
        }`}
      >
        <div class="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            class="text-accent font-mono text-xl font-bold"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsMobileMenuOpen(false);
            }}
          >
            Prathik Shetty
          </a>

          {/* Desktop Nav Items */}
          <ul class="hidden md:flex items-center space-x-8">
            <For each={navItems}>
              {(item) => (
                <li>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    class={`font-mono text-sm transition-colors hover:text-accent ${
                      activeSection() === item.id ? "text-accent" : "text-text"
                    }`}
                  >
                    <span class="text-accent">{item.number}.</span> {item.label}
                  </button>
                </li>
              )}
            </For>
            <li>
              <a
                href="/Prathik_Shetty_Resume.pdf"
                // download="Prathik_Shetty_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="border-2 border-accent text-accent px-4 py-2 rounded font-mono text-sm hover:bg-accent hover:bg-opacity-10 transition-colors"
              >
                Resume
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            class="md:hidden text-accent z-50 relative w-8 h-8 flex items-center justify-center"
            aria-label={isMobileMenuOpen() ? "Close menu" : "Open menu"}
          >
            <Show
              when={!isMobileMenuOpen()}
              fallback={
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              }
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Show>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <Show when={isMobileMenuOpen()}>
        <div
          class="fixed inset-0 bg-black bg-opacity-75 z-30 md:hidden animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      </Show>

      {/* Mobile Menu Sidebar */}
      <div
        class={`fixed top-0 right-0 bottom-0 w-[75vw] max-w-sm bg-secondary z-40 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen() ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div class="flex flex-col h-full pt-24 px-8">
          {/* Mobile Nav Items */}
          <nav class="flex-1">
            <ul class="space-y-6">
              <For each={navItems}>
                {(item) => (
                  <li>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      class={`w-full text-left font-mono text-lg transition-colors hover:text-accent ${
                        activeSection() === item.id
                          ? "text-accent"
                          : "text-text"
                      }`}
                    >
                      <span class="text-accent text-sm">{item.number}.</span>{" "}
                      {item.label}
                    </button>
                  </li>
                )}
              </For>
            </ul>
          </nav>

          {/* Mobile Resume Button */}
          <div class="pb-8">
            <a
              href="/Prathik_Shetty_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full text-center border-2 border-accent text-accent px-6 py-3 rounded font-mono text-sm hover:bg-accent hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
