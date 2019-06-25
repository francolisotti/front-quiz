import React, { Component } from 'react';

class HeaderItem extends Component {
  state = {
    isOpen: false
  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (<div>
      <span className="btn" onClick={this.handleClick}>{this.props.content.title}</span>
      {this.state.isOpen && (
        <ul>
          {this.props.content.items.map(item =>
            <li className="btn" key={item.id}>> {item.name}</li>
          )}
        </ul>
      )}
    </div>
    );
  }
}

export default HeaderItem;
