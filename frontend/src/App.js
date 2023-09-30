```javascript
import React from 'react';
import Dashboard from './components/Dashboard';
import CustomerProfile from './components/CustomerProfile';
import TaskManagement from './components/TaskManagement';
import CommunicationCenter from './components/CommunicationCenter';
import ReportsAnalytics from './components/ReportsAnalytics';
import Integration from './components/Integration';
import './styles/tailwind.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDashboardData: {},
      customerProfileData: {},
      taskData: {},
      communicationData: {},
      reportData: {},
      integrationData: {},
    };
  }

  updateDashboard = (data) => {
    this.setState({ userDashboardData: data });
  }

  updateProfile = (data) => {
    this.setState({ customerProfileData: data });
  }

  updateTask = (data) => {
    this.setState({ taskData: data });
  }

  updateCommunication = (data) => {
    this.setState({ communicationData: data });
  }

  updateReport = (data) => {
    this.setState({ reportData: data });
  }

  render() {
    return (
      <div className="App">
        <Dashboard data={this.state.userDashboardData} updateDashboard={this.updateDashboard} />
        <CustomerProfile data={this.state.customerProfileData} updateProfile={this.updateProfile} />
        <TaskManagement data={this.state.taskData} updateTask={this.updateTask} />
        <CommunicationCenter data={this.state.communicationData} updateCommunication={this.updateCommunication} />
        <ReportsAnalytics data={this.state.reportData} updateReport={this.updateReport} />
        <Integration data={this.state.integrationData} />
      </div>
    );
  }
}

export default App;
```