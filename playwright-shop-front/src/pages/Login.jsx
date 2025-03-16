import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen w-screen bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg text-center">
                <h2 className="text-3xl font-bold mb-6">Zaloguj się</h2>
                <form>
                    <input type="email" placeholder="Email" className="w-full px-4 py-3 mb-4 border rounded-md" />
                    <input type="password" placeholder="Hasło" className="w-full px-4 py-3 mb-4 border rounded-md" />
                    <button className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition">Zaloguj się</button>
                </form>
                <p className="mt-6 text-gray-600">
                    Nie masz konta? <Link to="/register" className="text-blue-500 hover:underline">Zarejestruj się</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;