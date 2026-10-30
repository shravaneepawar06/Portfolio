import { useEffect, useRef, useState } from 'react'

// Renders children only once the placeholder is within 400px of the viewport.
export default function Defer({ id, children }) {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return setShow(true)
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShow(true); io.disconnect() } },
      { rootMargin: '400px' }
    )
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return (
    <section id={id} ref={ref} className={show ? 'section' : 'section pending'} aria-label={id}>
      {show ? children : null}
    </section>
  )
}
