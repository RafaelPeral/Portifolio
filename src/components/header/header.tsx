import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import AvatarComponent from "../avatar/avatar"
import { Menu } from 'lucide-react';
import CardBorder from "../card_border/card_border"
import ThemeSwitch from "../theme_switch";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator } from "../ui/dropdown-menu";
import { Github, Instagram, Mail, MessageCircle, Linkedin } from "lucide-react"
import { github_url, linkedin_url, instagram_url, email, telegram_url } from "@/utils/url";


export default function Header() {
    let Links = [
        {name:"WELCOME", link:"#welcome"},
        {name:"ABOUT-ME", link:"#aboutme"},
        {name:"SKILLS", link:"#skills"},
        {name:"PROJECTS", link:"#projects"},
    ];

    return (
        <>
            <nav className="shadow-violet-950 shadow-md w-full flex justify-between items-center px-6 py-2 fixed z-50 opacity-100 bg-primary-foreground">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className="flex items-center text-center gap-2 cursor-pointer">
                        <div>
                            <AvatarComponent/>
                            <h1 className='text-lg text-purple-600 h-[40px] flex items-center'>
                                Rafael Peral
                            </h1>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                        side="bottom"
                        align="end"
                        sideOffset={4}
                    >
                        <a href={github_url} target="_blank">
                            <DropdownMenuItem>
                                <Github />
                                <p>My Github</p>
                                <span></span>
                            </DropdownMenuItem>
                        </a>
                        <DropdownMenuSeparator/>
                        <a href={"mailto:" + email} target="_blank">
                            <DropdownMenuItem>
                                <Mail />
                                <p>My Email</p>
                            </DropdownMenuItem>
                        </a>
                        <DropdownMenuSeparator/>
                        <a href={linkedin_url} target="_blank">
                            <DropdownMenuItem>
                                <Linkedin />
                                <p>My Linkedin</p>
                            </DropdownMenuItem>
                        </a>
                        <DropdownMenuSeparator/>
                        <a href={instagram_url} target="_blank">
                            <DropdownMenuItem>
                                <Instagram />
                                <p>My Instagram</p>
                            </DropdownMenuItem>
                        </a>
                        <DropdownMenuSeparator/>
                        <a href={telegram_url} target="_blank">
                            <DropdownMenuItem>
                                <MessageCircle />
                                <p>My Telegram</p>
                            </DropdownMenuItem>
                        </a>
                    </DropdownMenuContent>
                </DropdownMenu>
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
                                <CardBorder bg="bg-primary-foreground" w='w-[200px]' h='h-[400px]' wb='w-[500px]' hb='h-[500px]'>
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