type Project = {
  title: string;
  description: string;
  long_description: string;
  technologies: string[];
  website: string;
  github: string;
};

export const projectsData: Project[] = [
  {
    title: "SPAZ",
    description: "Music Analytics",
    long_description:
      "A web application to provide Spotify users insights to their listening patterns",
    technologies: ["Next.js", "React", "Javascript"],
    website: "https://spaz.vercel.app/",
    github: "https://github.com/TimothyMedewase/spaz",
  },
  {
    title: "Buy-N-Sell",
    description: "E-commerce ",
    long_description:
      "An e-commerce platform that sells many range of products ",
    technologies: ["Next.js", "React", "Prisma", "PostgreSQL"],
    website: "https://buy-n-sell-store.vercel.app",
    github: "https://github.com/TimothyMedewase/Buy-N-Sell",
  },
  {
    title: "Soccer Stats",
    description: "Soccer Statistics ",
    long_description:
      "A web application for comparing the statistics of various soccer players according to their positions.",
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    website: "blank",
    github: "https://github.com/TimothyMedewase/soccer-stats",
  },
  {
    title: "Housing Predictions Project",
    description: "Machine Learning Project",
    long_description: "A predictive system for California housing costs",
    technologies: ["Python", "Scikit-learn"],
    website: "",
    github:
      "https://github.com/TimothyMedewase/Hands-on-ML/tree/main/%20ch2.%20End-to-End%20ML%20project",
  },
  {
    title: "ExplainAI",
    description: "AI Project",
    long_description:
      "An AI RAG-powered web application enabling users to upload files and retrieve contextual explanations",
    technologies: ["Next.js", "FastAPI", "FAISS", "OpenAI API", "LangChain"],
    website: "https://explainai-snowy.vercel.app",
    github: "https://github.com/TimothyMedewase/explain-ai-backend",
  },
  {
    title: "Transformer Implementation",
    description: "AI Project",
    long_description:
      "An implementation of the attention is all you need paper using PyTorch",
    technologies: ["Python", "PyTorch"],
    website: "",
    github: "https://github.com/TimothyMedewase/transformer",
  },
  {
    title: "ML projects",
    description: "Machine Learning Projects",
    long_description:
      "A collection of various machine learning projects, including regression, classification, and clustering tasks.",
    technologies: ["Python", "Scikit-learn", "TensorFlow", "Keras"],
    website: "",
    github: "https://github.com/TimothyMedewase/Hands-on-ML",
  },
];
