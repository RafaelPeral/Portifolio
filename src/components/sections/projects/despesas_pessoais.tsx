import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CarouselItem } from "@/components/ui/carousel"
import CardBorder from "@/components/card_border/card_border"
import { useContext } from "react"
import { ThemeContext } from "@/hooks/theme_context"
import { ThemeContextType } from "@/hooks/theme_context"
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu"

export default function DespesasPessoais() {
    const { theme } = useContext(ThemeContext) as ThemeContextType;

    return(
        <CarouselItem>
            <CardBorder bg="bg-card" w='w-[350px] md:w-[750px] lg:w-[900px]' h='h-[500px] md:h-[850px] lg:h-[900px]' wb='w-[650px] md:w-[1200px] lg:w-[1300px]' hb='h-[650px] md:h-[1200px] lg:h-[1300px]'>
                <div className="w-full h-full flex flex-col items-center justify-between">
                    <CardHeader>
                        <CardTitle className="text-2xl md:text-4xl text-center">Despesas Pessoais</CardTitle>
                        <CardDescription className="text-center">Application for controlling personal expenses.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <img src={theme === 'dark' ? "../img/despesas_pessoais/dark.png" : "../img/despesas_pessoais/light.png"} alt="Despesas Pessoais" className="w-full h-full object-cover"/>
                    </CardContent>
                    <CardFooter className="flex flex-col justify-center gap-2">
                        <a 
                            className=' flex justify-center text-white hover:text-gray-400 duration-500 p-3 font-bold bg-gradient-to-r from-[#35014a] to-bright-purple rounded w-44'
                            href={'https://despesas-pessoais-web.onrender.com'}
                            target="_blank"
                        >
                            Visit Application
                        </a>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <button className="flex justify-center hover:text-white text-gray-400 duration-500 p-3 font-bold">
                                    Visit GitHub
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-44">
                                <DropdownMenuItem>
                                    <a href="https://github.com/RafaelPeral/despesas-pessoais-web" target="_blank">
                                        Front-end GitHub
                                    </a>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <a href="https://github.com/RafaelPeral/despesas-pessoais-api" target="_blank">
                                        Back-end GitHub
                                    </a>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </CardFooter>
                </div>
            </CardBorder>
        </CarouselItem>
    )
}