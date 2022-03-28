import { Component } from "react";

export default class PhoneListItem extends Component {
	constructor() {
		super();
	}

	render() {
		const { name, sername, phone, id } = this.props.item;
		return (
			<tbody>
				<tr>
					<td>{name}</td>
					<td>{sername}</td>
					<td>{phone}</td>
					<td>
						<button onClick={() => this.props.onDeleteButtonClick(id)}>
							Delete
						</button>
					</td>
				</tr>
			</tbody>
		);
	}
}
