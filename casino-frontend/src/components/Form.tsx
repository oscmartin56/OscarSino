import { useState } from 'react';
import axios from 'axios';
import Button from './Button';

function Form() {


    const [formData, setFormData] = useState({
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

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-y-20 pb-10 mt-10 gap-x-8 px-10'>
                    <div className='flex flex-col'>
                        <label style={{ fontFamily: 'Permanent Marker' }} className='text-blue-200 text-left text-xl'>Nombre: </label>
                        <input className="border-1 rounded-md border-gray-400 text-gray-200 w-full h-8 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none" type="text" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div className='flex flex-col'>
                        <label style={{ fontFamily: 'Permanent Marker' }} className='text-blue-200 text-left text-xl'>Dni: </label>
                        <input className="border-1 rounded-md border-gray-400 text-gray-200 w-full h-8 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none" type="text" maxLength={9} onChange={(e) => setFormData({ ...formData, dni: e.target.value })}></input>

                    </div>
                    <div className='flex flex-col'>
                        <label style={{ fontFamily: 'Permanent Marker' }} className='text-blue-200 text-left text-xl'>Correo Electrónico: </label>
                        <input className="border-1 rounded-md border-gray-400 text-gray-200 w-full h-8 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none" type="email" maxLength={200} onChange={(e) => setFormData({ ...formData, email: e.target.value })}></input>

                    </div>
                    <div className='flex flex-col'>
                        <label style={{ fontFamily: 'Permanent Marker' }} className='text-blue-200 text-left text-xl'>Contraseña: </label>
                        <input className="border-1 rounded-md border-gray-400 text-gray-200 w-full h-8 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none" type="password" maxLength={40} onChange={(e) => setFormData({ ...formData, password: e.target.value })}></input>

                    </div>
                </div>
                <div className="mt-10">
                    <Button type="submit">Registrarse</Button>
                </div>
            </form>
        </>
    );
}

export default Form;