import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HomeScreen from './HomeScreen';
import { attemptAuthGoogle, attemptSignOut, attemptCheckAuth } from '../../actions/auth';

export class HomeContainer extends Component {

    render() {
        return (
            <HomeScreen signIn={this.signIn} signOut={this.signOut} checkAuth={this.checkAuth} />
        );
    }

    signIn = () => {
        const { attemptAuthGoogle } = this.props;
        attemptAuthGoogle();
    };

    signOut = () => {
        const { attemptSignOut } = this.props;
        attemptSignOut();
    };

    checkAuth = () => {
        const { attemptCheckAuth } = this.props;
        attemptCheckAuth();
    };

};

const mapDispatchToProps = dispatch => bindActionCreators({
    attemptAuthGoogle,
    attemptSignOut,
    attemptCheckAuth
}, dispatch);

export default {
    component: connect(null, mapDispatchToProps)(HomeContainer),
    name: 'HOME'
};