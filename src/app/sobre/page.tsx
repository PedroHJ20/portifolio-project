export default function Sobre() {
  const tecnologias = [
    'HTML',
    'CSS',
    'JavaScript',
    'Java',
    'Python',
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'Git/GitHub',
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Sobre</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Tecnologias que Domino</h2>
          <div className="grid grid-cols-2 gap-3">
            {tecnologias.map((tech, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
              >
                <span className="text-gray-700">{tech}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Sobre Mim</h2>
          <p className="text-gray-600 mb-4">
            Sou um desenvolvedor em formação, cursando Sistemas para Internet na Universidade Católica de Pernambuco.
            Tenho interesse em desenvolvimento web e mobile, e estou sempre buscando aprender novas tecnologias.
          </p>
          <p className="text-gray-600 mb-4">
            Além da graduação, tenho realizado diversos cursos online para me especializar e estou atualmente
            estudando inglês.
          </p>
          <h3 className="text-lg font-semibold mb-2">Objetivo</h3>
          <p className="text-gray-600">
            Busco uma oportunidade na área de desenvolvimento para aplicar e expandir meus conhecimentos,
            contribuindo com a equipe e crescendo profissionalmente.
          </p>
        </div>
      </div>
    </div>
  )
}