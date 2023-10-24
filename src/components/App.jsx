import  FeedbackOptions  from 'components/Feedback/Feedback';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import React, { Component } from "react";

class App extends Component {
    state = {
    good: 0,
    neutral: 0,
    bad: 0,
    };
  
    handleAddReview = (evt) => {
    this.setState((prevState) => ({
      [evt]: prevState[evt] + 1
    }));
    };
  
  render() {
       const { good, neutral, bad } = this.state;
  return (
    <Section title="Please leave a feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleAddReview} />
        <Statistics good={good} neutral={neutral} bad={bad} />
      </Section>
  );
  }
}

export default App;
