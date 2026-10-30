import { useState } from 'react'
import { profile } from '../data.js'

export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const [err, setErr] = useState('')
  const on = (k) => (e) => setF({ ...f, [k]: e.target.value })

  // No backend: opens the visitor's mail app with the message filled in.
  const submit = (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(f.email)) return setErr('Enter a valid email address so I can reply.')
    setErr('')
    const body = `${f.message}\n\nFrom: ${f.name} (${f.email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio message from ' + f.name)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="wrap two">
      <div>
        <h2>Contact</h2>
        <p>Have an internship, project or question? Send a note, or find me here.</p>
        <ul className="links">
          <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
          <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>
      </div>
      <form onSubmit={submit} noValidate>
        <label>Name<input required value={f.name} onChange={on('name')} autoComplete="name" /></label>
        <label>Email<input type="email" required value={f.email} onChange={on('email')} autoComplete="email" /></label>
        <label>Message<textarea required rows="5" value={f.message} onChange={on('message')} /></label>
        {err && <p className="error" role="alert">{err}</p>}
        <button className="btn primary" type="submit">Send message</button>
      </form>
    </div>
  )
}
