const express = require('express')
const router = express.Router()
const  {createTask,getTask,getSingleTask,updateTask,deleteTask}=require('../controllers/taskControler')

//  @post

router.post('/',createTask)

// get
router.get('/',getTask)

// get by id
router.get('/:id',getSingleTask)

// updateTask
router.patch('/:id',updateTask)

// deleteTask
router.delete('/:id',deleteTask)

module.exports = router