import { LOADING, SUCCESS,HeadlineSUCCESS, ERROR, PAGE_CHANGED,searchValue } from '../constants/constants';

const init = {
	data: [],
	headlines:[],
	searchValue:'',
	statusCode:'200',
	status: 'initial',
	activePage: 1,
};

export default (state = init, action) => {
	switch(action.type) {
		case LOADING:
			return {...state,status:"loading"}
		case SUCCESS:
			return {...state,status:"success", data: action.items}
		case HeadlineSUCCESS:
			return {...state,status:"success", headlines: action.items}
		case ERROR :
			return {...state,status:"error", statusCode: action.statusCode}
		case PAGE_CHANGED :
			return {...state,activePage:action.activePage}
		case searchValue :
			return {...state,searchValue:action.payload}
		default:
					return state;
	}
}