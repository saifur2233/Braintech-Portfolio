import React, { useEffect, useState } from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaDesktop,
  FaLaptopMedical,
  FaPager,
  FaSearchengin,
} from "react-icons/fa";
import ServiceDetails from "./ServiceDetails";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [myservices, setMyservices] = useState([]);

  useEffect(() => {
    fetch("https://oitech-server.vercel.app/api/v1/services")
      .then((res) => res.json())
      .then((data) => setMyservices(data));
  }, []);
  return (
    <div className="hero py-12">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-5xl font-bold">Services We Offer</h1>
          <p className="py-6">
            With Oitech you can create beautiful and elegant websites that suits
            your business. Create charming and graceful websites that match your
            business with Oitech's assistance.
          </p>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-16">
            {myservices.map((service) => (
              <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
