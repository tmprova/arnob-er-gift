import React from 'react';

const Expertise = () => {
    const items = [
        {
          title: "Web Development",
          icon: "images/web.png",
          description:
            "Web development is the work involved in developing a website for the Internet or an intranet.",
        },
        {
          title: "Mobile Development",
          icon: "images/mobile.png",
          description:
            "Mobile development is the work involved in developing a mobile application for mobile devices such as smartphones, tablets, and feature phones.",
        },
        {
          title: "Digital Marketing",
          icon: "images/digital-marketing.png",
          description:
            "Digital marketing is the work involved in developing a digital marketing strategy and developing a digital marketing plan.",
        },
    
        {
          title: "Graphic Design",
          icon: "images/graphicdesign.png",
          description:
            "Graphic design is the work involved in developing a digital marketing strategy and developing a digital marketing plan.",
        },
      ];
    return (
        <div className="mt-10 z-20">
            <h1 className='text-orange-400 text-center text-6xl z-20 font-semibold'>Our Expertise</h1>
            <div className="w-full h-96 bg-blue-900 mt-10"></div>
            <div className='grid grid-cols-4 gap-8 mx-32 -mt-48'>
                {
                    items.map((item)=>(
                        <div className='p-5 bg-white hover:border-x-8 border-amber-500 border-radius rounded transform hover:scale-105 duration-300 shadow flex flex-col space-y-4 items-center'>
<img src={item.icon} className="h-20 w-20"  alt=''/>
                      <h1 className='text-2xl'>{item.title}</h1>
                      <p className='text-gray-600 text-md'>{item.description}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Expertise;