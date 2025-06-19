const Contact=()=>{
    return(
        <div className="min-h-screen bg-white px-6 py-16 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Me</h2>
            <form className="w-full max-w-md space-y-4">
                <input
                    type="text" 
                    placeholder="Your Name"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                <input
                    type="email" 
                    placeholder="Your Email"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                <textarea 
                    placeholder="Your Message" 
                    rows="5"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
                <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-500 transition"
                    >Send Message</button>
            </form>
            <div className="mt-10 text-center">
                <p className="text-gray-600 mb-2">Or Connect with me:</p>
                <div className="flex justify-center gap-6">
                    <a 
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-black"
                        >GitHub</a>
                    <a 
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-black"
                        >LinkedIn</a>
                    <a 
                        href="fintechie.dev@gmail.com"
                        className="text-gray-700 hover:text-black"
                        >Email</a>

                </div>
            </div>
        </div>
    )
}
export default Contact