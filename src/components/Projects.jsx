const projects=[
    {
        title:'POS Billing Software',
        description:'Built for Retail and Wholesale Vendors with all Accounting features',
        tech: ['React', 'MySQL', 'Node.js'],
        link:'_blank'
    },
    {
        title:'E-commerce Website',
        description:'For family Business',
        tech: ['React', 'Firebase'],
        link:'_blank'
    }
]
const Projects=()=>{
    return(
        <div className="p-10 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">My Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2">
                {projects.map((project,index)=>(
                    <div key={index}
                        className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
                        <h3 
                            className="text-xl font-semibold text-gray-800 mb-2"
                            >{project.title}</h3>
                        <p
                            className="text-gray-600 mb-2"
                            >{project.description}</p>
                        <div 
                            className="text-sm text-blue-600 mb-3"
                            >{project.tech.join(" | ")}</div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                            className="text-blue-500 hover:underline">View projects</a>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Projects