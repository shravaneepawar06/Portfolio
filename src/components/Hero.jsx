import { profile } from '../data.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="margin-line" aria-hidden="true" />
      <p className="hero-role">Computer Engineering student · {profile.role}</p>
      <h1>Shravanee Pawar</h1>
      <p className="hero-lede">
        I build clean, easy-to-navigate websites with HTML, CSS and JavaScript, and I’m looking for a
        web developer role where I can learn on real projects.
      </p>
      <div className="actions">
        <a className="btn primary" href="#projects">See my projects</a>
        <a className="btn" href={profile.resume} download>Download resume</a>
      </div>
    </section>
  )
}
