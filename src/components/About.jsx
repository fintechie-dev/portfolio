import { motion } from "framer-motion";

const About = () => {
  const skills = ["MERN Stack", "Java", "SQL", "Firebase", "Business Strategy", "POS Systems"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-white text-gray-800 px-6 py-16"
        >
      <div className="max-w-3xl mx-auto text-center">
            <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl font-bold text-blue-600 mb-6"
            >
            About Me
            </motion.h2>

            <motion.p className="mb-4 text-lg">
            I'm <span className="font-semibold">Habeeb Rahman</span>, a Full-Stack Developer with a strong foundation in business and finance. I blend technical skill with strategic thinking to build scalable web applications and digital platforms.
            </motion.p>

            <motion.p className="text-lg mb-4">
            I started my career in accounting and business operations, gaining over 6 years of experience in finance and 2 years in sales. My passion for problem-solving and technology led me to master modern web development stacks like{" "}
            <span className="font-semibold">MERN, Java, and SQL</span>.
            </motion.p>

            <motion.p className="text-lg mb-4">
            My mission is to use code and smart systems to simplify business operations, improve customer experiences, and empower small businesses through technology.
            </motion.p>

            <motion.p className="text-lg mb-6">
            When I’m not coding or managing products, I’m learning new tech stacks, helping other businesses go digital, or working on my next big idea.
            </motion.p>

            <motion.div
            className="flex flex-wrap justify-center gap-3 mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                visible: {
                transition: { staggerChildren: 0.1 },
                },
            }}
            >
            {skills.map((skill, index) => (
                <motion.span
                key={index}
                className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-blue-500 transition"
                variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                }}
                >
                {skill}
                </motion.span>
            ))}
            </motion.div>
            <motion.div
                className="mt-16 text-left"
                initial={{opacity:0, y:40}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.8}}
                >
                <h3
                    className="text-2xl font-bold text-blue-600 text-center mb-8"
                    >Timeline of Experience</h3>
                <div className="border-l-4 border-blue-600 pl-6 space-y-8">
                    <div>
                        <span
                            className="text-sm text-gray-500"
                            >2016 - 2022</span>
                        <h4
                            className="text-lg font-semibold"
                            >Finance & Accounting</h4>
                        <p
                            className="text-gray-700"
                            >Handled company financials, reporting, and bookkeeping. Built a strong foundation in business operations and compliance</p>
                    </div>
                    <div>
                        <span
                            className="text-sm text-gray-500"
                            >2022 - 2023</span>
                        <h4
                            className="text-lg font-semibold"
                            >Sales & Business Operations</h4>
                        <p
                            className="text-gray-700"
                            >Transitioned into business strategy, vendor management, and real-time operations across multiple business units.</p>
                    </div>
                    <div>
                        <span
                            className="text-sm text-gray-500"
                            >2023 - Present</span>
                        <h4
                            className="text-lg font-semibold"
                            >Full-Stack Developer & E-commerce Operations Manager</h4>
                        <p
                            className="text-gray-700"
                            >Working on full-stack development projects while also managing the operations of an e-commerce business in Oman.</p>
                    </div>
                </div>
            </motion.div>
        </div>
      
    </motion.div>
    
  );
};

export default About;
