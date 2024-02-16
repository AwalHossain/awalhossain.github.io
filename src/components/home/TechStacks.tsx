import React from 'react';
import aws from '../../images/tech/aws.svg';
import azure from '../../images/tech/azure.svg';
import css from '../../images/tech/css.svg';
import docker from '../../images/tech/docker.svg';
import gatsby from '../../images/tech/gatsby.svg';
import html from '../../images/tech/html.svg';
import js from '../../images/tech/js.svg';
import mongodb from '../../images/tech/mongodb.svg';
import next from '../../images/tech/next.svg';
import node from '../../images/tech/node.svg';
import postgres from '../../images/tech/postgres.svg';
import react from '../../images/tech/react.svg';
import redis from '../../images/tech/redis.svg';
import redux from '../../images/tech/redux.svg';
import tailwind from '../../images/tech/tailwind.svg';
import typescript from '../../images/tech/typescript.svg';
import './TechStacks.css';
import H, { hLevel } from '../shared/H';

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



const TechStacks = () => (
  <section className="clients my-20 py-4">
    <div className=" m-auto overflow-hidden">
      <div className=" text-center mb-20 relative">
        {/* <h1 className=" text-black text-5xl font-semibold pb-5">Skills</h1> */}
        <H level={hLevel.h1} className="mb-1 font-extrabold tracking-tight">
        Skills
      </H>
        <p className=" dark:text-white text-2xl mb-4">I’ve been working with the skills.</p>
        <div className="absolute w-10 h-0.5 bg-red-500 left-1/2 transform -translate-x-1/2" />
      </div>
      <div className="content-group flex flex-col lg:flex-row justify-center">
        <div className="content-card flex flex-col justify-center">

          <div className="client-item one hoopsai flex justify-center items-center bg-gray-100 dark:bg-gray-900 w-full lg:w-3/6 h-20 lg:h-28 rounded-lg m-2">
            <img className="object-contain w-full h-full" src={html} alt="name" />
          </div>

        </div>
        <div className="content-card flex flex-col justify-center">
          <div className="client-item hoopsai lg:flex hidden justify-center items-center bg-gray-100 dark:bg-gray-900 w-full md:w-3/12 h-20 lg:h-24 rounded-lg m-2">
            <img className="object-contain w-full h-full" src={css} alt="name" />
          </div>
          <div className="client-item hoopsai two flex justify-center items-center bg-gray-100 dark:bg-gray-900 w-full md:w-3/12 h-20 lg:h-24 rounded-lg m-2">
            <img className="object-contain w-full h-full" src={js} alt="name" />
          </div>
        </div>
        <div className="content-card flex flex-col justify-center">
          <div className="client-item hoopsai three flex justify-center items-center bg-gray-100 dark:bg-gray-900 w-full lg:w-3/5 h-20 lg:h-24 rounded-lg m-2">
            <img className="object-contain w-full h-full" src={typescript} alt="name" />
          </div>
          <div className="client-item hoopsai lg:flex hidden justify-center items-center bg-gray-100 dark:bg-gray-900 w-full lg:w-3/5 h-20 lg:h-24 rounded-lg m-2">
            <img className="object-contain w-full h-full" src={node} alt="name" />
          </div>
          <div className="client-item hoopsai lg:flex hidden justify-center items-center bg-gray-100 dark:bg-gray-900 w-full lg:w-3/5 h-20 lg:h-24 rounded-lg m-2">
            <img className="object-contain w-full h-full" src={tailwind} alt="name" />
          </div>
        </div>
        <div className="content-card flex flex-col justify-center">
          <div className="client-item react four hoopsai flex justify-center items-center bg-gray-100 dark:bg-gray-900 lg:w-3/5 h-20 lg:h-24 rounded-lg m-2">
            <img className="object-contain w-full h-full" src={react} alt="name" />
          </div>
          <div className="client-item hoopsai lg:flex hidden justify-center items-center bg-gray-100 dark:bg-gray-900 lg:w-3/5 h-20 lg:h-24 rounded-lg m-2">
            <img className="object-contain w-full h-full" src={next} alt="name" />
          </div>
          <div className="client-item hoopsai lg:flex hidden justify-center items-center bg-gray-100 dark:bg-gray-900 lg:w-3/5 h-20 lg:h-24 rounded-lg m-2">
            <img className="object-contain w-full h-full" src={gatsby} alt="name" />
          </div>
          <div className="client-item hoopsai lg:flex hidden justify-center items-center bg-gray-100 dark:bg-gray-900 lg:w-3/5 h-20 lg:h-24 rounded-lg m-2">
            <img className="object-contain w-full h-full" src={redux} alt="name" />
          </div>
        </div>
        <div className="content-card flex flex-col justify-center">
          <div className="client-item hoopsai lg:flex hidden justify-center items-center bg-gray-100 dark:bg-gray-900 lg:w-3/5 h-20 lg:h-24 rounded-lg m-2">
            <img className="object-contain w-full h-full" src={mongodb} alt="name" />
          </div>
          <div className="client-item five hoopsai flex justify-center items-center bg-gray-100 dark:bg-gray-900 lg:w-3/5 h-20 lg:h-24 rounded-lg m-2">
            <img className="object-contain w-full h-full" src={postgres} alt="name" />
          </div>
          <div className="client-item hoopsai lg:flex hidden justify-center items-center bg-gray-100 dark:bg-gray-900 lg:w-3/5 h-20 lg:h-24 rounded-lg m-2">
            <img className="object-contain w-full h-full" src={redis} alt="name" />
          </div>
        </div>
        <div className="content-card flex flex-col justify-center">
          <div className="client-item hoopsai flex six justify-center items-center bg-gray-100 dark:bg-gray-900 lg:w-3/5 h-20 lg:h-24 rounded-lg m-2">
            <img className="object-contain w-full h-full" src={docker} alt="name" />
          </div>
          <div className="client-item lg:flex hidden hoopsai  justify-center items-center bg-gray-100 dark:bg-gray-900 lg:w-3/5 h-20 lg:h-24 rounded-lg m-2">
            <img className="object-contain w-full h-full" src={azure} alt="name" />
          </div>
        </div>
        <div className="content-card  flex flex-col justify-center">
          <div className="client-item seven hoopsai flex justify-center items-center bg-gray-100 dark:bg-gray-900 lg:w-3/5 h-20 lg:h-24 rounded-lg m-2">
            <img className="object-contain w-full h-full" src={aws} alt="name" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TechStacks;
