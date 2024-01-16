import './user.css'
import React,{useState,useEffect} from 'react';
import JpegToPng from './Services/JpegToPng';
import PdfToWord from './Services/PdfToWord';


const Hero = () => {
  const services = [
    { id: 1, serviceName: "PDF to Word" },
    { id: 2, serviceName: "Text To Speech" },
    { id: 3, serviceName: "jpeg To png" },
    { id: 4, serviceName: "Image Compresser" }
  ];



const [isLoaded, setIsLoaded] = useState(false);
const [selectedService, setSelectedService] = useState(0);



const clickServices = (id) => {
  setSelectedService(id);
};



useEffect(() => {
  // Trigger the animation after the component has mounted
  setIsLoaded(true);
}, []);



  return (
    <>


    {selectedService === 1 && <PdfToWord />}
    {selectedService === 3 && <JpegToPng />}
    
    <div className={`ServiceList ${isLoaded ? 'show' : ''}`}>
      {services.map((service) => (
        <div className={`services ${isLoaded ? 'show' : ''}`} key={service.id}>
          <div className="overlay"></div>
          <h3>{service.serviceName}</h3>
          <button onClick={() => clickServices(service.id)}>Click</button>
        </div>
      ))}
    </div>
    



    </>
    
  );
};

export default Hero;