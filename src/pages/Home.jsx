import AppFooter from "../components/Footer";
import AppHeader from "../components/Header";
import ScrollToTop from "../components/Header/scrollToTop";
import PageContent from "../components/PageContent";

function Home() {
    return (
        <div>
            <AppHeader />
            <ScrollToTop />
            <PageContent />
            <AppFooter />
        </div>
    )
}

export default Home;