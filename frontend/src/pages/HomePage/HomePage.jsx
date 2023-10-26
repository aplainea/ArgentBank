import Features from "../../components/Features/Features";

/**
 * Renders the home page of Argent Bank website.
 * @returns {JSX.Element} The home page component.
 */
export default function HomePage() {
    return (
        <div className="homepage">
            <div className="hero">
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">
                        Open a savings account with Argent Bank today!
                    </p>
                </section>
            </div>
            <Features />
        </div>
    );
}
