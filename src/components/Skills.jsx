const skills=['React','JavaScript','Node.js','Express.js','MongoDB','MySQL','Tailwind CSS']
const Skills=()=>{
    return(
        <div className="min-h-screen bg-gray-100 px-6 py-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">My Skills</h2>
            <div className="flex flex-wrap gap-4 justify-center">
                {skills.map((skill,index)=>(
                    <span 
                        key={index}
                        className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-500 transition"
                        >{skill}</span>
                ))}
            </div>
        </div>
    )
}
export default Skills