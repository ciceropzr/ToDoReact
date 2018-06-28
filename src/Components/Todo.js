import React, { Component } from 'react';
import { connect } from 'react-redux';
import { input } from '../Modules/Todo-Module';
import { addItem } from '../Modules/Todo-Module';


const mapStateToProps = (state) =>{
	return {
		list: state.todo.list,
		temp: state.todo.temp
	}
}

const mapDispatchToProps = (dispatch) =>{
	return {
		input: (payload) =>{
			dispatch(input(payload))
		},
		addItem: () => {
			dispatch(addItem())
		}
	}
}

class Todo extends Component{
	handleChange = (ev) => {
		ev.preventDefault();
		this.props.input(ev.target.value);
	}

	handleClick = (ev) => {
		ev.preventDefault();
		this.props.addItem()
	}

	render() {
		return(
			<section>
				<form>
					<input type='text' onChange={this.handleChange}/>
					<button onClick={this.handleClick}>send</button>
				</form>
				<ul>
					{this.props.list.map(item => <li>{item}</li>)}
				</ul>
			</section>
		)
	}
}
export default connect( mapStateToProps, mapDispatchToProps) (Todo);