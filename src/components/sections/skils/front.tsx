import { Skill } from "./skill/skill"

interface FrontProps {
    setName: Function
    setDescription: Function
    name: string
}

export default function Front( { setName, setDescription, name } : FrontProps ) {
    return (
        <div className="flex flex-col items-center mr-10">
            <div className="mb-4">
                <h2 className='text-2xl font-bold'>Front-end</h2>
                <div className="w-8 h-[2px] bg-violet"/>
            </div>
            <Skill
                nome="React"
                descricao="React is an open source JavaScript library focused on creating user interfaces on web pages. This framework also allows the creation of reusable components for our application and the composition of elements that can be changed, without the need to reload the page."
                nomeFuncao={setName}
                descricaoFuncao={setDescription}
                nomeVar={name}
                caminho="/skills/hard/react.png" 
            />
            <Skill
                nome="TypeScript"
                descricao="TypeScript is a programming language developed and maintained by Microsoft. Introducing additional features such as strict type binding for JavaScript. TypeScript overcomes one of JavaScript's biggest flaws, which is finding bugs in the code during the development phase, checking for any problems at compile time, preventing the delivery of the defective product to the end customer."
                nomeFuncao={setName}
                descricaoFuncao={setDescription}
                nomeVar={name}
                caminho="/skills/hard/typescript.png" 
            />
            <Skill
                nome="JavaScript"
                descricao="JavaScript is a lightweight language commonly used on web pages, whose implementations allow client-side scripting to interact with the user and create dynamic pages. It is an interpreted programming language with object-oriented features."
                nomeFuncao={setName}
                descricaoFuncao={setDescription}
                nomeVar={name}
                caminho="/skills/hard/javascript.png" 
            />
            <Skill
                nome="Tailwind CSS"
                descricao="Tailwind CSS is a utility CSS framework that offers predefined classes to quickly style HTML elements. Instead of providing pre-styled components, it allows you to combine classes to create custom, responsive designs."
                nomeFuncao={setName}
                descricaoFuncao={setDescription}
                nomeVar={name}
                caminho="/skills/hard/tailwindcss.png" 
            />
        </div>
    )
}