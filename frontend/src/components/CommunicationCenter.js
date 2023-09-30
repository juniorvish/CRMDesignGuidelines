```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommunicationCenter = () => {
    const [communicationData, setCommunicationData] = useState([]);

    useEffect(() => {
        const fetchCommunicationData = async () => {
            const response = await axios.get('/api/communication');
            setCommunicationData(response.data);
        };

        fetchCommunicationData();
    }, []);

    const updateCommunication = async (id, updatedData) => {
        const response = await axios.put(`/api/communication/${id}`, updatedData);
        setCommunicationData(communicationData.map(item => (item.id === id ? response.data : item)));
    };

    return (
        <div id="communicationCenterContainer" className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-gray-900">Communication Center</h2>
            {communicationData.map((data, index) => (
                <div key={index} className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-800">{data.title}</h3>
                    <p className="mt-2 text-gray-600">{data.content}</p>
                    <button onClick={() => updateCommunication(data.id, data)} className="mt-2 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-500">Update</button>
                </div>
            ))}
        </div>
    );
};

export default CommunicationCenter;
```