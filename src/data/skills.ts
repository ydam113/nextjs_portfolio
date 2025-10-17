export interface Skill {
  name: string
  description: string
  icon: string
}

// 스킬 목록 데이터
export const skillsData: Skill[] = [
  {
    name: 'Python',
    description:
      '데이터 분석, 웹 백엔드 개발 및 자동화 스크립트 작성에 활용합니다. 간결하고 강력한 문법을 선호합니다.',
    icon: 'python',
  },
  {
    name: 'JavaScript',
    description:
      'React, Next.js와 함께 사용하여 동적이고 인터랙티브한 웹 사이트를 구축합니다. TypeScript 사용에 익숙합니다.',
    icon: 'javascript',
  },
  {
    name: '침투 테스트',
    description:
      '시스템 및 네트워크의 취약점을 식별하고, 잠재적인 보안 위협을 사전에 평가하고 대응 방안을 수립할 수 있습니다.',
    icon: 'shield',
  },
  {
    name: '웹 모의해킹',
    description:
      '웹 애플리케이션의 주요 취약점(OWASP Top 10 등)을 진단하고, 시큐어 코딩을 통해 안전한 웹 서비스를 만드는 데 기여합니다.',
    icon: 'bug',
  },
]
