import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function App() {
    return (
        <>
            <Provider store={store}>
                <main className="main">
                    <Header />
                    <Outlet />
                </main>
                <Footer />
            </Provider>
        </>
    );
}
