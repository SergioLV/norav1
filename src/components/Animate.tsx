import { useInView } from '../hooks/useInView'

export default function Animate({ children, delay }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useInView(0.12)

  return (
    <div
      ref={ref}
      className={`fade-up ${visible ? 'visible' : ''}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  )
}
