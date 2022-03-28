import { Component } from "react";
import PhoneListItem from "./PhoneListItem";
import "./ContactList.css";
import Form from "./Form";

export default class ConatactList extends Component {
	constructor(props) {
		super(props);
		this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.onAddContact = this.onAddContact.bind(this);
	}
	state = {
		phoneList: [],
		name: "",
		sername: "",
		phone: "",
		showForm: false,
	};

	render() {
		return (
			<>
				<table className='table_phone'>
					<thead>
						<tr>
							<th>Имя</th>
							<th>Фамилия</th>
							<th>Телефон</th>
						</tr>
					</thead>
					{this.state.phoneList.map((data) => (
						<PhoneListItem
							key={data.id}
							item={data}
							onDeleteButtonClick={this.onDeleteButtonClick}
						/>
					))}
				</table>
				<button className='addAndHide-btn' onClick={this.onAddContact}>
					{this.state.showForm ? "Hide form" : "Add"}
				</button>
				{this.state.showForm ? (
					<Form
						name={this.state.name}
						sername={this.state.sername}
						phone={this.state.phone}
						handleSubmit={this.handleSubmit}
						handleInput={this.handleInput}
						onHideForm={this.onAddContact}
					/>
				) : null}
			</>
		);
	}

	componentDidMount() {
		fetch("https://612687da3ab4100017a68fd8.mockapi.io/contacts")
			.then((resp) => resp.json())
			.then((data) => this.setState({ phoneList: data }));
	}

	onDeleteButtonClick(id) {
		fetch("https://612687da3ab4100017a68fd8.mockapi.io/contacts" + "/" + id, {
			method: "DELETE",
		});
		const newList = this.state.phoneList.filter((data) => data.id !== id);
		this.setState({ phoneList: newList });
	}

	handleInput(e) {
		e.preventDefault();
		const name = e.target.name;
		const newState = {};
		newState[name] = e.target.value;
		this.setState(newState);
	}

	handleSubmit(e) {
		e.preventDefault();
		let newItem = {
			name: this.state.name,
			sername: this.state.sername,
			phone: this.state.phone,
		};
		fetch("https://612687da3ab4100017a68fd8.mockapi.io/contacts", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newItem),
		})
			.then((resp) => resp.json())
			.then(
				(data) => this.setState({ phoneList: [...this.state.phoneList, data] }),
				this.setState({
					showForm: !this.state.showForm,
				})
			);
	}

	onAddContact() {
		this.setState({
			showForm: !this.state.showForm,
		});
	}
}
