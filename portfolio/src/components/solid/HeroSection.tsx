import { onMount } from 'solid-js';
import gsap from 'gsap';

export default function HeroSection() {

  // GSAP animation setup
  onMount(() => {
    // GSAP timeline 
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

    tl.from('.hero-greeting', { opacity: 0, y: 20, delay: 0.2 })
      .from('.hero-name', { opacity: 0, y: 20 }, "-=0.8")
      .from('.hero-tagline', { opacity: 0, y: 20 }, "-=0.8")
      .from('.hero-description', { opacity: 0, y: 20 }, "-=0.8")
      .from('.hero-cta', { opacity: 0, y: 20 }, "-=0.8");
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section class="min-h-screen flex items-center pt-20">
      <div class="space-y-6 max-w-4xl">
        <p class="text-accent font-mono text-sm md:text-base hero-greeting">
          Hey there! I'm
        </p>

        <h1 class="text-textLight text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight hero-name">
          Prathik Shetty.
        </h1>

        <h2 class="text-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight hero-tagline">
          I build things for the web.
        </h2>

        <p class="text-text text-base md:text-lg max-w-2xl leading-relaxed pt-4 hero-description">
          A fullstack developer from Mangalore specializing in React and modern web technologies.
          Previously worked in Japan as a Web Engineer. Now crafting clean, performant applications
          and learning something new every day.
        </p>

        <div class="flex flex-wrap gap-4 pt-6 hero-cta">
          <button
            onClick={() => scrollToSection('projects')}
            class="px-7 py-3 border-2 border-accent text-accent rounded-lg font-mono text-sm hover:bg-accent hover:text-primary transition-all duration-300"
          >
            Check out my work
          </button>
        </div>
      </div>
    </section>
  );
}
