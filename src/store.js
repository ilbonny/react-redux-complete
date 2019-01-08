import { createStore } from "redux"

const initState = {
    todos :[],
    posts: []
}

function reducer(state = initState, action){

    if(action.type === 'ADD_TODO'){
        return {
            ...state,
            todos: [...state.todos, action.todo]            
        }
    }

    if(action.type === 'ADD_POST'){
        return {
            ...state,
            posts: [...state.posts, action.post]            
        }
    }
}

const store = createStore(reducer);

store.subscribe(()=> {
    console.log('change updated');
    console.log(store.getState())
})

store.dispatch({ type:'ADD_TODO', todo : 'buy milk'});
store.dispatch({ type:'ADD_TODO', todo : 'buy eggs'});
store.dispatch({ type:'ADD_POST', post : 'Egg hunt with me'});