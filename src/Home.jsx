function Home(){

    const companyName = "InnovateX";
    
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-5xl font-bold text-center text-blue-950 p-6">Welcome to {companyName}</h2>
            <p className="text-gray-700 mt-2 text-xl">Where Innovation Meets Technology</p>
        </div>
    )
}

export default Home;