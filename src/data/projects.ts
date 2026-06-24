export const projects = [
  {
    title: "Community Connect",
    slug: "community-connect",

    shortDescription:
      "Requirement-driven platform connecting NGOs and volunteers.",

    overview:
      "Community Connect is a MERN-stack platform that connects NGOs with volunteers through a requirement-driven system. NGOs post real-time requirements and volunteers can discover, donate, or directly communicate to help.",

    problem:
      "Many NGO platforms focus on listing organizations rather than highlighting urgent needs. Volunteers often struggle to discover where they can make the biggest impact.",

    solution:
      "A requirement-centric platform where NGOs post needs and volunteers receive updates, donate, communicate, and track contributions through a unified experience.",

    features: [
      "Volunteer, NGO and Admin authentication",
      "Requirement feed",
      "NGO verification system",
      "Follow NGOs",
      "Donation system using Razorpay",
      "Volunteer-NGO chat",
      "Notifications for new requirements",
      "Activity tracking",
    ],

    challenges: [
      "Implementing role-based authentication",
      "Managing NGO verification workflows",
      "Integrating Razorpay payments",
      "Designing requirement-driven architecture",
    ],

    learnings: [
      "JWT authentication",
      "Role-based access control",
      "Payment gateway integration",
      "REST API development",
      "MongoDB schema design",
    ],

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Razorpay",
    ],

    screenshots: ["/projects/communityconnect/cc1.jpg","/projects/communityconnect/cc2.jpg","/projects/communityconnect/cc3.jpg","/projects/communityconnect/cc4.jpg","/projects/communityconnect/cc5.jpg"],

    image: "/projects/communityconnect/cc1.jpg",

    github: "https://github.com/kamalesh2602/CommunityConnect",
    live: "http://community-connect-pi-ten.vercel.app/",

    featured: true,
  },

  {
    title: "Workforce Management System with RAG",
    slug: "workforce-management-rag",

    shortDescription:
      "Workforce management platform powered by Retrieval-Augmented Generation.",

    overview:
      "A workforce management system featuring intelligent team recommendations, project risk analysis, and an AI-powered project assistant using Retrieval-Augmented Generation.",

    problem:
      "Organizations struggle to allocate resources effectively and identify project risks early using traditional management systems.",

    solution:
      "Combined workforce management with vector search and RAG to recommend team members, analyze project risks, and answer project-related questions.",

    features: [
      "Admin dashboard",
      "Employee portal",
      "Project management",
      "Intelligent team recommendations",
      "Project risk analysis",
      "AI project assistant",
      "FAISS vector search",
      "JWT authentication",
    ],

    challenges: [
      "Integrating Node.js and FastAPI services",
      "Building vector-search workflows",
      "Designing RAG pipelines",
      "Managing multi-service architecture",
    ],

    learnings: [
      "RAG architecture",
      "Vector search",
      "Microservice communication",
      "Recommendation systems",
      "FAISS integration",
    ],

    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "FastAPI",
      "FAISS",
      "SentenceTransformers",
    ],

    screenshots: [],

    image: "",

    github: "https://github.com/kamalesh2602/WorkforceOS",
    live: "",

    featured: false,
  },

  {
    title: "Research Paper Summarizer",
    slug: "research-paper-summarizer",

    shortDescription:
      "RAG-powered system for research paper summarization and analysis.",

    overview:
      "An AI-powered application that summarizes research papers and enables semantic search and contextual question answering using Retrieval-Augmented Generation.",

    problem:
      "Research papers are lengthy and difficult to consume efficiently, making knowledge extraction time-consuming.",

    solution:
      "Built a RAG pipeline that indexes research papers into a vector database and enables summarization and intelligent question answering.",

    features: [
      "PDF ingestion",
      "Research paper summarization",
      "Semantic search",
      "Question answering",
      "Vector embeddings",
      "RAG pipeline",
    ],

    challenges: [
      "Chunking large documents",
      "Managing embedding quality",
      "Vector database integration",
      "Prompt engineering",
    ],

    learnings: [
      "RAG architecture",
      "Vector databases",
      "Embedding models",
      "FastAPI development",
      "LLM integration",
    ],

    tech: [
      "Python",
      "FastAPI",
      "Streamlit",
      "Qdrant",
      "Gemini",
    ],

    screenshots: [],

    image: "",

    github: "https://github.com/kamalesh2602/Research_paper_summarizer-analyzer",
    live: "",

    featured: false,
  },

  {
    title: "Diamond Price Prediction",
    slug: "diamond-price-prediction",

    shortDescription:
      "Machine learning system for diamond price prediction.",

    overview:
      "An end-to-end machine learning project that predicts diamond prices using multiple regression models and deploys predictions through a Streamlit application.",

    problem:
      "Estimating diamond prices manually can be difficult due to multiple influencing features and market variations.",

    solution:
      "Built and compared Linear Regression, Ridge Regression, and Lasso Regression models, selecting Ridge Regression as the best-performing model.",

    features: [
      "Exploratory Data Analysis",
      "Data preprocessing",
      "Feature engineering",
      "Model comparison",
      "Performance evaluation",
      "Streamlit deployment",
    ],

    challenges: [
      "Feature selection",
      "Data preprocessing",
      "Model comparison",
      "Preventing overfitting",
    ],

    learnings: [
      "Regression algorithms",
      "Model evaluation metrics",
      "Feature engineering",
      "Data preprocessing",
      "ML deployment with Streamlit",
    ],

    tech: [
      "Python",
      "Pandas",
      "Scikit-Learn",
      "Streamlit",
    ],

    screenshots: ["/projects/diamond/diamond.png","/projects/diamond/eda.png","/projects/diamond/model.png"],

    image: "/projects/diamond/diamond.png",

    github: "https://github.com/kamalesh2602/Diamond-price-prediction",
    live: "https://diamond-price-prediction-tcbh8p7t8xax3jn4ugquhe.streamlit.app/",

    featured: false,
  },

  {
    title: "WellNest",
    slug: "wellnest",

    shortDescription:
      "Online mental wellness and counselling platform.",

    overview:
      "A platform that enables users to connect with counsellors, schedule appointments, and manage mental wellness services online.",

    problem:
      "Accessing counselling services and scheduling sessions can be inconvenient and fragmented.",

    solution:
      "Provided a centralized platform for counsellor discovery, scheduling, and session management.",

    features: [
      "User authentication",
      "Counsellor profiles",
      "Appointment scheduling",
      "Session management",
    ],

    challenges: [
      "Authentication flows",
      "Appointment management",
      "Frontend-backend integration",
    ],

    learnings: [
      "MERN stack development",
      "REST APIs",
      "Authentication",
      "Database design",
    ],

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],

    screenshots: ["/projects/wellnest/w1.jpg","/projects/wellnest/w2.jpg","/projects/wellnest/w3.jpg","/projects/wellnest/w4.jpg"],

    image: "/projects/wellnest/wn1.jpg",

    github: "https://github.com/kamalesh2602/wellnest",
    live: "https://wellnestadl.netlify.app/",

    featured: false,
  },

  {
  title: "LangChain Learning Assistant",
  slug: "learning-assistant",

  shortDescription:
    "AI-powered learning assistant built with LangChain and Streamlit.",

  overview:
    "An intelligent learning platform that helps users understand topics, generate quizzes, evaluate answers, and track learning progress through a multi-agent AI workflow.",

  problem:
    "Self-learning often lacks personalized guidance, structured feedback, and progress tracking, making it difficult for learners to stay engaged and measure improvement.",

  solution:
    "Developed an AI-powered learning assistant that generates explanations, creates quizzes, evaluates responses, and provides progress insights using LangChain agents and workflow orchestration.",

  features: [
    "Topic explanation generation",
    "Quiz generation",
    "Answer evaluation and feedback",
    "Learning plan creation",
    "Progress tracking dashboard",
    "Human-in-the-loop approval workflow",
    "Multi-agent routing system",
  ],

  challenges: [
    "Designing agent orchestration workflows",
    "Managing application state across interactions",
    "Implementing dynamic request routing",
    "Integrating tool calling and structured outputs",
  ],

  learnings: [
    "LangChain fundamentals",
    "Multi-agent systems",
    "Tool calling",
    "State management",
    "Structured outputs with Pydantic",
    "Human-in-the-loop workflows",
    "Streamlit application development",
  ],

  tech: [
    "Python",
    "LangChain",
    "Streamlit",
    "OpenRouter",
    "Qwen 3 8B",
    "Pydantic",
  ],

  screenshots: ["/projects/langchain_learning_assistant/explain.png","/projects/langchain_learning_assistant/llaHome.png","/projects/langchain_learning_assistant/quiz.png"],

  image: "/projects/langchain_learning_assistant/llaHome.png",

  github: "https://github.com/kamalesh2602/Langchain_Learning_assistant",
  live: "https://langchainlearningassistant-hnluvddvefjgzdvmnjvsuf.streamlit.app/",

  featured: false,
},
{
  title: "CogniDesk",
  slug: "cognidesk",

  shortDescription:
    "AI-powered workspace for document analysis, semantic search, and Retrieval-Augmented Generation.",

  overview:
    "CogniDesk is an AI workspace that enables users to upload documents, generate embeddings, perform semantic search, and interact with documents through Retrieval-Augmented Generation. The system combines React, FastAPI, Qdrant, and modern AI tooling to create a practical knowledge management platform.",

  problem:
    "Finding relevant information across multiple documents is time-consuming and traditional keyword search often fails to capture semantic meaning.",

  solution:
    "Built a workspace-driven RAG platform that processes documents, generates embeddings, stores vectors in Qdrant, and enables intelligent retrieval and question answering.",

  features: [
    "Workspace management",
    "Document upload",
    "Automatic chunking",
    "Embedding generation",
    "Qdrant vector storage",
    "Semantic search",
    "RAG-powered chat",
    "Dockerized deployment"
  ],

  challenges: [
    "Designing scalable document processing pipelines",
    "Managing vector database integration",
    "Building efficient retrieval workflows",
    "Coordinating React and FastAPI services"
  ],

  learnings: [
    "RAG architecture",
    "Vector databases",
    "Embedding pipelines",
    "FastAPI backend development",
    "Docker deployment"
  ],

  tech: [
    "React",
    "TypeScript",
    "FastAPI",
    "Python",
    "Qdrant",
    "Docker",
    "SentenceTransformers"
  ],

  screenshots: [],
  image: "",

  github: "https://github.com/kamalesh2602/CogniDesk",
  live: "",

  featured: false,
},
{
  title: "LostIt",
  slug: "lostit",

  shortDescription:
    "React Native application for reporting, tracking, and recovering lost and found items.",

  overview:
    "LostIt is a mobile application built using React Native and Expo that helps users report lost items, browse found items, and connect with item owners through a simple and accessible interface.",

  problem:
    "Lost-and-found information is often fragmented across social media, messaging groups, and local communities, making recovery difficult.",

  solution:
    "Created a centralized mobile platform where users can report, discover, and track lost or found items in one place.",

  features: [
    "Lost item reporting",
    "Found item reporting",
    "Item browsing",
    "Search and filtering",
    "Status tracking",
    "Image support",
    "Pull-to-refresh updates",
    "Mobile-first experience"
  ],

  challenges: [
    "Managing mobile state efficiently",
    "Handling image workflows",
    "Designing intuitive mobile UI",
    "Working with Expo and React Native ecosystem"
  ],

  learnings: [
    "React Native development",
    "Expo ecosystem",
    "Mobile navigation",
    "State management",
    "Mobile UI design"
  ],

  tech: [
    "React Native",
    "Expo",
    "Node.js",
    "Express",
    "MongoDB"
  ],

  screenshots: [],
  image: "projects/lostit.png",

  github: "https://github.com/kamalesh2602/LostIt",
  live: "",

  featured: false,
},
];