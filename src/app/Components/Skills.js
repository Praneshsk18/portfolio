const skills = {
  technical: [
    { name: "Python", url: "/python.png",id:1 },
    { name: "JavaScript", url: "/javascript.png",id:2 },
    { name: "React.js", url: "/react.png",id:3 },
    { name: "Node.js", url: "/node.png",id:4 },
    { name: "Java", url: "/java.png",id:5 },
    { name: "PHP", url: "/php.png",id:6 },
    { name: "Express.js", url: "/express.png",id:7 },
    { name: "MongoDb", url: "/mongodb.png",id:8 },
    { name: "Mysql", url: "/mysql.png",id:9 },
    { name: "Git", url: "/github.png",id:10 },
    { name: "AWS", url: "/aws.png",id:11 },
  ],
  soft: [
    {name:"Teamwork",id:1},
    {name:"Problem-Solving",id:2},
    {name:"Communication",id:3},
    {name:"Adaptability",id:4},
    {name:"Leadership",id:5},
  ],
  Certifications: [
    {
      name: "Javascript",
      issued: "Scaler",
      url: "https://my-portfolio-asset.s3.ap-south-1.amazonaws.com/Certificates/js%20certificate.png",
    },
    {
      name: "Machine Learning",
      issued: "Scaler",
      url: "https://my-portfolio-asset.s3.ap-south-1.amazonaws.com/Certificates/ML%20certificate.png",
    },
    {
      name: "Machine Learning",
      issued: "SWAYAM",
      url: "https://my-portfolio-asset.s3.ap-south-1.amazonaws.com/Certificates/NPTEL%20ML.png",
    },
    {
      name: "Java",
      issued: "SWAYAM",
      url: "https://my-portfolio-asset.s3.ap-south-1.amazonaws.com/Certificates/NPTEL%20Java.png",
    },
    {
      name: "GitBash",
      issued: "Udemy",
      url: "https://my-portfolio-asset.s3.ap-south-1.amazonaws.com/Certificates/gitbash.jpg",
    },
    {
      name: "Java",
      issued: "Udemy",
      url: "https://my-portfolio-asset.s3.ap-south-1.amazonaws.com/Certificates/j.jpg",
    },
    {
      name: "Javascript",
      issued: "Udemy",
      url: "https://my-portfolio-asset.s3.ap-south-1.amazonaws.com/Certificates/javascript.jpg",
    },
    {
      name: "Linux",
      issued: "Udemy",
      url: "https://my-portfolio-asset.s3.ap-south-1.amazonaws.com/Certificates/linux.jpg",
    },
    {
      name: "Node.js",
      issued: "Udemy",
      url: "https://my-portfolio-asset.s3.ap-south-1.amazonaws.com/Certificates/Nodejs.jpg",
    },
    {
      name: "PHP",
      issued: "Udemy",
      url: "https://my-portfolio-asset.s3.ap-south-1.amazonaws.com/Certificates/php.jpg",
    },
    {
      name: "Ubuntu",
      issued: "Udemy",
      url: "https://my-portfolio-asset.s3.ap-south-1.amazonaws.com/Certificates/ubuntu.jpg",
    },
    {
      name: "Github",
      issued: "Udemy",
      url: "https://my-portfolio-asset.s3.ap-south-1.amazonaws.com/Certificates/github.jpg",
    },
  ],
  Projects: [
    {
      projectname: "Hate Speech Detection",
      description:
        "This is a Flask application where users input text or audio, which is then categorized by a pre-trained decision tree classifier into any of the following labels: Hate Speech, Offensive Speech, or Normal. Users can either type their input or upload an audio file, which is then processed with speech recognition to convert the audio into text. The text is cleaned, vectorized, and passed through the classifier to predict the category. Results are displayed on a separate page. The app is built for real-time processing and accepts both text and audio inputs.",
      technologies: [
        "Flask",
        "Python",
        "pandas",
        "NumPy",
        "nltk",
        "scikit-learn",
        "speech_recognition",
        "pydub",
        "HTML/CSS",
        "JavaScript",
      ],
      link: "https://github.com/Praneshsk18/HateSpeech",
    },
    {
      projectname: "Blog",
      description:
        "This is a full-stack web application developed with the MERN stack, including MongoDB, Express.js, React, and Node.js. The blog has been designed for seamless content creation and management. The users can easily publish, edit, and organize their blog posts. A dynamic front-end is built with React, while a robust back-end is powered by Node.js and Express. It ensures that users have a smooth and engaging experience. The MongoDB database allows it to be scalable and flexible enough to store posts, user profiles, and comments. This project showcases modern web development practices, authentication features, and a responsive UI, making it a great platform for sharing thoughts and experiences online.",
      technologies: [
        "React.js",
        "React Router",
        "Tailwind CSS",
        "Fetch API",
        "Node.js",
        "Express.js",
        "JWT (JSON Web Token)",
        "Cors",
        "MongoDb",
      ],
      features: [
        "User Authentication",
        "Profile Management",
        "Forgot Password & Reset",
        "Create, Read, Update, Delete (CRUD)",
      ],
      link: "http://blog-omega-teal-11.vercel.app",
    },
  ],
  Experience:[
    {
      role:"Networking Engineer Intern",
      company:"Integra Survillence Pvt. Ltd.",
      date:"June 2023 - July 2023",
      description:"Monitored and resolved network performance issues using tools like Wireshark and SolarWinds to optimize connectivity and bandwidth.",
    },{
      role:"Cloud Engineer Intern",
      company:"Accent Techno Softs Pvt. Ltd.",
      date:"June 2024 - July 2024",
      description:" Designed and automated scalable cloud infrastructure with AWS, Azure, or GCP using tools like Terraform, Ansible, and CI/CD pipelines to enhance performance and consistency across environments"
    }
  ],
  Achievements:[
    {
      head:"Scout",
      cont1:"Cadet in Scout",
      cont2:"I actively participated as a scout during my school years, fostering teamwork, discipline, and leadership skills"
    },
    {
      head:"1st",
      cont1:"In Quiz Competition",
      cont2:"Secured first place in a quiz competition held at Christ College, Puducherry, showcasing my knowledge and quick thinking skills."
    },{
      head:"NCC",
      cont1:"B Certificate",
      cont2:"Proudly served as an NCC cadet in college, developing leadership, discipline, and a strong sense of national responsibility"
    }

  ]
};

export default skills;
