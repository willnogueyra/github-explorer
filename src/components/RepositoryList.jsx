import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos') //buscar
      .then(response => response.json()) // quando devolver a resposta, converte em json
      .then(data => setRepositories(data)) // quando dados já convertidos, declarar na variavel
  }, [])
  
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      
      <ul>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
      </ul>

    </section>
  )
}