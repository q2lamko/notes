import './App.css'
import {FC} from "react";
import AppRouter from "./components/AppRouter";
import {Layout} from "antd";
import NavBar from "./components/NavBar/navBar";
import 'antd/dist/antd.css';


const App: FC = () => {
    return (
        <Layout>
            <NavBar/>
            <Layout.Content>
                <AppRouter/>
            </Layout.Content>
        </Layout>
    )
}

export default App
