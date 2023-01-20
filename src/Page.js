const Page = ({ children, name }) => {
  
  return (
    <div>
      <p>Hidden text :)</p>
      <div className="mt-20 mb-10 text-center">
        <div className="relative bg-red-300 w-1/3 m-auto pb-0.5 bg-gradient-to-r from-blue-300 to-teal-200">
          <p className="text-3xl pb-3 min-w-fit bg-white" >{ name }</p>
        </div>
      </div>
      { children }
    </div>
  );
}
 
export default Page;