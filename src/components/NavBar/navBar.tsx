import React, { FC } from 'react';
import { Layout, Menu, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const NavBar: FC = () => {
  const router = useNavigate();
  // const isAuth  = useTypedSelector(state => state.authReducer.isAuth);
  // const user  = useTypedSelector(state => state.authReducer.user);
  const { isAuth, user } = useTypedSelector((state) => state.authReducer);
  const { logout } = useActions();

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth
          ? (
            <>
              <div style={{ color: 'white' }}>{user.username}</div>
              <Menu theme="dark" mode="horizontal" selectable={false}>
                <Menu.Item
                  key={1}
                  onClick={() => { logout(); router('login'); }}
                >
                  Выйти
                </Menu.Item>
              </Menu>
            </>
          )
          : (
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item key={1} onClick={() => router('/login')}>Логин</Menu.Item>
            </Menu>
          )}

      </Row>

    </Layout.Header>
  );
};

export default NavBar;
