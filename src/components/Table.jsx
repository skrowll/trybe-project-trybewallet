import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
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
        </thead>
        {
          expenses.length === 0
            ? ''
            : (
              <tbody>
                {
                  expenses.map((expense) => (
                    <tr key={ expense.id }>
                      <td>{expense.description}</td>
                      <td>{expense.tag}</td>
                      <td>{expense.method}</td>
                      <td>
                        {parseFloat(expense.value).toFixed(2)}
                      </td>
                      <td>
                        {(expense.exchangeRates[expense.currency].name
                          .split('/Real Brasileiro'))}
                      </td>
                      <td>
                        {parseFloat(expense.exchangeRates[expense.currency].ask)
                          .toFixed(2)}
                      </td>
                      <td>
                        {parseFloat(expense.value
                            * expense.exchangeRates[expense.currency].ask).toFixed(2)}
                      </td>
                      <td>Real</td>
                    </tr>
                  ))
                }
              </tbody>
            )
        }
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default connect(mapStateToProps)(Table);
