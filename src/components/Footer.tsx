import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 Pedro Henrique. Todos os direitos reservados.</p>
        <p className="mt-2 text-gray-400 mb-4">
          Desenvolvido com Next.js, Tailwind CSS e TypeScript
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/PedroHJ20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-henrique-03b8aa309"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:pedrohenriquej20@gmail.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}