import pic1 from "../../public/asssets/projects/book.jpg";
import pic2 from "../../public/asssets/projects/blog.jpg";
import pic3 from "../../public/asssets/projects/prostore.jpg";
import pic4 from "../../public/asssets/projects/flowic.png";
import pic5 from "../../public/asssets/projects/booklab.png";
import pic6 from "../../public/asssets/projects/storecart.jpg";
import pic7 from "../../public/asssets/projects/iphone.jpg";
import pic8 from "../../public/asssets/projects/e-learn.jpg";
import pic9 from "../../public/asssets/projects/ai.png";

import image1 from "../../public/asssets/profile.jpg";
import image2 from "../../public/asssets/client.avif";
import image3 from "../../public/asssets/client1.avif";
const data = {
  webDevelopment: [
    {
      id: 1,
      name: "book store app",
      description:
        " create book store applicaiton in which you perform authencation and all crud operation",
        skills: "Node | React | Express | Mongodb | Tailwind ",
      image: pic1,
    },
    {
      id: 2,
      name: "Blog Apps",
      description:
        "Create full Stack Blog Application with Facebook Google and Github Authencation.",
      skills: "Node | React | Express | Mongodb | Tailwind ",

      image: pic2,
    },
    {
      id: 3,
      name: "Professor Store",
      description:
        "create a store with add to check and checkout functionality.",
      skills: "React | tailwind ",
      image: pic3,
    },
  ],
  softwareDevelopment: [
    {
      id: 4,
      name: "Ic-flow",
      description:
        "A complete paperless office automation system ",
      skills: "Next js |Tailwind | Node | Express | MongoDB | Shadcn",
      image: pic4,
    },
    {
      id: 5,
      name: "Book Lab",
      description:
        "A Book lab a web app in which authentication and download boo detials ",
      skills: "Next js | Node | Express | MongoDb | Shadcn ",
      image: pic5,
    },
    {
      id: 6,
      name: "Store cart ",
      description:
        " Store cart e-commerce based web application .",
      skills: "Next js | Shadcn",

      image: pic6,
    },
  ],
  frontend: [
    {
      id: 7,
      name: "I Phone Landing Page",
      description: " Figma design to complete next js landing page.",
      skills: "Next js | Shadcn",
      image: pic7,
    },
    {
      id: 8,
      name: "Clerk Managment",
      description:
        "Create Clerk managment app of office to manage student records",
      skills: "Next js | Shadcn",
      image: pic8,
    },
    {
      id: 9,
      name: "Food Dx",
      description:
        "Food dx is Ai web app for and image text analysis for health cared, chatbot development, and more.",
      skills: "Next js | Shadcn",
      image: pic9,
    },
  ],
};

export default data;

export const testimonials = [
  {
    id: 1,
    name: "Majid Ali",
    description:
      "As a hands-on experienced MERN Stack Developer, I wish to use my knowledge and experience in working with reputed organizations to utilize my expertise and creativity within dynamic teams. I ensure the delivery of impactful and innovative software solutions that contribute to the growth of the organization. Proficient in problem-solving and debugging, I place emphasis on writing clean, efficient, and maintainable code.",
    role: "MERN Stack Developer",
    company: "I Creativez",
    avatar: image1,
  },
  {
    id: 2,
    name: "James",
    description:
      "Majid's expertise in MERN stack development is truly commendable. He consistently delivers high-quality solutions tailored to our needs and has a knack for turning challenges into opportunities. Highly recommend him for innovative and impactful software development.",
    role: "Software Developer",
    company: "NextGen Apps",
    avatar: image2,
  },
  {
    id: 3,
    name: "Sofia Martinez",
    description:
      "Majid is a highly skilled developer with a great eye for detail. His dedication and problem-solving skills have helped us streamline our workflows and deliver projects ahead of schedule. It's always a pleasure collaborating with him.",
    role: "Freelancer",
    company: "Self-Employed",
    avatar: image3,
  },
];
