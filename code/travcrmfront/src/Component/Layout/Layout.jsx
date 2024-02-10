import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
    return (
        <div className="" >
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout