import { connect } from 'react-redux';
import Notification from './Component';

const mapStateToProps = state => ({ success: state.success });

const NotificationContainer = connect(mapStateToProps)(Notification);

export default NotificationContainer;
