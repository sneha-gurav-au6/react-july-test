import React, { Component } from "react";
import { Register, Login } from "../redux/actions/actionState";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
export class Logink extends Component {
    async componentDidMount() {}

    handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        this.props.Login({ email: email, password: password });
        alert("Login Successfully, Refresh Page ");
    };
    render() {
        console.log(this.props.login);
        return (
            <div className="container-fluid">
                <h1>Login </h1>
                <form onSubmit={this.handleLogin}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            name="email"
                        />
                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            name="password"
                        />
                    </div>
                    <div className="form-group form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        login: state,
    };
};

export default connect(mapStateToProps, { Login })(Logink);
