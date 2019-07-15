import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TodoItem extends Component {
  render() {
    return <p>{this.props.todo.title}</p>;
  }
}
//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};
