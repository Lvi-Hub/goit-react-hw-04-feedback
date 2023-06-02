// import React, { Component } from 'react';
import React from 'react';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <ul className={css.Statistics}>
      {options.map(option => {
        return (
          <li className={css.StatisticsItem} key={option}>
            <button
              type="button"
              name={option}
              className={css.feedbackBtn}
              onClick={onLeaveFeedback}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
