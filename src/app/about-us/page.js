import AboutUsContent from "./AboutUsContent";

export const metadata = {
    title: "About Us | JEF UAE",
    description:
        "Learn more about JEF UAE, a leading provider of electrical, grounding, and safety solutions. Discover our commitment to innovation, quality, and customer satisfaction.",
    keywords: [
        "JEF UAE",
        "lightning protection",
        "grounding system",
        "grounding products",
        "surge protection",
        "UAE",
        "electrical safety",
        "power quality",
        "fire safety",
        "EMI EMC studies",
        "engineering solutions",
        "industrial safety"
    ],
    alternates: {
        canonical: "https://www.jefuae.com/about-us",
    },
    openGraph: {
        title: "About Us | JEF UAE",
        description:
            "Learn more about JEF UAE, a leading provider of electrical, grounding, and safety solutions. Discover our commitment to innovation, quality, and customer satisfaction.",
        url: "https://www.jefuae.com/about-us",
        siteName: "About Us | JEF UAE",
    },
};

export default function AboutUsPage() {
    return <AboutUsContent />;
}