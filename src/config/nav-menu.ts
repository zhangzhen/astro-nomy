import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  dataNav: [
    {
      title: "Data",
      items: [
        {
          title: "In Vivo Assays",
          href: "/in-vivo",
          description: "In vivo assays for the evaluation of binding fractions of TFs.",
          disabled: true,
        },
        {
          title: "In Vitro Assays",
          href: "/in-vitro",
          description: "In vitro assays for the evaluation of binding affinities of TFs.",
          disabled: true,
        },
      ],
    },
  ],
  pagesNav: [
    {
      title: "Pages",
      items: [
        {
          title: "Landing",
          href: "/landing",
          description: "A landing page template with differents sections.",
          image: "/images/examples/landing.jpg",
        },
        {
          title: "Changelog",
          href: "/releases",
          description: "A reproduction of Starlog template with Tailwind CSS.",
          image: "/images/examples/changelog.jpg",
        },
      ],
    },
  ],
  examplesNav: [
    {
      title: "Examples",
      items: [
        {
          title: "Static Blog",
          href: "/blog",
          description: "A Markdown/MDX blog built using Content Collections.",
          image: "/images/examples/static-blog.jpg",
        },
        {
          title: "Docs",
          href: "/docs/getting-started",
          description:
            "A Markdown/MDX docs site built using Content Collections.",
          image: "/images/examples/documentation.jpg",
        },
        {
          title: "Anime List",
          href: "/animes",
          description:
            "Fetch anime content from an graphql endpoint. Tabs component.",
          image: "/images/examples/animes.jpg",
          launched: true,
        },
        {
          title: "Blog DB",
          href: "/blog-db",
          description:
            "Blog built using Astro DB. With categories, views & likes.",
          // image: "/images/examples/blog-db.jpg",
          disabled: true,
        },
        {
          title: "Ecommerce",
          href: "/products",
          disabled: true,
          description: "Ecommerce pages fetching data from an API.",
          // image: "/images/examples/ecommerce.jpg",
        },
        {
          title: "Authentification",
          href: "/auth",
          description: "Implement an authentification using Astro DB & Lucia",
          // image: "/images/examples/auth.jpg",
          disabled: true,
        },
      ],
    },
  ],
  links: [
    {
      title: "Visualize",
      href: "http://foodie.sunneyxielab.org",
      description: "Visualize the binding sites of TFs in the genome.",
      image: "/images/examples/image.jpg",
      external: true,
    },
    {
      title: "Downloads",
      href: "/downloads",
      description: "List of available downloads.",
      image: "/images/examples/about.jpg",
    },
  ],
};
