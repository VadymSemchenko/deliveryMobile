import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeScreen from './HomeScreen';
import { TEST_ACTION } from '../../constants/actionTypes';

class HomeContainer extends Component {

    render() {
        return (
            <HomeScreen onPress={this.testSaga}/>
        );
    }

    testSaga = () => {
        const {fireAction} = this.props;
        fireAction();
    }

};

const mapDispatchToProps = (dispatch) => ({
    fireAction: () => dispatch({ type: TEST_ACTION })
  });

HomeContainer = connect(null, mapDispatchToProps)(HomeContainer);

export default {
    component: HomeContainer,
    name: 'HOME',
    needsStore: true
};