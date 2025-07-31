const skills = {
  technical: [
    { name: "Python", url: "/skillslogo/python.png", id: 1 },
    { name: "JavaScript", url: "/skillslogo/javascript.png", id: 2 },
    { name: "React.js", url: "/skillslogo/react.png", id: 3 },
    { name: "Node.js", url: "/skillslogo/node.png", id: 4 },
    { name: "Java", url: "/skillslogo/java.png", id: 5 },
    { name: "Express.js", url: "/skillslogo/express.png", id: 6 },
    { name: "MongoDb", url: "/skillslogo/mongodb.png", id: 7 },
    { name: "Mysql", url: "/skillslogo/mysql.png", id: 8 },
    { name: "Git", url: "/skillslogo/github.png", id: 9 },
    { name: "AWS", url: "/skillslogo/aws.png", id: 10 },
  ],
  soft: [
    { name: "Teamwork", id: 1 },
    { name: "Problem-Solving", id: 2 },
    { name: "Communication", id: 3 },
    { name: "Adaptability", id: 4 },
    { name: "Leadership", id: 5 },
  ],
  Certifications: [
    {
      name: "Javascript",
      issued: "Scaler",
      url: "/certificates/javascript course.jpg",
      about:"In recognition of the completion of the tutorial: JavaScript Certification Course",
    },
    {
      name: "Machine Learning",
      issued: "Scaler",
      url: "/certificates/maths for ml.jpg",
      about:"In recognition of the completion of the tutorial: Maths for Machine Learning",
    },
    {
      name: "Node.js",
      issued: "Scaler",
      url: "/certificates/node.js certificate.jpg",
      about:"In recognition of the completion of the tutorial: Node JS Certification Course",
    },
    {
      name: "Machine Learning",
      issued: "SWAYAM",
      url: "/certificates/Introduction to Machine Learning_page-0001.jpg",
      about:"SWAYAM,NPTEL online certification for the completion of Introduction to Machine Learning Certification in Elite grade"
    },
    {
      name: "Java",
      issued: "SWAYAM",
      url: "/certificates/Programming In Java_page-0001.jpg",
      about:"SWAYAM,NPTEL online certification for the completion of Programming in Java Certification",
    },
    {
      name: "AI & ML",
      issued: "Udemy",
      url: "/certificates/aiml starter.jpg",
      about:"Certificate of Completion in Artificial Intelligence and Machine Learning with no code from Udemy",
    },
    {
      name: "AI & ML",
      issued: "Udemy",
      url: "/certificates/aiml beginner.jpg",
      about:"Certificate of Completion of Introduction to Artificial Intelligence and Machine Learning from Udemy",
    },
    {
      name: "AI & ML",
      issued: "Udemy",
      url: "/certificates/ai essentials.jpg",
      about:"Certificate of Completion of the essentials in Artificial Intelligence from Udemy",
    },
    {
      name: "Java",
      issued: "Udemy",
      url: "/certificates/java a-z bootcamp.jpg",
      about:"Certificate of Completion of A-Z from Core and Advanced Java Visually from Udemy",
    },
    {
      name: "GitBash",
      issued: "Udemy",
      url: "/certificates/github basics.jpg",
      about:"Certificate of Completion in Git Bash Basics from Udemy",
    },
    {
      name: "Java",
      issued: "Udemy",
      url: "/certificates/java using vs.jpg",
      about:"Certificate of Completion in Java Complete Course using VS Code from Udemy"
    },
    {
      name: "Javascript",
      issued: "Udemy",
      url: "/certificates/js complete.jpg",
      about:"Certificate of Completion in Javascript for Beginners - The Complete introduction to JS from Udemy"
    },
    {
      name: "Linux",
      issued: "Udemy",
      url: "/certificates/linux terminal.jpg",
      about:"Certificate of Completion in Linux Terminal for beginners from Udemy"
    },
    {
      name: "Node.js",
      issued: "Udemy",
      url: "/certificates/nodejs.jpg",
      about:"Certificate of Completion in NodeJS Masterclass (Express, MongoDB, OpenAI) - 2024 from Udemy"
    },
    {
      name: "PHP",
      issued: "Udemy",
      url: "/certificates/PHP.jpg",
      about:"Certificate of Completion in PHP for Beginners:PHP Crash Course from Udemy"
    },
    {
      name: "Ubuntu",
      issued: "Udemy",
      url: "https://my-portfolio-asset.s3.ap-south-1.amazonaws.com/Certificates/ubuntu.jpg",
      about:"Certificate of Completion in the Complete Ubuntu Linux Server Administration Course from Udemy"
    },
    {
      name: "Gitbash",
      issued: "Udemy",
      url: "/certificates/gitbash.jpg",
      about:"Certification of Completion of Gitbash Basics from Udemy"
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
      link: "http://blog-omega-teal-11.vercel.app",
    },
  ],
  Experience: [
    {
      role: "Networking Engineer Intern",
      company: "Integra Survillence Pvt. Ltd.",
      date: "June 2023 - July 2023",
      description:
        "Monitored and resolved network performance issues using tools like Wireshark and SolarWinds to optimize connectivity and bandwidth.",
    },
    {
      role: "Cloud Engineer Intern",
      company: "Accent Techno Softs Pvt. Ltd.",
      date: "June 2024 - July 2024",
      description:
        " Designed and automated scalable cloud infrastructure with AWS, Azure, or GCP using tools like Terraform, Ansible, and CI/CD pipelines to enhance performance and consistency across environments",
    },
  ],
  Achievements: [
    {
      head: "Scout",
      cont1: "Cadet in Scout",
      cont2:
        "I actively participated as a scout during my school years, fostering teamwork, discipline, and leadership skills",
    },
    {
      head: "1st",
      cont1: "In Quiz Competition",
      cont2:
        "Secured first place in a quiz competition held at Christ College, Puducherry, showcasing my knowledge and quick thinking skills.",
    },
    {
      head: "NCC",
      cont1: "B Certificate",
      cont2:
        "Proudly served as an NCC cadet in college, developing leadership, discipline, and a strong sense of national responsibility",
    },
  ],
};

export default skills;
