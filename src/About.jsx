import { Link, Outlet } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="ml-5 mt-4 p-6">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-6 mt-4">About InnovateX</h1>
      <p className="text-2xl text-gray-700 mb-4">
        Welcome to <strong>Innovatex</strong> – a cutting-edge technologies System! Innovatex is designed to help businesses streamline their employee management processes in an efficient and user-friendly manner.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mt-8">About the Developer</h2>
      <p className="text-lg text-gray-700 mt-2">
        Innovatex is developed by Vinay Varma, an enthusiastic developer passionate about building web applications that drive business growth and efficiency. Feel free to reach out through the contact page if you have any suggestions or inquiries!
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8">Technologies Used</h2>
      <ul className="list-disc pl-6 mt-2 text-gray-500">
        <li>React.js</li>
        <li>React Router</li>
        <li>CSS / Tailwind CSS</li>
        <li>React Hooks (useState, useEffect)</li>
      </ul>
    
    <nav className="mt-10">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link to="team" className="text-blue-500 hover:underline">Meet our team</Link>
        </li>
      </ul>
    </nav>

    <div className="mt-8 w-full max-w-4xl">
        <Outlet/>
    </div>
      
    </div>
  );
};

export default AboutPage;
