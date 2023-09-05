import React from 'react';
import { useNavigate } from 'react-router-dom';

const TaskCard = ({ task }) => {
    const navigate = useNavigate()
    return (
        <div style={styles.tarjetasDeTareas} onClick={() => navigate(`/tasks/${task.id}`)}>
            <p>{task.title}</p>
            <p>{task.description}</p>
            <p>{task.done === true ? "Esta hecha" : "No esta hecha"}</p>
        </div>
    );
};

export default TaskCard;

const styles = {
    tarjetasDeTareas: {
        padding: "10px",
        background: "orange",
        color: "black",
        marginBottom: "10px",
        width: "30%",
    }
}