import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {PiChecksLight} from "react-icons/pi";
import {FaStar, FaStarHalfStroke} from "react-icons/fa6";
import Phone from "@/components/Phone";
import {Icons} from "@/components/Icons";
import {FaCheckCircle} from "react-icons/fa";
import {Reviews} from "@/components/Reviews";

export default function Home() {
    return (
        <div className="bg-slate-90 ">
            <section>
                <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3
       sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52
       ">
                    <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
                        <div className="relative mx-auto text-center
                lg:text-left flex flex-col items-center lg:items-start"
                        >
                            <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                                <img src="/snake-1.png" alt="cobai"/>
                            </div>
                            <h1 className="relative w-fit tracking-tight text-balance
                   mt-16 font-bold leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                                Think of an Image We <span
                                className="bg-green-800 px-2 rounded-lg mb-1 text-6xl text-white">Customize </span>It
                                For Your Phone Case
                            </h1>
                            <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center
                   lg:text-left text-balance md:text-wrap">
                                Capture your favorite memories with your own unique phone case
                                <span className='font-semibold'> one-of-its-kind </span>
                                phone case.
                                Timelodi allows you to protect them memories not just
                                your phone case
                            </p>
                            <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                                <div className="space-y-2">
                                    <li className="flex gap-1.5 items-center text-left">
                                        <PiChecksLight className='h-5 w-5 shrink-0 text-yellow-300'/>
                                        High quality, durable material
                                    </li>
                                    <li className="flex gap-1.5 items-center text-left">
                                        <PiChecksLight className='h-5 w-5 shrink-0 text-yellow-300'/>
                                        We guarantee your picture for 5 years
                                    </li>
                                    <li className="flex gap-1.5 items-center text-left">
                                        <PiChecksLight className='h-5 w-5 shrink-0 text-yellow-300'/>
                                        All modern models supported, Even the cheap chinese shit
                                    </li>
                                </div>
                            </ul>
                            <div className="mt-12 flex flex-col sm:flex-row itemscenter sm:items-start gap5">
                                <div className='flex -space-x-4'>
                                </div>
                                <img
                                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                                    src='/users/user-1.png'
                                    alt='user image'
                                />
                                <img
                                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                                    src='/users/user-2.png'
                                    alt='user logo'
                                />
                                <img
                                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                                    src='/users/user-3.png'
                                    alt='user image'
                                />
                                <img
                                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                                    src='/users/user-4.jpg'
                                    alt='user image'
                                />
                                <img
                                    className='inline-block  object-cover h-10 w-10 rounded-full ring-2 ring-slate-100'
                                    src='/users/user-5.jpg'
                                    alt='user image'
                                />
                            </div>
                            <div className='flex flex-col justify-between items-center mt-2 sm:items-start'>
                                <div className='flex gap-0.5'>
                                    <FaStar className='h-4 w-4 text-yellow-600 fill-yellow-600'/>
                                    <FaStar className='h-4 w-4 text-yellow-600 fill-yellow-600'/>
                                    <FaStar className='h-4 w-4 text-yellow-600 fill-yellow-600'/>
                                    <FaStar className='h-4 w-4 text-yellow-600 fill-yellow-600'/>
                                    <FaStarHalfStroke className='h-4 w-4 text-yellow-600 fill-yellow-600'/>
                                </div>
                                <p><span className='font-semibold'>1,255</span> Happy customers</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-full lg:col-span-1 w-full justify-center px-8
                    sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit'>
                        <div className='relative md:max-w-xl'>
                            <img
                                src="/your-image.png" className='absolute w-40 lg:w-52 left-56
                                 -top-20 select-none hidden sm:block lg:hidden xl:block' alt=''/>
                            <img src="/line.png" className='absolute w-20 -left-6
                             -bottom-6 select-none' alt=''/>
                            {/* eslint-disable-next-line react/jsx-no-undef */}
                            <Phone className='w-64' imgSrc="/testimonials/1.jpg"/>
                        </div>
                    </div>
                </MaxWidthWrapper>

            </section>
            <section className='bg-slate-100 py-24'>
                <MaxWidthWrapper className='flex flex-col items-center gap-16 sm:gap-32'>
                    <div className='flex flex-col lg:flex-row items-center gap-4 sm:gap6'>
                        <h2 className='order-1 mt-2 tracking-tight text-center text-balance
                         !leading-tight font-bold text-5xl md:text-6xl text-gray-900
                        '>
                            What our <span className='relative px-2'>
                            customers {' '}
                            <Icons.underline className='hidden sm:block pointer-events-none
                             absolute inset-x-0 -bottom-6 text-green-500'/></span>{' '} say
                        </h2>
                        <img src='/snake-2.png' className='w-24 order-0 lg:order-2'/>
                    </div>

                    <div className='mx-auto grid max-w2-xl gric-cols-1 px- lg:mx-6 lg:max-w-wnone
                    lg:grid-cols-2 gap-y-16'>
                        <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
                            <div className='flex gap-0.5 mb-2'>
                                <FaStar className='h-5 w-5 text-yellow-300 fill-yellow-300'/>
                                <FaStar className='h-5 w-5 text-yellow-300 fill-yellow-300'/>
                                <FaStar className='h-5 w-5 text-yellow-300 fill-yellow-300'/>
                                <FaStar className='h-5 w-5 text-yellow-300 fill-yellow-300'/>
                                <FaStar className='h-5 w-5 text-yellow-300 fill-yellow-300'/>
                            </div>

                            <div className="text-lg  leading-8">
                                <p>
                                    The case feels like me. It reflects the kind of things I like
                                    Its durable and I even got a compliment on the design. I&apos;ve
                                    had the case for two months now and the
                                    <span className='p-0.5 bg-slate-800 text-white'>image is still super clear</span>
                                    I just love it
                                </p>
                            </div>
                            <div className='flex gap-4 mt-2'>
                                <img className='rounded-full h-12 w-12 object-cover'
                                     src='/users/user-1.png'
                                     alt="user"
                                />
                                <div className='flex flex-col'>
                                    <p className='font-semibold'> Nathaniel </p>
                                    <div className='flex gap-1.5 items-center text-zinc-600'>
                                        <FaCheckCircle className='h-4 w- stroke-[3px] text-green-600'/>
                                        <p className='text-sm'>
                                            Verified Purchase
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Second user Review*/}
                        <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
                            <div className='flex gap-0.5 mb-2'>
                                <FaStar className='h-5 w-5 text-yellow-300 fill-yellow-300'/>
                                <FaStar className='h-5 w-5 text-yellow-300 fill-yellow-300'/>
                                <FaStar className='h-5 w-5 text-yellow-300 fill-yellow-300'/>
                                <FaStar className='h-5 w-5 text-yellow-300 fill-yellow-300'/>
                                <FaStar className='h-5 w-5 text-yellow-300 fill-yellow-300'/>
                            </div>

                            <div className="text-lg  leading-8">
                                <p>
                                    I&apos;m usually the kind that keeps phones keys and other
                                    scratchy things in their pockets I was pleasantly supprised to find the
                                    <span className='p-0.5 bg-slate-800 text-white'>image is still and untouched</span>
                                    You cant find better cases for your phone
                                </p>
                            </div>
                            <div className='flex gap-4 mt-2'>
                                <img className='rounded-full h-12 w-12 object-cover'
                                     src='/users/user-2.png'
                                     alt="user"
                                />
                                <div className='flex flex-col'>
                                    <p className='font-semibold'> Maxwell </p>
                                    <div className='flex gap-1.5 items-center text-zinc-600'>
                                        <FaCheckCircle className='h-4 w- stroke-[3px] text-green-600'/>
                                        <p className='text-sm'>
                                            Verified Purchase
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
                <div className='pt-16'>
                    <Reviews/>
                </div>
            </section>
        </div>
    );
}
