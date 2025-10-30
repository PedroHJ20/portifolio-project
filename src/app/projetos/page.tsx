async function getGitHubRepos() {
  try {
    const response = await fetch('https://api.github.com/users/PedroHJ20/repos', {
      next: { revalidate: 3600 }
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
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Projetos</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.length > 0 ? (
          repos.map((repo: any) => (
            <div
              key={repo.id}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {repo.name}
              </h3>
              <p className="text-gray-600 mb-4">
                {repo.description || 'Sem descrição'}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {repo.language || 'Não especificada'}
                </span>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Ver no GitHub
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center py-8">
            <p className="text-gray-600">Não foi possível carregar os repositórios do GitHub.</p>
            <p className="text-gray-500 mt-2">Ou não há repositórios públicos.</p>
          </div>
        )}
      </div>
    </div>
  )
}