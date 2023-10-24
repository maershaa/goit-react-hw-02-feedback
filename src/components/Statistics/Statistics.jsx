// import css from 'components/Statistics/Statistics.module.css'; // Импорт стилей CSS
import React, { Component } from "react";
import Notification from '../Notification/Notification';


class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Метод для вычисления общего количества отзывов
  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  // Метод для вычисления процента положительных отзывов
  countPositiveFeedbackPercentage() {
    return Math.round((100 / this.countTotalFeedback()) * this.state.good);
  }

  render() {
    const totalFeedback = this.countTotalFeedback();

    return (
      <div>
        {totalFeedback >= 1 ? ( // Отображать блок статистики только если есть хотя бы один отзыв
          <ul>
            <li>Good: {this.state.good}</li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Bad: {this.state.bad}</li>
            {/* Отображать элемент "Total" только в том случае, если good + neutral + bad >= 1, иначе его не отображать */}
            {this.countTotalFeedback() >= 1 && (
              <li>Total: {this.countTotalFeedback()}</li>
            )}

            {/* Отображать элемент "Positive feedback" только в том случае, если процент положительных отзывов >= 1, иначе его не отображать */}
            {this.countPositiveFeedbackPercentage() >= 1 && (
              <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
            )}
          </ul>
        ) : (
          <Notification message="There is no feedback" /> // Выводить сообщение вместо блока статистики, если нет отзывов
        )}
      </div>
    );
  }
}

export default Statistics;
