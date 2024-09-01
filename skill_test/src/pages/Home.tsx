import { useEffect, useState } from "react";
import Image from "../assets/image 1.svg";
import Apartment from "../components/Apartment";
import axios from "axios";

const Home = () => {
  const accessToken = localStorage.getItem("accessToken");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://skill-test.similater.website/api/v1/property/list", {
      headers: { "Authorization": `Bearer ${accessToken}` }
    })
    .then((res) => {
      if (res.data.code == 200) {
        setData(res.data.data);
      }
    });
  }, []);

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="w-full max-w-screen-lg bg-gray-50 rounded-xl overflow-hidden">
        <div className="border-b-2 border-gray-300 p-4">
          <img src={Image} className="w-40 h-auto" alt="logo"/>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-4">Service Apartments</h3>
          <div className="flex flex-col gap-8">
            {data.map((value: any) => (
              <Apartment key={value.property_code} info={value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
