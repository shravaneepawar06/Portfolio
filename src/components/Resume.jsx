import { certifications, profile } from '../data.js'

export default function Resume() {
  return (
    <div className="wrap two">
      <div>
        <h2>Resume</h2>
        <p>The full one-page version, with education, projects and certifications.</p>
        <div className="actions">
          <a className="btn primary" href={profile.resume} target="_blank" rel="noreferrer">View PDF</a>
          <a className="btn" href={profile.resume} download>Download</a>
        </div>
      </div>
      <div>
        <h3>Certifications</h3>
        <ul className="timeline">
          {certifications.map((c) => (
            <li key={c.title}>
              <strong>{c.title}</strong>
              <span>{c.place}</span>
              <time>{c.years}</time>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
