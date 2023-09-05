import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { creatNewTask, deleteTask, getOneTask, updateTask } from '../api/task.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const TaskFormPage = () => {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm()
    const navigate = useNavigate()
    const params = useParams()

    console.log(params);

    const submit = async (data) => {
        if (params.id) {
            await updateTask(params.id, data)
        } else {
            await creatNewTask(data);
            toast.success('Tarea creada', {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            })
        }
        navigate("/")
    }

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                console.log("obteninedo datos");
                const { data } = await getOneTask(params.id);
                setValue("title", data.title);
                setValue("description", data.description)
            }
        }
        loadTask();
    }, [])

    return (
        <div>
            <form onSubmit={handleSubmit(submit)} style={styles.formStyle}>
                <input {...register("title", { required: true })} type="text" placeholder='title' />
                <textarea {...register("description", { required: true })} rows="3" placeholder='description'></textarea>
                <button type='submit' style={styles.formSaveButton}>save</button>
            </form>
            {params.id && (<button onClick={async () => {
                const accept = window.confirm("¿estás seguo de querer eliminar?")
                if (accept) {
                    await deleteTask(params.id)
                    navigate("/tasks")
                }
            }}>Delete</button>)}
        </div>
    );
};

export default TaskFormPage;

const styles = {
    formStyle: {
        display: "flex",
        flexDirection: "column",
        border: "red solid 1px",
        gap: "10px",
        width: "40%",
        marginTop: "30px"
    },
    formSaveButton: {
        width: "50%",
        alignSelf: "center"
    }
}