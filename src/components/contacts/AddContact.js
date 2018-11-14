import React, { Component } from 'react';
import {Consumer} from '../../context';
import axios from 'axios';
// import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {

	state =  {
		name: "",
		email: "",
		phone: "",
		errors: {}
	}

	onSubmit = async (dispatch,e) => {
		e.preventDefault();

		const { name, email, phone } = this.state;

		if(name === '') {
			this.setState({errors: {name: 'Name is required.'}})
			return;
		}

		if(email === '') {
			this.setState({errors: {email: 'Email is required.'}})
			return;
		}

		if(phone === '') {
			this.setState({errors: {phone: 'Phone is required.'}})
			return;
		}

		const newContact = {
			// id: uuid(),
			name,
			email,
			phone
		}


		const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact)
		
		dispatch({ type: 'ADD_CONTACT', payload: res.data });

		this.setState({
			name: "",
			email: "",
			phone: "",
			errors: {}
		})

		this.props.history.push('/')
		// console.log(this.state)
	}

	onChange = (e) => this.setState({[e.target.name]: e.target.value})

	render() {
		
		const { name, email, phone,errors} = this.state;

		return (
			
			<Consumer>
				{
					value => {
						const {dispatch} = value;

						return (
							<div className="card card-body mb-3">
								<div className="card-header">Add Contact</div>
								<div className="card-body">
									<form onSubmit= {this.onSubmit.bind(this,dispatch)}>
										
										<TextInputGroup 
											label = "Name"
											name = "name"
											value = {name}
											placeholder = "Enter your name..."
											onChange = {this.onChange}
											error = {errors.name}
											
										/>

										<TextInputGroup 
											label = "Email"
											name = "email"
											value = {email}
											placeholder = "Enter your email..."
											onChange = {this.onChange}
											error = {errors.email}
											
										/>

										<TextInputGroup 
											label = "Phone"
											name = "phone"
											value = {phone}
											placeholder = "Enter your phone..."
											onChange = {this.onChange}
											error = {errors.phone}
											
										/>

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
			</Consumer>
		)
	}
}

export default AddContact;