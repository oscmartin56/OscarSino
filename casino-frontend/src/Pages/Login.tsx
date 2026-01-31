import { Link } from "react-router-dom";
function Login() {


    return (
        <>
            <div className="bg-blue-100 min-h-screen">
                <h1 >INICIAR SESIÓN</h1>
                <Link
                    to="/"
                    className="mt-8 text-blue-400 hover:text-blue-300 text-20">
                    Link hacia Register
                </Link>
            </div>


        </>
    );
}

export default Login;