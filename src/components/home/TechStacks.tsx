import React from 'react';
import './TechStacks.css';

const clients = [
  { name: 'hoopsai', image: '../docs/hoopsai.png' },
  { name: 'agoda', image: '../docs/agoda.png' },
  { name: 'getsafe', image: '../docs/getsafe.png' },
  { name: 'grab', image: '../docs/grab.png' },
  { name: 'crisp', image: '../docs/crisp.png' },
  { name: 'anyleads', image: '../docs/anyleads.png' },
  { name: 'teachable', image: '../docs/teachable.png' },
  { name: 'flyr', image: '../docs/flyr.png' },
  { name: 'roger', image: '../docs/roger.png' },
];

const ClientCard = ({ name, image }: { name: string, image: string }) => (
  <div className={`client-item ${name} flex justify-center items-center bg-white border-transparent h-28 rounded-lg w-44 m-2`}>
    <img className="w-28" src={image} alt={name} />
  </div>
);

const TechStacks = () => (
  <section className="clients my-20 py-4">
    <div className="max-w-[960px] m-auto">
      <div className=" text-center mb-20 relative">
        <h1 className="font-serif text-black text-5xl font-normal pb-5">Clients</h1>
        <p className="font-serif text-black text-2xl mb-4">We’ve been working with the teams around the world.</p>
        <div className="absolute w-10 h-0.5 bg-red-500 left-1/2 transform -translate-x-1/2" />
      </div>
      <div className="content-group flex flex-col lg:flex-row justify-center">
        <div className="content-card flex flex-col justify-center">

          <div className="client-item hoopsai flex justify-center items-center  bg-gray-100 w-4/6 h-20 lg:h-28 lg:w-44
           border border-transparent rounded-lg m-2 "
          >
            <img className="w-28 align-middle" src="https://i.postimg.cc/YCxRWyMj/js.png" alt="name" />
          </div>

        </div>
        <div className="content-card flex flex-col justify-center">
          <div className="client-item hoopsai flex justify-center items-center bg-gray-100  w-4/5 h-20 lg:h-28 lg:w-44
           border border-transparent rounded-lg m-2"
          >
            <img className="w-28 align-middle" src="https://i.postimg.cc/k51yj6Vm/react.png" alt="name" />
          </div>
          <div className="client-item hoopsai  hidden lg:flex justify-center items-center bg-gray-100  h-28 w-44
           border border-transparent rounded-lg m-2"
          >
            <img className="w-28 align-middle" src="https://i.postimg.cc/W1VStPRQ/node.png" alt="name" />
          </div>
        </div>
        <div className="content-card flex flex-col justify-center">
          <div className="client-item hoopsai flex justify-center items-center bg-gray-100 h-28 w-44
            border border-transparent rounded-lg m-2"
          >
            <img className="w-28 align-middle" src="https://i.postimg.cc/6QDnyDTk/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" alt="name" />
          </div>
          <div className="client-item hoopsai flex justify-center items-center bg-gray-100  h-28 w-44
           border border-transparent rounded-lg m-2"
          >
            <img className="w-28 align-middle" src="https://i.postimg.cc/Cx1CRCLV/db.png" alt="name" />
          </div>
          <div className="client-item hoopsai  justify-center items-center bg-gray-100  h-28 w-44
           border border-transparent rounded-lg m-2"
          >
            <img className="w-28 align-middle" src="https://i.ibb.co/frTT8Y2/My-SQL-Logo.png" alt="name" />
          </div>
        </div>
        <div className="content-card flex flex-col justify-center">
          <div className="client-item hoopsai flex justify-center items-center bg-gray-100  h-28 w-44
           border border-transparent rounded-lg m-2"
          >
            <img className="w-28 align-middle" src="https://i.postimg.cc/L8vFtGrT/aws-logo-smile-1200x630.png" alt="name" />
          </div>
          <div className="client-item hoopsai flex justify-center items-center bg-gray-100  h-28 w-44
           border border-transparent rounded-lg m-2"
          >
            <img className="w-28 align-middle" src="https://i.postimg.cc/xT0mxzXP/azure-1.webp" alt="name" />
          </div>
        </div>
        <div className="content-card flex flex-col justify-center">
          <div className="client-item hoopsai flex justify-center items-center bg-gray-100  h-28 w-44
           border border-transparent rounded-lg m-2"
          >
            <img className="w-28 align-middle" src="https://i.postimg.cc/25St8Lgq/download.png" alt="name" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TechStacks;
