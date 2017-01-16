import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/TodoAction';
const { SHOW_ALL } = VisibilityFilters;

// const initialState = {
//     visibilityFilter: VisibilityFilters.SHOW_ALL,
//     todos: []
// };

// console.log(store.getState());

function visibilityFilter (state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

function todos (state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state, {
                    text: action.text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                }
                return todo;
            });
        default:
            return state;
    }
}

// 這跟下一段 const todoApp 的寫法意思是一樣的
// export default function todoApp (state = {}, action) {
//     return {
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//         todos: todos(state.todos, action)
//     };
// }

const todoApp = combineReducers({
    visibilityFilter,
    todos
})
export default todoApp;