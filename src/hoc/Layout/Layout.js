import React, {Component} from 'react';

import styles from './Layout.module.css';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer };
    });
  }

  render () {
    console.log(this.state.showSideDrawer);
    return(<Aux>
      <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
      <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer}/>
      <main className={styles.Content}>
        {this.props.children}
      </main>
    </Aux>)
  }
}

export default Layout;
