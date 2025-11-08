import { For } from "solid-js";

interface QuickFact {
  icon: string;
  label: string;
  value: string;
}

interface Stat {
  value: string;
  label: string;
}

export default function AboutSection() {
  const quickFacts: QuickFact[] = [
    { icon: "i-mdi-map-marker", label: "Based in", value: "Mangalore, India" },
    { icon: "i-mdi-translate", label: "日本語", value: "N3→N2 (studying)" },
    {
      icon: "i-mdi-weight-lifter",
      label: "Lifestyle",
      value: "Fitness & Coding",
    },
    {
      icon: "i-mdi-laptop",
      label: "Focus",
      value: "FullStack (React + Nest.js)",
    },
  ];

  const stats: Stat[] = [
    { value: "8+", label: "Projects" },
    { value: "1 yr", label: "Tech exp" },
    { value: "N3→N2", label: "Japanese" },
  ];

  const coreStack: string[] = [
    "i-logos-react",
    "i-logos-nextjs-icon",
    "i-logos-typescript-icon",
    "i-logos-tailwindcss-icon",
    "i-logos-nodejs-icon",
    "i-simple-icons-nestjs",
  ];

  const socialLinks = [
    {
      icon: "i-mdi-file-account",
      label: "Resume",
      href: "/Prathik_Shetty_Resume.pdf",
      external: true,
    },
    {
      icon: "i-simple-icons-github",
      label: "GitHub",
      href: "https://github.com/Prathik-26",
      external: true,
    },
    {
      icon: "i-simple-icons-linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/prathik-shetty-657634191/",
      external: true,
    },
  ];

  return (
    <section id="about" class="min-h-screen py-24">
      <div class="mb-16">
        <h2 class="text-textLight text-5xl md:text-6xl font-bold mb-6">
          About
        </h2>
        <p class="text-text text-lg md:text-xl max-w-2xl">
          A quick intro, background, and what's happening now.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Left: Story */}
        <div class="space-y-6 animate-fade-in">
          <p class="text-text text-base md:text-lg leading-relaxed">
            Hey, I'm <span class="text-textLight font-semibold">Prathik</span> —
            a developer from Mangalore who loves building clean, performant web
            apps. After working as a Web Engineer in Japan, I'm now focused on
            modern frontend development with React, Astro, and type-safe
            tooling. Outside of code, you'll find me lifting, learning Japanese,
            and iterating on personal projects.
          </p>

          <p class="text-text text-base md:text-lg leading-relaxed">
            My current goal is to craft delightful, accessible UIs and deliver
            fast, content-first sites. Recent work includes a Reddit client,
            My-Portfolio, and full-stack projects using the MERN stack.
          </p>

          {/* Quick Facts Grid */}
          <div class="grid sm:grid-cols-2 gap-4 pt-2">
            <For each={quickFacts}>
              {(fact) => (
                <div class="flex items-start gap-3 rounded-xl border border-accent border-opacity-20 bg-accent bg-opacity-5 px-4 py-3 hover:border-opacity-40 transition-colors">
                  <div
                    class={`${fact.icon} text-accent text-xl mt-0.5 flex-shrink-0`}
                  ></div>
                  <div class="text-sm min-w-0">
                    <p class="text-text opacity-70 font-mono text-xs">
                      {fact.label}
                    </p>
                    <p class="text-textLight">{fact.value}</p>
                  </div>
                </div>
              )}
            </For>
          </div>

          {/* CTA */}
          <div class="pt-4">
            <a
              href="#projects"
              class="inline-flex items-center gap-2 border-2 border-accent text-accent px-6 py-3 rounded-lg font-mono text-sm hover:bg-accent hover:text-primary transition-all duration-300 transform hover:scale-105"
            >
              See projects
              <div class="i-mdi-arrow-right text-base"></div>
            </a>
          </div>
        </div>

        {/* Right: Info Card */}
        <div class="rounded-2xl border-2 border-accent border-opacity-20 bg-secondary bg-opacity-60 p-6 md:p-8 space-y-6 animate-fade-in">
          {/* Avatar Placeholder */}
          <div class="rounded-xl overflow-hidden h-40 mb-6 bg-gradient-to-br from-accent/15 to-accent/5">
            <img
              src="/prathik.jpg"
              alt="my picture"
              class="w-full h-full object-cover"
            />
          </div>

          {/* Availability Status */}
          <div class="flex items-center justify-between">
            <div>
              <p class="text-text font-mono text-sm opacity-75">Now</p>
              <p class="text-textLight font-semibold">
                Open to FullStack roles
              </p>
            </div>
            <span class="inline-flex items-center gap-2 text-accent font-mono text-xs px-3 py-1.5 rounded-full bg-accent bg-opacity-10 border border-accent border-opacity-30">
              <div class="i-mdi-lightning-bolt-outline"></div>
              Available
            </span>
          </div>

          {/* Stats */}
          <div class="grid grid-cols-3 gap-2 sm:gap-3">
            <For each={stats}>
              {(stat) => (
                <div class="rounded-xl bg-primary bg-opacity-40 border border-accent border-opacity-15 p-2 sm:p-4 text-center hover:border-opacity-30 transition-colors">
                  <p class="text-textLight text-lg sm:text-2xl font-bold whitespace-nowrap">
                    {stat.value}
                  </p>
                  <p class="text-text font-mono text-[10px] sm:text-xs opacity-70">
                    {stat.label}
                  </p>
                </div>
              )}
            </For>
          </div>

          {/* Core Stack Icons */}
          <div>
            <p class="text-text font-mono text-sm mb-3 opacity-75">
              Core stack
            </p>
            <div class="grid grid-cols-6 gap-3">
              <For each={coreStack}>
                {(icon) => (
                  <div class="aspect-square rounded-lg border border-accent border-opacity-20 bg-accent bg-opacity-5 flex items-center justify-center hover:border-opacity-50 hover:bg-opacity-10 transition-all">
                    <div class={`${icon} text-2xl`}></div>
                  </div>
                )}
              </For>
            </div>
          </div>

          {/* Social Links */}
          <div class="flex flex-wrap gap-3 pt-4 border-t border-accent border-opacity-15">
            <For each={socialLinks}>
              {(link) => (
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-accent border-opacity-30 text-text hover:text-accent hover:border-opacity-100 transition-all"
                >
                  <div class={link.icon}></div>
                  <span class="text-sm">{link.label}</span>
                </a>
              )}
            </For>
          </div>
        </div>
      </div>
    </section>
  );
}
