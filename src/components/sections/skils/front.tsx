import { Skill } from "./skill/skill"

interface FrontProps {
    setName: Function
    setDescription: Function
    name: string
}

export default function Front( { setName, setDescription, name } : FrontProps ) {
    const react = {
        name: "React",
        descricao: "React is an open source JavaScript library focused on creating user interfaces on web pages. This framework also allows the creation of reusable components for our application and the composition of elements that can be changed, without the need to reload the page.",
        caminho : ""
    }
    const typescript = {
        name: "TypeScript",
        descricao: "TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language.",
        caminho : ""
    }
    const javascript = {
        name: "JavaScript",
        descricao: "JavaScript is a lightweight, interpreted, high-level, dynamic, and interpreted programming language.",
        caminho : ""
    }
    const tailwind = {
        name: "Tailwind CSS",
        descricao: "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
        caminho : ""
    }

    const tecnologias = [react, typescript, javascript, tailwind];

    return (
        <div className="flex flex-col items-center mr-10">
            <div className="mb-4">
                <h2 className='text-2xl font-bold'>Front-end</h2>
                <div className="w-8 h-[2px] bg-bright-purple"/>
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