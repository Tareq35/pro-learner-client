import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterPage from '../Pages/Footer/FooterPage';
import Header from '../Pages/Shared/Header/Header';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <FooterPage></FooterPage>
        </div>
    );
};

export default Main;