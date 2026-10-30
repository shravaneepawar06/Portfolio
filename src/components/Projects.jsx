import { projects } from '../data.js'

export default function Projects() {
  return (
    <div className="wrap">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((p) => (
          <article key={p.title} className="project">
            <img src={p.image} alt={`${p.title} preview`} width="640" height="400" loading="lazy" decoding="async" />
            <div>
              <h3>{p.title}</h3>
              <p className="stack">{p.stack.join(', ')}</p>
              <p>{p.summary}</p>
              <a className="btn" href={p.link} target="_blank" rel="noreferrer">View on GitHub</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
