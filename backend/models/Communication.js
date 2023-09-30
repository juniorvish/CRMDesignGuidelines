```javascript
const mongoose = require('mongoose');

const CommunicationSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    calls: {
        type: Array,
        required: true
    },
    internalMessages: {
        type: Array,
        required: true
    },
    emailThread: {
        type: Array,
        required: true
    },
    integratedCalls: {
        type: Array,
        required: true
    }
});

const Communication = mongoose.model('Communication', CommunicationSchema);

module.exports = Communication;
```