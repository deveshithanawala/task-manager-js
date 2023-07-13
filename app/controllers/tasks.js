const Task = require('../models/task')

const getAllTasks = async (req,res)=>{
    try{
        const getTasks = await Task.find({});
        res.status(200).json({getTasks});

    }catch(error){
        res.status(500).json({msg:error});
    } 
}

const getAllTasksById = async (req,res)=>{
    try{
        const {id:taskId}= req.params
        const getAllTasksById = await Task.findOne({_id:taskId});
        if(!getAllTasksById){
            return res.status(404).json({msg:`No task found for id ${taskId}`})
        }
        res.status(200).json({getAllTasksById});
    }
    catch(error){
        res.status(500).json({msg:error});
    }

}


const createNewTask = async (req,res)=>{
    try{
        const task = await Task.create(req.body);   
        res.status(201).json(task);
    }
    catch(error){
        res.status(500).json({msg:error})
    }
    
}

const deleteAnyTaskById = async (req,res)=>{
    try{

        const{id:taskId} = req.params
        const deleteAnyTaskById = await Task.findOneAndDelete({_id:taskId})
        if(!deleteAnyTaskById){
            return res.status(404).json({msg:`The task with this ${taskId} is not found`})
        }
        res.status(200).json(deleteAnyTaskById);
    }catch(error){
        res.status(500).json({msg:error})
    }
   
}
const updateTasksById = async (req,res) => {
    try{
     const {id:taskId} = req.params
     const updateTask = await Task.findByIdAndUpdate({_id:taskId},req.body,{
        new:true,
        runValidators: true
     });
     if(!updateTask){
        return res.status(404).json({msg:`Task with ${taskId} not found`})
     }
     res.status(200).json(updateTask);
    }
    catch(error){
     res.status(500).json({msg:error});
    }
 }

module.exports = {
    getAllTasks,
    getAllTasksById,
    createNewTask,
    updateTasksById,
    deleteAnyTaskById

}