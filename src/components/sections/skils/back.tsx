import { Skill } from "./skill/skill";

interface BackProps {
    setName: Function
    setDescription: Function
    name: string
}

export default function Back( { setName, setDescription, name } : BackProps ) {
    return (
        <div className="flex flex-col items-center mr-10">
            <div className="mb-4">
                <h2 className=' text-2xl font-bold'>Back-end</h2>
                <div className=" w-8 h-[2px] bg-bright-purple"/>
            </div>
            <Skill 
                nome="Python" 
                descricao='Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Being used for server-side web development, software development and system scripts.' 
                nomeFuncao={setName} 
                descricaoFuncao={setDescription} 
                nomeVar={name}
                caminho="/skills/hard/python.png" 
            />
            <Skill
                nome="Django"
                descricao="Django is a web framework for Python that encourages rapid development and clean, pragmatic design. He is responsible for much of the web development work."
                nomeFuncao={setName} 
                descricaoFuncao={setDescription} 
                nomeVar={name}
                caminho="/skills/hard/django.png" 
            />
        </div>
    )
}