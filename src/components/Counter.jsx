import { useState } from "react";

// Imutabilidade -> uma variavel nunca vai ter seu valor alterado, e sim criado uma nova.

/* 
  por exemplo:
  usuarios = ['diego3g', 'dieegosf', 'danileao']
  
  no javascript, adicionaria com push
  usuarios.push('rafacamarda') e adiciona no final da array alterando usuarios

  já com imutabilidade do react, vai criar um novo array copiando as informações por exemplo:
  novoUsuario = [...usuarios, 'rafacamarda']
*/

export function Counter() {
  let [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  )
}