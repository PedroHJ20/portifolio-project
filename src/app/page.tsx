import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Olá, eu sou [Seu Nome]
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Desenvolvedor Full Stack & Criador de Soluções Digitais
          </p>
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