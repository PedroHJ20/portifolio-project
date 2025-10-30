export default function ExperienciaAcademica() {
  const formacoes = [
    {
      instituicao: "Universidade Católica de Pernambuco",
      curso: "Sistemas para Internet",
      periodo: "2023 - Presente",
      descricao: "Graduação em andamento (3º período)."
    },
    {
      instituicao: "Ensino Médio Completo",
      curso: "Ensino Médio",
      periodo: "Concluído",
      descricao: "Formação básica completa."
    },
    {
      instituicao: "Fundação Bradesco",
      curso: "Diversos Cursos Online",
      periodo: "Vários",
      descricao: "Cursos em: Atendimento ao Público, Pacote Office, LGPD, Responsabilidade Social e Sustentabilidade, Inclusividade, Fundamentos de TI: Hardware e Software, Resiliência, Cultura Digital, Equidade não é tendência, é urgência."
    },
    {
      instituicao: "PROLINFO/UPE",
      curso: "Curso de Inglês",
      periodo: "Cursando",
      descricao: "Curso de inglês em andamento."
    },
    {
      instituicao: "Escola Profissional Dom Bosco",
      curso: "Manutenção de Computadores",
      periodo: "Concluído",
      descricao: "Curso técnico em manutenção de computadores."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Formação Acadêmica</h1>
      
      <div className="space-y-8">
        {formacoes.map((formacao, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{formacao.curso}</h2>
            <h3 className="text-xl text-blue-600 mb-2">{formacao.instituicao}</h3>
            <p className="text-gray-500 mb-4">{formacao.periodo}</p>
            <p className="text-gray-600">{formacao.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  )
}