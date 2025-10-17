import { skillsData } from '@/data/skills'
import SkillCard from './SkillCard'

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-100 py-20 px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
