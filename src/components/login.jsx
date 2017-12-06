import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom';

const Login = ({ handleSubmit }) =>
  <div>
    <span>Login</span>
    <Link to="/register">Register</Link>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>

const LoginForm = reduxForm({
  form: 'login'
})(Login);

export default LoginForm;
