import React from 'react'

const Footer = () => {
  return (
    <>
       <footer className="bg-black text-gray-400 px-40 py-6">
  <div className="container mx-auto">

    <div className="flex justify-center space-x-6 mb-6">
      <a href="#" className="hover:text-white"><i className="fab fa-facebook-f"></i></a>
      <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i></a>
      <a href="#" className="hover:text-white"><i className="fab fa-twitter"></i></a>
      <a href="#" className="hover:text-white"><i className="fab fa-youtube"></i></a>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-6">
      <a href="#" className="hover:underline">Audio Description</a>
      <a href="#" className="hover:underline">Help Centre</a>
      <a href="#" className="hover:underline">Gift Cards</a>
      <a href="#" className="hover:underline">Media Centre</a>
      <a href="#" className="hover:underline">Investor Relations</a>
      <a href="#" className="hover:underline">Jobs</a>
      <a href="#" className="hover:underline">Terms of Use</a>
      <a href="#" className="hover:underline">Privacy</a>
      <a href="#" className="hover:underline">Legal Notices</a>
      <a href="#" className="hover:underline">Cookie Preferences</a>
      <a href="#" className="hover:underline">Corporate Information</a>
      <a href="#" className="hover:underline">Contact Us</a>
    </div>
    <div className="flex justify-center mb-6">
      <button className="border border-gray-400 px-4 py-2 text-sm hover:text-white hover:border-white">
        Service Code
      </button>
    </div>

    {/* Footer Bottom */}
    <div className="text-center text-sm">
      <p>© 2024 Netflix-GPT, Inc.</p>
    </div>
  </div>
</footer>

    
    
    </>
  )
}

export default Footer