import { useState } from 'react';
import axios from 'axios';

function Form(){


    const [formData,setFormData] = useState({
        name: '',
        dni: '',
        email: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = import.meta.env.VITE_API_URL;
        try {
            const response = await axios.post(`${apiUrl}/users`, formData);

            console.log(response.data);

        } catch (error) {
            if (error.response) {
                alert("Errores de validación");
            } else {
                console.error("Error de conexión");
            }
        }
    };

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>Nombre: </label>
            <input type="text" onChange={(e) => setFormData({...formData, name: e.target.value})} />         

            <label>DNI: </label>
            <input type="text" maxLength={9} onChange={(e) => setFormData({...formData, dni: e.target.value})}></input>

            <label>Correo Electrónico: </label>
            <input type="email" maxLength={200} onChange={(e) => setFormData({...formData, email: e.target.value})}></input>

            <label>Contraseña: </label>
            <input type="password" maxLength={40} onChange={(e) => setFormData({...formData, password: e.target.value})}></input>
            
            <button type="submit">Registrarse</button>
        </form>
        </>
    );
}

export default Form;