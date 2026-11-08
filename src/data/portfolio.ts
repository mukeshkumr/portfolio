export type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  visual: "risk" | "emotion" | "research" | "rag";
  tools: string;
};

export const projects: Project[] = [
  {
    number: "01",
    category: "Machine learning",
    title: "Credit Card Risk Predictor",
    description:
      "A calibrated XGBoost model served through FastAPI, so risk scores arrive as usable probabilities.",
    visual: "risk",
    tools: "XGBoost · FastAPI",
  },
  {
    number: "02",
    category: "Natural language",
    title: "Emotion Prediction API",
    description:
      "A BiGRU-based NLP model that reads text and predicts emotion, deployed as a FastAPI service.",
    visual: "emotion",
    tools: "BiGRU · NLP · FastAPI",
  },
  {
    number: "03",
    category: "Applied AI",
    title: "Research Data Architect AI",
    description:
      "An AI project for working with research data. Ask me about it and I’ll walk you through it.",
    visual: "research",
    tools: "AI · Research data",
  },
  {
    number: "04",
    category: "RAG & automation",
    title: "RAG chatbots & AI workflow automation",
    description:
      "Document-grounded chatbots using vector databases, plus pipelines for embeddings and API integrations.",
    visual: "rag",
    tools: "Retrieval · Embeddings · APIs",
  },
];

export const capabilities = [
  {
    number: "01",
    title: "Agentic systems",
    description:
      "Multi-agent workflows in LangGraph with typed, validated outputs through Pydantic v2.",
  },
  {
    number: "02",
    title: "RAG that answers from your data",
    description:
      "Retrieval with ChromaDB and the Claude API, built so answers can be checked against sources.",
  },
  {
    number: "03",
    title: "Eval-driven debugging",
    description:
      "Trace-level observability with LangSmith, so a failing agent shows exactly where it went wrong.",
  },
  {
    number: "04",
    title: "Clear explanations",
    description:
      "I turn complex AI ideas into simple, short videos anyone can follow.",
  },
];

export const toolbox = [
  "Python",
  "LangGraph",
  "LangChain",
  "FastAPI",
  "Claude API",
  "ChromaDB",
  "LangSmith",
  "Pydantic v2",
  "XGBoost",
  "NLP",
  "SQL",
  "Docker",
  "DVC",
  "Git",
];
