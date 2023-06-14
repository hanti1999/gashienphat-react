import './App.css'
import AppFooter from './components/Footer';
import AppHeader from './components/Header';
import ScrollToTop from './components/Header/scrollToTop';

function App() {
    return (
        <div className='App'>
            <AppHeader />
            <ScrollToTop />
            <AppFooter />
        </div>
    )
}

export default App
