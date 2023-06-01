import React, { Component } from 'react';
import { Statistics } from 'components/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handlFeedbackBtn = e => {
    this.setState(prevState => {
      const name = e.target.name;
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback({ good, neutral, bad } = this.state) {
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage({ good, neutral, bad } = this.state) {
    const percentage = Math.round((100 * good) / (good + neutral + bad)) || 0;
    return percentage;
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handlFeedbackBtn}
          />
        </Section>

        <Section title={'Statistics'}>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
