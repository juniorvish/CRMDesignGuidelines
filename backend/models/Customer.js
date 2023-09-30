```javascript
const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  contactDetails: {
    type: String,
    required: true
  },
  transactionHistory: {
    type: Array,
    default: []
  },
  supportTickets: {
    type: Array,
    default: []
  },
  otherData: {
    type: Object,
    default: {}
  }
});

module.exports = mongoose.model('Customer', CustomerSchema);
```