import React, { Component } from "react";

class Pagination extends Component {
  render() {
    return (
      <ul className="pagination justify-content-center mb-4">
        <li className="page-item">
          <a className="page-link" href="!">
            ← Older
          </a>
        </li>
        <li className="page-item disabled">
          <a className="page-link" href="!">
            Newer →
          </a>
        </li>
      </ul>
    );
  }
}

export default Pagination;
