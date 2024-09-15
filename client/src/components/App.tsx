import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage';
import AboutPage from './AboutPage';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <header>
                    Chat App
                </header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </nav>
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="/about" element={<AboutPage/>} />
                    </Routes>
                </main>
                <footer>
                    This is a footer
                </footer>
            </BrowserRouter>
        </div>
    )
}

export default App;
