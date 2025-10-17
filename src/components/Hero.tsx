export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center min-h-screen text-center bg-white"
    >
      <h1 className="text-5xl font-extrabold tracking-tight mb-4">
        안녕하세요, 저는 박용담입니다 👋
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mb-8">
        취약점을 찾고 침투테스트를 공부하는 학생입니다.
      </p>
      <a
        href="#projects"
        className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
      >
        제 프로젝트 보러가기
      </a>
    </section>
  )
}
