import { Outlet } from "react-router";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer/Footer";

export function DefaultLayout() {
    return (
        <div className="body">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}