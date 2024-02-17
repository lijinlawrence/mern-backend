const { default: mongoose } = require("mongoose");
const taskModel = require("../models/taskSchema");

const createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const task = await taskModel.create({
      title: title,
      description: description,
    });
    res.status(200).json(task);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const getTask = async (req, res) => {
  try {
    const task = await taskModel.find({});
    res.status(200).json(task);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const getSingleTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "task not found" });
  }

  try {
    const task = await taskModel.findById(id);
    res.status(200).json(task);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "task not found" });
  }

  try {
    const task = await taskModel.findByIdAndUpdate(
      {
        _id: id,
      },
      { ...req.body }
    );
    res.status(200).json(task);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const deleteTask = async (req,res)=>{
    const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "task not found" });
  }

  try{
   const task = await taskModel.findByIdAndDelete(id)
    res.status(200).json(task)
  }catch (e){
     res.status(400).json({error:e.message})
  }
}

module.exports = { createTask, getTask, getSingleTask, updateTask,deleteTask };
