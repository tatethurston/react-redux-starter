import { connect } from 'react-redux'

import Flash from '../components/flash';
import { flashDestroy } from '../actions';

const mapState = (state) => ({
  message: state.flash
});

export default connect(mapState, { onDismiss: flashDestroy })(Flash);


