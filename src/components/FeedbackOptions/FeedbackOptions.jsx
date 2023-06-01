import React, { Component } from 'react';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
  render() {
    // const keys = Object.keys(this.props.options);

    return (
      <ul className={css.Statistics}>
        {this.props.options.map(option => {
          return (
            <li className={css.StatisticsItem} key={option}>
              <button
                type="button"
                name={option}
                className={css.feedbackBtn}
                onClick={this.props.onLeaveFeedback}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
