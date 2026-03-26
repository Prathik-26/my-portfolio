import { onMount, For } from 'solid-js';
import gsap from 'gsap';

export default function HeroSection() {
  let blobContainerRef: HTMLDivElement | undefined;

  onMount(() => {
    const nameChars = document.querySelectorAll('.hero-name-char');
    const taglineWords = document.querySelectorAll('.hero-tagline-word');

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.hero-greeting', { opacity: 0, x: -30, duration: 0.6, delay: 0.3 })
      .from(nameChars, {
        opacity: 0,
        y: 60,
        rotateX: -40,
        duration: 0.8,
        stagger: 0.04,
      }, "-=0.3")
      .from(taglineWords, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.08,
      }, "-=0.4")
      .from('.hero-description', { opacity: 0, y: 20, duration: 0.8 }, "-=0.3")
      .from('.hero-cta', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'back.out(1.7)',
      }, "-=0.4");

    // Animate aurora blobs continuously
    if (blobContainerRef) {
      const blobs = blobContainerRef.querySelectorAll('.aurora-blob');
      blobs.forEach((blob, i) => {
        gsap.to(blob, {
          x: `random(-80, 80)`,
          y: `random(-80, 80)`,
          scale: `random(0.8, 1.3)`,
          duration: `random(6, 10)`,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 1.5,
        });
      });
    }

    // Magnetic cursor effect on CTA
    const cta = document.querySelector('.hero-cta-btn') as HTMLElement;
    if (cta) {
      cta.addEventListener('mousemove', (e) => {
        const rect = cta.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(cta, { x: x * 0.2, y: y * 0.2, duration: 0.3, ease: 'power2.out' });
      });
      cta.addEventListener('mouseleave', () => {
        gsap.to(cta, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
      });
    }
  });

  const nameText = "Prathik Shetty.";
  const taglineText = "I build things for the web.";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section class="min-h-screen flex items-center pt-20 relative">
      {/* Aurora background blobs — full viewport width, overflow hidden to prevent horizontal scroll */}
      <div ref={blobContainerRef} class="absolute top-0 bottom-0 pointer-events-none overflow-hidden" style="z-index: 0; left: 50%; transform: translateX(-50%); width: 100vw;">
        <div
          class="aurora-blob absolute rounded-full"
          style="width: min(400px, 80vw); height: min(400px, 80vw); top: 10%; left: -5%; background: rgba(var(--c-accent), 0.08); filter: blur(80px);"
        />
        <div
          class="aurora-blob absolute rounded-full"
          style="width: min(350px, 70vw); height: min(350px, 70vw); top: 50%; right: 5%; background: rgba(var(--c-accent), 0.06); filter: blur(100px);"
        />
        <div
          class="aurora-blob absolute rounded-full"
          style="width: min(300px, 60vw); height: min(300px, 60vw); bottom: 10%; left: 30%; background: rgba(var(--c-accent), 0.05); filter: blur(70px);"
        />
      </div>

      <div class="space-y-6 max-w-4xl relative" style="z-index: 1">
        {/* Greeting with accent line */}
        <div class="flex items-center gap-4 hero-greeting">
          <div class="h-px w-8 bg-accent opacity-60" />
          <p class="text-accent font-mono text-sm md:text-base">
            Hey there! I'm
          </p>
        </div>

        {/* Split-character animated name */}
        <h1
          class="text-textLight text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          style="perspective: 500px;"
        >
          <For each={nameText.split('')}>
            {(char) => (
              <span
                class="hero-name-char inline-block"
                style={char === ' ' ? 'width: 0.3em' : undefined}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            )}
          </For>
        </h1>

        {/* Animated gradient tagline */}
        <h2 class="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          <For each={taglineText.split(' ')}>
            {(word, i) => (
              <>
                <span
                  class="hero-tagline-word inline-block"
                  style={`background: linear-gradient(135deg, rgba(var(--c-accent), 1), rgba(var(--c-textLight), 0.7)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;`}
                >
                  {word}
                </span>
                {i() < taglineText.split(' ').length - 1 ? ' ' : ''}
              </>
            )}
          </For>
        </h2>

        <p class="text-text text-base md:text-lg max-w-2xl leading-relaxed pt-4 hero-description">
          A fullstack developer from Mangalore specializing in React and modern web technologies.
          Previously worked in Japan as a Web Engineer. Now crafting clean, performant applications
          and learning something new every day.
        </p>

        <div class="flex flex-wrap gap-4 pt-6 hero-cta">
          <button
            onClick={() => scrollToSection('projects')}
            class="hero-cta-btn relative px-7 py-3 border-2 border-accent text-accent rounded-lg font-mono text-sm transition-all duration-300 overflow-hidden group"
            style="will-change: transform"
          >
            <span
              class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style="background: radial-gradient(circle at center, rgba(var(--c-accent), 0.15), transparent 70%);"
            />
            <span class="relative">Check out my work</span>
          </button>
        </div>
      </div>
    </section>
  );
}
