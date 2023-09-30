```javascript
const mongoose = require('mongoose');

const IntegrationSchema = new mongoose.Schema({
    emailClient: {
        type: String,
        required: true
    },
    calendarTool: {
        type: String,
        required: true
    },
    projectManagementSystem: {
        type: String,
        required: true
    },
    customAPI: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Integration', IntegrationSchema);
```