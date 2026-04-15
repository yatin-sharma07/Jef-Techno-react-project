

const Blog2 = () => {

    return (
        <>
            <section className="flex py-24 overflow-hidden flex-col bg-neutral-100">
                <div className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full">
                    <div className="flex  flex-col pt-[25rem] 2xl:pt-0 w-full 2xl:pb-[34rem] max-md:pb-24 max-md:max-w-full">
                        <img loading="lazy" src="/BlogImg/Blog 2.png" className="object-cover h-screen absolute inset-0 size-full" alt="" />
                        <div className="flex relative flex-wrap gap-5 justify-between items-center self-center w-full max-w-[1528px] max-md:max-w-full" />
                    </div>
                </div>
                <div className="flex overflow-hidden z-10 flex-col items-start self-center px-9 py-10 mt-0 max-w-full bg-white w-[1024px] max-md:px-5 max-md:mt-0">
                    <h1 className="self-stretch text-xl lg:text-3xl font-bold leading-10 text-red-700 uppercase max-md:max-w-full">
                        EMI BETWEEN OVERHEAD POWER LINES & BURIED PIPELINES
                    </h1>
                    <p className="mt-10 text-base font-light leading-6 text-[#312D2D] max-md:max-w-full">
                        The Analysis of electromagnetic interference between high-voltage overhead power transmission lines and nearby gas or oil pipeline has been a topic of growing interest for many years. When pipelines share a row with power lines, they might experience significant induced voltages and currents owing to alternating current interference. The induced voltage on the pipeline can be dangerous for an operator to contact, and AC discharge can cause pipe corrosion.
                    </p>
                    <p className="mt-6 text-base font-light leading-6 text-[#312D2D] max-md:max-w-full">
                        The three basic causes of AC interference are inductive, conductive, and capacitive coupling.
                    </p>
                    <div className="w-full flex flex-col gap-6 text-[#312D2D] mt-10">
                        <div className='text-base font-light leading-6 text-[#312D2D]'><strong>Inductive Coupling:</strong> Voltages are induced in nearby metallic conductors by magnetic coupling with high voltage lines, which results in currents flowing in a conducting pipeline and the existence of voltages between it and the surrounding soil. The time-varying magnetic field produced by the transmission line induces voltage and currents on the pipeline.</div>
                        <div className='text-base font-light leading-6 text-[#312D2D]'><strong>Conductive Coupling:</strong> When a ground fault occurs in HV Power Lines the current flowing through the grounding grid produce a potential rise on both the grounding grid and the neighboring soil concerning remote earth. If the pipeline goes through the “zone of influence” of this potential rise, then a high difference in the electrical potential can appear across the coating of the pipeline.</div>
                        <div className='text-base font-light leading-6 text-[#312D2D]'>
                            <strong>Capacitive Coupling:</strong> Affects only aerial pipelines situated in the proximity of HV Power Lines. It occurs due to the capacitance between the line and the pipeline. For underground pipelines, the effect of capacitive coupling may not be considered, because of the screening effect of the earth against electric fields.
                        </div>
                    </div>
                    <p className="mt-10 text-base font-light leading-6 text-[#312D2D] max-md:max-w-full">
                        Pipelines can suffer the potential loss of metal and resultant risk of product leakage due to AC corrosion. It is crucial to understand the interaction between the transmission lines (power system), pipeline, and cathodic protection systems to assess the impact of AC Interference.
                    </p>
                    <p className="mt-6 text-base font-light leading-6 text-[#312D2D] max-md:max-w-full">
                        A comprehensive study of the system through field data collection and software modeling can provide solutions that can help limit AC corrosion and achieve safety.
                    </p>
                    <p className="mt-6 text-base font-light leading-6 text-[#312D2D] max-md:max-w-full">
                        The study will take into account various factors including soil structure, transmission line parameters, pipeline data, and existing cathodic protection measures to assess problem areas and design cost-effective mitigation solutions.
                    </p>
                    <p className="mt-12 text-base font-medium leading-6 text-[#312D2D] max-md:max-w-full">
                        For more information on how to keep your premises fire safe, please write to us at  <br /> <a href="mailto:marketing@jeftechno.com" className="text-red-700 mt-1">marketing@jeftechno.com</a>
                    </p>
                </div>
            </section>
        </>
    );
};

export default Blog2;