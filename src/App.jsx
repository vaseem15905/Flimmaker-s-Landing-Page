import { 
  FaFilm, FaMapMarkerAlt, FaVideo, FaUsers, FaArrowUp, FaCamera, 
  FaLightbulb, FaClipboardList, FaStar, FaUserCircle, FaChartBar, FaClipboardCheck 
} from 'react-icons/fa';

export default function LandingPage() {
  return (
    <div className="min-h-screen font-mono bg-white text-purple-900 scroll-smooth">
      {/* Navbar */}
      <nav className="bg-black-700 text-white py-6 px-10 flex justify-between items-center shadow-lg fixed w-full top-0 z-50">
        <h1 className="text-3xl font-bold flex items-center"><FaFilm className="mr-3" /> FilmConnect</h1>
        <ul className="flex space-x-8 text-lg">
          <li><a href="#home" className="hover:text-gray-300">Home</a></li>
          <li><a href="#about" className="hover:text-gray-300">About</a></li>
          <li><a href="#services" className="hover:text-gray-300">Prototype</a></li>
          <li><a href="#research" className="hover:text-gray-300">Research</a></li>
          <li><a href="#testimonials" className="hover:text-gray-300">Success Stories</a></li>
          <li><a href="#swot" className="hover:text-gray-300">SWOT Analysis</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-6 bg-black text-white">
        <FaFilm className="text-[12rem] mb-6" />
        <h1 className="text-6xl font-extrabold drop-shadow-lg">Wanna Become a Film Maker?</h1>
        <p className="text-2xl mt-4 max-w-3xl drop-shadow-md">
          We are here to help you. LIGHTS. CAMERA. ACTION.
        </p>
        <FaCamera className="text-[12rem] mt-6" />
      </section>

      {/* About Us */}
      <section id="about" className="h-screen flex flex-col justify-center items-center px-16 bg-black-100 rounded-lg shadow-lg">
        <FaLightbulb className="text-[10rem] text-black-700 mb-6" />
        <h2 className="text-5xl font-bold text-black-800">About Us</h2>
        <p className="mt-6 text-2xl text-gray-700 text-center w-3/4">
          Many shoots and projects get canceled due to last-minute crew or cast issues. 
          We work closely with clients to bring their creative visions to life with a passionate and skilled team.
        </p>
      </section>

      {/* Prototype Section */}
      <section id="services" className="h-screen flex flex-col justify-center items-center px-16">
        <h2 className="text-5xl font-bold text-purple-800">Prototype</h2>
        <div className="grid md:grid-cols-3 gap-12 mt-12 w-full max-w-7xl">
          <div className="bg-purple-200 p-12 rounded-lg shadow-md text-center">
            <FaUsers className="text-[8rem] text-purple-900 mx-auto mb-6" />
            <h3 className="text-3xl font-semibold text-purple-900">Crew</h3>
          </div>
          <div className="bg-purple-200 p-12 rounded-lg shadow-md text-center">
            <FaUserCircle className="text-[8rem] text-purple-900 mx-auto mb-6" />
            <h3 className="text-3xl font-semibold text-purple-900">Cast</h3>
          </div>
          <div className="bg-purple-200 p-12 rounded-lg shadow-md text-center">
            <FaClipboardCheck className="text-[8rem] text-purple-900 mx-auto mb-6" />
            <h3 className="text-3xl font-semibold text-purple-900">Become a Member</h3>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="h-screen flex flex-col justify-center items-center px-16 bg-purple-50">
        <FaClipboardList className="text-[10rem] text-purple-700 mb-6" />
        <h2 className="text-5xl font-bold text-purple-800">Industry Research</h2>
        <p className="mt-6 text-2xl text-gray-700 w-3/4">We conducted extensive research to shape our platform:</p>
        <ul className="mt-8 list-disc list-inside text-gray-700 text-2xl w-3/4">
          <li>Product Research: User-friendly platform for clients to find and book crew members.</li>
          <li>Market Research: Helping passionate filmmakers achieve their dreams.</li>
          <li>Competitor Research: Inspired by a successful Australian filmmaker’s platform.</li>
          <li>Customer Research: Focused on aspiring filmmakers aged 20-45 worldwide.</li>
        </ul>
      </section>

      {/* Success Stories */}
      <section id="testimonials" className="h-screen flex flex-col justify-center items-center px-16 bg-purple-50">
        <h2 className="text-5xl font-bold text-purple-800">Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-12 mt-12 w-full max-w-7xl">
          <div className="bg-purple-100 p-12 rounded-lg shadow-md text-center">
            <FaUserCircle className="text-[10rem] text-purple-900 mx-auto mb-6" />
            <h3 className="text-3xl font-semibold text-purple-900">Kalai Arasan, Actor</h3>
            <p className="mt-4 text-xl text-gray-700">Uploaded his acting performance video and landed his first short film.</p>
          </div>
          <div className="bg-purple-100 p-12 rounded-lg shadow-md text-center">
            <FaUserCircle className="text-[10rem] text-purple-900 mx-auto mb-6" />
            <h3 className="text-3xl font-semibold text-purple-900">Muthu, Director</h3>
            <p className="mt-4 text-xl text-gray-700">Found a crew for his script and successfully released his film on YouTube.</p>
          </div>
        </div>
      </section>

      {/* SWOT Analysis */}
      <section id="swot" className="h-screen flex flex-col justify-center items-center px-16 bg-purple-100">
        <FaChartBar className="text-[10rem] text-purple-700 mb-6" />
        <h2 className="text-5xl font-bold text-purple-800">SWOT Analysis</h2>
        <ul className="mt-8 list-disc list-inside text-gray-700 text-2xl w-3/4">
          <li><strong>Strengths:</strong> Collaborative, Skilled</li>
          <li><strong>Weaknesses:</strong> Generic, Vague</li>
          <li><strong>Opportunities:</strong> Specialize, Differentiate</li>
          <li><strong>Threats:</strong> Competition, Disruption</li>
        </ul>
      </section>

      {/* Scroll to Top Button */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        className="fixed bottom-6 left-6 bg-purple-700 text-white p-4 rounded-full shadow-lg hover:bg-purple-800">
        <FaArrowUp className="text-3xl" />
      </button>
    </div>
  );
}
