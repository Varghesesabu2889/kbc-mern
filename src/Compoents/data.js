const data = [
    {
      id: 1,
      question: "Which of the following is a NoSQL database used in the MERN stack?",
      answers: [
        {
          option: "A",
          text: "MySQL",
          correct: false,
        },
        {
          option: "B",
          text: "MongoDB",
          correct: true,
        },
        {
          option: "C",
          text: "PostgreSQL",
          correct: false,
        },
        {
          option: "D",
          text: "Oracle",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "What does the 'E' in MERN stand for?",
      answers: [
        {
          option: "A",
          text: "Express",
          correct: true,
        },
        {
          option: "B",
          text: "Electron",
          correct: false,
        },
        {
          option: "C",
          text: "Ember",
          correct: false,
        },
        {
          option: "D",
          text: "Elixir",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which library is used in MERN for building the frontend user interface?",
      answers: [
        {
          option: "A",
          text: "Vue.js",
          correct: false,
        },
        {
          option: "B",
          text: "React.js",
          correct: true,
        },
        {
          option: "C",
          text: "Angular",
          correct: false,
        },
        {
          option: "D",
          text: "Svelte",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "In MERN, which technology is responsible for handling HTTP requests and routes?",
      answers: [
        {
          option: "A",
          text: "Node.js",
          correct: false,
        },
        {
          option: "B",
          text: "React.js",
          correct: false,
        },
        {
          option: "C",
          text: "Express.js",
          correct: true,
        },
        {
          option: "D",
          text: "MongoDB",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which package manager is typically used to install dependencies in a MERN project?",
      answers: [
        {
          option: "A",
          text: "pip",
          correct: false,
        },
        {
          option: "B",
          text: "npm",
          correct: true,
        },
        {
          option: "C",
          text: "gem",
          correct: false,
        },
        {
          option: "D",
          text: "composer",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Which language is primarily used for writing backend logic in a MERN stack application?",
      answers: [
        {
          option: "A",
          text: "Python",
          correct: false,
        },
        {
          option: "B",
          text: "PHP",
          correct: false,
        },
        {
          option: "C",
          text: "JavaScript",
          correct: true,
        },
        {
          option: "D",
          text: "Ruby",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "What is the primary purpose of MongoDB in the MERN stack?",
      answers: [
        {
          option: "A",
          text: "Managing frontend state",
          correct: false,
        },
        {
          option: "B",
          text: "Routing requests",
          correct: false,
        },
        {
          option: "C",
          text: "Storing and managing data",
          correct: true,
        },
        {
          option: "D",
          text: "Styling user interfaces",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Which of the following methods is used to send a request to retrieve data from an API in React?",
      answers: [
        {
          option: "A",
          text: "fetch()",
          correct: true,
        },
        {
          option: "B",
          text: "res.json()",
          correct: false,
        },
        {
          option: "C",
          text: "send()",
          correct: false,
        },
        {
          option: "D",
          text: "read()",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Which of the following is a feature of Node.js?",
      answers: [
        {
          option: "A",
          text: "Blocking I/O",
          correct: false,
        },
        {
          option: "B",
          text: "Non-blocking I/O",
          correct: true,
        },
        {
          option: "C",
          text: "Two-way binding",
          correct: false,
        },
        {
          option: "D",
          text: "No built-in modules",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Which lifecycle method in React is called after a component is mounted?",
      answers: [
        {
          option: "A",
          text: "componentDidMount",
          correct: true,
        },
        {
          option: "B",
          text: "componentWillMount",
          correct: false,
        },
        {
          option: "C",
          text: "render",
          correct: false,
        },
        {
          option: "D",
          text: "shouldComponentUpdate",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Which function is used to create a new MongoDB document in Node.js?",
      answers: [
        {
          option: "A",
          text: "insert()",
          correct: false,
        },
        {
          option: "B",
          text: "save()",
          correct: false,
        },
        {
          option: "C",
          text: "create()",
          correct: true,
        },
        {
          option: "D",
          text: "store()",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which of the following is NOT a valid React hook?",
      answers: [
        {
          option: "A",
          text: "useState",
          correct: false,
        },
        {
          option: "B",
          text: "useEffect",
          correct: false,
        },
        {
          option: "C",
          text: "useRouter",
          correct: true,
        },
        {
          option: "D",
          text: "useContext",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "What is the default method used to define routes in Express.js?",
      answers: [
        {
          option: "A",
          text: "app.listen()",
          correct: false,
        },
        {
          option: "B",
          text: "app.route()",
          correct: false,
        },
        {
          option: "C",
          text: "app.get()",
          correct: true,
        },
        {
          option: "D",
          text: "app.link()",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which command is used to install a specific package in a Node.js project?",
      answers: [
        {
          option: "A",
          text: "npm get <package>",
          correct: false,
        },
        {
          option: "B",
          text: "npm install <package>",
          correct: true,
        },
        {
          option: "C",
          text: "npm fetch <package>",
          correct: false,
        },
        {
          option: "D",
          text: "npm load <package>",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Which of the following is used to protect sensitive routes in a MERN app?",
      answers: [
        {
          option: "A",
          text: "CORS",
          correct: false,
        },
        {
          option: "B",
          text: "JWT",
          correct: true,
        },
        {
          option: "C",
          text: "Mongoose",
          correct: false,
        },
        {
          option: "D",
          text: "SessionStorage",
          correct: false,
        },
      ],
    },
  ];
  export default data;  