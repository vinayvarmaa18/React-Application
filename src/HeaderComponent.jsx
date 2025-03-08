import { Link } from "react-router-dom";

function HeaderComponent(){
  return(
    <>
    <header className="bg-blue-500 p-6 shadow-md">
      <nav className='relative flex items-center justify-between  max-w-7xl mx-auto'>
      <Link className= 'text-4xl font-bold text-blue-50 tracking-wide mr-auto' to="/home" >InnovateX</Link>
        <div className='flex-1 flex justify-center'>
        <ul className='flex space-x-8'>
        <li><Link className='hover:text-amber-50 font-bold' to="/home">Home</Link></li>
        <li><Link className='hover:text-amber-50 font-bold' to="/employees">Employees</Link></li>
        <li><Link className='hover:text-amber-50 font-bold'to="/about">About</Link></li>
        <li><Link className='hover:text-amber-50 font-bold'to="/contactus">Contact Us</Link></li>
        </ul>
        </div>
      </nav>
    </header>
    </>
  )
}


export default HeaderComponent;
