import { skills } from '../data.js'

export default function Skills() {
  return (
    <div className="wrap">
      <h2>Skills</h2>
      <dl className="skills">
        {skills.map((s) => (
          <div key={s.group} className="skill-row">
            <dt>{s.group}</dt>
            <dd>
              {s.items.map((i) => <span key={i} className="chip">{i}</span>)}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
