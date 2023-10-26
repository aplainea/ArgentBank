import { NavLink } from "react-router-dom";

export default function ErrorPage() {
    return (
        <main className="main error-page">
            <h1>Page not found</h1>
            <NavLink to="/">Return to ArgentBank home page</NavLink>
        </main>
    );
}
