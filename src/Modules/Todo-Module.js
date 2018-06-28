//todo(projeto)/todo(modulo)/ADDITEM(nome de onde estou mechendo)
const INPUT = 'todo/todo/INPUT'
const ADDITEM = 'todo/todo/ADDITEM'

const	initialState = {
	list: [],
	temp: ''
}

const todoReducer = (state = initialState, action) => {
	switch (action.type){
		case INPUT:
			return {	
				...state,
				temp: action.payload
			}
		case ADDITEM:
			return {
				...state,
				list: state.list.concat([state.temp])
			}
		default:
		return state;
	}
}

export default todoReducer

export const input = (payload) => ({
		type: INPUT,
		payload
})

export const addItem = () => ({
		type: ADDITEM
})
// //a msm coisa que a cima
// export const addItem = (payload) => {
// 	return{
// 		type: ADDITEM,
// 		payload: payload
// 	}
// }