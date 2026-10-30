import { useState } from 'react'

const links = ['about', 'skills', 'projects', 'resume', 'contact']

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <a className="brand" href="#top" onClick={() => setOpen(false)}>Shravanee Pawar</a>
      <button className="menu" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>
        {open ? 'Close' : 'Menu'}
      </button>
      <nav id="nav" className={open ? 'nav open' : 'nav'} aria-label="Primary">
        {links.map((l) => (
          <a key={l} href={`#${l}`} onClick={() => setOpen(false)}>{l[0].toUpperCase() + l.slice(1)}</a>
        ))}
      </nav>
    </header>
  )
}
