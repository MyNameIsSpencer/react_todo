import React, {Component} from 'react';
import './App.css';

class MyList extends Component {
  render () {
    return(
      <div>
        <li>{this.props.doThis}</li>
      </div>
    )
  }
}
