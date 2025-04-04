

const Contact=()=>{

return (

    
        
          <div className="flex justify-center my-4">
            <div className="w-full max-w-md bg-teal-500 p-6  my-1 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold text-center mb-4 text-gray-50">Contact Us</h2>
      
              <form>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 mb-3 border  border-gray-50 rounded-lg"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 mb-3 border  border-gray-50 rounded-lg"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full p-2 mb-3 border   border-gray-50 rounded-lg h-32"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-transparent  text-white p-2 rounded-lg hover:bg-teal-600 font-semibold"
                >
                  Send Message
                </button>
              </form>
      
              <div className="mt-4 text-center">
                <p className="text-gray-50">Email: dev@email.com</p>
                <p className="text-gray-50">Phone: +91 9009009000</p>
              </div>
            </div>
          </div>
       
      

)

}
export default Contact