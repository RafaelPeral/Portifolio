import { Image } from "lucide-react";

interface SkillProps {
    nome: string;
    descricao: string;
    nomeFuncao: Function;
    descricaoFuncao: Function;
    nomeVar: string;
    caminho: string;
}

export const Skill = ({
    nome,
    descricao,
    nomeFuncao,
    descricaoFuncao,
    nomeVar,
    caminho,
}: SkillProps) => {
    return (
        <button onClick={() => {
            nomeVar !=  nome? [nomeFuncao(nome), descricaoFuncao(descricao)] : [nomeFuncao('Skills'), descricaoFuncao('Welcome to the skill session. If you want to know a little more about a skill, just click on the desired skill!')]
        }} className="flex items-center justify-center h-[72px] w-[72px] mb-4">
            <img src={caminho} alt={nome} />
        </button>
    )
}