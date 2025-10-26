"use client"
import Image from "next/image";
import { useParams} from "next/navigation";

const projects = [
  {
    id: "1",
    title: "Exterior Villas",
    img: ["/img/villa4/1.jpeg", "/img/villa4/2.jpeg","/img/villa4/3.jpeg","/img/villa4/4.jpeg", "/img/villa4/5.jpeg","/img/villa4/6.jpeg"],
    description: "Detailed info about Exterior Villas project...",
    years: "2021",
    country:"KSA"
  },
  {
    id: "2",
    title: "Interior Villas",
    img: ["/img/livingRoom/1.jpeg", "/img/livingRoom/2.jpeg","/img/livingRoom/3.jpeg", "/img/livingRoom/4.jpeg"
      ,"/img/livingRoom/5 (2).jpeg"
    ],
    description: "Detailed info about Interior Villas project...",
     years: "2019",
    country:"KSA"
  },
  {
    id: "3",
    title: "Town House",
    img: ["/img/villa1/1.jpeg", "/img/villa1/2.jpeg","/img/villa1/3.jpeg","/img/villa1/4.jpeg"],
    description: "Detailed info about Luxury Homes project...",
     years: "2021",
    country:"KSA"
  },
  {
    id: "4",
    title: "Inside Glare",
    img: ["/img/1.jpeg", "/img/2.jpeg"],
    description: "Detailed info about Modern Apartments project...",
     years: "2021",
    country:"KSA"
  },
];


export default function ProjectPage() {

    const params = useParams();
  const project = projects.find((p) => p.id === params.id);
  if (!project) return <p>Project Not Found</p>;

  return (
    <div className="container mt-20 py-10">
      <h1 className="text-5xl font-bold text-background mb-6">{project.title}</h1>
      <p className="mb-6">{project.description}</p>

      <p className="mb-6">
        {project.years} | {project.country}
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {project.img.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`${project.title} Image ${i + 1}`}
            width={600}
            height={400}
            className="rounded-2xl object-cover hover:shadow-2xl"
          />
        ))}
      </div>
    </div>
  );
}
