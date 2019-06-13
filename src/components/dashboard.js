import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/dashboard.css';

class Dashboard extends Component {

  constructor(props){
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div className="token-wrapper">{this.props.token}</div>
    );
  }
}

Dashboard.propTypes = {
  token : PropTypes.string.isRequired
};

export default connect(
  state => ({
    token : state.loginReducer.token
  })
)(Dashboard);
