import { lazy, Suspense } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Defer from './components/Defer.jsx'

// Below-the-fold sections are separate chunks, fetched only when scrolled near.
const About = lazy(() => import('./components/About.jsx'))
const Skills = lazy(() => import('./components/Skills.jsx'))
const Projects = lazy(() => import('./components/Projects.jsx'))
const Resume = lazy(() => import('./components/Resume.jsx'))
const Contact = lazy(() => import('./components/Contact.jsx'))

const sections = [
  { id: 'about', C: About },
  { id: 'skills', C: Skills },
  { id: 'projects', C: Projects },
  { id: 'resume', C: Resume },
  { id: 'contact', C: Contact },
]

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        {sections.map(({ id, C }) => (
          <Defer key={id} id={id}>
            <Suspense fallback={<p className="loading">Loading…</p>}>
              <C />
            </Suspense>
          </Defer>
        ))}
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Shravanee Pawar. Built with React and Vite.</p>
      </footer>
    </>
  )
}
