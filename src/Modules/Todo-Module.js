const ADDITEM = 'todo/todo/ADDITEM'

const	initialState = {
	list: []
}

const todoReducer = (state = initialState, action) => {
	switch (action.type){
		case ADDITEM:
			return {
				...state,
				list: state.list.concat([action.info])
			}
		default:
		return state;
	}
}

export default todoReducer

export const addItem = (info) => ({
		type: ADDITEM,
		info
})
