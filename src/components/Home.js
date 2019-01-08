import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Pokeball from '../asserts/pokeball.png'
import { connect } from 'react-redux'

class Home extends Component {
 render(){
    const {posts} = this.props;
    const postList = posts.length 
      ? (
        posts.map(post => {
          return (
            <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A pokeball"/>
              <div className="card-content">
                <Link to={'/post/' + post.id}>
                  <span className="card-title red-text">{post.title}</span>
                </Link>
                <p>{post.body}</p>
              </div>            
            </div>            
            )
        })
      ) 
      : (
        <div className = "center"> No post yet</div>
      ) 

    return (        
      <div className="home container">
        <h4 className="center">HOME PAGE</h4>
        {postList}
      </div>
      );    
  }    
}

const mapStateToProps = () => (state) =>{
  return {
    posts : state.posts
  }
}

export default connect(mapStateToProps)(Home);