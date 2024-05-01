import React from 'react';
import { DataProvider } from './context/dataContext'; // Import the DataProvider
import Navbar from './Components/navbar';
import DrugList from './Components/drugList';
import Explore from './Components/explore';
import Buttons from './Components/buttons';
import Footer from './Components/footer';

const App = () => {
    return (
        // Wrap your application with the DataProvider
        <DataProvider>
            <div>
                <Navbar />
                <Buttons />
                <DrugList />
                <Explore />
                <Footer />
            </div>
        </DataProvider>
    );
};

export default App;
