export interface ProjectProps {
  id: string;
  title: string;
  projectType: string;
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

export const projectsEN: ProjectProps[] = [
  {
    id: '01',
    title: 'Equilibrium Center',
    projectType: "Fullstack",
    app: '',
    description: 'The complete management platform designed specifically for massage therapists. Schedule appointments, manage clients and grow your business with ease',
    tech: ['Next.js', 'PostgreSQL (Neon)', 'Prisma', 'Vercel', 'Docker', 'CSS Modules', 'Tailwind CSS', 'shadcn', 'Stripe',],
    github: '',
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
    id: '02',
    title: 'BarberPro 💈',
    projectType: 'Fullstack',
    app: '',
    description: 'BarberHub is a complete web system for barbershop management, offering comprehensive features for managing clients, services and plans.',
    tech: ['Next.js', 'React', 'Chakra UI', 'TypeScript', 'JWTdecode', 'Nookies', 'Axios', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Stripe',],
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
    id: '03',
    title: 'Goal List ',
    projectType: 'Fullstack',
    app: '',
    description: 'A modern web application for goal and objective management, allowing you to organize your daily or weekly tasks efficiently.',
    tech: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'React Hook Form', 'Zod', 'Axios', 'JWT Decode', 'Radix UI', 'Node.js', 'Date-fns', 'Fastify', 'Prisma', 'PostgreSQL',],
    github: 'https://github.com/ThalysonRibeiro/goal.list-web',
    githubBackend: 'https://github.com/ThalysonRibeiro/goallist-backend',
    appLink: '',
    live: 'https://goal-list-web.vercel.app/',
    images: [
      {
        title: "photo-goallist-1",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739409341/home_qzyca9.png"
      },
      {
        title: "photo-goallist-2",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739409341/login_ptmx41.png"
      },
      {
        title: "photo-goallist-3",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739409340/register_zmm1zi.png"
      },
      {
        title: "photo-goallist-4",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739409339/dashboard_vrilru.png"
      },
      {
        title: "photo-goallist-5",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739409338/criar-meta_m5g7dv.png"
      },
      {
        title: "photo-goallist-6",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739409339/moile-home_yvbqlj.png"
      },
      {
        title: "photo-goallist-7",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739409339/mobile-dashboard_yklrfh.png"
      },
    ]
  },
  {
    id: '04',
    title: 'Blend House',
    projectType: "Fullstack",
    app: 'Mobile',
    description: 'Modern web application to manage restaurant orders efficiently. Backend API built with Node.js, Express and Prisma. Mobile application for servers to place orders.',
    tech: ['Next.js', 'React ', 'TypeScript', 'Axios', 'Sass', 'Sonner', 'Lucide React', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'JWT', 'Cloudinary', 'React Native', 'Expo', 'AsyncStorage'],
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
    projectType: '',
    app: '',
    description: 'Call management, register customers, track calls from each one of them. Intuitive interface, the system makes it easier to control the service flow.',
    tech: ['Next.js', 'React 19', 'TypeScript', 'Prisma', 'Mongodb', 'NextAuth', 'Tailwind CSS', 'Zod', 'React Hook Form',],
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

  // {
  //   id: '06,
  //   title: '',
  //   projectType: "Fullstack",
  //   app:'',
  //   description: '',
  //   tech: ['','','','','','','','','',],
  //   github: '',
  //   githubBackend:'',
  // appLink: '',
  //   live: '',
  //   images: [
  //     {
  //       title: "photo-1",
  //       image: ""
  //     },
  //     {
  //       title: "photo-2",
  //       image: ""
  //     },
  //     {
  //       title: "photo-3",
  //       image: ""
  //     },
  //     {
  //       title: "photo-4",
  //       image: ""
  //     },
  //     {
  //       title: "photo-5",
  //       image: ""
  //     },
  //     {
  //       title: "photo-6",
  //       image: ""
  //     },
  //   ]
  // },
];


export const projectsPT_BR: ProjectProps[] = [
  {
    id: '01',
    title: 'Equilibrium Center',
    projectType: "Fullstack",
    app: '',
    description: 'A plataforma de gestão completa projetada especificamente para massoterapeutas. Agende consultas, gerencie clientes e expanda seus negócios com facilidade',
    tech: ['Next.js', 'PostgreSQL (Neon)', 'Prisma', 'Vercel', 'Docker', 'CSS Modules', 'Tailwind CSS', 'shadcn', 'Stripe',],
    github: '',
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
    id: '02',
    title: 'BarberPro 💈',
    projectType: 'Fullstack',
    app: '',
    description: 'BarberHub é um sistema web completo para gerenciamento de barbearias, oferecendo funcionalidades abrangentes para administração de clientes, serviços e planos.',
    tech: ['Next.js', 'React', 'Chakra UI', 'TypeScript', 'JWTdecode', 'Nookies', 'Axios', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Stripe', 'Bcrypt',],
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
    id: '03',
    title: 'Goal List ',
    projectType: 'Fullstack',
    app: '',
    description: 'Uma aplicação web moderna para gerenciamento de metas e objetivos, permitindo que você organize suas tarefas diárias ou semanais de forma eficiente.',
    tech: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'React Hook Form', 'Zod', 'Axios', 'JWT Decode', 'Radix UI', 'Node.js', 'Date-fns', 'Fastify', 'Prisma', 'PostgreSQL', 'BCrypt',],
    github: 'https://github.com/ThalysonRibeiro/goal.list-web',
    githubBackend: 'https://github.com/ThalysonRibeiro/goallist-backend',
    appLink: '',
    live: 'https://goal-list-web.vercel.app/',
    images: [
      {
        title: "photo-goallist-1",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739409341/home_qzyca9.png"
      },
      {
        title: "photo-goallist-2",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739409341/login_ptmx41.png"
      },
      {
        title: "photo-goallist-3",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739409340/register_zmm1zi.png"
      },
      {
        title: "photo-goallist-4",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739409339/dashboard_vrilru.png"
      },
      {
        title: "photo-goallist-5",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739409338/criar-meta_m5g7dv.png"
      },
      {
        title: "photo-goallist-6",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739409339/moile-home_yvbqlj.png"
      },
      {
        title: "photo-goallist-7",
        image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739409339/mobile-dashboard_yklrfh.png"
      },
    ]
  },
  {
    id: '04',
    title: 'Blend House',
    projectType: "Fullstack",
    app: 'Mobile',
    description: 'Aplicativo web moderno para gerenciar pedidos de restaurantes com eficiência. API de backend criada com Node.js, Express e Prisma. Aplicativo móvel para atendentes fazer pedidos.',
    tech: ['Next.js', 'React ', 'TypeScript', 'Axios', 'Sass', 'Sonner', 'Lucide React', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'JWT', 'Cloudinary', 'bcryptjs', 'React Native', 'Expo', 'React Navigation', 'AsyncStorage'],
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
    projectType: '',
    app: '',
    description: 'Gerenciamento de chamados, cadastrar clientes, acompanhar os chamados de cada um deles. Interface intuitiva, o sistema facilita o controle do fluxo de atendimento.',
    tech: ['Next.js', 'React 19', 'TypeScript', 'Prisma', 'Mongodb', 'NextAuth', 'Tailwind CSS', 'Zod', 'React Hook Form',],
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
  // {
  //   id: '04',
  //   title: '',
  //   projectType: "Fullstack",
  //   app:'',
  //   description: '',
  //   tech: ['','','','','','','','','',],
  //   github: '',
  //   githubBackend:'',
  //   appLink: '',
  //   live: '',
  //   images: [
  //     {
  //       title: "photo-1",
  //       image: ""
  //     },
  //     {
  //       title: "photo-2",
  //       image: ""
  //     },
  //     {
  //       title: "photo-3",
  //       image: ""
  //     },
  //     {
  //       title: "photo-4",
  //       image: ""
  //     },
  //     {
  //       title: "photo-5",
  //       image: ""
  //     },
  //     {
  //       title: "photo-6",
  //       image: ""
  //     },
  //   ]
  // },
];