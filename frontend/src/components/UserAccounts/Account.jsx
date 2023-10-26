/**
 * Renders an account component with the account title, balance, and description.
 * @param {Object} props - The component props.
 * @param {string} props.title - The account title.
 * @param {number} props.accountBalance - The account balance.
 * @param {string} props.description - The account description.
 * @returns {JSX.Element} The account component.
 */
export default function Account({ title, accountBalance, description }) {
    /**
     * Formats the account balance as a currency string using the en-US locale.
     * @param {number} accountBalance - The account balance to format.
     * @returns {string} The formatted account balance as a currency string.
     */
    const accountAmount = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(accountBalance);

    /**
     * Handles the click event on the account component and displays an alert with the account information.
     * @function
     * @returns {void}
     */
    const handleClick = () => {
        alert(
            `Account: ${title}\nBalance: ${accountAmount}\nDescription: ${description}`
        );
    };

    return (
        <article className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{accountAmount}</p>
                <p className="account-amount-description">{description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button
                    className="transaction-button"
                    type="button"
                    onClick={handleClick}
                >
                    View transactions
                </button>
            </div>
        </article>
    );
}
