interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

export default function ContactSection() {
  const socialLinks: SocialLink[] = [
    // {
    //   name: 'Discord',
    //   icon: 'i-simple-icons-discord',
    //   url: 'https://discord.com/users/yourid',
    // },
    {
      name: "Email",
      icon: "i-mdi-email",
      url: "prathikshetty006@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: "i-simple-icons-linkedin",
      url: "https://www.linkedin.com/in/prathik-shetty-657634191/",
    },

    {
      name: "GitHub",
      icon: "i-simple-icons-github",
      url: "https://github.com/Prathik-26/",
    },
  ];

  return (
    <section
      id="contact"
      class="min-h-screen py-24 flex items-center justify-center"
    >
      <div class="text-left max-w-4xl w-full px-6">
        {/* Main Heading */}
        <h2 class="text-textLight text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
          Get in touch
        </h2>

        {/* Subtitle */}
        <p class="text-text text-lg md:text-xl lg:text-2xl leading-relaxed mb-12 max-w-3xl">
          Want to know more about me, work with me, or just want to have a
          casual chat? Feel free to reach out!
        </p>

        {/* Social Icon Buttons */}
        <div class="flex gap-4 flex-wrap">
          {socialLinks.map((social) => (
            <a
              href={
                social.name === "Email"
                  ? `mailto:prathikshetty006@gmail.com?subject=Hello%20Prathik!&body=Hi%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect...`
                  : social.url
              }
              target={social.name === "Email" ? "_self" : "_blank"}
              rel={social.name === "Email" ? undefined : "noopener noreferrer"}
              class="bg-secondary p-4 rounded-full hover:bg-accent hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110 group"
              aria-label={social.name}
            >
              <div
                class={`${social.icon} text-textLight group-hover:text-accent text-2xl md:text-3xl transition-colors duration-300`}
              ></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
