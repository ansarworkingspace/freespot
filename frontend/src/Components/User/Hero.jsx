import './user.css'
import React,{useState,useEffect} from 'react';


const Hero = () => {
  const services = [
    { id: 1, serviceName: "Image To PDF" },
    { id: 2, serviceName: "Text To Speech" },
    { id: 3, serviceName: "jpeg To png" },
    { id: 4, serviceName: "Image Compresser" }
  ];


const clickServices = (id)=>{
   console.log(id)
}



const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
  // Trigger the animation after the component has mounted
  setIsLoaded(true);
}, []);



  return (
    <div className={`ServiceList ${isLoaded ? 'show' : ''}`}>
      {services.map((service) => (
        <div className={`services ${isLoaded ? 'show' : ''}`} key={service.id}>
          <h3>{service.serviceName}</h3>
          <button onClick={() => clickServices(service.id)}>Click</button>
        </div>
      ))}
    </div>
  );
};

export default Hero;