import { instagram_url, avatar_url } from '@/utils/url'

export default function AboutMeSection() {
    return (
        <section className="max-w-screen-xl mx-auto h-headerscreen flex flex-col lg:flex-row items-center justify-center gap-16 md:gap-32 lg:gap-64 py-24" id="aboutme">
            <div className="w-1/2 flex items-center">
                <a target="_blank" href={instagram_url}><img src={avatar_url} alt="Rafael Peral" className=" rounded-full"/></a>
            </div>
            <div className="w-1/2 flex flex-col items-start justify-center gap-6">
                <div>
                <h1 className=' text-4xl font-bold'>
                    About Me
                </h1>
                <div className=" w-16 h-[2px] bg-violet"/>
                </div>
                <p className='text-gray-300 text-left'>
                    I work as a Full Stack developer, with expertise in Python and Flesk for back-end development and React with TypeScript for front-end development.
                </p>
                <button className='text-white hover:text-gray-400 duration-500 p-3 font-bold bg-gradient-violet w-44'>
                    More about me ➝
                </button>
            </div>
        </section>
    )
}