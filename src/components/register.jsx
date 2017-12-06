import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom';

const Register = ({ handleSubmit }) =>
  <div>
    <Link to="/login">Login</Link>
    <span>Register</span>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <Field name="name" component="input" type="text" />
      </div>
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

const RegisterForm = reduxForm({
  form: 'register'
})(Register);

export default RegisterForm;
