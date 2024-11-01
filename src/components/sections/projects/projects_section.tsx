import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselApi } from "@/components/ui/carousel"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"
import CardBorder from "@/components/card_border/card_border"

export default function ProjectsSection() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
   
    React.useEffect(() => {
      if (!api) {
        return
      }
   
      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap() + 1)
   
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1)
      })
    }, [api])
    
    return (
        <section className="max-w-screen-xl mx-auto h-headerscreen flex flex-col items-center justify-center gap-16 py-24" id="projects">
            <div className='w-auto'>
                <h1 className=' text-4xl font-bold'>Projects</h1>
                <div className=" w-16 h-[2px] bg-bright-purple"/>
            </div>
            <div>
                <Carousel
                    setApi={setApi}
                    plugins={[
                        Autoplay({
                        delay: 2000,
                        }),
                    ]}
                    className="z-0"
                >
                    <CarouselContent>
                        <CarouselItem>
                            <CardBorder bg="bg-card" w='w-[350px] md:w-[750px] lg:w-[900px]' h='h-[350px]' wb='w-[500px] md:w-[850px] lg:w-[1200px]' hb='h-[500px] md:h-[850px] lg:h-[1200px]'>
                                <div className="w-full h-full flex flex-col items-center justify-between">
                                    <CardHeader>
                                        <CardTitle className="text-2xl md:text-4xl text-center">Despesas Pessoais</CardTitle>
                                        <CardDescription className="text-center">Application for controlling personal expenses.</CardDescription>
                                    </CardHeader>
                                    <CardContent>

                                    </CardContent>
                                    <CardFooter className="flex flex-col justify-center gap-2">
                                        <a 
                                            className=' flex justify-center text-white hover:text-gray-400 duration-500 p-3 font-bold bg-gradient-to-r from-[#35014a] to-bright-purple rounded w-44'
                                            href={''}
                                            target="_blank"
                                        >
                                            Visit Application
                                        </a>
                                        <a 
                                            className=' flex justify-center hover:text-white text-gray-400 duration-500 p-3 font-bold'
                                            href={'https://github.com/RafaelPeral/Portifolio'}
                                            target="_blank"
                                        >
                                            Visit GitHub
                                        </a>
                                    </CardFooter>
                                </div>
                            </CardBorder>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="hidden lg:block" />
                    <CarouselNext className="hidden lg:block" />
                </Carousel>
                <div className="py-2 text-center text-sm text-muted-foreground">
                    Slide {current} of {count}
                </div>
            </div>
        </section>
    )
}