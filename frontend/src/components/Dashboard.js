```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [userDashboardData, setUserDashboardData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('/api/dashboard');
            setUserDashboardData(result.data);
        };
        fetchData();
    }, []);

    const handleDrag = (e, index) => {
        e.dataTransfer.setData('card_index', index);
    };

    const handleDrop = (e, index) => {
        const cardIndex = e.dataTransfer.getData('card_index');
        const tempData = [...userDashboardData];
        const tempCard = tempData[cardIndex];
        tempData[cardIndex] = tempData[index];
        tempData[index] = tempCard;
        setUserDashboardData(tempData);
    };

    return (
        <div id="dashboardContainer" className="dashboard-container">
            {userDashboardData.map((data, index) => (
                <div
                    key={index}
                    draggable
                    onDragStart={(e) => handleDrag(e, index)}
                    onDrop={(e) => handleDrop(e, index)}
                    onDragOver={(e) => e.preventDefault()}
                    className="dashboard-card"
                >
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;
```