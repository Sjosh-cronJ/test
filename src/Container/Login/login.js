import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Constants from '../../Constants/constants'
import { withRouter } from "react-router-dom";
import * as loginActions from '../../Action/loginActions'
import Button from '../../Components/UI/button'
import '../../Assets/Css/login.css'
class Login extends Component {
    state = {
        userName: '',
        password: '',
        showError: false,
        validation: {
            userName: {
                isValid: false,
                errorMessage: 'Required'
            },
            password: {
                isValid: false,
                errorMessage: 'Required'
            }
        },
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevProps.loginReducer.isLoggedIn && this.props.loginReducer.isLoggedIn) {
            this.props.history.push('/')
        }
    }

    submitForm = () => {
        let data = {
            userName: this.state.userName,
            password: this.state.password
        }
        let isError = Object.keys(this.state.validation).find(feild => this.state.validation[feild].isValid === false)
        if (!isError) this.props.loginActions.logIn(data)
        else this.setState({ showError: true })
    }

    validate = (type, value) => {
        if (type === "userName") {
            if (!value) {
                return {
                    ...this.state.validation, [type]: {
                        isValid: false,
                        errorMessage: 'Required'
                    }
                }
            }
            if (Constants.regEx.EMAIL.test(String(value).toLowerCase())) {
                return {
                    ...this.state.validation, [type]: {
                        isValid: true,
                        errorMessage: 'Required'
                    }
                }
            } else {
                return {
                    ...this.state.validation, [type]: {
                        isValid: false,
                        errorMessage: 'Invalid username'
                    }
                }
            }
        }
        if (type === "password") {
            if (!value) {
                return {
                    ...this.state.validation, [type]: {
                        isValid: false,
                        errorMessage: 'Required'
                    }
                }
            }
            else if (value.length < 6) {
                return {
                    ...this.state.validation, [type]: {
                        isValid: false,
                        errorMessage: 'Length must be greater then 6 '
                    }
                }
            }
            else {
                return {
                    ...this.state.validation, [type]: {
                        isValid: true,
                        errorMessage: ' '
                    }
                }
            }
        }
    }

    handleChange = (event, property) => {
        let validation = this.validate(property, event.target.value)
        this.setState({
            [property]: event.target.value,
            validation: validation,
        })
    }

    render() {
        return (

            <div className='login-container'>
                {this.props.loginReducer.isLoggedInError ? "Invalid Credentials" : null}
                <div className="input-box">
                    <div className="lable">Email: </div>
                    <input className="input-box" type="text" value={this.state.userName} onChange={event => this.handleChange(event, "userName")}></input>
                    {!this.state.validation.userName.isValid && this.state.showError ? <div className='error-text'>{this.state.validation.userName.errorMessage}</div> : null}
                </div>
                <div className="input-box">
                    <div className="lable"> Password: </div><input className="input-box" type="password" name="pwd" value={this.state.password} onChange={event => this.handleChange(event, "password")}></input>
                    {!this.state.validation.password.isValid && this.state.showError ? <div className='error-text'>{this.state.validation.password.errorMessage}</div> : null}
                </div>
                <div className="login-btn-container">
                    <Button clicked={this.submitForm} />
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        loginReducer: state.logInReducer
    }
};
const mapDispatchToProps = dispatch => {
    return {
        loginActions: bindActionCreators(loginActions, dispatch),
    }
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Login))