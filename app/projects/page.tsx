"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
const projects = [

  {
    id: 1,
    title: "Exterior Villas",
        img: ["/img/villa4/1.jpeg", "/img/villa4/2.jpeg","/img/villa4/3.jpeg","/img/villa4/4.jpeg", "/img/villa4/5.jpeg","/img/villa4/6.jpeg"],
  },
  {
    id: 2,
    title: "Interior Villas",
    img: ["/img/livingRoom/1.jpeg", "/img/livingRoom/2.jpeg","/img/livingRoom/3.jpeg", "/img/livingRoom/4.jpeg"
      ,"/img/livingRoom/5 (2).jpeg"
    ],
  },
  {
    id: 3,
   title: "Town House",
    img: ["/img/villa1/1.jpeg", "/img/villa1/2.jpeg","/img/villa1/3.jpeg","/img/villa1/4.jpeg"],
  },
  {
    id: 4,
    title: "Inside Glare",
    img: ["/img/1.jpeg", "/img/2.jpeg"],
 
  },
];

const ProjectsPage = () => {
  return (
    <div className="container md:h-screen mt-20 py-10">
      <h1 className="text-5xl font-bold text-center mb-10">Our Projects</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.id}`}
            key={project.id}
            className="block overflow-hidden rounded-2xl hover:shadow-2xl transition-shadow"
          >
            <Image
              src={project.img[0]}
              alt={project.title}
              width={400}
              height={400}
              className="w-full h-64 object-cover"
            />
            <h2 className="text-center mt-2 font-bold">{project.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
