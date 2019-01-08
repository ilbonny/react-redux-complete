import axios from "axios"

const initState ={
    users :[],
    posts:[
        {userId: 1, id: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", body: "quia et suscipit↵suscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto"},
        {userId: 1, id: 2, title: "qui est esse", body: "est rerum tempore vitae↵sequi sint nihil reprehend…aperiam non debitis possimus qui neque nisi nulla"},
    ]
}

const rootReducer = (state = initState, action) =>{

    if(action.type === "DELETE_POST"){
        let newPosts = state.posts.filter(post => {
            return post.id !== action.id
        })
        return {
            ...state,
            posts : newPosts
        }
    }

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res =>{
         let newPosts = res.data.slice(0,10)
         return {
             ...state,
             posts : newPosts
         }
    })

    return state;
}

export default rootReducer;

