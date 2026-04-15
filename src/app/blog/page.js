import Blog from "./MainBlogPage";

export const metadata = {
    title: 'Latest Insights & Expert Updates | JEF UAE Blog on Electrical Solutions',
    description:
        "Stay informed with JEF UAE's latest blog posts on electrical safety, grounding solutions, and industry trends. Expert insights to enhance your knowledge.",
    keywords:
        'JEF UAE blog, electrical safety, grounding solutions, industry trends, expert insights, electrical engineering, safety standards',
    alternates: {
        canonical: 'https://www.jefuae.com/blog',
    },
    openGraph: {
        url: 'https://www.jefuae.com/blog',
        description:
            "Stay informed with JEF UAE's latest blog posts on electrical safety, grounding solutions, and industry trends. Expert insights to enhance your knowledge.",
        siteName: 'Latest Insights & Expert Updates | JEF UAE Blog on Electrical Solutions',
    },
}

export default function BlogPage() {
    return (
        <Blog />
    );
}