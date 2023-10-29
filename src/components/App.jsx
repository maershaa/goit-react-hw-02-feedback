import { FeedbackOptions }  from 'components/Feedback/Feedback';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import React, { Component } from "react";

class App extends Component {
    state = {
    good: 0,
    neutral: 0,
    bad: 0,
    };
  
  onLeaveFeedback = evt => { 
    console.log(evt.target)
    const { name } = evt.target;
    this.setState(pervState => {
      return { [name]: pervState[name] + 1 };
    })
  }

  
  render() {
       const { good, neutral, bad } = this.state;
  return (
    <Section title="Please leave a feedback">
      <FeedbackOptions
  options={Object.keys(this.state)}
  onLeaveFeedback={this.onLeaveFeedback}
/>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </Section>
  );
  }
}

export default App;
