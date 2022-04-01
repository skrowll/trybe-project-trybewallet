import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { enterUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      isButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const { value } = target;
    this.setState({
      [name]: value,
    }, this.validate);
  }

  validate() {
    const { email, senha } = this.state;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const SEIS = 6;
    const isEmailValid = emailRegex.test(email);
    if (isEmailValid && senha.length >= SEIS) {
      this.setState({ isButtonDisabled: false });
    } else {
      this.setState({ isButtonDisabled: true });
    }
  }

  render() {
    const { isButtonDisabled, email, senha } = this.state;
    const { enterNewUser } = this.props;
    return (
      <div>
        <form>
          <input
            type="text"
            name="email"
            value={ email }
            data-testid="email-input"
            placeholder="E-mail"
            onChange={ this.onInputChange }
          />
          <input
            type="password"
            name="senha"
            value={ senha }
            data-testid="password-input"
            placeholder="Senha"
            onChange={ this.onInputChange }
          />
          <Link to="/carteira">
            <button
              type="button"
              disabled={ isButtonDisabled }
              onClick={ () => { enterNewUser(email); } }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // enterNewUser: (email) => dispatch({ type: 'ENTER_USER',
  //   payload: email }),
  // enterNewUser: (email) => console.log(email),
  enterNewUser: (email) => dispatch(enterUser(email)),
});

Login.propTypes = {
  enterNewUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
