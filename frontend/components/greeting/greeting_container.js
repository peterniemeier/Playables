import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  processDemo: () => dispatch(login({username: 'demouser', password: 'demouser'}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
