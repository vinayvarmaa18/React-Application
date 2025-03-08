import { useLocation } from "react-router-dom";

const TeamPage = () => {

//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const name = queryParams.get("name");
//   const position = queryParams.get("position");

  return (
    <div className="min-h-screen ">
        <h2 className="text-3xl font-bold text-gray-600">
            Welcome to the team!!!
        </h2>
        
        {/* <div className="text-center">
        <p>Name: {name}</p>
        <p>Position: {position}</p>
      </div> */}
    </div>
  );
};

export default TeamPage;
