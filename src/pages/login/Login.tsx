import React from 'react';
import {Layout, Row} from "antd";
import LoginForm from "../../components/LoginForm/loginForm";

const Login = () => {
    return (
        <Layout>
            <Row justify={"center"} align={"middle"} className={"h100"}>
                <LoginForm/>
            </Row>
        </Layout>
    );
};

export default Login;