import { connect } from 'react-redux'

import AuthRoute from '../components/auth-route';

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user !== null
  }
}

export default connect(mapStateToProps)(AuthRoute);

