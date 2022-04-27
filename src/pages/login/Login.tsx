import React from 'react';
import { Card, Layout, Row } from 'antd';
import LoginForm from '../../components/LoginForm/loginForm';

function Login() {
  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Card>
          <LoginForm />
        </Card>
      </Row>
    </Layout>
  );
}

export default Login;
