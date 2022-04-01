import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import currenciesAPI from '../services/currencyAPI';
import { addCurrencies } from '../actions';

class Wallet extends React.Component {
  async componentDidMount() {
    const { addNewCurrencies } = this.props;
    const result = await currenciesAPI();
    const resultKeys = Object.keys(result);
    const filterOffUSDT = resultKeys.filter((keys) => keys !== 'USDT');
    // addCurrencies(filterOffUSDT);
    // console.log(filterOffUSDT);
    addNewCurrencies(filterOffUSDT);
  }

  render() {
    return (
      <div>
        <Header />
        TrybeWallet
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // addNewCurrencies: (moedas) => dispatch({ type: 'ADD_CURRENCIES' }),
  // addNewCurrencies: (moedas) => console.log(moedas),
  addNewCurrencies: (currencies) => dispatch(addCurrencies(currencies)),
});

Wallet.propTypes = {
  addNewCurrencies: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
