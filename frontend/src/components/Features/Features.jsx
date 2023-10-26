import FeaturesItem from "./FeaturesItem";
import IconChat from "../../assets/icon-chat.png";
import IconMoney from "../../assets/icon-money.png";
import IconSecurity from "../../assets/icon-security.png";

export default function Features() {
    const features = [
        {
            title: "You are our #1 priority",
            description:
                "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
            iconSource: IconChat,
            iconAlt: "Chat Icon",
        },
        {
            title: "More savings means higher rates",
            description:
                "The more you save with us, the higher your interest rate will be!",
            iconSource: IconMoney,
            iconAlt: "Money Icon",
        },
        {
            title: "Security you can trust",
            description:
                "We use top of the line encryption to make sure your data and money is always safe.",
            iconSource: IconSecurity,
            iconAlt: "Security Icon",
        },
    ];
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {features.map((feature, index) => (
                <FeaturesItem
                    key={`feature-${index}`}
                    title={feature.title}
                    description={feature.description}
                    iconSource={feature.iconSource}
                    iconAlt={feature.iconAlt}
                />
            ))}
        </section>
    );
}
