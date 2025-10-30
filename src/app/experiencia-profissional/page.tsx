export default function ExperienciaProfissional() {
  const experiencias = [
    {
      empresa: "HOPE - Hospital de Olhos de Pernambuco",
      cargo: "Aprendiz - Auxiliar Administrativo",
      periodo: "1 ano e 2 meses",
      descricao: "Atuei como auxiliar administrativo, realizando tarefas de apoio à equipe, organização de documentos, atendimento ao público e suporte nas atividades administrativas do setor.",
      tecnologias: ["Atendimento ao Público", "Organização", "Trabalho em Equipe", "Processos Administrativos"]
    },
    {
      empresa: "Empresa Atual",
      cargo: "Auxiliar de Faturamento",
      periodo: "Atual",
      descricao: "Responsável por atividades de faturamento, conferência de documentos, organização de planilhas e apoio à equipe administrativa. Desenvolvendo habilidades em processos financeiros e sistemas empresariais.",
      tecnologias: ["Faturamento", "Planilhas", "Conferência", "Sistemas Administrativos"]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Experiência Profissional</h1>
      
      <div className="space-y-8">
        {experiencias.map((exp, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{exp.cargo}</h2>
            <h3 className="text-xl text-blue-600 mb-2">{exp.empresa}</h3>
            <p className="text-gray-500 mb-4 font-medium">{exp.periodo}</p>
            <p className="text-gray-600 mb-4">{exp.descricao}</p>
            <div className="flex flex-wrap gap-2">
              {exp.tecnologias.map((tech, techIndex) => (
                <span key={techIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}