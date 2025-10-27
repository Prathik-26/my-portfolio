import { createSignal, onMount, onCleanup, For } from 'solid-js';

interface NavItem {
  id: string;
  label: string;
  number: string;
}

export default function Navigation() {
  const [activeSection, setActiveSection] = createSignal('');
  const [isScrolled, setIsScrolled] = createSignal(false);

  const navItems: NavItem[] = [
    { id: 'about', label: 'About', number: '01' },
    { id: 'experience', label: 'Experience', number: '02' },
    { id: 'projects', label: 'Projects', number: '03' },
    { id: 'contact', label: 'Contact', number: '04' },
  ];

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; 
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Track active section and scroll position
  onMount(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setIsScrolled(window.scrollY > 50);

      // Find active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    onCleanup(() => {
      window.removeEventListener('scroll', handleScroll);
    });
  });

  return (
    <nav 
      class={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled() ? 'bg-secondary bg-opacity-95 backdrop-blur-sm shadow-lg py-4' : 'py-6'
      }`}
    >
      <div class="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#" 
          class="text-accent font-mono text-xl font-bold"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Prathik Shetty
        </a>

        {/* Nav Items */}
        <ul class="hidden md:flex items-center space-x-8">
          <For each={navItems}>
            {(item) => (
              <li>
                <button
                  onClick={() => scrollToSection(item.id)}
                  class={`font-mono text-sm transition-colors hover:text-accent ${
                    activeSection() === item.id ? 'text-accent' : 'text-text'
                  }`}
                >
                  <span class="text-accent">{item.number}.</span> {item.label}
                </button>
              </li>
            )}
          </For>
          <li>
            <a 
              href="/resume.pdf" 
              target="_blank"
              class="border-2 border-accent text-accent px-4 py-2 rounded font-mono text-sm hover:bg-accent hover:bg-opacity-10 transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          class="md:hidden text-accent"
          aria-label="Menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
