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
  | 'Gestão / Saúde'
  | 'Gestão / Negócios'
  | 'Produtividade / Tarefas'
  | 'Restaurante / Delivery'
  | 'Suporte / Atendimento'
  | 'E-commerce / loja virtual';

type ProjectType =
  | 'Fullstack'
  | 'Frontend'
  | 'Backend'
  | 'Mobile'
  | 'API'
  | 'Library'
  | 'Tool';

export const projects: ProjectProps[] = [
  {
    id: '01',
    title: 'Dev Tasks',
    projectType: 'Fullstack',
    category: 'Produtividade / Tarefas',
    app: '',
    description: 'Uma aplicação moderna de gerenciamento para desenvolvedores, Clone parcial do Monday.com - Sistema de gestão de projetos e metas.',
    tech: ['Next.js', 'TypeScript', 'shadcn', 'Tailwind', 'React Hook Form', 'Zod', 'Radix UI', 'AuthJS', 'Prisma', 'PostgreSQL (Neon)', 'Jest', 'Vercel', 'Docker', 'Cloudinary'],
    github: 'https://github.com/ThalysonRibeiro/dev-tasks',
    githubBackend: '',
    appLink: '',
    live: 'https://dev-tasks-five.vercel.app',
    images: [
      {
        title: "photo-goallist-1",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1757297961/1_wjioku.png"
      },
      {
        title: "photo-goallist-2",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1757297961/2_fiiks3.png"
      },
      {
        title: "photo-goallist-3",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1757297961/3_d4jo5r.png"
      },
      {
        title: "photo-goallist-4",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1757297962/4_twjcyo.png"
      },
      {
        title: "photo-goallist-5",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1757297962/5_bp1lpj.png"
      },
      {
        title: "photo-goallist-6",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1757297962/6_ksaihk.png"
      },
      {
        title: "photo-goallist-7",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1757297962/8_l9pqer.png"
      },
      {
        title: "photo-goallist-8",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1757297962/7_nviw8n.png"
      },
      {
        title: "photo-goallist-9",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1757297964/11_lu1cro.png"
      },
      {
        title: "photo-goallist-10",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1757297963/10_swyfbi.png"
      },
      {
        title: "photo-goallist-11",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1757297963/9_ieu0fx.png"
      },
      {
        title: "photo-goallist-12",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1757297965/13_qofdfi.png"
      },
      {
        title: "photo-goallist-13",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1757297964/12_fv0q2r.png"
      },
    ]
  },
  {
    id: '02',
    title: 'Equilibrium Center',
    projectType: 'Fullstack',
    category: 'Gestão / Saúde',
    app: '',
    description: 'A plataforma de gestão completa projetada especificamente para massoterapeutas. Agende consultas, gerencie clientes e expanda seus negócios com facilidade',
    tech: ['Next.js', 'TypeScript', 'shadcn', 'TailwindCSS', 'React Hook Form', 'Zod', 'PostgreSQL (Neon)', 'Prisma', 'Vercel', 'Docker', 'Tailwind', 'Stripe', 'Cloudinary', 'Auth.js'],
    github: 'https://github.com/ThalysonRibeiro/equilibrium-center',
    githubBackend: '',
    appLink: '',
    live: 'https://equilibrium-center.vercel.app',
    images: [
      {
        title: "photo-1",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1749499280/4_knwlte.png"
      },
      {
        title: "photo-2",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1749499280/3_u0yzn0.png"
      },
      {
        title: "photo-3",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1749499280/5_kwaxhq.png"
      },
      {
        title: "photo-4",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1749499279/2_mpewtr.png"
      },
      {
        title: "photo-5",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1749499279/1_bqqekv.png"
      }
    ]
  },
  {
    id: '03',
    title: 'BarberPro 💈',
    projectType: 'Fullstack',
    category: 'Gestão / Negócios',
    app: '',
    description: 'BarberHub é um sistema web completo para gerenciamento de barbearias, oferecendo funcionalidades abrangentes para administração de clientes, serviços e planos.',
    tech: ['Next.js', 'Chakra UI', 'TypeScript', 'Axios', 'Express', 'Prisma', 'PostgreSQL (Neon)', 'Stripe', 'Node.js'],
    github: 'https://github.com/ThalysonRibeiro/barberpro-web',
    githubBackend: 'https://github.com/ThalysonRibeiro/barberpro-backend',
    appLink: '',
    live: 'https://barberpro-web.vercel.app/',
    images: [
      {
        title: "photo-barberpro-1",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739399212/home_zzdju9.png"
      },
      {
        title: "photo-barberpro-2",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739399212/login_cwd82h.png"
      },
      {
        title: "photo-barberpro-3",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739399211/register_sxgovy.png"
      },
      {
        title: "photo-barberpro-4",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739399211/conta_avm8ry.png"
      },
      {
        title: "photo-barberpro-5",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739399211/cel-inicio_ukivog.png"
      },
      {
        title: "photo-barberpro-6",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739399210/logado_ov38cb.png"
      },
    ]
  },
  {
    id: '04',
    title: 'Blend House',
    projectType: "Fullstack",
    category: 'Restaurante / Delivery',
    app: 'Mobile',
    description: 'Aplicativo web moderno para gerenciar pedidos de restaurantes com eficiência. API de backend criada com Node.js, Express e Prisma. Aplicativo móvel para atendentes fazer pedidos.',
    tech: ['Next.js', 'TypeScript', 'Axios', 'Sass', 'Sonner', 'Lucide React', 'Node.js', 'Express', 'Prisma', 'PostgreSQL (Neon)', 'Cloudinary', 'React Native', 'Expo', 'React Navigation', 'AsyncStorage'],
    github: 'https://github.com/ThalysonRibeiro/blend-house-frontend',
    githubBackend: 'https://github.com/ThalysonRibeiro/blend-house-backend',
    appLink: 'https://expo.dev/accounts/thalysonribeiro/projects/mobile-blend-house/builds/0aa905a2-8928-47e5-b17f-506de0310bba',
    live: 'https://blend-house.vercel.app',
    images: [
      {
        title: "photo-blend-house-1",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739418251/bh-login_toxxlh.png"
      },
      {
        title: "photo-blend-house-2",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739418251/bh-register_s1j7ks.png"
      },
      {
        title: "photo-blend-house-3",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739418250/bh-dashboard_dzpw5b.png"
      },
      {
        title: "photo-blend-house-4",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739418250/bh-modal_ipmmsn.png"
      },
      {
        title: "photo-blend-house-5",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739418249/bh-categoria_gn24qb.png"
      },
      {
        title: "photo-blend-house-6",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739418249/bh-produto_ty6snf.png"
      },
      {
        title: "photo-blend-house-7",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739418252/bh-mobile_mr4gmb.png"
      },
    ]
  },
  {
    id: '05',
    title: 'TicketFlow',
    projectType: 'Fullstack',
    category: 'Suporte / Atendimento',
    app: '',
    description: 'Gerenciamento de chamados, cadastrar clientes, acompanhar os chamados de cada um deles. Interface intuitiva, o sistema facilita o controle do fluxo de atendimento.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Mongodb', 'NextAuth', 'Tailwind CSS', 'Zod', 'React Hook Form',],
    github: 'https://github.com/ThalysonRibeiro/TicketFlow-g3',
    githubBackend: '',
    appLink: '',
    live: 'https://ticketflow-g3.vercel.app/',
    images: [
      {
        title: "TicketFlow-photo-1",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1741079051/tf-home_uzjd1n.png"
      },
      {
        title: "TicketFlow-photo-2",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1741079051/tf-clientes_a7cifm.png"
      },
      {
        title: "TicketFlow-photo-3",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1741079051/tf-chamado-aberto_knzuy6.png"
      },
      {
        title: "TicketFlow-photo-4",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1741079050/tf-abrirchamado_aiinq9.png"
      },
      {
        title: "TicketFlow-photo-5",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1741079051/tf-chamado-fechados_kzbynh.png"
      },
      {
        title: "TicketFlow-photo-6",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1741079050/tf-novo-cliente_vanztr.png"
      },
      {
        title: "TicketFlow-photo-7",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1741079050/tf-novo-chamado_mjiscu.png"
      },
      {
        title: "TicketFlow-photo-8",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1741079050/tf-mobile-1_y0mjq6.png"
      },
      {
        title: "TicketFlow-photo-9",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1741079050/tf-mobile-2_qg4tzq.png"
      },
    ]
  },
];

