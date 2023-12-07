import React from 'react'
import hero_video from "../assets/hero.mp4"
import logo from "../assets/logo.png";
import easeus from "../assets/easeus.png";
import { useState } from 'react';

const images = [
    { id: 1, src: "./images/1.jpg" },
    { id: 2, src: "./images/2.jpg" },
    { id: 3, src: "./images/3.jpg" },
    { id: 4, src: "./images/4.jpg" },
    { id: 5, src: "./images/5.jpg" }
]

const clientele = [
    { id: 1, src: "./clientele/1.png" },
    { id: 2, src: "./clientele/2.png" },
    { id: 3, src: "./clientele/3.png" },
    { id: 4, src: "./clientele/4.png" },
    { id: 5, src: "./clientele/5.png" },
    { id: 6, src: "./clientele/5.png" }
]

const services = [
    {
        id: "webDesign",
        info: {
            keywords: ["Landing", "Brochure Site", "E-commerce", "Portfolio"],
            desc: "We create world-class websites using modern design practices. Mobile-first websites and web experiences are essential to the success of your web project. While maintaining bespoke originality, our team will focus on responsive design and optimize your website for any device and interface. Your new website will attract desirable target audiences, boost engagement, drive sales, and increase the brand value of your business."
        }
    },

    {
        id: "branding",
        info: {
            keywords: ["Corporate", "Beauty", "Re-Branding"],
            desc: "Our branding team will excel at presenting your business in its best light. Whether you’re looking to attract a new set of eyes, rekindle an old client base, or simply refine your business’s identity - our creatives will formulate the optimal corporate identity, collateral designs, and brand guidelines unique to your company’s needs. Armed with your new bespoke brand - you will now be able to captivate engaged new audiences and capitalize on your company’s full potential."

        }
    },

    {
        id: "uiUx",
        info: {
            keywords: ["Color", "Branding", "Ui"],
            desc: "Our innovative UI/UX team will create the optimal user-centered UI design with smart UX for your project. Having both startup and enterprise experience, our designers consider differing functionality and audience demographics when designing a pixel-perfect screen for each unique client challenge. Following an existing brand guideline or a custom component library, our team will deliver a sleek, clean UI for any complex interface use case."
        }
    },

    {
        id: "packagingDesign",
        info: {
            keywords: ["Consumer GoodPackaging", "Merchandise Packaging", "Product Packaging"],
            desc: "Experienced with top-grade packaging design for a wide range of products from consumer goods to startup ideas. Your packaging design will exceed all expectations with fresh yet pragmatic design ideas realistic to produce by the creatives at DD.NYC®. Packaging design is what makes us fall in love with some of our favorite products. Make yours a favorite."
        }
    }
]

