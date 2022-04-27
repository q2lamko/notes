import { FC, useEffect } from 'react';
import { Layout } from 'antd';
import s from './App.module.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar/navBar';
import 'antd/dist/antd.css';
import { useActions } from './hooks/useActions';
import { IUser } from './models/IUser';
import { Content } from 'antd/lib/layout/layout';

const App: FC = () => {
  const { setUser, setIsAuth } = useActions();
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({ username: localStorage.getItem('username' || '') } as IUser);
      setIsAuth(true);
    }
  }, []);
  return (
    <div className={s.container}>
      <Layout className={s.container}>
        <NavBar />
        <Content className={s.test}>
          <AppRouter />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
