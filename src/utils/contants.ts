export interface ProjectProps {
  id: string;
  title: string;
  projectType: ProjectType;
  category: Category;
  app: string;
  description: string;
  tech: string[];
  github: string;
  githubBackend: string;
  appLink: string;
  live: string;
  images: ImagesProps[];
}

interface ImagesProps {
  title: string;
  image: string;
}

type Category =
  | "Gestão / Saúde"
  | "Gestão / Negócios"
  | "Produtividade / Tarefas"
  | "Restaurante / Delivery"
  | "Suporte / Atendimento"
  | "E-commerce / loja virtual";

type ProjectType = "Fullstack" | "Frontend" | "Backend" | "Mobile" | "API" | "Library" | "Tool";

export const projects: ProjectProps[] = [
  {
    id: "02",
    title: "Equilibrium Center",
    projectType: "Fullstack",
    category: "Gestão / Saúde",
    app: "",
    description:
      "A plataforma de gestão completa projetada especificamente para massoterapeutas. Agende consultas, gerencie clientes e expanda seus negócios com facilidade",
    tech: [
      "Next.js",
      "TypeScript",
      "shadcn",
      "TailwindCSS",
      "React Hook Form",
      "Zod",
      "PostgreSQL (Neon)",
      "Prisma",
      "Vercel",
      "Docker",
      "Tailwind",
      "Stripe",
      "Cloudinary",
      "Auth.js"
    ],
    github: "https://github.com/ThalysonRibeiro/equilibrium-center",
    githubBackend: "",
    appLink: "",
    live: "https://equilibrium-center.vercel.app",
    images: [
      { title: "Equilibrium-Center-photo-1", image: "/eq-center/1.webp" },
      { title: "Equilibrium-Center-photo-2", image: "/eq-center/2.webp" },
      { title: "Equilibrium-Center-photo-3", image: "/eq-center/3.webp" },
      { title: "Equilibrium-Center-photo-4", image: "/eq-center/4.webp" },
      { title: "Equilibrium-Center-photo-5", image: "/eq-center/5.webp" }
    ]
  },
  {
    id: "03",
    title: "BarberPro 💈",
    projectType: "Fullstack",
    category: "Gestão / Negócios",
    app: "",
    description:
      "BarberHub é um sistema web completo para gerenciamento de barbearias, oferecendo funcionalidades abrangentes para administração de clientes, serviços e planos.",
    tech: [
      "Next.js",
      "Chakra UI",
      "TypeScript",
      "Axios",
      "Express",
      "Prisma",
      "PostgreSQL (Neon)",
      "Stripe",
      "Node.js"
    ],
    github: "https://github.com/ThalysonRibeiro/barberpro-web",
    githubBackend: "https://github.com/ThalysonRibeiro/barberpro-backend",
    appLink: "",
    live: "https://barberpro-web.vercel.app/",
    images: [
      { title: "photo-barberpro-photo-1", image: "/barber-pro/1.webp" },
      { title: "photo-barberpro-photo-2", image: "/barber-pro/2.webp" },
      { title: "photo-barberpro-photo-3", image: "/barber-pro/3.webp" },
      { title: "photo-barberpro-photo-4", image: "/barber-pro/4.webp" },
      { title: "photo-barberpro-photo-5", image: "/barber-pro/5.webp" },
      { title: "photo-barberpro-photo-6", image: "/barber-pro/6.webp" }
    ]
  },
  {
    id: "04",
    title: "Blend House",
    projectType: "Fullstack",
    category: "Restaurante / Delivery",
    app: "Mobile",
    description:
      "Aplicativo web moderno para gerenciar pedidos de restaurantes com eficiência. API de backend criada com Node.js, Express e Prisma. Aplicativo móvel para atendentes fazer pedidos.",
    tech: [
      "Next.js",
      "TypeScript",
      "Axios",
      "Sass",
      "Sonner",
      "Lucide React",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL (Neon)",
      "Cloudinary",
      "React Native",
      "Expo",
      "React Navigation",
      "AsyncStorage"
    ],
    github: "https://github.com/ThalysonRibeiro/blend-house-frontend",
    githubBackend: "https://github.com/ThalysonRibeiro/blend-house-backend",
    appLink:
      "https://expo.dev/accounts/thalysonribeiro/projects/mobile-blend-house/builds/0aa905a2-8928-47e5-b17f-506de0310bba",
    live: "https://blend-house.vercel.app",
    images: [
      { title: "photo-blend-house-photo-1", image: "/blend-house/1.webp" },
      { title: "photo-blend-house-photo-2", image: "/blend-house/2.webp" },
      { title: "photo-blend-house-photo-3", image: "/blend-house/3.webp" },
      { title: "photo-blend-house-photo-4", image: "/blend-house/4.webp" },
      { title: "photo-blend-house-photo-5", image: "/blend-house/5.webp" },
      { title: "photo-blend-house-photo-6", image: "/blend-house/6.webp" },
      { title: "photo-blend-house-photo-7", image: "/blend-house/7.webp" }
    ]
  },
  {
    id: "05",
    title: "TicketFlow",
    projectType: "Fullstack",
    category: "Suporte / Atendimento",
    app: "",
    description:
      "Gerenciamento de chamados, cadastrar clientes, acompanhar os chamados de cada um deles. Interface intuitiva, o sistema facilita o controle do fluxo de atendimento.",
    tech: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Mongodb",
      "NextAuth",
      "Tailwind CSS",
      "Zod",
      "React Hook Form"
    ],
    github: "https://github.com/ThalysonRibeiro/TicketFlow-g3",
    githubBackend: "",
    appLink: "",
    live: "https://ticketflow-g3.vercel.app/",
    images: [
      { title: "TicketFlow-photo-1", image: "/ticketflow/1.webp" },
      { title: "TicketFlow-photo-2", image: "/ticketflow/2.webp" },
      { title: "TicketFlow-photo-3", image: "/ticketflow/3.webp" },
      { title: "TicketFlow-photo-4", image: "/ticketflow/4.webp" },
      { title: "TicketFlow-photo-5", image: "/ticketflow/5.webp" },
      { title: "TicketFlow-photo-6", image: "/ticketflow/6.webp" },
      { title: "TicketFlow-photo-7", image: "/ticketflow/7.webp" },
      { title: "TicketFlow-photo-8", image: "/ticketflow/8.webp" },
      { title: "TicketFlow-photo-9", image: "/ticketflow/9.webp" }
    ]
  }
];

export interface AboutMeprops {
  id: string;
  description: string;
}

export const about_me: AboutMeprops[] = [
  {
    id: "01",
    description:
      "Minha jornada no desenvolvimento web começou com uma transição inesperada do mundo da gastronomia. A natureza rápida e detalhista das artes culinárias ajudou a moldar minha abordagem à codificação - onde precisão, criatividade e resolução de problemas são primordiais."
  },
  {
    id: "02",
    description:
      "Atualmente, crio interfaces front-end intuitivas, enquanto expando meus conhecimentos em arquitetura back-end. Minha experiência em ambientes de alta pressão aprimorou minha capacidade de entregar soluções eficientes, mantendo a qualidade do código e garantindo uma excelente experiência ao usuário."
  },
  {
    id: "03",
    description:
      "Meu objetivo é contribuir para projetos inovadores que expandam os limites da tecnologia web e, ao mesmo tempo, ofereçam soluções de alto impacto que façam a diferença."
  }
];
