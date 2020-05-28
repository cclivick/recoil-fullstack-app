import React, { useState } from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

const AppWrapper = () => {
    const [showUsers, setShowUsers] = useState(Boolean)

    return (
        <div>
            <Header setShowUsers={setShowUsers} showUsers={showUsers} />
            <MainContent showUsers={showUsers} />
            <Footer />
        </div>
    )
};

export default AppWrapper;