import React from 'react';
import { useData } from '../context/dataContext';

const DrugList = () => {
    // Access data from context
    const data = useData();
    console.log(data);

    // Check if data and data.drugData exist and if data.drugData is an array
    if (!data || !Array.isArray(data.drugData)) {
        return <div>No data available or data.drugData is not an array</div>;
    }

    return  (


        <div className=" mr-20 ml-20 grid grid-cols-2 gap-4 ">
        {/* First table */}
        <table className="w-full border border-gray-300">
            <tbody>
                <tr>
                    <td className="p-2 border border-black-300">Drug Data</td>
                </tr>
                <tr>
                    <td className="p-2 border border-black-300">
                    <ul>
               {data.drugData.map((drug) => (
                  <li key={drug.id}>
                        {drug.drugName} {/* Access the drugName property from each drug object */}
                    </li>
               ))}
            </ul>
                        
                    </td>
                </tr>
            </tbody>
        </table>

        {/* Second table */}
        <table className="w-full border border-gray-300">
            <tbody>
                <tr>
                    <td className="p-2 border border-gray-300">Drug Details</td>
                </tr>
                <tr>
                    <td className="p-2 border border-gray-300">
                    <ul>
               {data.drugData.map((drug) => (
                  <li key={drug.id}>
                        {drug.drugDetails} {/* Access the drugName property from each drug object */}
                    </li>
               ))}
            </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);
       
    
    
};

export default DrugList;
