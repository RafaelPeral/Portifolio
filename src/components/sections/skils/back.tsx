import { Skill } from "./skill/skill";

interface BackProps {
    setName: Function
    setDescription: Function
    name: string
}

export default function Back( { setName, setDescription, name } : BackProps ) {
    const python = {
        name: "Python",
        descricao: "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Being used for server-side web development, software development and system scripts.",
        caminho : "/skills/hard/python.png"
    }
    const django = {
        name: "Django",
        descricao: "Django is a web framework for Python that encourages rapid development and clean, pragmatic design. He is responsible for much of the web development work.",
        caminho : "/skills/hard/django.png"
    }

    const tecnologias = [python, django]

    return (
        <div className="flex flex-col items-center mr-10">
            <div className="mb-4">
                <h2 className=' text-2xl font-bold'>Back-end</h2>
                <div className=" w-8 h-[2px] bg-bright-purple"/>
            </div>
            {tecnologias.map((tecnologia) => (
                <Skill 
                    nome={tecnologia.name}
                    descricao={tecnologia.descricao}
                    nomeFuncao={setName} 
                    descricaoFuncao={setDescription} 
                    nomeVar={name}
                    caminho={tecnologia.caminho}
                />
            ))}
        </div>
    )
}