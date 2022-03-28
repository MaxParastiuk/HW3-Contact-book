import { Component } from "react";

export default class Form extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<form
				className='contact_form'
				action=''
				onSubmit={this.props.handleSubmit}>
				<input
					type='text'
					placeholder='Name'
					name='name'
					value={this.props.name}
					onChange={this.props.handleInput}
				/>
				<input
					type='text'
					placeholder='Surname'
					name='sername'
					value={this.props.sername}
					onChange={this.props.handleInput}
				/>
				<input
					type='text'
					placeholder='Phone number'
					name='phone'
					value={this.props.phone}
					onChange={this.props.handleInput}
				/>
				<button>Save</button>
				<button onClick={this.props.onHideForm}>Cancle</button>
			</form>
		);
	}
}
