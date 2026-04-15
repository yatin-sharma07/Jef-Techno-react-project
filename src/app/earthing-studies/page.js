import EarthingStudiesContent from "./EarthingStudiesContent";

export const metadata = {
    title: 'Earthing Studies: Exploring Benefits & Research | Jef UAE',
    description: 'Discover the benefits of earthing with scientific studies and insights at Jef UAE.',
    keywords: 'JEarthing studies, benefits of earthing, scientific research, grounding, Jef UAE, health benefits, earthing science',
    alternates: {
        canonical: 'https://www.jefuae.com/earthing-studies',
    },
    openGraph: {
        url: 'https://www.jefuae.com/earthing-studies',
        description: 'Discover the benefits of earthing with scientific studies and insights at Jef UAE.',
        siteName: 'Earthing Studies: Exploring Benefits & Research | Jef UAE',
    },
}

export default function EarthingStudiesPage() {
    return (
        <>
            <EarthingStudiesContent />
        </>
    )
}