import { Link } from "react-router-dom";

function Register() {
    return (
        <div className="flex items-center justify-center min-h-screen w-screen bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg text-center">
                <h2 className="text-3xl font-bold mb-6">Zarejestruj się</h2>
                <form>
                    <input type="text" placeholder="Imię" className="w-full px-4 py-3 mb-4 border rounded-md" />
                    <input type="email" placeholder="Email" className="w-full px-4 py-3 mb-4 border rounded-md" />
                    <input type="password" placeholder="Hasło" className="w-full px-4 py-3 mb-4 border rounded-md" />
                    <button className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition">Zarejestruj się</button>
                </form>
                <p className="mt-6 text-gray-600">
                    Masz już konto? <Link to="/login" className="text-blue-500 hover:underline">Zaloguj się</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
