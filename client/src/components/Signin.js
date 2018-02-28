import React from 'react'
import clientAuth from '../clientAuth'

class SignIn extends React.Component {
	state = {
		fields: { email: '', password: ''}
	}

	onInputChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

	onFormSubmit(evt) {
		evt.preventDefault()
		clientAuth.logIn(this.state.fields).then(user => {
			this.setState({ fields: { email: '', password: '' } })
			if(user) {
				this.props.onSignInSuccess(user)
				this.props.history.push(`/games`)
			}
		})
	}
	
	render() {
    const { email, password } = this.state.fields
		return (
			<div className='SignIn'>
				<div className='row'>
					<div className='column column-33 column-offset-33'>
						<h1>Log In</h1>
						<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
							<input type="text" placeholder="Email" name="email" value={email} />
							<input type="password" placeholder="Password" name="password" value={password} />
							<button>Log In</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default SignIn