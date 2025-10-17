import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact' // Contact 컴포넌트도 만들었다고 가정

export default function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
