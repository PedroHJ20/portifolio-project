import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          {/* SUA FOTO - ADICIONE ESTA SEÇÃO */}
          <div className="flex justify-center mb-8">
            <img 
              src="/foto-perfil.jpg" 
              alt="Foto de Pedro Henrique" 
              className="rounded-full w-48 h-48 object-cover border-4 border-white shadow-lg"
            />
          </div>
          
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Olá, eu sou Pedro Henrique
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Desenvolvedor em formação e apaixonado por tecnologia
          </p>
          
          {/* Redes Sociais */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/PedroHJ20"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/pedro-henrique-03b8aa309"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:pedrohenriquej20@gmail.com"
              className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
          </div>

          <div className="flex justify-center space-x-4">
            <Link
              href="/projetos"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Ver Projetos
            </Link>
            <Link
              href="/sobre"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Sobre Mim
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}