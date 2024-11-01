import { instagram_url, avatar_url } from '@/utils/url'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export default function AboutMeSection() {
    return (
        <section className="max-w-screen-xl mx-auto h-headerscreen flex flex-col lg:flex-row items-center justify-center gap-16 md:gap-32 lg:gap-64 py-24" id="aboutme">
            <div className="w-1/2 flex items-center">
                <a target="_blank" href={instagram_url}><img src={avatar_url} alt="Rafael Peral" className=" rounded-full"/></a>
            </div>
            <div className="w-1/2 flex flex-col items-start justify-center gap-6">
                <div>
                <h1 className='text-4xl font-bold'>
                    About Me
                </h1>
                <div className="w-16 h-[2px] bg-bright-purple"/>
                </div>
                <p className='text-muted-foreground text-left'>
                    I work as a Full Stack developer, with expertise in Python and Flesk for back-end development and React with TypeScript for front-end development.
                </p>
                <Popover>
                    <PopoverTrigger>
                        <p className='hover:text-gray-400 duration-500 p-3 font-bold bg-gradient-violet w-44'>
                            More about me ➝
                        </p>
                    </PopoverTrigger>
                    <PopoverContent className="p-6 max-w-xl mx-auto bg-primary shadow-md rounded-lg z-0 md:w-[500px] lg:">
                        <h2 className="text-2xl font-bold text-center mb-4 text-primary-foreground">💫 About Me</h2>
                        <details className="border border-gray-300 rounded-lg p-4">
                            <summary className="text-lg cursor-pointer text-muted">
                                Hello! I am a Full Stack developer from Brazil, currently living in São Paulo, with a passionate drive to create solutions that truly make a difference in people's lives. My journey in programming began with an insatiable curiosity for technology, and since then, I have been dedicated to continually enhancing my skills and knowledge. I believe in the power of technology to transform ideas into reality and am excited to share my journey with you.
                            </summary>

                            <div className="mt-4 space-y-4">
                                <h3 className="text-xl font-semibold mt-4 text-primary-foreground">🚀 Continuous Learning</h3>
                                <p className='text-muted-foreground font-semibold'>
                                    Currently, I am exploring the fascinating world of software architecture, seeking to understand how to structure applications efficiently and scalably, always aiming to create high-quality systems.
                                </p>

                                <h3 className="text-xl font-semibold mt-4 text-primary-foreground">🌱 Work Philosophy</h3>
                                <p className='text-muted-foreground font-semibold'>
                                    I firmly believe that technology should be an ally in solving real problems. My purpose is to apply my programming knowledge to develop tools that genuinely impact people's everyday lives. I am always open to new challenges and learning opportunities.
                                </p>

                                <h3 className="text-xl font-semibold mt-4 text-primary-foreground">🤝 Let's Connect</h3>
                                <p className='text-muted-foreground font-semibold'>
                                    I am eager to meet people who share similar interests and collaborate on innovative projects. If you have an exciting idea or opportunity, feel free to reach out. Let's work together to turn ideas into reality!
                                </p>
                            </div>
                        </details>
                    </PopoverContent>
                </Popover>
            </div>
        </section>
    )
}