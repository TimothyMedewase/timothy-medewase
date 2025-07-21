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
    title: "Buy-N-Sell",
    description: "E-commerce ",
    long_description:
      "An e-commerce platform that sells many range of products ",
    technologies: ["Next.js", "React", "Prisma", "PostgreSQL"],
    website: "https://buy-n-sell-store.vercel.app",
    github: "https://github.com/TimothyMedewase/Buy-N-Sell",
  },

  {
    title: "SPAZ",
    description: "Music Analytics",
    long_description:
      "A web application to provide Spotify users insights to their listening patterns",
    technologies: ["Next.js", "React", "Javascript"],
    website: "https://spaz-music.com/",
    github: "https://github.com/TimothyMedewase/spaz",
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
    title: "MNIST CNN",
    description: "Computer Vision Project",
    long_description:
      "A convolutional neural network (CNN) implemented to classify handwritten digits from the MNIST dataset.",
    technologies: ["Python", "PyTorch"],
    website: "",
    github: "https://github.com/TimothyMedewase/mnist-cnn",
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
  {
    title: "Operating Systems",
    description: "Operating Systems Projects",
    long_description:
      "Implemented various projects related to operating systems, including data and task parallelism, Semaphores and Round Robin Scheduling.",
    technologies: ["Python"],
    website: "",
    github: "https://github.com/TimothyMedewase/os",
  },
];
