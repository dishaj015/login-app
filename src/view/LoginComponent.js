import React,{Component} from 'react';
import {connect} from 'react-redux';
import {login } from '../actions/index';
import { Field, reduxForm } from "redux-form";
import { myValidator } from "./ValidForm";
import SweetAlert from "react-bootstrap-sweetalert";

class LoginComponent extends Component{
  //constructor
    constructor(props){
        super(props);
        this.state={
            Username:"",
            password:"",
            alert: null,
            error: ""
        }
        // submit method
        this.onSubmit = this.onSubmit.bind(this);
        // onchange method
        this.onChange = this.onChange.bind(this);      
    }
    
 
  //hide alert
  hideAlert = () => {
    this.setState({
      alert: null
    });
  };

  //submit method
  onSubmit() {
    if(this.state.Username !== 'hruday@gmail.com' && this.state.password !== 'hruday123'){
      this.setState({
        alert: (
          <SweetAlert
            danger
            title="Username is not registered!!"
            onConfirm={this.hideAlert}
          />
        )
      });
      this.props.reset();
    }else{
         this.props.login(this.state.Username,this.state.password);
    }
      }

  //onChange method
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
      
  //function for redux form
  renderField(field) {
    const {
      meta: { touched, error }
    } = field;
    const className = `form-group input-group  ${
      touched && error ? "has-danger" : ""
    }`;
    return (
      <div className={className}> 
        <input 
          className="form-control"
          type={field.type}
          value={field.value}
          placeholder={field.placeholder}
          {...field.input}
        />       
        <div className="text-help">{touched && error && <p style={{ color: 'red' }}>{error}</p>}</div>
      </div>
    );
  }

 // render data
   render(){
    const { handleSubmit, pristine, reset, submitting} = this.props;
    return( 
      // login-form
      <div class="login-form">
      {/* container */}
        <div class="container">
        {/* row */}
          <div class="row">
          {/* col */}
            <div class="offset-md-3 col-md-6" >
            {/* form */}
              <form
                className="login-box"
                onSubmit={handleSubmit(this.onSubmit)}
              >
                <h3 className="mb-4">Login Form</h3>              
                <Field
                  component={this.renderField}
                  type="email"
                  placeholder="Username"
                  name="Username"
                  value={this.state.Username}
                  onChange={this.onChange}
                  required
                />
                <Field
                  component={this.renderField}
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  required
                />
                <div className=" text-right">
                <button type="submit" class="login-btn" disabled={submitting}>Login</button>
               <button type="button" class="clear-btn"  disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                 
                </div>
              </form>
               {/* form end */}
            </div>
             {/* col end */}
          </div>
           {/* row end */}
       {this.state.alert}
        </div>
        {/* container end */}
        </div>
 // login end 
    )
}
}

// mapStateToProps
function mapStateToProps(state){
return {
    isLoginPending :state.Auth.isLoginPending,
    isLoginSuccess :state.Auth.isLoginSuccess,
}
}

// export LoginComponent
LoginComponent = connect(mapStateToProps, { login })(LoginComponent);

export default reduxForm({
  validate: myValidator,
  form: "LoginForm"
})(LoginComponent);
