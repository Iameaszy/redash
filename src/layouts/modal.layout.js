import React from 'react';
import { connect } from 'react-redux';

import Signin from '../pages/auth/signin';
import Signup from '../pages/auth/signup';
import modal_actions from '../redux/actions/modals';
import ModalStyle from '../pages/auth/styles/modal';
import PleaseLogin from '../pages/pure_modals/please_login';

const mapStateToProps = (state) => {
  return {
    bool: state.modal.show,
    type: state.modal.type,
  };
};

const mapDispatchToPrpos = (dispatch) => {
  return {
    closeModal: () => dispatch({ type: modal_actions.SHOW_NOTHING }),
  };
};
const Modals = ({ type }) => {
  switch (type) {
    case modal_actions.SHOW_SIGNIN:
      return <Signin />;
    case modal_actions.SHOW_SIGNUP:
      return <Signup />;
    case modal_actions.SHOW_PLEASE_LOGIN:
      return <PleaseLogin />;
    default:
      return null;
  }
};

const ModalLayout = (props) => {
  return props.bool ? (
    <ModalStyle onClick={props.closeModal}>
      <button onClick={props.closeModal} id="close-modal">
        X
      </button>
      <Modals {...props} />
    </ModalStyle>
  ) : null;
};

export default connect(
  mapStateToProps,
  mapDispatchToPrpos,
)(ModalLayout);
