import BannerImage from "../assets/Banner.jpg";
import axios from "axios";
import { useState } from "react";

function OpenWeather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const getData = (event) => {
    if (event.key === "Enter") {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${publicKey}`;

      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className=" w-full h-[1400px]"
      >
        <div className=" w-full h-32">
          <div className=" w-[1270px] h-56 ml-12 absolute top-0">
            <input
              className="p-[2rem] ml-60 mt-0 text-black w-[800px] opacity-70 h-12 rounded-[70px]"
              placeholder="Enter City.."
              type="text"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              onKeyUp={getData}
            />
          </div>
        </div>

        <div className=" w-full h-full relative">
          <div className="bg-white rounded-xl bg-opacity-40 w-[1270px] h-56 ml-12 absolute top-0 flex flex-row">
            <div className=" w-[600px] h-56 relative">
              <div className=" h-1/3 w-full absolute top-0">
                <h1 className="text-white text-left mt-8 ml-2 text-4xl">
                  {data.name}
                </h1>
              </div>

              <div className=" h-2/3 w-full absolute bottom-0">
                {!data.main ? (
                  <div />
                ) : (
                  <h1 className="text-center text-white ml-4 mt-8 text-6xl font-extrabold font-serif">
                    {data.main.temp} °C
                  </h1>
                )}
              </div>
            </div>
            <div className=" w-[600px] h-56"></div>
            <div className=" w-[600px] h-56">
              {!data.weather ? (
                <br />
              ) : (
                <h1 className="text-white text-right ml-80 mt-8  font-semilight font-sans text-6xl rotate-[90deg]">
                  {data.weather[0].main}
                </h1>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl w-[1270px] h-56 ml-12 absolute bottom-56 flex flex-row bg-opacity-40">
            <div className="w-[600px] h-full ">
              {!data.main ? (
                <div />
              ) : (
                <h1 className="absolute top-0  w-[425px] h-1/2  border-b-4 border-b-white pt-14  text-white text-4xl text-center ">
                  {data.main.feels_like}
                </h1>
              )}
              <p className="absolute bottom-0  w-[425px] h-1/2 pl-48 pt-20">
                Feels Like
              </p>
            </div>
            <div className="w-[600px] h-full ">
              {!data.main ? (
                <div />
              ) : (
                <h1 className="absolute top-0  w-[425px] h-1/2  border-b-4 border-b-white pt-14  text-white text-4xl text-center ">
                  {data.main.humidity}
                </h1>
              )}
              <p className="absolute bottom-0  w-[425px] h-1/2 pl-48 pt-20">
                Humidity
              </p>
            </div>
            <div className="w-[600px] h-full ">
              {!data.wind ? (
                <div />
              ) : (
                <h1 className="absolute top-0 w-[425px] h-1/2  border-b-4 border-b-white pt-14  text-white text-4xl text-center ">
                  {data.wind.speed}
                </h1>
              )}
              <p className="text-black absolute bottom-0  w-[425px] h-1/2 pl-48 pt-20">
                Wind-Speed
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OpenWeather;
