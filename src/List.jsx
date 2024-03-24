import Menu from "./components/Menu"

export const List = () =>{
  return(
    <div>
      <Menu/>
      <h2>List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Produto A</td>
            <td>10</td>
            <td>R$ 100,00</td>
            <td>
              <button>👓</button>
              <button>❌</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Produto B</td>
            <td>15</td>
            <td>R$ 150,00</td>
            <td>
              <button>👓</button>
              <button>❌</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Produto C</td>
            <td>8</td>
            <td>R$ 80,00</td>
            <td>
              <button>👓</button>
              <button>❌</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}