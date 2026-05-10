const mongoose=require("mongoose");

const Note=require("./models/note.js");

// monggose connect
main()
.then(()=>{
    console.log("connection successful")
}).catch((err)=>{
    console.log(err);
})

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/notes');
}


// const allNotes=[
//     {
//         author:"akash",
//         title:"bcs",
//         content:"i am learning a bachelors of computer sciences from mgm college ",
//         created_at:new Date()
//     },
//     {
//         author:"omkar",
//         title:"computer science",
//         content:"i am learning a computer sciences from mgm college ",
//         created_at:new Date()
//     },
//     {
//         author:"omkar",
//         title:"computer science",
//         content:"i am learning a computer sciences from sggs college ",
//         created_at:new Date()
//     }
// ]

// Note.insertMany(allNotes);






const allNotes = [
{
author:"Akash",
title:"Web Development",
content:`I am learning full stack web development.
I enjoy building responsive websites and applications.
React and Node.js are very interesting technologies.`,
created_at:new Date()
},

{
author:"Omkar",
title:"Computer Science",
content:`I am pursuing computer science engineering.
I practice coding and problem solving daily.
Projects help me improve my practical knowledge.`,
created_at:new Date()
},

{
author:"Rahul",
title:"JavaScript Practice",
content:`JavaScript is my favorite programming language.
I enjoy DOM manipulation and event handling.
Building projects improves my frontend skills.`,
created_at:new Date()
},

{
author:"Sneha",
title:"React Learning",
content:`I recently started learning React.js.
Components and hooks are useful concepts.
I want to build modern applications.`,
created_at:new Date()
},

{
author:"Priya",
title:"Backend APIs",
content:`REST APIs are important for backend systems.
Express.js makes backend development easier.
MongoDB integration is also very useful.`,
created_at:new Date()
},

{
author:"Vikas",
title:"MERN Stack",
content:`I am exploring the MERN stack currently.
Frontend and backend integration feels exciting.
I want to build real-world applications.`,
created_at:new Date()
},

{
author:"Ankit",
title:"GitHub Projects",
content:`GitHub helps manage coding projects easily.
I regularly push commits while learning coding.
Repositories showcase development progress.`,
created_at:new Date()
},

{
author:"Rohit",
title:"CSS Styling",
content:`CSS helps create attractive user interfaces.
Flexbox and Grid improve layout design.
Responsive design improves user experience.`,
created_at:new Date()
},

{
author:"Kunal",
title:"Database Basics",
content:`MongoDB is a flexible NoSQL database.
CRUD operations are easy with Mongoose.
Database design is important for applications.`,
created_at:new Date()
},

{
author:"Aman",
title:"Coding Practice",
content:`Daily coding improves problem solving skills.
Small projects increase practical understanding.
Consistency is important for developers.`,
created_at:new Date()
},

{
author:"Pooja",
title:"Frontend Design",
content:`Modern UI design looks clean and attractive.
Spacing and colors improve readability.
User experience should always be considered.`,
created_at:new Date()
},

{
author:"Sahil",
title:"Learning Node.js",
content:`Node.js allows JavaScript on servers.
Modules and routing are useful features.
Backend development feels very interesting.`,
created_at:new Date()
},

{
author:"Neha",
title:"Bootstrap Components",
content:`Bootstrap makes responsive design easier.
Ready-made classes save development time.
I use Bootstrap for quick layouts.`,
created_at:new Date()
},

{
author:"Yash",
title:"Project Building",
content:`Building projects improves practical skills.
Every project teaches something valuable.
I enjoy creating responsive applications.`,
created_at:new Date()
},

{
author:"Riya",
title:"MongoDB Learning",
content:`MongoDB stores data in JSON format.
Mongoose simplifies database operations.
CRUD functionality is easy to implement.`,
created_at:new Date()
},

{
author:"Harsh",
title:"Express Middleware",
content:`Middleware is useful in Express applications.
It handles requests and validations efficiently.
Custom middleware improves backend structure.`,
created_at:new Date()
},

{
author:"Aditya",
title:"REST API Practice",
content:`REST APIs connect frontend and backend.
HTTP methods are important for CRUD operations.
API testing improves backend understanding.`,
created_at:new Date()
},

{
author:"Sakshi",
title:"Frontend Development",
content:`Frontend development focuses on user interfaces.
HTML and CSS are core technologies.
JavaScript adds interactivity to websites.`,
created_at:new Date()
},

{
author:"Manish",
title:"Responsive Layout",
content:`Responsive websites work on all devices.
Media queries create flexible layouts.
Mobile-friendly UI is very important.`,
created_at:new Date()
},

{
author:"Nikhil",
title:"Learning Git",
content:`Git helps track code changes efficiently.
Version control is important for developers.
GitHub is useful for collaboration.`,
created_at:new Date()
},

{
author:"Ramesh",
title:"Programming Basics",
content:`Programming improves logical thinking skills.
Practice is important for better coding.
I enjoy solving coding challenges.`,
created_at:new Date()
},

{
author:"Tina",
title:"Web UI",
content:`Modern web UI should be responsive.
Animations improve user experience slightly.
Good layouts look more professional.`,
created_at:new Date()
},

{
author:"Deepak",
title:"Backend Routing",
content:`Express routing handles application requests.
Routes connect frontend with backend logic.
Structured routing improves readability.`,
created_at:new Date()
},

{
author:"Meena",
title:"Learning CSS",
content:`CSS styling improves website appearance.
Hover effects create interactive experiences.
Clean UI attracts more users.`,
created_at:new Date()
},

{
author:"Ajay",
title:"HTML Structure",
content:`HTML provides structure to webpages.
Semantic tags improve accessibility.
Clean structure improves readability.`,
created_at:new Date()
},

{
author:"Suresh",
title:"Node Server",
content:`Node.js creates scalable backend servers.
Express simplifies server creation.
Middleware handles requests efficiently.`,
created_at:new Date()
},

{
author:"Naina",
title:"Coding Journey",
content:`Learning coding requires patience and practice.
Projects improve practical understanding.
Consistency helps developers grow.`,
created_at:new Date()
},

{
author:"Varun",
title:"Authentication System",
content:`Authentication secures web applications.
Login and signup systems are important.
JWT tokens improve security handling.`,
created_at:new Date()
},

{
author:"Payal",
title:"Database Connection",
content:`Connecting databases is essential for apps.
MongoDB works well with Node.js.
Mongoose simplifies schema creation.`,
created_at:new Date()
},

{
author:"Arjun",
title:"Learning Express",
content:`Express.js is lightweight and fast.
Routing and middleware are useful concepts.
Backend APIs become easier to build.`,
created_at:new Date()
},

{
author:"Simran",
title:"Responsive Design",
content:`Responsive layouts adapt to different screens.
Media queries improve mobile compatibility.
Modern websites must be responsive.`,
created_at:new Date()
},

{
author:"Karan",
title:"React Components",
content:`React uses reusable components efficiently.
Props help transfer data between components.
Hooks simplify state management.`,
created_at:new Date()
},

{
author:"Divya",
title:"Frontend Skills",
content:`Frontend skills improve website design quality.
Good UI attracts more visitors.
Responsive layouts improve accessibility.`,
created_at:new Date()
},

{
author:"Shubham",
title:"Coding Projects",
content:`Projects improve practical coding experience.
Building apps increases confidence levels.
I enjoy learning new technologies.`,
created_at:new Date()
},

{
author:"Komal",
title:"Modern Websites",
content:`Modern websites should load quickly.
Clean UI improves user engagement.
Accessibility is also important.`,
created_at:new Date()
},

{
author:"Aarti",
title:"Learning React",
content:`React helps create dynamic interfaces.
Components make code reusable and clean.
Frontend development becomes easier.`,
created_at:new Date()
},

{
author:"Mohit",
title:"API Integration",
content:`API integration connects different systems.
Frontend applications fetch backend data.
REST APIs are widely used today.`,
created_at:new Date()
},

{
author:"Tanvi",
title:"Creative Design",
content:`Creative design improves user experience.
Color combinations should look balanced.
Spacing improves readability greatly.`,
created_at:new Date()
},

{
author:"Ritik",
title:"Learning MongoDB",
content:`MongoDB is useful for modern applications.
NoSQL databases are flexible and scalable.
Mongoose simplifies operations.`,
created_at:new Date()
},

{
author:"Bhavna",
title:"JavaScript Logic",
content:`JavaScript handles interactivity in websites.
Functions improve code reusability.
Practice improves programming logic.`,
created_at:new Date()
},

{
author:"Nitesh",
title:"Express Server",
content:`Express servers handle backend requests.
Middleware manages request processing.
Routing organizes application structure.`,
created_at:new Date()
},

{
author:"Ishika",
title:"Frontend Practice",
content:`Frontend practice improves design understanding.
UI layouts should look modern and clean.
Responsive design is very important.`,
created_at:new Date()
},

{
author:"Abhishek",
title:"Learning APIs",
content:`APIs connect frontend and backend systems.
CRUD operations are very important.
Backend knowledge improves development skills.`,
created_at:new Date()
},

{
author:"Sonali",
title:"Web Projects",
content:`Projects increase practical experience levels.
Hands-on learning improves coding understanding.
Building applications feels exciting.`,
created_at:new Date()
},

{
author:"Raj",
title:"Technology Learning",
content:`Learning technology requires regular practice.
Coding improves logical thinking ability.
Projects help understand concepts deeply.`,
created_at:new Date()
},

{
author:"Shreya",
title:"UI Development",
content:`UI development focuses on user experience.
Modern interfaces should look attractive.
Responsive design improves accessibility.`,
created_at:new Date()
},

{
author:"Aakash",
title:"Node Practice",
content:`Node.js is useful for backend development.
Express simplifies API creation greatly.
Middleware improves application structure.`,
created_at:new Date()
},

{
author:"Pritam",
title:"Programming Skills",
content:`Programming skills improve through consistency.
Daily practice increases coding confidence.
Projects improve practical understanding.`,
created_at:new Date()
},

{
author:"Mansi",
title:"React Practice",
content:`React projects improve frontend development skills.
Hooks and props are useful concepts.
Reusable components simplify development.`,
created_at:new Date()
},

{
author:"Suraj",
title:"Web Applications",
content:`Web applications solve real-world problems.
Frontend and backend integration is important.
Databases store application information efficiently.`,
created_at:new Date()
},

{
author:"Tejas",
title:"Developer Journey",
content:`Developer journeys require continuous learning.
Projects improve practical coding abilities.
Consistency leads to long-term growth.`,
created_at:new Date()
}
];

Note.insertMany(allNotes);