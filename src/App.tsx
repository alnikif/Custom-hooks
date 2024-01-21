import React from 'react';
import HooksStore from "./HooksStore/HooksStore";
import Providers from './Providers';
import './index.css';

const App: React.FC = () => {
    return (
        <Providers>
            <HooksStore />
        </Providers>
    );
};

export default App;