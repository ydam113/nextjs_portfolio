'use client'

import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import type { Project } from '@/data/projects'
import { useInView } from 'react-intersection-observer'

export default function ProjectCard({ project }: { project: Project }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
  })

  return (
    <div
      ref={ref}
      className={`
        bg-white rounded-lg shadow-lg overflow-hidden flex flex-col
        transition-all duration-700 ease-in-out transform
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      <Image
        src={project.image}
        alt={`${project.title} 이미지`}
        width={500}
        height={300}
        className="w-full object-cover"
      />

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>

        <div className="mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center space-x-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black"
            >
              <FaGithub size={24} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black"
            >
              <FaExternalLinkAlt size={22} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
