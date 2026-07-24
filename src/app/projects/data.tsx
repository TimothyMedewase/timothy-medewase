export type Project = {
  id: string;
  title: string;
  type: string;
  description: string;
  technologies: string[];
  website: string;
  github: string;
};

export const projectsData: Project[] = [
  {
    id: "deep-research-agent",
    title: "Deep Research Agent",
    type: "AI / Full-Stack",
    description:
      "A full-stack AI agent that decomposes queries into subquestions, runs tool-calling loops, and returns cited responses with real-time streaming.",
    technologies: ["Next.js", "FastAPI", "Python", "OpenAI", "Chroma", "Exa", "LangChain"],
    website: "https://deep-research-frontend-mu.vercel.app/",
    github: "https://github.com/TimothyMedewase/deep-research-backend",
  },
  {
    id: "scour",
    title: "Scour",
    type: "iOS App",
    description:
      "An AI-powered Tinder-like sports recruiting platform that helps athletes find the best colleges and opportunities to showcase their talents.",
    technologies: ["Swift", "Supabase", "OpenAI API", "Exa API", "RevenueCat", "Gmail API"],
    website: "https://www.tryscour.co",
    github: "",
  },
  {
    id: "openbolts",
    title: "OpenBolts",
    type: "AI / Web App",
    description:
      "The context layer for automotive repair. Turns fragmented OEM manuals into a single, queryable source of truth with page-level citations. Ask a question, get a verified answer.",
    technologies: ["LLM APIs (OpenAI, Exa)", "Next.js", "React", "Supabase", "FastAPI"],
    website: "https://openbolts.vercel.app",
    github: "",
  },
  {
    id: "explainai",
    title: "ExplainAI",
    type: "AI / Web App",
    description:
      "A RAG-powered web application enabling users to upload files and retrieve contextual explanations using vector search and large language models.",
    technologies: ["Next.js", "FastAPI", "FAISS", "OpenAI API", "LangChain"],
    website: "https://explainai-snowy.vercel.app",
    github: "https://github.com/TimothyMedewase/explain-ai-backend",
  },
  {
    id: "buy-n-sell",
    title: "Buy-N-Sell",
    type: "E-commerce",
    description:
      "A full-stack e-commerce platform with product listings, shopping cart, and checkout flow.",
    technologies: ["Next.js", "React", "Prisma", "PostgreSQL"],
    website: "https://buy-n-sell-store.vercel.app",
    github: "https://github.com/TimothyMedewase/Buy-N-Sell",
  },
  {
    id: "spaz",
    title: "SPAZ",
    type: "Music Analytics",
    description:
      "A web application providing Spotify users with deep insights into their listening patterns and music taste.",
    technologies: ["Next.js", "React", "JavaScript"],
    website: "https://spaz-music.com/",
    github: "https://github.com/TimothyMedewase/spaz",
  },
  {
    id: "transformer",
    title: "Transformer Implementation",
    type: "ML Research",
    description:
      'A ground-up implementation of the "Attention Is All You Need" paper, including multi-head self-attention, positional encoding, and full encoder-decoder architecture.',
    technologies: ["Python", "PyTorch"],
    website: "",
    github: "https://github.com/TimothyMedewase/transformer",
  },
  {
    id: "mnist-cnn",
    title: "MNIST CNN",
    type: "Computer Vision",
    description:
      "A convolutional neural network implemented to classify handwritten digits from the MNIST dataset with high accuracy.",
    technologies: ["Python", "PyTorch"],
    website: "",
    github: "https://github.com/TimothyMedewase/mnist-cnn",
  },
  {
    id: "housing",
    title: "Housing Predictions",
    type: "ML Project",
    description:
      "An end-to-end machine learning project building a predictive system for California housing costs using real-world data pipelines.",
    technologies: ["Python", "Scikit-learn"],
    website: "",
    github:
      "https://github.com/TimothyMedewase/Hands-on-ML/tree/main/%20ch2.%20End-to-End%20ML%20project",
  },
  {
    id: "ml-projects",
    title: "ML Projects Collection",
    type: "ML Research",
    description:
      "A collection of machine learning projects covering regression, classification, clustering, and deep learning tasks.",
    technologies: ["Python", "Scikit-learn", "TensorFlow", "Keras"],
    website: "",
    github: "https://github.com/TimothyMedewase/Hands-on-ML",
  },
  {
    id: "os",
    title: "Operating Systems",
    type: "Systems",
    description:
      "Various OS-level projects including data and task parallelism, semaphores, and round-robin scheduling algorithms.",
    technologies: ["Python"],
    website: "",
    github: "https://github.com/TimothyMedewase/os",
  },
];
