import React from "react";

const OurServices = () => {
  const Services = [
    {
      title: "Innovative and Passionate",
      image: "images/innovation.png",
      description:
        "We are a team of creative and passionate designers and developers. We are fully aware of the importance of designing for the digital age and strive to deliver the best result for our clients.",
    },
    {
      title: "Good Return on Investment",
      image: "images/investment.png",
      description:
        "Working with us means providing your business with great savings. All our digital marketing and web development packages are being offered at competitive prices",
    },
    {
      title: "Seamless Customer Support",
      image: "images/customer-support.png",
      description:
        "We are always here to help you with any questions you may have. We are always here to help you with any questions you may have. We are always here to help you with any questions you may have.",
    },
  ];
  return (
    <div className="mx-32 mt-20 border shadow">
        <div className="bg-blue-800 h-72 w-full flex justify-center items-center">
            <h1 className="text-6xl font-semibold text-white">Our Offerings</h1>
            </div>
<div className="grid grid-cols-3 p-5 gap-10">
{
    Services.map((service)=>(
        <div className="p-5 bg-white  hover:border-t-8 border-sky-500 shadow flex flex-col space-y-5 items-center transform hover:scale-105 duration-300 ">
            <img src={service.image} className="h-20 w-20" alt="" />
            <h1 className="text-2xl font-semibold">{service.title}</h1>
            <p className="text-gray-600 text-md">{service.description}</p>
        </div>
    ))
}
</div>
        </div>
   
  )
  
};

export default OurServices;
