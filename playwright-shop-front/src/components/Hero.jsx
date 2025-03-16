import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="flex flex-col justify-center items-center text-center h-screen w-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <h2 className="text-5xl font-bold mb-6 mt-16">Witamy w Playwright Shop!</h2>
            <p className="text-lg mb-8 max-w-2xl">Testuj swoją aplikację e-commerce z Playwright!</p>
            <div className="flex space-x-4">
                <Link to="/login" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">Zaloguj się</Link>
                <Link to="/register" className="bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition">Zarejestruj się</Link>
            </div>
        </section>
    );
}

export default Hero;