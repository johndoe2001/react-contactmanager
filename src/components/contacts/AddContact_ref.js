import React, { Component } from 'react';

class AddContact extends Component {

	constructor(props){
		super(props);

		this.nameInput = React.createRef();
		this.emailInput = React.createRef();
		this.phoneInput = React.createRef();
	}

	onSubmit = (e) => {
		e.preventDefault();
		const contact = {
			name: this.nameInput.current.value,
			email: this.emailInput.current.value,
			phone: this.phoneInput.current.value,
		}

		console.log(contact)
	}

	// onChange = (e) => this.setState({[e.target.name]: e.target.value})

	static defaultProps = {
		name: 'Shohrat Salmanov',
		email: 'shohratsalmanov123@gmail.com',
		phone: '994 70 501 99 09'
	}

	render() {
		
		const { name, email, phone} = this.props;

		return (
			<div className="card card-body mb-3">
				<div className="card-header">Add Contact</div>
				<div className="card-body">
					<form onSubmit= {this.onSubmit}>
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<input 
								type="text" 
								className="form-control form-control-lg"
								placeholder = "Enter your name..."
								defaultValue = {name}
								name = "name"
								ref = {this.nameInput}
							/>
						</div>

						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input 
								type="email" 
								className="form-control form-control-lg"
								placeholder = "Enter your email..."
								defaultValue = {email}
								name="email"
								ref = {this.emailInput}
							/>
						</div>

						<div className="form-group">
							<label htmlFor="phone">Phone</label>
							<input 
								type="text" 
								className="form-control form-control-lg"
								placeholder = "Enter your phone..."
								defaultValue = {phone}
								name="phone"
								ref = {this.phoneInput}
							/>
						</div>

						<input 
							type="submit" 
							value="Add Contact" 
							className="btn btn-light btn-block"
						 />

					</form>
				</div>
			</div>
		)
	}
}

export default AddContact;