import Form from "../components/Form";
import { Link } from "react-router-dom";

function Register() {


    return (
        <>
            <div className="flex items-start justify-center bg-gray-950 min-h-screen ">
                <div className="text-center pt-15 border-2 rounded-2xl shadow-md shadow-gray-500 border-gray-300 mt-10 md:w-160 md:h-160">
                    <h1 style={{ fontFamily: 'Krona one' }} className="text-4xl font-bold text-blue-600">REGISTRARSE</h1>
                    <Form />
                    <Link
                        to="/Login"
                        className="mt-8 text-blue-400 hover:text-blue-300 text-20"
                    >
                        Pincha aquí para acceder al Dashboard
                    </Link>
                </div>
            </div>
        </>
    );
}


export default Register;