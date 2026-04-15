import ContactUs from '@/components/ContactUs';

export const metadata = {
    title: 'Leadership Team | JEF UAE',
    description:
        "JEF UAE business, electrical solutions, safety systems, engineering services, industry solutions, electrical services, innovative engineerin.",
    keywords:
        "JEF UAE business, electrical solutions, safety systems, engineering services, industry solutions, electrical services, innovative engineerin",
    openGraph: {
        url: 'https://www.jefuae.com/leadership-team',
        siteName: 'Leadership Team | JEF UAE',
        description:
            "Meet the visionary leaders driving JEF UAE's success. Our leadership team brings expertise and innovation to deliver top-tier electrical and safety solutions",
    },
    alternates: {
        canonical: 'https://www.jefuae.com/leadership-team',
    },
}

export default function Team() {

    const navItems = [
        { label: 'HOME', isActive: true },
        { label: 'About Us', isActive: true },
        { label: 'Jef Leadership Page', isActive: false },
    ];

    const Leaders = [
        {
            id: 1,
            name: "PRASHANTH BG",
            title: "CHAIRMAN & MANAGING DIRECTOR",
            image: "./LeadershipTeamImg/PrashantBG.png",
            variant: "red"
        },
        {
            id: 2,
            name: "BADRINARAYANAN THIRUMALAI",
            title: "CEO - JEF PRODUCTS & EMI",
            image: "./LeadershipTeamImg/BADRINARAYANAN.png",
            variant: "red"
        },
        {
            id: 3,
            name: "PK KASINATHAN",
            title: "CEO - JEF CONSULTING",
            image: "./LeadershipTeamImg/KASINATHAN.png",
            variant: "red"
        },
        {
            id: 4,
            name: "AS RAVISHANKAR",
            title: "SBU HEAD - TECHNICAL SERVICES",
            image: "./LeadershipTeamImg/RAVISHANKAR.png",
            variant: "red"
        },
        // {
        //   id: 5,
        //   name: "Dr Mahmoud Alyamani",
        //   title: "Health and Well-Being Sector Head",
        //   image: "./LeadershipTeamImg/mahmoud-alyamani-v3.png",
        //   variant: "red"
        // },
        // {
        //   id: 6,
        //   name: "Nader Ashoor",
        //   title: "Chief Financial Officer", 
        //   image: "./LeadershipTeamImg/nader-ashoor.png",
        //   variant: "red"
        // },
        // {
        //   id: 7,
        //   name: "Joseph Bradley",
        //   title: "TONOMUS CEO",
        //   image: "./LeadershipTeamImg/Bradley.png",
        //   variant: "red"
        // },
        // {
        //   id: 8,
        //   name: "Dr Richard Bush",
        //   title: "Chief Environment Officer",
        //   image: "./LeadershipTeamImg/Richard-Bush.png",
        //   variant: "red"
        // },
        // {
        //   id: 9,
        //   name: "Niall Gibbons",
        //   title: "Head of Tourism",
        //   image: "./LeadershipTeamImg/Niall-Gibbons.png",
        //   variant: "red"
        // },
        // {
        //   id: 10,
        //   name: "Denis Hickey",
        //   title: "Chief Development Officer, THE LINE",
        //   image: "./LeadershipTeamImg/Hickey.png",
        //   variant: "red"
        // },
        // {
        //   id: 11,
        //   name: "Michael Lynch",
        //   title: "Entertainment & Culture Sector Head",
        //   image: "./LeadershipTeamImg/michael-lynch-bnw.png",
        //   variant: "red"
        // },
        // {
        //   id: 12,
        //   name: "Dr Paul Marshall",
        //   title: "Head of Nature Region",
        //   image: "./LeadershipTeamImg/Paul-Marshall_AYF03551.png",
        //   variant: "red"
        // },
        // {
        //   id: 13,
        //   name: "Majid Mufti",
        //   title: "JEF Investment Fund CEO",
        //   image: "./LeadershipTeamImg/Majid-Mufti.png",
        //   variant: "red"
        // },
        // {
        //   id: 14,
        //   name: "Jan Paterson",
        //   title: "Head of Sport",
        //   image: "./LeadershipTeamImg/Paterson.png",
        //   variant: "red"
        // },
        // {
        //   id: 15,
        //   name: "Roberto Penno",
        //   title: "Chief Projects Officer",
        //   image: "./LeadershipTeamImg/roberto-penno-v2.png",
        //   variant: "red"
        // },
        // {
        //   id: 16,
        //   name: "Stefan Ricketts",
        //   title: "Chief Legal Officer",
        //   image: "./LeadershipTeamImg/stefan-ricketts-v2.png",
        //   variant: "red"
        // },
        // {
        //   id: 17,
        //   name: "Peter Terium",
        //   title: "ENOWA CEO",
        //   image: "./LeadershipTeamImg/Terium.png",
        //   variant: "red"
        // },
        // {
        //   id: 18,
        //   name: "Vishal Wanchoo",
        //   title: "OXAGON CEO",
        //   image: "./LeadershipTeamImg/Vishal-Wanchoo_AYF02431-1.png",
        //   variant: "red"
        // }
    ];

    return (
        <>
            <main className="flex flex-col min-h-screen bg-neutral-100">
                <header className="relative h-screen overflow-hidden">
                    <img
                        src="./LeadershipTeamImg/JEF Leadership image.png"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover z-10"
                        aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50" />
                    <div className="relative z-10 lg:mx-[5%] p-3 h-full flex flex-col justify-end pb-16">
                        <h1 className="text-white text-3xl lg:text-5xl font-bold tracking-wider">
                            JEF LEADERSHIP TEAM
                        </h1>
                    </div>
                </header>

                <nav className="flex flex-col justify-center py-6 px-24 w-full bg-zinc-800 min-h-[64px] max-md:px-5 max-md:max-w-full">
                    <div className="flex w-full max-md:max-w-full">
                        <div className="flex items-center h-full min-w-[240px]">
                            {navItems.map((item, index) => (
                                <div key={index} className="flex items-center self-stretch my-auto">
                                    <div className={`self-stretch my-auto text-xs tracking-wide leading-none uppercase whitespace-nowrap ${item.isActive ? 'text-red-700' : 'text-neutral-300'}`}>
                                        {item.label}
                                    </div>
                                    {item.isActive && (
                                        <div className="flex flex-col self-stretch px-2.5 my-auto w-[27px]">
                                            <div className="flex items-center w-[7px]">
                                                <div className="flex flex-col justify-center self-stretch my-auto min-h-[7px] w-[7px]">
                                                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/98403646f26f29fd8d19e6e57b2e9f8b5de2f748795475a0d9039378b1786404?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="" className="object-contain flex-1 w-full aspect-square" />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </nav>

                <section className="container mx-auto px-4 py-16">
                    {/* <div className="max-w-sm mb-16">
                <div className="relative">
                    <input
                    type="search"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded text-zinc-900 placeholder-zinc-900"
                    aria-label="Search leaders"
                    />
                    <svg
                    className="absolute right-5 top-1/2 transform -translate-y-1/2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                    </svg>
                </div>
                </div> */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {Leaders.map((leader) => (
                            <article key={leader.id} className="flex flex-col">
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-full grayscale transition duration-500 hover:grayscale-0 aspect-square object-cover"
                                />
                                <h2 className="mt-6 text-xl text-zinc-900 font-medium">
                                    {leader.name}
                                </h2>
                                <p className={`mt-4 text-sm ${leader.variant === 'red' ? 'text-red-700' : 'text-yellow-600'
                                    }`}>
                                    {leader.title}
                                </p>
                                <button
                                    className="mt-8 w-6 h-6 hidden"
                                    aria-label={`View ${leader.name}'s profile`}
                                >
                                    {/* <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="w-full h-full"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                        </svg> */}
                                    <img src="./LeadershipTeamImg/Arrow.png" alt="Arrow" />
                                </button>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
            <ContactUs />
        </>
    );
}