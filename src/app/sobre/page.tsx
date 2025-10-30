export default function Sobre() {
  const tecnologias = [
    'HTML', 'CSS', 'JavaScript', 'Java', 'Python',
    'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
    'Git/GitHub', 'Node.js', 'API REST'
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Sobre Mim</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Tecnologias que Domino</h2>
          <div className="grid grid-cols-2 gap-3">
            {tecnologias.map((tech, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center"
              >
                <span className="text-gray-700 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Minha Jornada</h2>
          <p className="text-gray-600 mb-4">
            Sou um desenvolvedor em formação, cursando Sistemas para Internet na Universidade Católica de Pernambuco. 
            Tenho grande interesse em desenvolvimento web e mobile, e estou constantemente buscando aprender 
            novas tecnologias e melhorar minhas habilidades.
          </p>
          <p className="text-gray-600 mb-4">
            Além da graduação, tenho investido em diversos cursos online para me especializar e estou 
            atualmente focando no aprendizado do inglês para expandir minhas oportunidades.
          </p>
          <h3 className="text-lg font-semibold mb-2">Objetivo Profissional</h3>
          <p className="text-gray-600">
            Busco uma oportunidade na área de desenvolvimento onde possa aplicar meus conhecimentos, 
            aprender com profissionais experientes e contribuir para projetos desafiadores.
          </p>
        </div>
      </div>
    </div>
  )
}