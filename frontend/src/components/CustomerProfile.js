```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerProfile = () => {
    const [customerProfileData, setCustomerProfileData] = useState({});

    useEffect(() => {
        const fetchCustomerProfileData = async () => {
            const response = await axios.get('/api/customer');
            setCustomerProfileData(response.data);
        };

        fetchCustomerProfileData();
    }, []);

    const handleUpdate = async (updatedData) => {
        const response = await axios.put('/api/customer', updatedData);
        setCustomerProfileData(response.data);
    };

    return (
        <div id="customerProfileContainer" className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-gray-900">Customer Profile</h2>
            <div className="mt-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div className="bg-white rounded p-4">
                            <h3 className="text-lg font-semibold text-gray-900">Contact Details</h3>
                            {/* Display contact details */}
                        </div>
                    </div>
                    <div className="w-full px-4">
                        <div className="bg-white rounded p-4">
                            <h3 className="text-lg font-semibold text-gray-900">Transaction History</h3>
                            {/* Display transaction history */}
                        </div>
                    </div>
                    <div className="w-full px-4">
                        <div className="bg-white rounded p-4">
                            <h3 className="text-lg font-semibold text-gray-900">Support Tickets</h3>
                            {/* Display support tickets */}
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handleUpdate} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Update Profile
            </button>
        </div>
    );
};

export default CustomerProfile;
```