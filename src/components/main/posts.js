import React, { Component } from "react";

class Posts extends Component {
  
 
  clickHandler(e) { 
    
    console.log(this.refs.PostTitle);
  


  }
  render() {
     
    return ( <div lassName="card mb-4">
        {this.props.items.map((item, index) => <div>
            <img src={item.poster} className="card-img-top" alt={"Happy"} />
            <div className="card-body">
              <h2 className="card-title"  key={index} ref={"PostTitle"}>
                {item.postTitle} 
                
              </h2>
              <p className="card-text">{item.text}</p>
          <button onClick={this.clickHandler.bind(this)} className="btn btn-primary">
                Read More →
              </button>
            </div>
            <div className="card-footer text-muted">
              Check out more of my posts.
              <a href="#!">{item.autor}</a>
            </div>
          </div>)}
        <h2> </h2>
      </div>
    )
  }
}

export default Posts;
