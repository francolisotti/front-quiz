import React, { Component } from 'react';
import HeaderItem from './HeaderItem';
import './style.scss';


class Header extends Component {
  state = {
    isOpen: false,
    content: [
      {
        id: 1,
        title: 'Hombre',
        items: [
          {
            id: 1,
            name: 'Jeans',
          },
          {
            id: 2,
            name: 'Remeras',
          }
        ]
      },
      {
        id: 2,
        title: 'Mujer',
        items: [
          {
            id: 1,
            name: 'Jeans',
          },
          {
            id: 2,
            name: 'Remeras',
          }
        ]
      }
    ]
  }

  handleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div className={"header " + (this.state.isOpen ? 'header--open' : '')}>
        <div className="header-top">
          <img src="favicon.ico" alt="Logo" />
          <span className="btn" onClick={this.handleMenu}>Menu</span>
        </div>
        {
          this.state.isOpen && (
            <div className="header-content">
              <div>
                <ul>
                  <li>
                    {this.state.content.map(item =>
                      <HeaderItem key={item.id} content={item} />
                    )}
                  </li>
                </ul>
              </div>
              <div className="contact btn">Contacto</div>
              <input
                type="search"
                className="search"
                placeholder="Buscar producto"
              />
            </div>
          )
        }
      </div>
    );
  }
}

export default Header;
