import './App.css'
import AppFooter from './components/Footer'
import AppHeader from './components/Header'
import ScrollToTop from './components/Header/scrollToTop'
// import SignIn from './components/Login'
import PageContent from './components/PageContent'

function App() {
  return (
    <div className='App'>
      <AppHeader />
      <ScrollToTop />
      <PageContent />
      <AppFooter />
    </div>
  )
}

export default App
