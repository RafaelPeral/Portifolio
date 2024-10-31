import { github_url, gif_computer_url } from '@/utils/url'

export default function WelcomeSection () {
    return (
        <section className="max-w-screen-xl mx-auto h-headerscreen flex items-center justify-center md:gap-32 lg:gap-64 py-24" id="welcome">
            <div className="h-full w-1/2 flex flex-col items-center justify-center gap-6">
                <h1 className=' text-5xl font-bold tx-violet'>Rafael Peral</h1>
                <h2 className=' text-lg'>Your Full Stack Developer.</h2>
                <h2 className=' text-lg text-gray-300'>Building the future, one line of code at a time.</h2>
                <a 
                    className=' flex justify-center text-white hover:text-gray-400 duration-500 p-3 font-bold bg-gradient-to-r from-dark-purple to-bright-purple rounded w-44'
                    href={github_url}
                    target="_blank"
                >
                    Visit GitHub ➝
                </a>
            </div>
            <div className='hidden w-1/2 lg:flex'>
                <img src={gif_computer_url} alt="Gif Computer" className="w-full"/>
            </div>
      </section>
    )
}