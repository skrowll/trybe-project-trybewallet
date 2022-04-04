import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="value-input">
            {'Valor: '}
            <input
              type="number"
              name="value-input"
              id="value-input"
              data-testid="value-input"
              min="0"
              placeholder="0"
            />
          </label>
          <label htmlFor="description-input">
            {'Descrição: '}
            <input
              type="text"
              name="description-input"
              id="description-input"
              data-testid="description-input"
            />
          </label>
          <label htmlFor="currency-input">
            {'Moeda: '}
            <select
              name="currency-input"
              id="currency-input"
            >
              {currencies.map((currency) => <option key={ currency }>{currency}</option>)}
            </select>
          </label>
          <label htmlFor="method-input">
            {'Método de pagamento: '}
            <select
              name="method-input"
              id="method-input"
              data-testid="method-input"
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag-input">
            {'Categoria: '}
            <select
              name="tag-input"
              id="tag-input"
              data-testid="tag-input"
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(Form);
