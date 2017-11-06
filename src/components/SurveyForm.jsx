import React, { Component } from 'react';
import { connect } from 'react-redux';
import RadioButtonGroup from './RadioButtonGroup';
import RadioButton from './RadioButton';
import SurveyResults from './SurveyResults';
import { vote } from '../actions';
import questions from '../data/questions.json';

class SurveyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      question: this.getRandomQuestion.bind(this)(),
    }
  }

  onSubmit(e){
    e.preventDefault();
    this.props.vote(this.state.question, (this.props.selectedResponse));
    this.setState({
      submitted: true,
    });
  }

  getRandomQuestion() {
    const questionCount = questions.length;
    const questionId = Math.floor((Math.random() * questionCount));
    return questions[questionId];
  }

  render () {
    const randomQuestion = this.state.question;
    const randomQuestionText = randomQuestion.text.toLowerCase();
    const selectedResponse = this.props.selectedResponse;
    const selectedIdx = selectedResponse - 1
    const hideButton = this.state.submitted ? 'hide' : '';
    const radioButtons = randomQuestion.answers.map(answer => {
      return(
        <RadioButton
          key={answer.id}
          value={answer.id}
          label={answer.text}
          disabled={this.state.submitted}
        />
      );
    });
    return(
      <div>
        {
          this.state.submitted ? <SurveyResults responseText={randomQuestion.answers[selectedIdx].text}/> : null
        }
        <div>What is your {randomQuestionText}?</div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div>
            <div className="question"></div>
            <RadioButtonGroup group="choices">
              {radioButtons}
            </RadioButtonGroup>
          </div>
          <input className={hideButton}
            id="submit" 
            type="submit" 
            name="submit" 
            value="Submit"
          />
        </form>
      </div>
    ); 
  }
}

const mapStateToProps = state => {
  return {
    selectedResponse: state.surveyResponse.answerId
  };
}

export default connect (mapStateToProps, {vote})(SurveyForm);