import React, { Component } from "react";
import Happy from "../../img/Happy.png";
import Sad from "../../img/sad.png";
import Boring from "../../img/boring.png";
import Aside from "./aside";
import Posts from "./posts";
import Pagination from "./pagination";



const post = [
  {
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicingelit.Reiciendis aliquid atque, nulla? Quos cum ex quissoluta, a laboriosam.Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!",
    poster: Happy,
    postTitle: "How to be a happy cake",
    autor: "Benedict "
  },
  {
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicingelit.Reiciendis aliquid atque, nulla? Quos cum ex quissoluta, a laboriosam.Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!",
    poster: Sad,
    postTitle: "How not to be sad cake",
    autor: "Adriana "
  },
  {
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicingelit.Reiciendis aliquid atque, nulla? Quos cum ex quissoluta, a laboriosam.Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!",
    poster: Boring,
    postTitle: "How not to be annoying cake",
    autor: "Billi "
  }
];

class Main extends Component {
  
  render() {
    return (
      <div className="container">
        <div className="row">
          {/* Blog Entries Column */}
          <div className="col-md-8">
            <h1 className="my-4">
              Read all your posts.<small> Dont forget to eat a cupcakes</small>
            </h1>
            {/* Blog Post */}
            <Posts items={post} />
            {/* Pagination */}
            <Pagination />
          </div>
          {/* Sidebar Widgets Column */}
          <Aside />
        </div>
      </div>
    );
  }
}

export default Main;
