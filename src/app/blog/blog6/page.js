

const Blog6 = () => {

    return (
        <>
            <section className="flex py-24 overflow-hidden flex-col bg-neutral-100">
                <div className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full">
                    <div className="flex  flex-col pt-[25rem] 2xl:pt-0 w-full 2xl:pb-[34rem] max-md:pb-24 max-md:max-w-full">
                        <img loading="lazy" src="/BlogImg/Blog 6.png" className="object-cover h-screen absolute inset-0 size-full" alt="" />
                        <div className="flex relative flex-wrap gap-5 justify-between items-center self-center w-full max-w-[1528px] max-md:max-w-full" />
                    </div>
                </div>
                <div className="flex overflow-hidden z-10 flex-col items-start self-center px-9 py-10 mt-0 max-w-full bg-white w-[1024px] max-md:px-5 max-md:mt-0">
                    <h1 className="self-stretch text-xl lg:text-3xl font-bold leading-10 text-red-700 uppercase max-md:max-w-full">
                        Types of Earthing -  Type A and Type B
                    </h1>
                    <p className="mt-10 text-base font-semibold leading-6 text-[#312D2D] max-md:max-w-full">
                        What are the Types of Earthing/Grounding Systems?
                    </p>
                    <p className="mt-10 text-base font-light leading-6 text-[#312D2D] max-md:max-w-full">
                        There are various types of Earthing but two most popular types of Earthing/Grounding systems are “TYPE A” also known as TT Earthing and “TYPE B” also known as TN-C-S Earthing.
                    </p>
                    <div className='w-full flex flex-col gap-10 mt-10'>
                        <div className="w-full flex flex-col gap-6 text-[#312D2D]">
                            <div className='text-base font-semibold leading-6 text-[#312D2D]'>Type A Earthing (TT Earthing):</div>
                            <li className='text-base font-light leading-6 text-[#312D2D] ml-6'>Type A earthing is a conventional grounding approach. In this system, each electrical equipment is directly connected to an earth electrode, often using ground rods or plates buried in the ground.</li>
                            <li className='text-base font-light leading-6 text-[#312D2D] ml-6'>It is suitable for locations with low fault currents and provides safety and functional grounding, commonly used in residential and commercial settings.</li>
                        </div>
                        <div className="w-full flex flex-col gap-6 text-[#312D2D]">
                            <div className='text-base font-semibold leading-6 text-[#312D2D]'>Type B Earthing (TN-C-S Earthing):</div>
                            <li className='text-base font-light leading-6 text-[#312D2D] ml-6'>Type B earthing is a more advanced grounding method. It combines Type A principles with additional measures to protect against voltage surges and transient overvoltages.</li>
                            <li className='text-base font-light leading-6 text-[#312D2D] ml-6'>In this system, the earth terminal is connected to both the supply neutral and the ground electrode.</li>
                            <li className='text-base font-light leading-6 text-[#312D2D] ml-6'>It is used in areas with high fault currents, such as critical infrastructure and industrial facilities, to provide enhanced protection against surges and transients, often resulting from lightning or equipment malfunctions.</li>
                        </div>
                        <div className="w-full flex flex-col gap-6 text-[#312D2D]">
                            <div className='text-base font-semibold leading-6 text-[#312D2D]'>Concrete Embedded Foundation Earth Electrode (Type "B" Earthing) vs. Soil Embedded Earth Electrode (Type "A" Earthing):</div>
                            <div className='text-base font-light leading-6 text-[#312D2D]'>Several factors must be considered when deciding between earth electrodes buried in concrete or in soil (Type "A" earthing). In addition to their reliable conductivity, concrete foundations are ideal for grounding because of their substantial contact area with the soil. For long-term performance, bare metal electrodes buried at least 5 cm into the concrete are recommended since they are corrosion resistant.</div>
                            <div className='text-base font-light leading-6 text-[#312D2D]'>The advantages of using concrete-embedded foundation earth electrodes during construction include:</div>
                            <li className='text-base font-light leading-6 text-[#312D2D] ml-6'><strong>Minimal Excavation:</strong> They eliminate the need for additional excavation, making them cost-effective.</li>
                            <li className='text-base font-light leading-6 text-[#312D2D] ml-6'><strong>Weather Resilience:</strong> Constructed at a suitable depth, they remain unaffected by seasonal weather conditions.</li>
                            <li className='text-base font-light leading-6 text-[#312D2D] ml-6'><strong>Effective Soil Contact:</strong> They provide efficient grounding by maintaining excellent contact with the soil.</li>
                            <li className='text-base font-light leading-6 text-[#312D2D] ml-6'><strong>Extensive Coverage:</strong> Covering most of the foundation's surface, they minimize earth electrode impedance for optimal performance.</li>
                            <li className='text-base font-light leading-6 text-[#312D2D] ml-6'><strong>Lightning Protection:</strong> They serve as a robust earthing arrangement for lightning protection.</li>
                            <li className='text-base font-light leading-6 text-[#312D2D] ml-6'><strong>Construction Site Savings: </strong>During construction, they can also serve as an earth electrode for the site's electrical installation, reducing the need for temporary electrodes.</li>
                            <li className='text-base font-light leading-6 text-[#312D2D] ml-6'><strong>Main Protective Bonding:</strong> They can serve as a foundation for the main protective bonding system, aligning with standards.</li>
                        </div>
                    </div>
                    <p className="mt-10 text-base font-light leading-6 text-[#312D2D] max-md:max-w-full">
                        In cases requiring insulated foundations, alternative measures can be considered, such as additional concrete-embedded foundation earth electrodes below isolated foundations, ring earthing, or, as a last resort, Type A earth rods.
                    </p>
                    <p className="mt-6 text-base font-light leading-6 text-[#312D2D] max-md:max-w-full">
                        To adhere to the "Global Earthing Concept" described in IS 3043 - Code of Practice for Earthing, it is crucial to connect concrete-embedded foundation earth electrodes from different parts of a single foundation using suitable earthing conductors. For corrosion resistance, use only stainless-steel electrodes directly installed from the foundation concrete into the soil, avoiding hot-dip galvanized steel.
                    </p>
                    <p className="mt-6 text-base font-light leading-6 text-[#312D2D] max-md:max-w-full">
                        Before pouring concrete, a qualified individual should conduct a survey and create documentation records of the associated reinforcement. This information should be included in the overall electrical installation document to ensure compliance with safety and quality standards.
                    </p>

                    <p className="mt-12 text-base font-medium leading-6 text-[#312D2D] max-md:max-w-full">
                        Please let us know if you need further assistance or have any requirements <br /> <a href="mailto:marketing@jeftechno.com" className="text-red-700 mt-1">marketing@jeftechno.com</a>
                    </p>

                </div>
            </section>
        </>
    );
};

export default Blog6;