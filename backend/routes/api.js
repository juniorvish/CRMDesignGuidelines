```javascript
const express = require('express');
const router = express.Router();

const Customer = require('../models/Customer');
const Task = require('../models/Task');
const Communication = require('../models/Communication');
const Report = require('../models/Report');
const Integration = require('../models/Integration');

// Customer Routes
router.get('/customer', async (req, res) => {
    const customers = await Customer.find();
    res.json(customers);
});

router.post('/customer', async (req, res) => {
    const newCustomer = new Customer(req.body);
    const savedCustomer = await newCustomer.save();
    res.json(savedCustomer);
});

// Task Routes
router.get('/task', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

router.post('/task', async (req, res) => {
    const newTask = new Task(req.body);
    const savedTask = await newTask.save();
    res.json(savedTask);
});

// Communication Routes
router.get('/communication', async (req, res) => {
    const communications = await Communication.find();
    res.json(communications);
});

router.post('/communication', async (req, res) => {
    const newCommunication = new Communication(req.body);
    const savedCommunication = await newCommunication.save();
    res.json(savedCommunication);
});

// Report Routes
router.get('/report', async (req, res) => {
    const reports = await Report.find();
    res.json(reports);
});

router.post('/report', async (req, res) => {
    const newReport = new Report(req.body);
    const savedReport = await newReport.save();
    res.json(savedReport);
});

// Integration Routes
router.get('/integration', async (req, res) => {
    const integrations = await Integration.find();
    res.json(integrations);
});

router.post('/integration', async (req, res) => {
    const newIntegration = new Integration(req.body);
    const savedIntegration = await newIntegration.save();
    res.json(savedIntegration);
});

module.exports = router;
```