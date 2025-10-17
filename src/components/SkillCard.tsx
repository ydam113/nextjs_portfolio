'use client'

import { useInView } from 'react-intersection-observer'
import type { Skill } from '@/data/skills'
import { FaPython, FaJsSquare, FaBug, FaShieldAlt } from 'react-icons/fa'

const iconComponents = {
  python: FaPython,
  javascript: FaJsSquare,
  shield: FaShieldAlt,
  bug: FaBug,
}

export default function SkillCard({ skill }: { skill: Skill }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
  })

  const IconComponent =
    iconComponents[skill.icon as keyof typeof iconComponents]

  return (
    <div
      ref={ref}
      className={`
        bg-white rounded-lg shadow-md p-6 text-center
        transition-all duration-500 ease-out transform
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      {IconComponent && (
        <IconComponent className="text-5xl text-blue-500 mx-auto mb-4" />
      )}
      <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
      <p className="text-gray-600">{skill.description}</p>
    </div>
  )
}
