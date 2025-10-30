export default function ExperienciaAcademica() {
  const formacoes = [
    {
      instituicao: "Universidade Católica de Pernambuco",
      curso: "Sistemas para Internet",
      periodo: "2023 - Presente (3º período)",
      descricao: "Graduação em andamento com foco em desenvolvimento web, mobile e tecnologias modernas."
    },
    {
      instituicao: "Ensino Médio Completo",
      curso: "Ensino Médio",
      periodo: "Concluído",
      descricao: "Formação básica completa com bom desempenho acadêmico."
    },
    {
      instituicao: "PROLINFO/UPE",
      curso: "Curso de Inglês",
      periodo: "Cursando",
      descricao: "Curso de inglês em andamento para desenvolvimento de fluência no idioma."
    },
    {
      instituicao: "Fundação Bradesco",
      curso: "Diversos Cursos Online",
      periodo: "Vários períodos",
      descricao: "Cursos complementares em: Atendimento ao Público, Pacote Office, LGPD, Responsabilidade Social e Sustentabilidade, Inclusividade, Fundamentos de TI, Resiliência, Cultura Digital e Equidade."
    },
    {
      instituicao: "Escola Profissional Dom Bosco",
      curso: "Manutenção de Computadores",
      periodo: "Concluído",
      descricao: "Curso técnico em manutenção e configuração de computadores e redes."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Formação Acadêmica</h1>
      
      <div className="space-y-8">
        {formacoes.map((formacao, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{formacao.curso}</h2>
            <h3 className="text-xl text-blue-600 mb-2">{formacao.instituicao}</h3>
            <p className="text-gray-500 mb-4 font-medium">{formacao.periodo}</p>
            <p className="text-gray-600">{formacao.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  )
}