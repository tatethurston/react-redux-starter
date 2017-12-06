import { connect } from 'react-redux'

import Home from '../components/home';
import { logout } from '../actions';

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, { onLogout: logout })(Home);

