import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ErrorModalScreen from './ErrorModalScreen';
import { attemptAuthGoogle, attemptSignOut, attemptCheckAuth } from '../../actions/creators/auth';

export class HomeContainer extends Component {

    render() {
        const { message } = this.props;
        console.log('THIS.PROPS', this.props);
        return (
            <ErrorModalScreen message={message} />
        );
    }

};

const mapDispatchToProps = dispatch => bindActionCreators({
    attemptAuthGoogle,
    attemptSignOut,
    attemptCheckAuth
}, dispatch);

export default {
    component: connect(null, mapDispatchToProps)(HomeContainer),
    name: 'ERROR_MODAL'
};