import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { github_url,  } from "@/utils/url"
import AvatarComponent from "../avatar/avatar"
import { Menu } from 'lucide-react';
import CardBorder from "../card_border/card_border"
import ThemeSwitch from "../theme_switch";


export default function Header() {
    let Links = [
        {name:"WELCOME", link:"#welcome"},
        {name:"ABOUT-ME", link:"#aboutme"},
        {name:"SERVICES", link:"#services"},
        {name:"HARD-SKILLS", link:"#hardskills"},
        {name:"SOFT-SKILLS", link:"#softskills"},
        {name:"PROJECTS", link:"#projects"},
    ];

    return (
        <>
            <nav className="shadow-violet-950 shadow-md w-full flex justify-between items-center px-6 py-2 fixed opacity-100 bg-primary-foreground">
                <a href={github_url} target="_blank" className="flex items-center text-center gap-2">
                    <AvatarComponent/>
                    <h1 className='text-lg text-purple-600 h-[40px] flex items-center'>
                        Rafael Peral
                    </h1>
                </a>
                <div className="hidden md:flex items-center text-center">
                    {Links.map((link) => (
                        <a href={link.link} className="block p-2 m-2 shadow-sm shadow-purple-500" key={link.name}>
                            {link.name}
                        </a>
                    ))}
                </div>
                <div className="flex items-center gap-4">
                    <ThemeSwitch/>
                    <div className="flex md:hidden">
                        <Popover>
                            <PopoverTrigger>
                                <Menu size={27}/>
                            </PopoverTrigger>
                            <PopoverContent className="mx-2">
                                <CardBorder w={200} h={400}>
                                    <div className="flex flex-col gap-2">
                                        {Links.map((link) => (
                                            <a href={link.link} className="block text-center p-2 m-2 shadow-sm shadow-purple-500" key={link.name}>
                                                {link.name}
                                            </a>
                                        ))}
                                    </div>
                                    
                                </CardBorder>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </nav>
            
        </>
    )
}