const router = require('express').Router();

const { addTasks, getAllTasks, updateTasks, deleteTasks } = require('../controllers/taskControllers');
const { isValidObjectId } = require('../middlewares/isValidObjectId');

// Create New Task Route
router.post('/', addTasks);

// Show All the Task Route
router.get('/', getAllTasks);

// Update Your Task Route
router.put('/:id', isValidObjectId, updateTasks);

// Delete Your Task Route
router.delete('/:id', isValidObjectId, deleteTasks);

module.exports = router;