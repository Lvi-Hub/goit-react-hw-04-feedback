import React, { Component } from 'react';
import css from './Section.module.css';
import PropTypes from 'prop-types';

export class Section extends Component {
  render() {
    const { title } = this.props;
    return (
      <section className={css.section}>
        <p className={css.title}>{title}</p>
        {this.props.children}
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
