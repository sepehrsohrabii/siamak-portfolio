'use client';

export default function Home() {
    const slides = [
        {
            src: 'string',
            title: 'string',
            description: 'string',
        },
        {
            src: 'string',
            title: 'string',
            description: 'string',
        },
    ];
    return (
        <div>
            {/* first section */}
            <div className='flex h-screen w-full items-center justify-between overflow-hidden'>
                <div className='flex h-screen flex-initial items-center ps-40'>
                    <div className='w-30 absolute z-50'>
                        <h3 className='w-fit bg-blue-700 px-3 py-1'>
                            <span className='text-2xl text-white'>
                                Explore the most beautiful
                            </span>
                        </h3>
                        <h1 className='w-fit text-8xl font-thin'>
                            Explore Old
                            <br className='hidden md:inline' />
                            Classic Buildings
                        </h1>
                        <p className='ms-20 mt-10 w-1/4'>
                            buildings in the world Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. Vitae, labore quod
                            veritatis explicabo maiores consectetur. Suscipit
                            dolor, ex nemo aperiam reprehenderit ea non
                            doloribus velit quidem omnis labore, enim soluta?
                        </p>
                    </div>
                </div>
                <div className='z-0 h-screen w-3/5 flex-initial saturate-0 duration-500 hover:saturate-100'>
                    <div className="h-full w-full bg-[url('/images/2.jpg')] bg-cover bg-center bg-no-repeat">
                        <div className='z-2 absolute bottom-20 left-20 w-80 border-b-2 border-l-2 pb-5 pl-5'>
                            <h3 className='font-bold'>felan</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                <br className='hidden md:inline' />
                                adipisicing elit Quisquamvoluptatibus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* our project section */}
            <div className='mt-20 flex w-full items-center justify-between overflow-hidden px-40'>
                <div className='columns-10'>
                    <h4 className='w-fit text-4xl font-thin'>Our Projects</h4>
                </div>
                <div className='columns-2 flex flex-col'>
                    <h4 className='w-fit text-4xl font-thin'>Our Projects</h4>
                    <div className="w-20 border-b-4 border-blue-700 mt-2 mb-5"></div>
                    <button className="flex items-center border border-black hover:bg-gray-400 justify-center px-3 py-2 duration-200">
                        View All
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 ms-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>

                </div>
            </div>
            {/* second section */}
            <div className='mt-20 flex w-full items-center justify-between overflow-hidden px-40'>
                <div>
                    <div className='relative max-h-[800px] overflow-auto rounded-xl p-8'>
                        <div className='relative'>
                            <div className='columns-3xs gap-8 space-y-8'>
                                <div className='aspect-w-16 aspect-h-9 relative'>
                                    <img
                                        className='w-full rounded-lg object-cover'
                                        src='https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2952&amp;q=80'
                                    />
                                    <div className='absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10'></div>
                                </div>
                                <div className='aspect-w-1 aspect-h-1 relative'>
                                    <img
                                        className='w-full rounded-lg object-cover'
                                        src='https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2902&amp;q=80'
                                    />
                                    <div className='absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10'></div>
                                </div>
                                <div className='aspect-w-1 aspect-h-1 relative hidden sm:block'>
                                    <img
                                        className='w-full rounded-lg object-cover'
                                        src='https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3131&amp;q=80'
                                    />
                                    <div className='absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10'></div>
                                </div>
                                <div className='aspect-w-16 aspect-h-9 relative hidden sm:block'>
                                    <img
                                        className='w-full rounded-lg object-cover'
                                        src='https://images.unsplash.com/photo-1463288889890-a56b2853c40f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3132&amp;q=80'
                                    />
                                    <div className='absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    );
}
