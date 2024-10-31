import { useState } from 'react'
import Front from './front';
import Back from './back';

export default function SkilsSection() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('Welcome to the skill session. If you want to know a little more about a skill, just click on the desired skill!');

    return(
        <section className="max-w-screen-xl mx-auto h-headerscreen flex flex-col-reverse lg:flex-row items-center justify-center gap-16 md:gap-32 lg:gap-64 py-24" id="skills">
            <div className="w-1/2 flex justify-center">
                <Front setName={setName} setDescription={setDescription} name={name}/>
                <Back setName={setName} setDescription={setDescription} name={name}/>
            </div>
            <div className="w-1/2 flex flex-col gap-6">
                <div>
                    <h1 className='flex items-start text-4xl font-bold'>{name}</h1>
                    <div className="w-16 h-[2px] bg-violet"/>
                </div>
                <p className='text-gray-300 text-left'>{description}</p>
            </div>
        </section>
    )
}