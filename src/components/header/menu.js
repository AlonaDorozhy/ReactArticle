import React, {Component} from 'react';

class Menu extends Component {
    render() {
        console.log('items', this.props.items);
        return (

            <div className="collapse navbar-collapse" id="navbarResponsive">
                {this.props.items.map((item, index) =>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" key={index} href={item.link}> {item.lable}
                                <span className="sr-only"> (current) </span></a>
                        </li>
                    </ul>
                )}
            </div>
        )
    }
}

export default Menu;