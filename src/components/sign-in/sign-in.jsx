import React, { Component } from "react";
import "./sign-in.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

class SignIn extends Component {
    state = {
        email: "",
        password: ""
    };

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ email: "", password: "" });
    };

    handleChange = e => {
        const { value, name } = e.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your emaila and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        type="email"
                        name="email"
                        value={this.state.email}
                        label="email"
                        required
                    />

                    <FormInput
                        handleChange={this.handleChange}
                        type="password"
                        name="password"
                        value={this.state.password}
                        label="password"
                        required
                    />

                    <CustomButton type="submit" value="Submit Form">
                        SIGN IN
                    </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;
