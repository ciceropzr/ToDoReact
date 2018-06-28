import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../Modules/Todo-Module';

const mapDispatchToProps = (dispatch) =>{
	return {
		addItem: (payload) =>{
			dispatch(addItem(payload))
		}
	}
}
const mapStateToProps = (state) =>{
	return {
		list: state.todo.list
	}
}

class Todo extends Component{
	constructor(){
	super()
		this.state = {
			temp:''
		}
	}

	handleChange = (event) => {
		event.preventDefault();
		this.setState({ temp: event.target.value })
	}

	handleClick = (event) => {
		event.preventDefault();
		this.props.addItem(this.state.temp);
	}
 	
	render() {
		return(
			<section style={styles.container}>
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

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 200
  },
  containerUlLi: {
  	listStyle: 'none'
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (Todo);