async function getGitHubRepos() {
  try {
    // Usando SEU username real do GitHub
    const response = await fetch('https://api.github.com/users/PedroHJ20/repos', {
      next: { revalidate: 3600 } // Cache de 1 hora
    })
    
    if (!response.ok) {
      return [] // Retorna array vazio em caso de erro
    }
    
    return await response.json()
  } catch (error) {
    return []
  }
}

export default async function Projetos() {
  const repos = await getGitHubRepos()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Meus Projetos</h1>
      
      {repos.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo: any) => (
            <div
              key={repo.id}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow flex flex-col"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {repo.name}
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                {repo.description || 'Projeto sem descrição'}
              </p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {repo.language || 'Várias'}
                </span>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Ver no GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">
              Projetos em Desenvolvimento
            </h3>
            <p className="text-yellow-700 mb-4">
              Estou trabalhando em novos projetos que em breve estarão disponíveis aqui!
            </p>
            <p className="text-yellow-600 text-sm">
              Enquanto isso, você pode acompanhar meu progresso no GitHub.
            </p>
          </div>
        </div>
      )}
      
      {/* Seção de projetos futuros */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Próximos Projetos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Aplicação Full Stack</h3>
            <p className="text-gray-600">Plataforma completa com frontend e backend integrados</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">App Mobile</h3>
            <p className="text-gray-600">Aplicativo mobile com React Native</p>
          </div>
        </div>
      </div>
    </div>
  )
}