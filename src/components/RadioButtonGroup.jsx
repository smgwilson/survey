import React, { Component } from 'react';
import { connect } from 'react-redux';
import { vote } from '../actions';

class RadioButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange (event) {
      let value = Number(event.target.value);
      this.props.vote(this.props.question, value);
    }  
  
  renderRadioButtons() {
    return React.Children.map(this.props.children, (child, idx) => {
      return React.cloneElement(child, {
        group: this.props.group,
        onClick: this.handleOptionChange
      });
    });
  }

  render() {
    return(
      <div className='vertical-radio-buttons'>
        {this.renderRadioButtons.bind(this)()}
      </div>
    );
  }
}

export default connect(null, { vote })(RadioButtonGroup);

