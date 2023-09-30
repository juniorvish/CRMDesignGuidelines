```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Integration = () => {
    const [integrationData, setIntegrationData] = useState([]);

    useEffect(() => {
        const fetchIntegrationData = async () => {
            const response = await axios.get('/api/integration');
            setIntegrationData(response.data);
        };

        fetchIntegrationData();
    }, []);

    return (
        <div id="integrationContainer" className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-gray-900">Integration</h2>
            {integrationData.map((integration, index) => (
                <div key={index} className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-800">{integration.title}</h3>
                    <p className="mt-2 text-gray-600">{integration.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Integration;
```