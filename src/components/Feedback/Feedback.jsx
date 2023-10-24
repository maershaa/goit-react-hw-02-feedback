import css from 'components/Feedback/Feedback.module.css';
import React, { Component } from "react";

class FeedbackOptions extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {};



  render() {
    return (
      <div className={css.feedbackContainer}>
        <button
          className={css.customButton}
          type="button"
          onClick={this.handleAddReview}>
          good
        </button>
        <button
          className={css.customButton}
          type="button"
          onClick={this.handleAddReview}>
          neutral
        </button>
        <button
          className={css.customButton}
          type="button"
          onClick={this.handleAddReview}>
          bad
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
