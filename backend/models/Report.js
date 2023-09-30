```javascript
const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    lastModified: {
        type: Date,
        default: Date.now
    },
    reportData: {
        type: Object,
        required: true
    },
    filters: {
        type: Array,
        default: []
    },
    scheduled: {
        type: Boolean,
        default: false
    },
    scheduleDetails: {
        type: Object,
        default: null
    }
});

module.exports = mongoose.model('Report', ReportSchema);
```