import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="pt-20 px-10">
      <h1 className="text-center m-10 text-3xl">Welcome to Tufts Dining!</h1>
      I don't really feel like this homepage has any reason to exist but here we are.
      <div className="text-center my-10">
        <Link to="/menu" className="inline-block p-3 m-3 bg-gradient-to-r from-blue-100 to-teal-100 hover:from-blue-500 hover:to-teal-200 rounded-xl w-1/3">Menu viewer</Link>
        <Link to="/api" className="inline-block p-3 m-3 bg-gradient-to-r from-blue-100 to-teal-100 hover:from-blue-500 hover:to-teal-200 rounded-xl w-1/3">API info</Link>
      </div>
    </div>
  );
}
 
export default Home;