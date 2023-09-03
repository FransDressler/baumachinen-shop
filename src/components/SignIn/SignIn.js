import React from 'react';

class SignIn
 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          password: ''
        }
    }

    onPasswordChange = (event) => {
      this.setState({password: event.target.value})
    }

    onSubmit = (event) => {
      event.preventDefault();
      fetch('https://baumaschinen-shop-api-47cd6e358646.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        password: this.state.password
      })})
      .then(response => response.json())
      .then(response => {if (response) {
        this.props.changeSignIn(true)
      }})
    }

    render() {
      return (
        <section className='bg-gray-100 w-screen h-96'>
          <div className="h-full w-full grid place-items-center pt-[5em]">
            <div className="flex gap-3">
                <label htmlFor="password">Passwort:</label>
                <input type="password" name="password"  id="password" onChange={this.onPasswordChange}/>
            </div>
            <button class="bg-transparent hover:bg-amber-500 text-amber-700 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded"
            onClick={this.onSubmit}>
              Einloggen
            </button>
          </div>
          </section>
        )
    }

}

export default SignIn;