import { projectsData } from '@/data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-gray-100 py-20 px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
