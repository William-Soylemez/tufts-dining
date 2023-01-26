const Api = () => {
  return (
    <p className="text-lg text-gray-800 font-thin w-5/6 m-auto text-justify">
    This website gets its meal data from a database of menus that I collect. If you want to use this data for your own project, be my guest! Just please credit me subtly somewhere if possible :)
    <br /> <br />
    You can access the database through the Tufts Dining API. The default endpoint is <code className="bg-gray-100 px-1">api.tuftsdining.com</code>. Currently, the only resource available is meal data, accessible at <code className="bg-gray-100 px-1">/meals/&lt;location&gt;/&lt;date&gt;</code>. This should be formatted the same as the url for the meal viewer on this website, for example, <code className="bg-gray-100 px-1">/meals/hodge/2023-1-1</code>. Data is only available for days starting in 2023 until slightly in the future.
    </p>
  );
}
 
export default Api;