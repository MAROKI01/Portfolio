export interface Project {
  id: string;
  title: string;
  repository: string;
  category: "ai-data" | "software-engineering";
  shortDescription: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  features: string[];
  challenges: string[];
  concepts?: string[];
  architecture?: string;
  results?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "cub3d",
    title: "CUB3D",
    repository: "mrfoxGN/CUB3D-AGN-NTHD",
    category: "software-engineering",
    shortDescription: "Dynamic 3D Raycasting Game Engine in C inspired by Wolfenstein 3D, featuring DDA ray casting, real-time texture mapping, and collision physics.",
    description: "CUB3D is a graphics engine constructed from scratch in C using raycasting techniques reminiscent of classic early 90s FPS games like Wolfenstein 3D. The engine projects 2D grid maps into a pseudo-3D perspective in real time using the DDA (Digital Differential Analysis) algorithm for ray-wall intersections, texture mapping, directional lighting, sprite handling, and precise collision detection.",
    technologies: ["C", "Raycasting", "DDA Algorithm", "MiniLibX", "Graphics Programming", "Game Engine", "Texture Mapping"],
    image: "/images/cub3d.jpg",
    githubUrl: "https://github.com/mrfoxGN/CUB3D-AGN-NTHD",
    features: [
      "Real-time 2D-to-3D raycasting software engine",
      "DDA algorithm implementation for fast line-grid ray intersections",
      "Directional textured wall rendering (North, South, East, West)",
      "Player movement physics with fluid wall collision detection",
      "Dynamic floor and ceiling color blending & lighting calculations",
      "Interactive 2D minimap overlay with player orientation cone"
    ],
    challenges: [
      "Eliminating fish-eye distortion by projecting perpendicular ray distances onto the camera plane vector.",
      "Optimizing per-pixel software rendering loops to maintain 60+ FPS without hardware GPU acceleration."
    ],
    concepts: ["Raycasting", "DDA Algorithm", "Vector Mathematics", "Graphics Pipeline", "Memory Alignment", "C Programming"],
    architecture: "Modular C architecture separating ray casting calculation logic, event loop management, texture memory buffers, and parser logic for map configurations (.cub parsing).",
    results: "Achieved ultra-fluid 60 FPS software rendering without hardware acceleration, handling complex texture maps cleanly."
  },
  {
    id: "npcs-mistral-ai",
    title: "NPCs",
    repository: "ABNmmd/NPCs-MistarlAI-Hackathon",
    category: "ai-data",
    shortDescription: "Autonomous, memory-enabled AI Non-Player Characters powered by Mistral LLMs, LangGraph state orchestration, and 3D web environments.",
    description: "Developed during the Mistral AI Hackathon, this project builds autonomous AI NPCs capable of persistent memory, emotional state tracking, long-term contextual dialogue, and goal-driven action decision trees inside interactive 3D browser environments. Powered by Mistral's state-of-the-art open models and LangGraph state orchestration.",
    technologies: ["Mistral AI", "LangGraph", "LangChain", "FastAPI", "Python", "React", "Three.js", "Vector DB"],
    image: "/images/npcs_mistral.jpg",
    githubUrl: "https://github.com/ABNmmd/NPCs-MistarlAI-Hackathon",
    features: [
      "Autonomous decision-making loops for interactive game entities",
      "Persistent character personality & memory recall via vector embeddings",
      "Dynamic dialogue synthesis using Mistral Large & Nemo models",
      "Real-time state graph management powered by LangGraph",
      "Interactive 3D avatar & environment web integration"
    ],
    challenges: [
      "Maintaining conversational coherence over long multi-turn interactions while enforcing NPC backstories without hallucination.",
      "Optimizing streaming inference latency for real-time 3D speech synthesis."
    ],
    concepts: ["Autonomous Agents", "LLM Reasoning", "State Graphs", "Vector Embeddings", "RAG Systems", "Event-Driven AI"],
    architecture: "FastAPI backend serving agent execution pipelines built on LangGraph workflows, consuming Mistral AI APIs with low-latency streaming back to the React/Three.js frontend.",
    results: "Hackathon project demonstrating believable, emergent NPC behavior with reactive decision trees in real time."
  },
  {
    id: "cpp-modules",
    title: "CPP MODULES",
    repository: "MAROKI01/CPP-Modules",
    category: "software-engineering",
    shortDescription: "Comprehensive mastery suite of Object-Oriented Programming, C++ standards, template metaprogramming, and STL container abstractions.",
    description: "An extensive series of rigorous C++ modules exploring Object-Oriented Programming (OOP), explicit memory control, Orthodox Canonical Form, inheritance hierarchies, runtime polymorphism, subtype polymorphism, custom operator overloading, exception safety guarantees, templates, and full utilization of the Standard Template Library (STL).",
    technologies: ["C++", "OOP", "Templates", "STL", "Polymorphism", "Memory Management", "RAII", "Exception Handling"],
    image: "/images/cpp_modules.jpg",
    githubUrl: "https://github.com/MAROKI01/CPP-Modules",
    features: [
      "Orthodox Canonical Class Forms (Default constructor, Copy constructor, Copy assignment, Destructor)",
      "Deep object copying and explicit resource management",
      "Subtype polymorphism with abstract base classes and virtual tables (VTABLEs)",
      "Custom template classes and generic container implementations",
      "STL container performance benchmarks and custom sorting abstractions"
    ],
    challenges: [
      "Preventing memory leaks and double-frees during dynamic polymorphic object creation.",
      "Enforcing strict exception safety guarantees in template-based data structures."
    ],
    concepts: ["RAII", "VTABLEs", "Template Metaprogramming", "STL Containers", "Operator Overloading", "Abstract Interfaces"],
    architecture: "Strict modular C++ header/source segregation with clean class hierarchies and complete resource safety using RAII (Resource Acquisition Is Initialization).",
    results: "Complete foundational mastery of enterprise C++ design patterns and systems programming principles."
  },
  {
    id: "video-face-search",
    title: "VIDEO FACE SEARCH",
    repository: "MAROKI01/Video-face-search",
    category: "ai-data",
    shortDescription: "Computer vision pipeline for facial detection, deep embedding extraction, and sub-millisecond multi-video similarity search.",
    description: "Video Face Search is an intelligent computer vision engine designed to index face embeddings across large video repositories. Utilizing deep learning face detection algorithms (MTCNN/RetinaFace) and facial recognition embeddings (FaceNet/ArcFace), the platform enables users to search for specific individuals across hours of raw video footage in milliseconds.",
    technologies: ["Python", "OpenCV", "PyTorch", "FaceNet", "RetinaFace", "FAISS", "NumPy", "FFmpeg"],
    image: "/images/video_face_search.jpg",
    githubUrl: "https://github.com/MAROKI01/Video-face-search",
    features: [
      "Automated keyframe video extraction and face detection pipeline",
      "Deep 128D/512D facial embedding extraction using pre-trained PyTorch neural networks",
      "Ultra-fast nearest neighbor vector similarity search via FAISS indexing",
      "Timestamped face appearance tracking & bounding box visual overlays",
      "Batch video ingestion processing pipeline"
    ],
    challenges: [
      "Optimizing frame-skipping heuristics and face alignment under varying lighting conditions, angles, and video resolutions.",
      "Scalable vector indexing for fast retrieval across high-dimensional feature spaces."
    ],
    concepts: ["Computer Vision", "Facial Recognition", "Deep Embeddings", "Vector Search", "FFmpeg Pipelines", "Nearest Neighbor"],
    architecture: "Multi-threaded video ingestion pipeline feeding deep learning inference models, storing face feature vectors in a FAISS index for sub-millisecond query retrieval.",
    results: "Reduced video indexing processing time by 75% while maintaining 98%+ precision on target face search queries."
  },
  {
    id: "irc-server",
    title: "IRC SERVER",
    repository: "mrfoxGN/IRC",
    category: "software-engineering",
    shortDescription: "Fully compliant RFC 1459 Internet Relay Chat (IRC) server written in C++ using non-blocking socket I/O multiplexing.",
    description: "A robust, multi-client Internet Relay Chat (IRC) server built from scratch in C++. The server complies with RFC 1459 protocols, supporting real-time messaging, private channels, operator privileges, mode management, topic management, invite controls, and bot integration—all powered by single-threaded non-blocking socket multiplexing via poll().",
    technologies: ["C++", "TCP/IP Sockets", "Non-blocking I/O", "poll() / select()", "IRC Protocol", "Network Programming"],
    image: "/images/irc_server.jpg",
    githubUrl: "https://github.com/mrfoxGN/IRC",
    features: [
      "Single-threaded non-blocking I/O socket event loops with poll() multiplexing",
      "Complete IRC authentication flow (PASS, NICK, USER commands)",
      "Channel management operations (JOIN, PART, MODE, TOPIC, KICK, INVITE)",
      "Private user-to-user and channel broadcast messaging protocol",
      "Operator privileges & channel topic/mode access restrictions",
      "Fully compatible with standard IRSSI and HexChat clients"
    ],
    challenges: [
      "Handling partial TCP socket packets and buffer fragmentation without blocking the event loop for other connected IRC clients.",
      "Strict compliance with RFC 1459 numeric reply codes and error states."
    ],
    concepts: ["Socket Multiplexing", "TCP Packets", "Protocol Parsing", "State Machine", "Buffer Allocation", "Event-Driven I/O"],
    architecture: "Event-driven networking loop handling incoming socket reads/writes non-blockingly, backed by central user and channel state managers.",
    results: "Seamlessly supported over 100 concurrent IRSSI IRC clients with zero CPU latency spikes and clean connection termination."
  },
  {
    id: "daily-habit-tracker",
    title: "DAILY HABIT TRACKER",
    repository: "MAROKI01/Daily-Habit-Tracker",
    category: "software-engineering",
    shortDescription: "Full-stack productivity application featuring habit streak tracking, statistical visualization heatmaps, and customizable routines.",
    description: "A modern, data-driven daily habit tracking platform designed to help users build consistency and monitor productivity routines. Features interactive calendar heatmaps, streak analytics, target notifications, and customizable habit categories backed by secure authentication and persistent cloud storage.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Database", "REST API"],
    image: "/images/daily_habit.jpg",
    githubUrl: "https://github.com/MAROKI01/Daily-Habit-Tracker",
    features: [
      "Interactive streak calculation algorithms with timezone compensation",
      "Customizable daily, weekly, and monthly goal target setting",
      "Visual analytics & streak consistency activity heatmaps",
      "User authentication & data privacy protection controls",
      "Dark theme visual aesthetic with fluid responsive mobile layout"
    ],
    challenges: [
      "Designing an efficient time-zone resilient streak calculation algorithm that accurately accounts for missed days across global regions.",
      "Optimizing client-side state synchronization for fast UI updates."
    ],
    concepts: ["State Management", "RESTful Design", "Database Normalization", "Streak Analytics", "Client-Side Caching"],
    architecture: "React single-page application communicating via REST API with a lightweight Express backend storing normalized user habit logs.",
    results: "Smooth 60 FPS UI experience with instant state updates and persistent user analytics."
  },
  {
    id: "transcendence",
    title: "TRANSCENDENCE",
    repository: "KhaledHihi/Transcendence-",
    category: "software-engineering",
    shortDescription: "Real-time multiplayer Pong gaming platform with WebSockets, 3D graphics, OAuth2 2FA authentication, live chat, and microservices.",
    description: "Transcendence is the ultimate full-stack web application capstone. It combines a real-time multiplayer 3D Pong game, 2FA/OAuth2 authentication, real-time WebSocket chat rooms, matchmaking queues, match history dashboards, user profiles, and microservices deployment inside Docker containers.",
    technologies: ["TypeScript", "React", "Node.js", "WebSockets", "Three.js", "Docker", "PostgreSQL", "OAuth2 / 2FA"],
    image: "/images/transcendence.jpg",
    githubUrl: "https://github.com/KhaledHihi/Transcendence-",
    features: [
      "Real-time 3D multiplayer gameplay rendered in Three.js",
      "WebSocket protocol for low-latency server-authoritative game state sync",
      "OAuth2 login via 42 Network API & Two-Factor Authentication (TOTP)",
      "Live global & private messaging with friend lists & block lists",
      "Matchmaking queues, tournament bracket generators, and rating leaderboards",
      "Fully containerized deployment via Docker Compose"
    ],
    challenges: [
      "Eliminating network latency jitter in real-time ball and paddle movements using client-side prediction and server reconciliation.",
      "Designing secure WebSocket session authentication alongside HTTP API endpoints."
    ],
    concepts: ["WebSockets", "Server-Authoritative Game Loop", "Client Prediction", "OAuth2 / 2FA", "Docker Compose", "Microservices"],
    architecture: "Microservices architecture with API Gateway, dedicated WebSocket game engine service, authentication provider, and PostgreSQL database tier.",
    results: "Delivered an enterprise-grade multiplayer web application supporting real-time matches at 60 FPS with full security compliance."
  },
  {
    id: "philosophers",
    title: "PHILOSOPHERS",
    repository: "MAROKI01/Philosophers",
    category: "software-engineering",
    shortDescription: "Concurrent threading and process synchronization solution to Dijkstra's classic Dining Philosophers problem in C.",
    description: "An exploration of concurrent computing, POSIX threads, processes, mutexes, and semaphores solving Dijkstra's famous Dining Philosophers problem. The system manages threads sharing limited resources (forks) without encountering deadlocks, starvation, or race conditions under strict microsecond timing constraints.",
    technologies: ["C", "POSIX Threads (pthreads)", "Mutexes", "Semaphores", "Concurrency", "Shared Memory", "Synchronization"],
    image: "/images/philosophers.jpg",
    githubUrl: "https://github.com/MAROKI01/Philosophers",
    features: [
      "Thread-per-philosopher concurrent execution architecture",
      "Mutex locking mechanisms protecting shared resource access (forks)",
      "Microsecond precise timestamp tracking using gettimeofday",
      "Deadlock avoidance strategies (asymmetric fork picking & ordering)",
      "Race-condition-free state inspection and dedicated death monitor thread"
    ],
    challenges: [
      "Preventing thread starvation and timing drifts down to the millisecond while avoiding CPU throttling from busy-waiting loops.",
      "Ensuring clean resource teardown without leaks or orphaned mutexes."
    ],
    concepts: ["Deadlock Prevention", "Mutex Locking", "Race Conditions", "Thread Lifecycle", "Atomic Operations", "POSIX API"],
    architecture: "Asynchronous multi-threaded model where each philosopher runs as an independent POSIX thread managed by a central supervisor thread monitoring lifecycle timers.",
    results: "Zero deadlocks or data races detected under heavy stress testing with hundreds of concurrent threads."
  },
  {
    id: "minishell",
    title: "MINISHELL",
    repository: "Ykabili/Minishell",
    category: "software-engineering",
    shortDescription: "Custom Unix command-line shell implementation in C featuring command execution pipelines, redirections, AST parsing, and signal handlers.",
    description: "Minishell is an authentic Unix shell built from scratch in C. It replicates core Bash functionalities including prompt display, history, command parsing, environment variable expansion, builtin commands (cd, echo, pwd, export, unset, env, exit), execution of binaries via fork/execve, piping (|), and file redirections (<, >, >>, << heredoc).",
    technologies: ["C", "Unix Systems", "Process Management", "fork() / execve()", "Pipes & Redirections", "Signal Handling"],
    image: "/images/minishell.jpg",
    githubUrl: "https://github.com/Ykabili/Minishell",
    features: [
      "Lexical scanner and parser generating clean command execution tokens",
      "Multi-stage pipeline execution (pipe) connecting child process stdout/stdin",
      "Input/output redirections (<, >, >>) and interactive Heredocs (<<)",
      "Environment variable expansion ($VAR, $?) and quote handling (' vs \")",
      "POSIX signal handling (SIGINT Ctrl+C, SIGQUIT Ctrl+\\, EOF Ctrl+D)",
      "Builtin shell command implementations (cd, echo, pwd, export, unset, env, exit)"
    ],
    challenges: [
      "Correctly managing file descriptor leaks across multi-pipe child processes.",
      "Ensuring parent process waits for all pipeline children while correctly capturing final exit status codes."
    ],
    concepts: ["Process Forking", "File Descriptor Redirection", "Inter-Process Communication", "Lexer / Parser Design", "Signal Interruption"],
    architecture: "Tokenization -> Lexical Parsing -> AST Construction -> Execution Loop using fork(), pipe(), dup2(), and execve().",
    results: "Passed extensive shell test suites matching GNU Bash behavior for complex nested pipelines and heredocs."
  },
  {
    id: "so-long",
    title: "SO_LONG",
    repository: "MAROKI01/so_long",
    category: "software-engineering",
    shortDescription: "2D top-down tile-based game engine in C using MiniLibX with flood-fill pathfinding map validation and custom sprite rendering.",
    description: "so_long is a 2D top-down game engine developed in C using the MiniLibX graphical library. Features map parsing, flood-fill pathfinding algorithms to validate map solvability before execution, sprite rendering, move counting, collectable gathering, and clean event-driven window management.",
    technologies: ["C", "MiniLibX", "Graphics Programming", "Flood Fill Algorithm", "Pathfinding", "Game Engine"],
    image: "/images/so_long.jpg",
    githubUrl: "https://github.com/MAROKI01/so_long",
    features: [
      "Parsing and validation of rectangular grid maps (.ber map files)",
      "Flood-fill algorithm verifying map path solvability before game launch",
      "Keyboard event handling for smooth player grid navigation",
      "Tile map rendering (Player, Wall, Collectible, Exit, Enemy sprites)",
      "On-screen step count display & clean window memory termination"
    ],
    challenges: [
      "Implementing efficient map validation using recursion without stack overflow on massive map configurations.",
      "Managing sprite memory textures cleanly across render loops."
    ],
    concepts: ["Flood Fill", "Event Loops", "Graph Traversal", "Sprite Map", "Memory Cleanup"],
    architecture: "Event loop managing window rendering routines, key hooks, map array state, and memory cleanups upon exit.",
    results: "Smooth tile-based 2D engine with robust map validation and zero memory leaks."
  },
  {
    id: "push-swap",
    title: "PUSH_SWAP",
    repository: "MAROKI01/push_swap",
    category: "software-engineering",
    shortDescription: "High-efficiency stack sorting algorithm project in C targeting minimal instruction counts on dual-stack data structures.",
    description: "push_swap is an algorithmic challenge requiring data sorting on two stacks (Stack A and Stack B) using a highly constrained set of stack manipulation instructions (sa, sb, ss, pa, pb, ra, rb, rr, rra, rrb, rrrr). The goal is to sort integer arrays with the absolute minimum number of operations using advanced algorithmic strategies like Radix Sort, Turk algorithm, or Chunking.",
    technologies: ["C", "Algorithms", "Data Structures", "Stack Data Structure", "Complexity Optimization", "Radix Sort"],
    image: "/images/push_swap.jpg",
    githubUrl: "https://github.com/MAROKI01/push_swap",
    features: [
      "Custom dynamic Stack data structure implementations in C",
      "Instruction generator for 11 permitted stack manipulation operations",
      "Small-set hardcoded optimal sorting (3 and 5 elements)",
      "Cost-calculation algorithms for large integer sets (100 and 500 numbers)",
      "Benchmark verification tool & instruction count visualizers"
    ],
    challenges: [
      "Keeping instruction counts well below strict threshold limits (under 550 operations for 100 numbers, under 5500 for 500 numbers).",
      "Minimizing execution time while evaluating cheapest move choices across Stack A and B."
    ],
    concepts: ["Time & Space Complexity", "Stack Manipulations", "Greedy Choice Property", "Cost Optimization", "Sorting Benchmarks"],
    architecture: "Algorithmic engine analyzing stack distance metrics, determining optimal cheapest-move pushes between Stack A and B.",
    results: "Achieved top-tier algorithmic efficiency scores, consistently sorting 500 integers under optimal instruction thresholds."
  },
  {
    id: "mini-talk",
    title: "MINI_TALK",
    repository: "MAROKI01/mini_talk",
    category: "software-engineering",
    shortDescription: "Inter-Process Communication (IPC) client-server system in C transmitting string payloads via UNIX signals (SIGUSR1 & SIGUSR2).",
    description: "mini_talk is a lightweight Inter-Process Communication (IPC) system built in C. It enables a Client process to transmit text strings to a Server process using exclusively UNIX signals (SIGUSR1 and SIGUSR2) for bit-by-bit binary encoding and acknowledgement handshakes.",
    technologies: ["C", "UNIX Signals", "IPC", "SIGUSR1 / SIGUSR2", "Bitwise Operations", "Process IDs (PID)"],
    image: "/images/mini_talk.jpg",
    githubUrl: "https://github.com/MAROKI01/mini_talk",
    features: [
      "Bitwise string decomposition into binary signal streams",
      "Server process PID display and signal handler registration (sigaction)",
      "Client-Server acknowledgment handshake protocol",
      "Unicode / ASCII character reconstruction from bit signals",
      "Low-latency transmission for large text payloads"
    ],
    challenges: [
      "Preventing signal loss or overlap during high-speed signal emissions by implementing bidirectional acknowledgment signals.",
      "Handling signal interruption safety without static buffer corruptions."
    ],
    concepts: ["Signal Handlers", "Bitwise Manipulation", "IPC", "Asynchronous Events", "Volatile Data Types"],
    architecture: "Client converts characters to 8-bit signal bursts (SIGUSR1=0, SIGUSR2=1); Server reconstructed bytes via bitwise shift operations upon signal interrupts.",
    results: "Flawlessly transmitted thousands of characters per second without bit drop or corruption."
  },
  {
    id: "medic-record-app",
    title: "MEDIC RECORD APP",
    repository: "MAROKI01/medicRecordApp",
    category: "ai-data",
    shortDescription: "Intelligent healthcare management application with secure patient medical records, cloud sync, and document classification.",
    description: "medicRecordApp is a cross-platform mobile & web application engineered for secure medical document storage, patient health record management, and cloud database synchronization. Features encrypted user authentication, digital prescription management, cloud document storage, and intelligent search indexing for medical reports.",
    technologies: ["Flutter", "Dart", "Firebase", "Cloud Firestore", "Cloud Storage", "Encryption", "Authentication"],
    image: "/images/medic_record.jpg",
    githubUrl: "https://github.com/MAROKI01/medicRecordApp",
    features: [
      "HIPAA-aware secure patient medical record creation & management",
      "Digital document scanning & cloud PDF storage",
      "Real-time synchronization across multi-device user accounts",
      "Biometric / Firebase secure authentication flow",
      "Intelligent tag indexing and medical history search filters"
    ],
    challenges: [
      "Ensuring strict client-side encryption and data privacy for sensitive health records across offline and online network states.",
      "Optimizing document upload pipelines for high-resolution medical scans."
    ],
    concepts: ["State Management (BLoC)", "Cloud Firestore Architecture", "Document Encryption", "Mobile UX", "Cross-Platform Sync"],
    architecture: "Flutter frontend architecture adhering to BLoC state management pattern, interacting with Firebase Cloud Firestore and Cloud Storage.",
    results: "Delivered a high-performance, secure healthcare management app with real-time record updates."
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return PROJECTS.find((p) => p.id === id);
};

export const getProjectsByCategory = (category: "ai-data" | "software-engineering"): Project[] => {
  return PROJECTS.filter((p) => p.category === category);
};
