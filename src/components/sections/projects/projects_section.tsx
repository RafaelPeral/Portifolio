import { Carousel, CarouselContent, CarouselPrevious, CarouselNext, CarouselApi } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"
import DespesasPessoais from "./despesas_pessoais"

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
                        <DespesasPessoais/>
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