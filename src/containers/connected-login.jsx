import { connect } from 'react-redux'

import Login from '../components/login';
import { login } from '../actions';

export default connect(undefined, { onSubmit: login })(Login);
