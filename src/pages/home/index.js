import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  FaHome,
} from 'react-icons/fa';
import switchon from '../../assets/switch_on.png';
import switchoff from '../../assets/switch_off.png';
import { HomeStyle } from './home.style';

export class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { toggle: true };
    this.toggleMenu = this.toggleMenu.bind(this);
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
            onClick={(e) => {
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
          <p>Content</p>
        </div>
      </HomeStyle>
    );
  }
}
const mapStateToProps = state => ({
  name: state.auth.data.name,
  listings: state.listing.listings,
  action_type: state.listing.action_type,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Home));