const Home = () => {
    const [info, setInfo] = useState(services[0].info)
    const [active, setActive] = useState("webDesign")

    const changeInfo = (value) => {
        // console.log(value)

        for (let i = 0; i < [services.length]; i++) {
            if (value === services[i].id) {
                // console.log(i)
                setInfo(services[i].info)
            }
        }

        // console.log(desc)
    }

    return (
        <>
            <section className="relative">
                {/* <div className="absolute flex justify-center items-center z-50 border-4">
                    <h1 className="text-white uppercase text-[1rem] md:text-[1.5rem] tracking-[2rem] font-thin">create better</h1>
                </div> */}

                <div className='h-screen w-screen flex justify-center items-center absolute z-10 text-center'>
                    <h1 className="text-white uppercase text-[1rem] md:text-[1.5rem] md:tracking-[2rem] tracking-[1rem] font-thin">create better</h1>
                </div>
                <video className="h-screen w-screen object-cover opacity-50" autoPlay muted loop>
                    <source src={hero_video} type="video/mp4" className="" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            </section>
            <section className='relative'>
                {/* <p className='uppercase marquee-text text-[15rem] font-bold'>easeus media - creative agency</p> */}
                <marquee className='uppercase marquee-text md:text-[15rem] text-[12rem] font-bold'>easeus media - creative agency</marquee>
            </section>
            <section className="relative max-w-screen-2xl mx-auto py-16 md:px-0 px-4 mb-20 md:py-36" >
                <div className='flex flex-col md:flex-row justify-around items-center'>
                    <div className='md:w-2/12 w-8/12 mb-4'>
                        <img src={easeus} alt='' className="w-full" />
                    </div>
                    <p className='md:w-7/12 md:text-xl text-sm font-light tracking-wide'>
                        If you believe that you can create anything better than you found it and make people's life easier then you are one of us. Here at our organization we believe that every business has the opportunity to stand out and create better brand of themselves but they lack the tools required. That's we jump in as one stop solution for any business to showcase itself as a brand by providing all the services you require to build a brand.
                    </p>
                </div>
                <div className='absolute md:bottom-[120px] bottom-[60px] flex items-center justify-center grayscale opacity-25 -z-50'>
                    <img src={logo} alt='' className='md:w-3/12 w-screen' />
                </div>
            </section>

            {/* <section className='relative bg-white text-black' >
                <div className="relative max-w-screen-2xl mx-auto md:pb-40 pb-32 md:pt-60 pt-32 md:px-0 px-4">
                    <div className='absolute md:-top-32 -top-20  md:right-0 right-4 md:w-64 w-40 md:h-64 h-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#52555c] to-[#2c2e32] rounded-full flex justify-center items-center text-white shadow-[rgba(0,_0,_0,_0.8)_0px_25px_50px_-12px]'>
                        <a href="#" className='uppercase font-semibold text-xl'>About Us</a>
                    </div>
                    <h3 className='uppercase md:text-3xl text-2xl text-light tracking-widest mb-4'>
                        services
                    </h3>
                    <div className="flex-grow h-px bg-light-gray"></div>
                    <a href="#" className='pointer-events-auto'><p className="capitalize md:text-7xl text-5xl md:my-16 my-10 font-semibold">Logo Design</p></a>
                    <div className="flex-grow h-px bg-light-gray"></div>
                    <a href="#" className='pointer-events-auto'><p className="capitalize md:text-7xl text-5xl md:my-16 my-10 font-semibold">Video Production</p></a>
                    <div className="flex-grow h-px bg-light-gray"></div>
                    <a href="#" className='pointer-events-auto'><p className="capitalize md:text-7xl text-5xl md:my-16 my-10 font-semibold">Web Development</p></a>
                    <div className="flex-grow h-px bg-light-gray"></div>
                    <a href="#" className='pointer-events-auto'><p className="capitalize md:text-7xl text-5xl md:my-16 my-10 font-semibold">Social Media Management</p></a>
                    <div className="flex-grow h-px bg-light-gray"></div>
                </div>
            </section> */}

            <section className='relative bg-white text-gray-200'>
                <div className='relative flex flex-col md:flex-row max-w-screen-2xl mx-auto p-60 md:px-2 px-4'>
                    <div className='absolute md:-top-32 -top-20  md:right-0 right-4 md:w-64 w-40 md:h-64 h-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#52555c] to-[#2c2e32] rounded-full flex justify-center items-center text-white shadow-[rgba(0,_0,_0,_0.8)_0px_25px_50px_-12px]'>
                        <a href="#" className='uppercase font-semibold text-xl'>About Us</a>
                    </div>
                    <div className='flex md:flex-col flex-1 md:gap-12 gap-2'>
                        <div className={`${active == "webDesign" ? "text-black" : ""} flex gap-6 cursor-pointer`} id="webDesign" onClick={(e) => {
                            setActive(e.currentTarget.id)
                            changeInfo(e.currentTarget.id)
                        }
                        }>
                            <span className='font-semibold'>01</span>
                            <div className='px-2 py-2'><h2 className='text-6xl font-bold whitespace-nowrap'>Web Design</h2></div>
                        </div>

                        <div className={`${active == "branding" ? "text-black" : ""} flex gap-6 cursor-pointer`} id="branding" onClick={(e) => {
                            setActive(e.currentTarget.id)
                            changeInfo(e.currentTarget.id)
                        }
                        }>
                            <span className='font-semibold'>02</span>
                            <div className='px-2 py-2'><h2 className='text-6xl font-bold'>Branding</h2></div>
                        </div>

                        <div className={`${active == "uiUx" ? "text-black" : ""} flex gap-6 cursor-pointer`} id="uiUx" onClick={(e) => {
                            setActive(e.currentTarget.id)
                            changeInfo(e.currentTarget.id)
                        }
                        }>
                            <span className='font-semibold'>03</span>
                            <div className='px-2 py-2'><h2 className='text-6xl font-bold'>UI/UX Design</h2></div>
                        </div>

                        <div className={`${active == "packagingDesign" ? "text-black" : ""} flex gap-6 cursor-pointer`} id="packagingDesign" onClick={(e) => {
                            setActive(e.currentTarget.id)
                            changeInfo(e.currentTarget.id)
                        }
                        }>
                            <span className='font-semibold'>04</span>
                            <div className='px-2 py-2'><h2 className='text-6xl font-bold'>Packaging Design</h2></div>
                        </div>
                    </div>
                    <div className='text-black flex flex-col justify-between flex-1'>
                        <div>
                            <div className='flex flex-wrap gap-4 md:mb-8 mb-4'>
                                {
                                    info.keywords.map((keyword, i) => (
                                        <div className='px-6 py-2 font-medium whitespace-nowrap hover:bg-rose-600 bg-gray-200 hover:text-white rounded-full' key={i}>{keyword}</div>
                                    ))
                                }
                            </div>

                            <div className='text-justify'>
                                {info.desc}
                            </div>
                        </div>

                        <a href="" className='text-rose-600 font-bold justify-items-end'>Read more...</a>
                    </div>
                </div>
            </section>

            <section className="relative">
                <video className="h-screen w-screen object-cover grayscale opacity-50" autoPlay muted loop>
                    <source src={hero_video} type="video/mp4" className="" />
                </video>
            </section>

            <section>
                <div className='max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-center items-center gap-12 my-48 md:px-0 px-4'>
                    <p className='break-normal flex-1 font-light md:text-left text-center'>We firmly believe that every endeavor we undertake must encompass the essence
                        of creative thinking and artistry.
                    </p>
                    <div className="border-b-[1px] border-white w-screen flex-1 hidden md:block"></div>
                    <div className='border-[1px] font-medium py-2 px-7 text-base md:text-base bg-transparent hover:bg-rose-600 rounded-full transition-colors'>
                        <a href="#">
                            Our Work
                        </a>
                    </div>
                </div>

                <div className='max-w-fit mx-auto overflow-auto whitespace-nowrap h-auto'>
                    {images.map(({ id, src }) => (
                        <div key={id} className='inline-block mr-10 relative'>
                            <img src={src} alt="image" className="object-cover h-96 w-96 filter grayscale hover:grayscale-0" />
                        </div>
                    )
                    )}
                </div>

                <div className='max-w-fit mx-auto overflow-auto whitespace-nowrap'>
                    {images.map(({ id, src }) => (
                        <div key={id} className='inline-block mr-10 object-cover h-96 w-96 '>
                            <img src={src} alt="image" className="object-cover h-96 w-96 filter grayscale hover:grayscale-0" />
                        </div>
                    )
                    )}
                </div>
            </section>

            <section className='relative max-w-screen-2xl mx-auto py-28 text-white flex flex-col md:px-0 px-4 md:text-8xl sm:text-6xl text-4xl gap-2 textSet'>
                <span>We Fuse,</span>
                <span>Cooperate, and</span>
                <span>Push Boundaries.</span>
                <span>We're born to digital</span>
                <span>realms, welcoming the</span>
                <span>artistic liberty to</span>
                <span>craft answers</span>
                <span>that link,</span>
                <span>convey and</span>
                <span>ignite.</span>
            </section>

            <section className='relative'>
                <div className='max-w-screen-2xl mx-auto flex flex-row-reverse justify-center items-center gap-12 md:my-36 mt-0 mb-20 md:px-0 px-4'>
                    <div className="border-b-[1px] border-white w-60 flex-1"></div>
                    <div className='border-[1px] font-medium py-2 px-7 text-base md:text-base bg-transparent hover:bg-rose-600 rounded-full transition-colors'>
                        <a href="#">
                            clientele
                        </a>
                    </div>
                </div>

                <div className='max-w-screen-2xl mx-auto flex justify-between items-center gap-10 mb-60 md:px-0 px-4'>
                    {clientele.map(({ id, src }) => (
                        <div key={id} className='inline-block'>
                            <img src={src} alt="image" className="" />
                        </div>
                    )
                    )}
                </div>
            </section>

            <section className='relative bg-white text-black pt-60 pb-2 overflow-hidden'>
                <div className='absolute grayscale opacity-30 w-96 right-36 -bottom-10'>
                    <img src={logo} alt='' className='' />
                </div>

                <div className='max-w-screen-2xl relative mx-auto'>
                    <h2 className='text-6xl font-medium mb-6'>Let's work together</h2>
                    <div className="border-b-[1px] border-black w-full mb-6"></div>
                    <div className='absolute -top-[50px] z-10 right-0 w-64 h-64 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#52555c] to-[#2c2e32] rounded-full flex justify-center items-center text-white shadow-[rgba(0,_0,_0,_0.8)_0px_25px_50px_-12px]'>
                        <a href="#" className='font-semibold text-xl'>Let's Talk</a>
                    </div>
                    <div className='flex gap-5'>
                        <div className='border-[1px] font-medium py-2 px-7 text-base md:text-base bg-transparent hover:bg-rose-600 hover:text-white rounded-full transition-colors'>
                            <a href="#">
                                business@easeusnow.com
                            </a>
                        </div>
                        <div className='border-[1px] font-medium py-2 px-7 text-base md:text-base bg-transparent hover:bg-rose-600 hover:text-white rounded-full transition-colors'>
                            <a href="#">
                                +91 123 456 7890
                            </a>
                        </div>
                    </div>
                </div>

                <div className='max-w-screen-2xl mx-auto flex gap-96 mt-48'>
                    <div className='flex flex-col'>
                        <span className='text-light text-sm'>
                            Socials
                        </span>
                        <h2 className='font-medium'>
                            &copy;Easeus-2023
                        </h2>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-light text-sm'>
                            Socials
                        </span>
                        <ul className='flex gap-4 font-medium'>
                            <li>Instagram</li>
                            <li>LinkedIn</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home