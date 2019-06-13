
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {updateToken} from '../Actions/loginAction'
import fetchAPI,{Validator} from '../utils/helper'
import '../styles/login.css';

class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      emailError : "",
      passwordError : "",
      loginError : ""
    }
    console.log(props);
  }

  errorMessage = (message) => {
    if(!message)
      return "";

    return (
      <span className="error-msg">{message}</span>
    )
  }

  doProcessLogin = (event) =>{
    var parentWrapper = event.target.parentElement;
    let payload = {
      'username' : parentWrapper.querySelector("#email-input").value.trim(),
      "password" : parentWrapper.querySelector("#password-input").value.trim()
    };
    if(!payload.username){
      this.setState({emailError:"Email is mendatory (*)"});
      return;
    }else if(!payload.password){
      this.setState({passwordError:"Password is mendatory (*)"});
      return;
    }
    this.processLogin(payload);
  }

  async processLogin(payload){
    const { res, err } = await fetchAPI("https://demo7643920.mockable.io/login ",{'method':'POST','body':payload});
    const {token} = res || {};
    if(!err && token){
      this.props.updateToken({token});
      this.props.history.push('/dashboard')
    }else{
      this.setState({loginError:"Login failed"});
    }
  }


  keyUpHandler = (event) =>{
    if(event.target.id === "email-input"){
      if(!event.target.value.trim()){
        this.setState({emailError:"Email is mendatory (*)"});
      }else if(Validator.email(event.target.value.trim())){
        this.setState({emailError:""});
      }else{
        this.setState({emailError:"Invalid email"});
      }
      return;
    }
  
    if(!event.target.value.trim()){
      this.setState({passwordError:"Password is mendatory (*)"});
    }else if(Validator.password(event.target.value.trim())){
      this.setState({passwordError:""});
    }else{
      this.setState({passwordError:"Invalid password"});
    }
  };

  render() {
    return (
      <div className="login-wrapper">
        <input type="email" className="login-input" id="email-input" placeholder="Email*" onKeyUp={this.keyUpHandler}/>
        {this.errorMessage(this.state.emailError)}
        <input type="password" className="login-input" id="password-input"  placeholder="Password*" onKeyUp={this.keyUpHandler}/>
        {this.errorMessage(this.state.passwordError || this.state.loginError)}
        <button className="get-start-btn" onClick={this.doProcessLogin} disabled={(this.state.emailError || this.state.passwordError) ? true : false}>Login</button>
      </div>
    );
  }
}

Login.propTypes = {
  token : PropTypes.string.isRequired
};

export default connect(
  state => ({
    token : state.loginReducer.token
  }),
  dispatch => bindActionCreators({ updateToken }, dispatch)
)(Login);
