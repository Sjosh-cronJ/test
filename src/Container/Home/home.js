
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../Action/userActions'
import './home.css'
class Home extends Component {
    componentDidMount() {
        this.props.userActions.getUser()
    }
    getUsersTable = () => {
        return this.props.userReducer.users.map((listValue) => {
            return (
                <tr key={listValue.id}>
                    <td>{listValue.name}</td>
                    <td>{listValue.age}</td>
                    <td>{listValue.gender}</td>
                    <td>{listValue.email}</td>
                    <td>{listValue.phoneNo}</td>
                </tr>
            );
        })
    }

    render() {
        return (
            this.props.userReducer.fetchingUsers ? " Loading..." : this.props.userReducer.fetcingUsersError ? "Error Occured" : < div >
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Phone No</th>
                        </tr>
                        {this.getUsersTable()}
                    </tbody>
                </table>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        userReducer: state.dashboardReducer
    }
};
const mapDispatchToProps = dispatch => {
    return {
        userActions: bindActionCreators(userActions, dispatch),
    }
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Home))