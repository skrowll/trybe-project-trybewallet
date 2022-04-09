import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Form from '../components/Form';
import currenciesAPI from '../services/currencyAPI';
import { addCurrencies } from '../actions';
import Table from '../components/Table';

class Wallet extends React.Component {
  async componentDidMount() {
    const { addNewCurrencies } = this.props;
    const result = await currenciesAPI();
    // console.log(result);
    const resultKeys = Object.keys(result);
    // console.log(resultKeys);
    const filterOffUSDT = resultKeys.filter((keys) => keys !== 'USDT');
    // console.log(filterOffUSDT);
    addNewCurrencies(filterOffUSDT);
  }

  render() {
    return (
      <div>
        <Header />
        <Form />
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addNewCurrencies: (currencies) => dispatch(addCurrencies(currencies)),
});

Wallet.propTypes = {
  addNewCurrencies: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
