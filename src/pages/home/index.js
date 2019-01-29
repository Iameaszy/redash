import React from 'react';
import { connect } from 'react-redux';
import { FaHome } from 'react-icons/fa';
import Modal from 'react-responsive-modal';
import switchon from '../../assets/switch_on.png';
import switchoff from '../../assets/switch_off.png';
import { HomeStyle } from './home.style';
import Table from './table';

import modalAction from '../../redux/actions/modals';

export class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { toggle: true, open: true };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onOpenModal() {
    this.setState({ open: true });
  }

  onCloseModal() {
    this.setState({ open: false });
  }

  toggleMenu() {
    const { toggle } = this.state;
    this.setState({ toggle: !toggle });
  }

  render() {
    const { toggle } = this.state;
    return (
      <HomeStyle>
        <div className="side-bar">
          {toggle && (
          <p
            className="toggle"
            onClick={(e) => {
              this.toggleMenu();
            }}
          >
            <img src={switchoff} alt="" width="30" />

          </p>
          )
         }
          {!toggle && (
          <p
            className="toggle"
            onClick={() => {
              this.toggleMenu();
            }}
          >
            <img src={switchon} alt="" width="30" />

          </p>
          )
         }
          <div className="fa-home menu">
            <span
              className="home-icon"
            >
              <FaHome size={
                toggle ? 20 : 42
              }
              />

            </span>
            {toggle
            && <span>Home</span>
            }
          </div>
        </div>
        <div className="content">
          <Table />
        </div>
      </HomeStyle>
    );
  }
}
const mapStateToProps = state => ({
  name: state.auth.data.name,
  fishes: state.fish.fishes,
  type: state.fish.action,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
