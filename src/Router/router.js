import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Login from '../Container/Login/login'
import Home from '../Container/Home/home'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NoMatch from '../Components/UI/noMatchRoute'
import ProtectedRoute from '../HOC/protectedRoute'
class RouterClass extends React.PureComponent {
    render() {
        return (
            < div >
                <Switch>
                    <ProtectedRoute exact path="/" Component={Home} isLoggedIn={this.props.isLoggedIn} />
                    <Route exact path="/login" component={Login} />
                    <Route component={NoMatch} />
                </Switch>
            </div >
        )
    }
}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.logInReducer.isLoggedIn
    }
};

export default connect(mapStateToProps)(RouterClass);