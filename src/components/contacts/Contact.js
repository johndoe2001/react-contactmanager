import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Contact extends Component {

	state = {
		showContactInfo: false
	};

	// onShowClick = (id, e) => {
	// 	console.log(id)
	// }

	onDeleteClick = async (id, dispatch) => {

		try {
			await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
			dispatch({type: 'DELETE_CONTACT',payload: id});

		} catch(e) {
			dispatch({type: 'DELETE_CONTACT',payload: id});
		}
		
	}

	render() {

		const {id,name, email, phone} = this.props.contact;
		const { showContactInfo } = this.state;

		return (
			<Consumer>
				{ value => {

					const { dispatch } = value;

					return (
						<div className="card card-body mb-3">
							<h4>{name} 
							<i className="fas fa-sort-down" style = { {cursor: 'pointer'} } onClick={ () => {
								this.setState({
									showContactInfo: !this.state.showContactInfo
								});
							}}></i>

							<i className="fa fa-times" 
								style = {{cursor: 'pointer',color: 'red',float: 'right'}} 
								onClick = {this.onDeleteClick.bind(this, id, dispatch)}>
							</i>

							<Link to={`/edit-contact/${id}`}>
								<i className="fa fa-pen" style = {{ float: 'right',color: 'black',marginRight: '1rem', marginTop: '3px',cursor: 'pointer',fontSize: '20px' }}></i>
							</Link>

							</h4>

							{ showContactInfo ? (
								<ul className="list-group">
									<li className="list-group-item">Email: {email}</li>
									<li className="list-group-item">Phone: {phone}</li>
								</ul>
							) : null }

						</div>
					)
				}}
			</Consumer>
		)
	}
}

Contact.propTypes = {
	contact: propTypes.object.isRequired,
}

export default Contact;