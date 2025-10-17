import { FaGithub, FaEnvelope } from 'react-icons/fa' // 아이콘 가져오기

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-800 text-white py-20 px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-400 mb-8">언제든지 편하게 연락 주세요!</p>
        <div className="flex items-center justify-center space-x-8">
          <a
            href="mailto:dydeka113@gmail.com"
            className="flex items-center text-2xl hover:text-blue-400 transition-colors"
          >
            <FaEnvelope className="mr-2" />
            Email
          </a>
          <a
            href="https://github.com/ydam113"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-2xl hover:text-blue-400 transition-colors"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
