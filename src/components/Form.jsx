import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import currenciesAPI from '../services/currencyAPI';
import { addExpense } from '../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: {},
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onInputChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  async onClick() {
    const { addNewExpense } = this.props;
    const { expenses } = this.props;
    const currencies = await currenciesAPI();
    delete (currencies.USDT);
    this.setState({
      id: expenses.length,
      exchangeRates: currencies,
    });
    addNewExpense(this.state);
    console.log(this.state);
    this.setState({
      value: '0',
      description: '',
      currency: '',
      method: '',
      tag: '',
    });
  }

  render() {
    const SELECIONE = 'Selecione...';
    const { currencies } = this.props;
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="value-input">
            {'Valor: '}
            <input
              type="number"
              name="value"
              id="value-input"
              data-testid="value-input"
              min="0"
              placeholder="0"
              onChange={ this.onInputChange }
              value={ value }
            />
          </label>
          <label htmlFor="description-input">
            {'Descrição: '}
            <input
              type="text"
              name="description"
              id="description-input"
              data-testid="description-input"
              onChange={ this.onInputChange }
              value={ description }
            />
          </label>
          <label htmlFor="currency-input">
            {'Moeda: '}
            <select
              name="currency"
              id="currency-input"
              onChange={ this.onInputChange }
              // defaultValue=""
              value={ currency }
            >
              <option value="" disabled hidden>{SELECIONE}</option>
              {currencies.map((curr) => <option key={ curr }>{curr}</option>)}
            </select>
          </label>
          <label htmlFor="method-input">
            {'Método de pagamento: '}
            <select
              name="method"
              id="method-input"
              data-testid="method-input"
              placeholder="Selecione: "
              onChange={ this.onInputChange }
              // defaultValue=""
              value={ method }
            >
              <option value="" disabled hidden>{SELECIONE}</option>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag-input">
            {'Categoria: '}
            <select
              name="tag"
              id="tag-input"
              data-testid="tag-input"
              onChange={ this.onInputChange }
              // defaultValue=""
              value={ tag }
            >
              <option value="" disabled hidden>{SELECIONE}</option>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button
            type="button"
            onClick={ this.onClick }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  addNewExpense: (expense) => dispatch(addExpense(expense)),
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
  addNewExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
