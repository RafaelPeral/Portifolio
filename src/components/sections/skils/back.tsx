import { Skill } from "./skill/skill";

import { python_image_url, flask_image_url, sqlalchemy_image_url, postgresql_image_url } from "@/utils/url";

interface BackProps {
    setName: Function
    setDescription: Function
    name: string
}

export default function Back( { setName, setDescription, name } : BackProps ) {
    const python = {
        name: "Python",
        descricao: "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Being used for server-side web development, software development and system scripts.",
        caminho : python_image_url
    }
    const flask = {
        name: "Flask",
        descricao: "A lightweight Python web framework focused on simplicity and flexibility, ideal for building APIs and small to medium-sized applications.",
        caminho : flask_image_url
    }
    const sqlalchemy = {
        name: "SQLAlchemy",
        descricao: "An ORM library for Python that simplifies the use of relational databases by mapping tables to Python classes, allowing data manipulation as objects.",
        caminho : sqlalchemy_image_url
    }
    const postgresql = {
        name: "PostgreSQL",
        descricao: "An open-source, robust, and scalable relational database management system known for ACID-compliant transactions and support for complex data structures.",
        caminho : postgresql_image_url
    }
    
    const tecnologias = [python, flask, sqlalchemy, postgresql];

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