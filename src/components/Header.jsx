import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.totalExpense = this.totalExpense.bind(this);
  }

  totalExpense(expenses) {
    if (expenses.length > 0) {
      const exchangeSum = expenses.reduce((acc, expense) => {
        const { value, currency } = expense;
        const { ask } = expense.exchangeRates[currency];
        const exchangeValue = (parseFloat(value) * parseFloat(ask));
        acc += exchangeValue;
        return acc;
      }, 0);
      return exchangeSum;
    }
    return 0;
  }

  render() {
    const { email, expenses } = this.props;
    const total = this.totalExpense(expenses);
    // console.log(this.totalExpense(expenses));

    return (
      <header>
        <h1>Trybe Wallet</h1>
        <p data-testid="email-field">{`Email: ${email}`}</p>
        <p data-testid="total-field">{total.toFixed(2)}</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default connect(mapStateToProps)(Header);
