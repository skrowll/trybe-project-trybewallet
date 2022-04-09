import React from 'react';

class Table extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        <tr>
          <td>Calcutta</td>
          <td>Orange</td>
        </tr>
        <tr>
          <td>Robots</td>
          <td>Jazz</td>
        </tr>
      </table>
    );
  }
}

export default Table;
