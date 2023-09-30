```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReportsAnalytics = () => {
    const [reportData, setReportData] = useState([]);

    useEffect(() => {
        const fetchReportData = async () => {
            const response = await axios.get('/api/reports');
            setReportData(response.data);
        };

        fetchReportData();
    }, []);

    const renderReports = () => {
        return reportData.map(report => (
            <div key={report.id} className="report-card">
                <h2>{report.title}</h2>
                <p>{report.description}</p>
                <img src={report.graph} alt="Report Graph" />
            </div>
        ));
    };

    return (
        <div id="reportAnalyticsContainer" className="report-container">
            <h1>Reports & Analytics</h1>
            {renderReports()}
        </div>
    );
};

export default ReportsAnalytics;
```