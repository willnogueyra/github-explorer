import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos') //buscar
      .then(response => response.json()) // quando devolver a resposta, converte em json
      .then(data => setRepositories(data)) // quando dados já convertidos, declarar na variavel
  }, [])
  
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      
      <ul>
        {repositories.map(repository => <RepositoryItem key={repository.name} repository={repository}/>)}
      </ul>

    </section>
  )
}