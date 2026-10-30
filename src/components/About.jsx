import { education } from '../data.js'

export default function About() {
  return (
    <div className="wrap two">
      <div>
        <h2>About me</h2>
        <p>
          I’m a Computer Engineering student at Vidyavardhini’s College of Engineering &amp; Technology
          (2024 – 2028). I enjoy turning an idea into a working page, and I’m eager to learn new
          technologies, collaborate with a team and contribute to real-world projects.
        </p>
        <p>My goal is a long-term career in web development, growing a little with every project I ship.</p>
      </div>
      <div>
        <h3>Education</h3>
        <ul className="timeline">
          {education.map((e) => (
            <li key={e.title}>
              <strong>{e.title}</strong>
              <span>{e.place}</span>
              <time>{e.years}</time>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
