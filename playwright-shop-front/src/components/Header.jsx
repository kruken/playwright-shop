function Header() {
    return (
        <header className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center fixed top-0 left-0">
            <h1 className="text-2xl font-bold text-blue-600">Playwright Shop</h1>
            <nav>
                <ul className="flex space-x-6">
                    <li><a href="#" className="text-gray-700 hover:text-blue-500">Home</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-blue-500">O nas</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-blue-500">Kontakt</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
