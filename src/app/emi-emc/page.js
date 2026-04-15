import EmiEmc from "./emiemc";

export const metadata = {
    title: 'EMI/EMC Testing Services: Ensuring Electrical System Reliability',
    description: 'JEF UAE offers comprehensive EMI/EMC testing to enhance the performance and compliance of electrical systems, ensuring operational continuity and equipment protection.',
    keywords: 'EMI testing, EMC testing, electrical system reliability, electromagnetic interference, electromagnetic compatibility, JEF UAE, equipment protection, operational continuity, electrical compliance, system performance',
    alternates: {
        canonical: 'https://www.jefuae.com/emi-emc',
    },
    openGraph: {
        url: 'https://www.jefuae.com/emi-emc',
        description: 'JEF UAE offers comprehensive EMI/EMC testing to enhance the performance and compliance of electrical systems, ensuring operational continuity and equipment protection.',
        siteName: 'EMI/EMC Testing Services: Ensuring Electrical System Reliability',
    },
}

export default function Page() {
    return (
        <>
            <EmiEmc />
        </>
    );
}  