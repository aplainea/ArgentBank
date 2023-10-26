/**
 * Renders a feature item with a title, description and icon.
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the feature item.
 * @param {string} props.description - The description of the feature item.
 * @param {string} props.iconSource - The source URL of the icon for the feature item.
 * @param {string} props.iconAlt - The alt text for the icon of the feature item.
 * @returns {JSX.Element} - The JSX element representing the feature item.
 */
export default function FeatureItem({
    title,
    description,
    iconSource,
    iconAlt,
}) {
    return (
        <article className="feature-item">
            <img
                src={iconSource}
                alt={iconAlt}
                className="feature-icon"
                width={100}
                height={100}
            />
            <h3 className="feature-item-title">{title}</h3>
            <p>{description}</p>
        </article>
    );
}
