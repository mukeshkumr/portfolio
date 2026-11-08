import type { Project } from "@/data/portfolio";

function ProjectVisual({ visual }: Pick<Project, "visual">) {
  switch (visual) {
    case "risk":
      return (
        <div className="visual-body risk-visual">
          <div className="risk-orbit" aria-hidden="true">
            <span className="risk-orbit-core">XGB</span>
          </div>
          <div className="visual-note">Calibrated probabilities</div>
          <div className="visual-corner">MODEL / 01</div>
        </div>
      );
    case "emotion":
      return (
        <div className="visual-body emotion-visual">
          <div className="emotion-flow">
            <span className="flow-tag">TEXT</span>
            <span className="flow-line" aria-hidden="true" />
            <span className="flow-tag flow-result">EMOTION</span>
          </div>
          <div className="visual-note">BiGRU · NLP · FastAPI</div>
          <div className="visual-corner">NLP / 02</div>
        </div>
      );
    case "research":
      return (
        <div className="visual-body research-visual">
          <div className="research-flow">
            <span>Research data</span>
            <i aria-hidden="true" />
            <span className="research-agent">Architect AI</span>
            <i aria-hidden="true" />
            <span>Analysis</span>
          </div>
          <div className="visual-note">AI for research data</div>
          <div className="visual-corner">RESEARCH / 03</div>
        </div>
      );
    case "rag":
      return (
        <div className="visual-body rag-visual">
          <div className="rag-flow">
            <span className="document-stack" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="flow-arrow" aria-hidden="true">→</span>
            <span className="vector-chip">VECTOR<br />SEARCH</span>
            <span className="flow-arrow" aria-hidden="true">→</span>
            <span className="grounded-answer"><b>✳</b> Answers<br />from your data</span>
          </div>
          <div className="visual-note">Retrieval · Embeddings · APIs</div>
          <div className="visual-corner">RAG / 04</div>
        </div>
      );
  }
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`project-card project-card-${project.visual}`}
    >
      <div className="project-art" aria-hidden="true">
        <ProjectVisual visual={project.visual} />
      </div>
      <div className="project-meta eyebrow">
        <span>{project.number} / {project.category}</span>
        <span>{project.tools}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </article>
  );
}
