import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [city, setCity] = useState('');
  const [search, setSearch] = useState();
  const [status,setStatus] = useState(false);

  
  const fetchApi = async () => {
    try {
      const url = 'https://amit717628-fantastic-rotary-phone-6w6gx9v79552475x-3000.preview.app.github.dev/weatherGet';
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ data: [city] }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const resJson = await response.json();
     

      const cityName = Object.keys(resJson.weather)[0];
      if (cityName) {
        setStatus(true);
        setSearch(resJson.weather[cityName]);
      }

     


   
      
      
      console.log(resJson.weather[cityName])
     
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if(city.length > 0) {

    
    fetchApi();
    
    } else {
      setStatus(false);
    }
      }, [city])
 
  return (
    <>
      <div className="py-20 h-screen bg-black px-2">
        <div>
          <h1 className="text-center text-white text-2xl font-extrabold">Weather App</h1>
        </div>
        <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
          <div className="md:flex">
            <div className="w-full p-3">
              <div className="relative">
                <i className="absolute fa fa-search text-black top-5 left-4"></i>
                <input
                  type="text"
                  className="bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
                  placeholder="Enter The City"
                  value={city}
                  
                  onChange={(e) => setCity(e.target.value)}
                  
                />
                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                  onClick={fetchApi}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        
        {status ? ( 
  

        <div className="max-w-md p-8 mx-auto rounded-lg dark:bg-gray-900 dark:text-gray-100" id="ele">
	<div className="flex justify-between space-x-8">
		<div className="flex flex-col items-center">
    <img key={search.current.condition.icon} src={`http://${search.current.condition.icon}`} alt='loading' />

			<h1 className="text-xl font-semibold" id="state">{search.location.name}</h1>
		</div>
		<span className="font-bold text-8xl" >{search.current.feelslike_c}°c</span>
	</div>
	<div className="flex justify-between mt-8 space-x-4 dark:text-gray-400">
		<div className="flex flex-col items-center space-y-1">
			<span className="uppercase">Wind</span>
      <svg xmlns="http://www.w3.org/2000/svg"  className="w-8 h-8 fill-current" fill="currentColor"  viewBox="0 0 16 16"> <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/> </svg>
			<span>{search.forecast.forecastday[0].day.maxwind_kph} kph</span>
		</div>
		<div className="flex flex-col items-center space-y-1">
			<span className="uppercase">Region</span>
			<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current" fill="currentColor" viewBox="0 0 24 24"><path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>
			<span>{search.location.region}</span>
		</div>
		<div className="flex flex-col items-center space-y-1">
			<span className="uppercase">Country</span>
      <svg xmlns="http://www.w3.org/2000/svg"  className="w-8 h-8 fill-current" fill="currentColor"  viewBox="0 0 16 16"> <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/> </svg>
			<span>{search.location.country}</span>
		</div>
		<div className="flex flex-col items-center space-y-1">
			<span className="uppercase">SunSet</span>
			<svg xmlns="http://www.w3.org/2000/svg"   className="w-8 h-8 fill-current" fill="currentColor"  viewBox="0 0 16 16"> <path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708l1.5 1.5zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7zm3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/> </svg>
			<span>{search.forecast.forecastday[0].astro.sunset.replace("PM" || "AM","")}</span>
		</div>
		
	</div>
</div>

) : (
  <div>
          <h1 className="text-center text-white text-2xl font-extrabold">{city.length > 1 ? "Click On Search To Get Details" : "Provide The City On Search Bar"}</h1>
        </div>
)}
      </div>



      <footer className='text-white text-center font-bold'>Developed By Amit</footer>
    </>
  );
}