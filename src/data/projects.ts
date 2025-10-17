export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
}

// 프로젝트 목록 데이터
export const projectsData: Project[] = [
  {
    title: '나만의 포트폴리오 사이트',
    description:
      'HTML와 JavaScript를 사용하여 만든 개인 포트폴리오 웹사이트입니다. Vercel을 통해 배포되었습니다.',
    image: '/images/portfolio2.png',
    tags: ['HTML', 'JavaScript', 'CSS', 'Vercel'],
    githubUrl: 'https://github.com/ydam113/Portfolio2',
    liveUrl: 'https://portfolio2-six-khaki.vercel.app/',
  },
  {
    title: '팀 웹 프로젝트',
    description:
      '실시간 데이터 동기화 기능이 있는 팀 프로젝트 관리 도구입니다. React와 Firebase를 활용했습니다.',
    image: '/images/webteam.png',
    tags: ['HTML', 'JavaScript', 'CSS', 'Vercel'],
    githubUrl: 'https://github.com/ydam113/Webteam-FINAL-main',
    liveUrl: 'https://webteam-final-main.vercel.app/',
  },
  // 여기에 다른 프로젝트들을 계속 추가하면 됩니다.
]
