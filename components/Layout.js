import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    const navURLs = [
        ['Home', '/'],
        ['Team', '/team'],
        ['About', '/about'],
        ['Why Wade', '/why-wade'],
        ['Contact', '/contact']
    ]

    return (
        <>
            <Header navURLs={navURLs} />
            <main>{ children }</main>
            <Footer navURLs={navURLs} />
        </>
    )
}

export default Layout;