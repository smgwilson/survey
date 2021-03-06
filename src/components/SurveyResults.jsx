import React, { Component } from 'react';
import { connect } from'react-redux';

class SurveyResults extends Component {
  render() {
    console.log('SurveyResults', this.props);
    return (
      <div>
        <h4>You selected: {this.props.responseText}</h4>
        <div className="results">
          <p>Response Tally:</p>
          <div>
            {
              this.props.surveyResults.map(result => {
                return (
                  <div key={result.id}>
                    <span>{result.text}: {result.responses}</span>
                  </div>
                );
              })
            }
          </div>
        </div>
        <hr/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    surveyResults: state.votes.questionId
  }
}

export default connect(mapStateToProps, null)(SurveyResults);


