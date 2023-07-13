const express = require('express');
const router = express.Router();
const {
    getAllTasks
    ,getAllTasksById
    ,createNewTask
    ,updateTasksById
    , deleteAnyTaskById
} = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createNewTask);
router.route('/:id').get(getAllTasksById).patch(updateTasksById).delete(deleteAnyTaskById);

module.exports = router;