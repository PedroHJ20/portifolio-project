import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg font-semibold mb-2">Pedro Henrique Jerônimo Da Silva</p>
        <p className="text-gray-400 mb-4">Desenvolvedor em Formação</p>
        
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/PedroHJ20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            title="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-henrique-03b8aa309"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            title="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:pedrohenriquej20@gmail.com"
            className="text-gray-400 hover:text-white transition-colors"
            title="Email"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
        
        <p className="text-gray-400 text-sm">
          &copy; 2024 Pedro Henrique. Desenvolvido com Next.js, Tailwind CSS e TypeScript.
        </p>
      </div>
    </footer>
  )
}