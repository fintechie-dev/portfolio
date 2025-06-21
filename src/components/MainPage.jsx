import { motion } from "framer-motion";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiExpress, SiJavascript, SiMongodb, SiTailwindcss } from "react-icons/si";
const skills=[{name:'React',icon:<FaReact />},
            {name:'JavaScript',icon:<SiJavascript/>},
            {name:'Node.js',icon:<FaNodeJs />},
            {name:'Express.js',icon:<SiExpress/>},
            {name:'MongoDB',icon:<SiMongodb/>},
            {name:'MySQL',icon:<GrMysql/>},
            {name:'Tailwind CSS',icon:< SiTailwindcss/>}
        ];

const Mainpage=()=>{
    return(
        <div className="text-white flex flex-col justify-center text-center px-6 items-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-700">
            <h1 className="text-4xl font-bold sm:text-5xl mb-4">
                Hi, I'm Habeeb Rahman
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6">
                FinTechie | Full-Stack Developer | Business Strategist
            </p>
            <a
                href="/myprojects" 
                className="bg-yellow-400 hover:bg-yellow-300 transition text-gray-800 px-6 py-3 rounded-full font-semibold">
                View My Work
            </a>

            <motion.section
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.8}}
                viewport={{once:true}}
                className="mt-12 w-full max-w-4xl mx-auto px-6 pb-16">
                <h2 className="text-2xl font-semibold text-white mb-6 text-center">My Skills</h2>
                <motion.div 
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}}
                    variants={{
                        visible: {
                            transition: {
                            staggerChildren: 0.1,
                            },
                        },
                        }}
                    className="flex flex-wrap gap-4 justify-center">
                    {skills.map((skill,index)=>(
                        <motion.span 
                            key={index}
                            variants={{
                                hidden:{opacity:0, scale:0.8},
                                visible:{opacity:1, scale:1},
                            }}
                            className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-full font-medium shadow hover:bg-yellow-300 transition"
                            ><span className="flex justify-center text-lg">{skill.icon}</span>
                            {skill.name}
                            </motion.span>
                    ))}
                </motion.div>
            </motion.section>
        </div>
    )
}
export default Mainpage