export interface AboutMeprops {
  id: string;
  description: string;
}

export const about_me: AboutMeprops[] = [
  {
    id: '01',
    description: 'Minha jornada no desenvolvimento web começou com uma transição inesperada do mundo da gastronomia. A natureza rápida e detalhista das artes culinárias ajudou a moldar minha abordagem à codificação - onde precisão, criatividade e resolução de problemas são primordiais.'
  },
  {
    id: '02',
    description: 'Atualmente, crio interfaces front-end intuitivas, enquanto expando meus conhecimentos em arquitetura back-end. Minha experiência em ambientes de alta pressão aprimorou minha capacidade de entregar soluções eficientes, mantendo a qualidade do código e garantindo uma excelente experiência ao usuário.'
  },
  {
    id: '03',
    description: 'Meu objetivo é contribuir para projetos inovadores que expandam os limites da tecnologia web e, ao mesmo tempo, ofereçam soluções de alto impacto que façam a diferença.'
  },
];

export interface CoursesProps {
  id: string;
  title: string;
  courses: string;
}

export const courses_details: CoursesProps[] = [
  {
    id: '01',
    title: 'FullStack Pro',
    courses: 'Sujeito Programador (2024 - 2025)'
  },
  {
    id: '02',
    title: 'Introdução ao desenvolvimento Front-end',
    courses: 'Ri HAppy (2023 - 2024)'
  },
]