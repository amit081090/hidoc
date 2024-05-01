import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
const DataContext = createContext(null);

// Custom hook to use the data context
export const useData = () => useContext(DataContext);

// Define the context provider
export const DataProvider = ({ children }) => {
    // Initialize data as null
    const [data, setData] = useState(null);

    // Fetch data from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Update the API URL to match the one you provided
                const response = await axios.post('https://hidocdr.com/api/hidoc-us/drug/getDrugList');
                const responseData = response.data;

                // Ensure the responseData is an object
                if (typeof responseData === 'object') {
                    // Access the "data" property
                    const data = responseData.data;
                    
                    // Set the data in state
                    setData(data);
                } else {
                    console.error('API response is not an object');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Provide data to child components using the context
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
