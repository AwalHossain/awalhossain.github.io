import { Projects } from "../types/Project";

export const projects:Projects = {
  'Reely-A-MERN-Video-Streaming-App': {
    id: 'Reely-A-MERN-Video-Streaming-App',
    blogURL:"/blog/2024/streaming",
    name: '🎥 Reely- A MERN Video Streaming App',
    server: { url: 'https://github.com/awalHossain/video_streaming_service_server/' },
    client: {
      url: 'https://github.com/AwalHossain/video_streaming_client'
    },
    demoURL: { url: 'https://reely.tech' },
    cover: { srcPath: 'projects/video-streaming/reely.png' },
    startDate: '2023-04-25',
    endDate: '2024-01-25',
    summary: [
      'MERN Video Streaming is a cutting-edge, open-source platform for video streaming',
    ],
    tags: [
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Redux Toolkit' },
      { name: 'NodeJs' },
      { name: 'ExpressJs' },
      { name: 'ExpressJs' },
      { name: 'Socket.io' },
      { name: 'BullMQ' },
      { name: 'MongoDB' },
      { name: 'Redis' },
    ],
    gitHubRepo: {
      owner: 'AwalHossain',
      repo: 'video_streaming_service_server',
    },
    details: [
      {
        title: 'Home Page',
        image: { srcPath: 'projects/video-streaming/cover.png' },
        date: '2024-01-30',
        link: { url: '#', caption: 'video list' },
      },
      {
        title: 'Video upload and processing',
        image: { srcPath: 'projects/video-streaming/up.png' },
        date: '2024-01-30',
        link: { url: 'https://news.ycombinator.com/front?day=2021-04-16', caption: 'Hacker News archive' },
      },
      {
        title: 'Video streaming',
        image: { srcPath: 'projects/video-streaming/pl.png' },
        date: '2021-01-30',
        link: { url: 'https://www.producthunt.com/posts/js-image-carver', caption: 'Product page' },
      },
    ],
    features:[
      [
        'Users can upload videos and optionally, images to the server. The progress of video processing is displayed in real-time',
        'Users can browse and play videos, similar to YouTube. Each video displays its view count, duration, and upload time',
        'Users can like and unlike videos, enhancing engagement and interaction',
        'A tag system is implemented to display related videos when a user plays a video',
        'Users can manage their own videos, including updating and deleting.',
        'The frontend is optimized with React.memo, useMemo, and useCallback for efficient rendering'
      ],
      [
        'Real-time video processing with notifications upon completion',
        'Three-tier backend services for API, video conversion, and HTTP serving',
        'Converts any format video into MP4 and applies a watermark if an image is provided',
        'Create thumbnail from the video',
        'Transforms the video into adaptive bitrate HLS format (480p & 1080p) for optimal streaming quality.',
        'Upon successful conversion, the video is uploaded to a CDN bucket storage. This allows users to stream videos seamlessly from anywhere in the world.',
        'BullMQ manages the job queue, passing one job to the next upon completion',]
    ],
    overview:"MERN Video Streaming is a cutting-edge, open-source platform for video streaming, offering a comprehensive, full-stack solution utilizing the latest MERN stack technologies. With MERN Video Streaming, users can easily upload, manage, and stream videos on demand, providing a seamless experience. This project features a video processing capability that provides real-time notifications upon completion.The backend is comprised of three services, utilizing Redis messaging for communication. These include an API server, a video conversion service, and an HTTP server serving HLS video files. On the client side, the project uses create-react-app and MUI library, along with socket.io-client and React Context.",
    featured:{
      isFeatured: true,
      priority: 1,
      title : 'Reely MERN Video Streaming App',
      cover: { srcPath: 'projects/video-streaming/reely.png' },
      summary: [
        'MERN Video Streaming is a cutting-edge, open-source platform for video streaming',
      ],
      id: 'Reely-A-MERN-Video-Streaming-App',
    },
    youtubeURL:"https://youtu.be/RCRwublmR9E"
  },
  'Bookish-A-Book-Management-Site': {
    id: 'Bookish-A-Book-Management-Site',
    name: '📚 Bookish Book Management Site',
    server: { url: 'https://github.com/AwalHossain/Bookish' },
    client: {
      url: 'https://github.com/AwalHossain/Bookish'
    },
    demoURL: { url: 'https://oceanlibrary.netlify.app/' },
    cover: { srcPath: 'projects/bookish/reader.jpg' },
    startDate: '2023-09-18',
    endDate: '2023-09-27',
    summary: [
      'Bookish is a web application that allows users to discover, review, and manage books',
    ],
    tags: [
      { name: 'ReactJS' }, 
      { name: 'NodeJs' },
      { name: 'ExpressJs' },
      { name: 'MongoDB' },
      { name: 'RTK' },
      { name: 'Tailwind CSS' },
    ],
    gitHubRepo: {
      owner: 'AwalHossain',
      repo: 'video_streaming_service_server',
    },
    details: [
      {
        title: 'Add new Book to the list',
        image: { srcPath: 'projects/bookish/addBook.png' },
        date: '2023-08-30',
        link: { url: '', caption: '' },
      },
      {
        title: 'Home page',
        image: { srcPath: 'projects/bookish/home.png' },
        date: '2023-07-30',
        link: { url: '', caption: '' },
      },
      {
        title: 'Reading List',
        image: { srcPath: 'projects/bookish/read.png' },
        date: '2023-07-30',
        link: { url: '', caption: '' },
      },
    ],
    featured:{
      isFeatured: true,
      priority: 2,
      title : 'Bookish- A Book Management Site',
      cover: { srcPath: 'projects/bookish/pile.jpg' },
      summary: [
        'Bookish is a web application that allows users to discover, review, and manage books',
      ],
      id: 'Bookish-A-Book-Management-Site',
    },
    features:[
      [
        'Users can browse a list of all books on the website, or they can search for books by title, author, or genre',
        'Users can filter the list of books by title, author, genre, publication date, and other criteria',
        'Logged-in users can add reviews for books they have read. Reviews should include a rating, a brief summary, and any other thoughts the user has about the book',
        'Logged-in users can add books to their wishlist and reading list',
        'Logged-in users can add books to the website by providing the title, author, genre, publication date, and other information.',
        'Logged-in users can delete books they have added to the website'
      ]
    ],
    overview:"Bookish is a user-friendly web application designed to cater to book enthusiasts by providing a platform for discovering, reviewing, and managing books. With a focus on simplicity and intuitive design, Bookish offers a range of features to enhance the user experience. At its core, Bookish enables users to explore a vast collection of books through various means. Whether browsing through a comprehensive list or conducting targeted searches by title, author, or genre, users can easily find books of interest. Additionally, the application provides robust filtering options, allowing users to refine their search results based on specific criteria such as title, author, genre, and publication date.",
    youtubeURL:""
  },
  'DevBlog-a-developer-blog-site': {
    id: 'DevBlog-a-developer-blog-site',
    name: '📝 DevBlog: Developer Community Blog Site',
    // server: { url: "https://github.com/AwalHossain/Dev-Blog" },
    client: {
      url: 'https://github.com/AwalHossain/Dev-Blog'
    },
    demoURL: { url: 'https://bookishly.netlify.app/' },
    cover: { srcPath: 'projects/devblog/blog.png' },
    startDate: '2023-06-25',
    endDate: '2023-07-12',
    summary: [
      'Dev-Blog is a user-friendly blog site featuring several blogs on various topics related to development',
    ],
    tags: [
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Redux Toolkit' },
      { name: 'NodeJs' },
      { name: 'ExpressJs' },
      { name: 'Tailwind CSS' },
    ],
    gitHubRepo: {
      owner: 'AwalHossain',
      repo: 'Dev-Blog',
    },
    details: [
      {
        title: 'Blog post list',
        image: { srcPath: 'projects/devblog/cover.png' },
        date: '2023-04-30',
        link: { url: '', caption: '' },
      },
      {
        title: 'Blog Details',
        image: { srcPath: 'projects/devblog/detail.png' },
        date: '2023-04-30',
        link: { url: '', caption: '' },
      },
      {
        title: 'Save Blog to Reading List',
        image: { srcPath: 'projects/devblog/save.png' },
        date: '2023-04-30',
        link: { url: '', caption: '' },
      },
    ],
    featured:{
      isFeatured: true,
      priority: 3,
      title : 'DevBlog: Developer Community Blog Site',
      cover: { srcPath: 'projects/devblog/blog.png' },
      summary: [
        'Dev-Blog is a user-friendly blog site featuring several blogs on various topics related to development',
      ],
      id: 'DevBlog-a-developer-blog-site',
    },
    features:[
      [   "Display all blogs in an organized grid layout",
      "Users can filter blogs based on their preferences",
      "Sorting: Blogs can be sorted by newest addition, most liked, and default",
      "Users can like blogs and save them for later reading",]
    ],
    overview:"Dev-Blog is a user-friendly blog site featuring several blogs on various topics related to development. The site utilizes a grid system to display all the blogs, allowing users to filter and sort them based on their preferences. Users can also like and save blogs for reading later. This project is built using React, Node.js, MongoDB, RTK Query, and TypeScript. Note that the site is still a work in progress, with additional features such as commenting, authentication, and the ability to add new blogs planned for future development.",
    youtubeURL:""
  },
  'pc-builder': {
    id: 'pc-builder',
    name: '💻 PC Builder',
    // server: { url: "hhttps://github.com/AwalHossain/PC-Builder" },
    client: {
      url: 'https://github.com/AwalHossain/PC-Builder'
    },
    demoURL: { url: 'https://pc-builder-chi-seven.vercel.app' },
    cover: { srcPath: 'projects/pcBuilder/cover.png' },
    startDate: '2023-08-15',
    endDate: '2023-08-25',
    summary: [
      'Discover and customize your dream PC with our intuitive builder, featuring organized component categories',
    ],
    tags: [
      { name: 'NextJs' },
      { name: 'Redux Toolkit' },
      { name: 'Next-auth' },
      { name: 'Redis' },
    ],
    gitHubRepo: {
      owner: 'AwalHossain',
      repo: 'video_streaming_service_server',
    },
    details: [
      {
        title: 'Home page',
        image: { srcPath: 'projects/pcBuilder/home.png' },
        date: '2023-08-30',
        link: { url: '#', caption: 'home page' },
      },
      {
        title: 'Product Details',
        image: { srcPath: 'projects/pcBuilder/detail.png' },
        date: '2023-08-30',
        link: { url: '#', caption: 'PC Builder page' },
      },
      {
        title: 'Pc Builder',
        image: { srcPath: 'projects/pcBuilder/pcbuild.png' },
        date: '2023-08-30',
        link: { url: '#', caption: 'PC Builder page' },
      },
    ],
    featured:{
      isFeatured: true,
      priority: 4,
      title : 'PC Builder',
      cover: { srcPath: 'projects/pcBuilder/cover.png' },
      summary: [
        'Discover and customize your dream PC with our intuitive builder, featuring organized component categories',
      ],
      id: 'pc-builder',
    },
    features:[
    [  "Users can browse and select components for their PC build",
    "Users can view detailed information about each component",
    "Users can add and remove components from their build",
    "Users can view the total cost of their build",
    "Users can save their build for later viewing",]
    ],
    overview:"The PC Builder application is a comprehensive, user-friendly platform designed to assist both tech enthusiasts and novices in creating their ideal personal computer setup. This web-based tool provides a streamlined, intuitive interface where users can browse through a wide array of PC components, view detailed information about each product, and select the components they want to include in their build. The application is deployed on Vercel and can be accessed via a live link, making it easily accessible to users worldwide.",
    youtubeURL:""
  },
  'health-coach': {
    id: 'health-coach',
    name: '🩺 Health-Coach',
    // server: { url: "hhttps://github.com/AwalHossain/PC-Builder" },
    client: {
      url: 'https://github.com/AwalHossain/-healthcare-related-website-AwalHossain'
    },
    demoURL: { url: 'https://healthcare-services-c55cf.web.app' },
    cover: { srcPath: 'projects/health/cover.png' },
    startDate: '2022-06-25',
    endDate: '2022-06-29',
    summary: [
      'Healthcoach is your all-in-one platform for achieving holistic wellness, offering personalized coaching, diverse health options, and expert guidance.',
    ],
    tags: [
      { name: 'ReactJs' },
      { name: 'ReduxJs' },
      { name: 'Firebase' },
      { name: 'MongoDB' },
    ],
    gitHubRepo: {
      owner: 'AwalHossain',
      repo: '-healthcare-related-website-AwalHossain',
    },
    details: [
      {
        title: 'Home page',
        image: { srcPath: 'projects/health/home.png' },
        date: '2023-08-30',
        link: { url: '#', caption: 'home page' },
      },
      {
        title: 'Login Page',
        image: { srcPath: 'projects/health/login.png' },
        date: '2023-08-30',
        link: { url: '#', caption: 'Loging page' },
      },
      {
        title: 'Specialists',
        image: { srcPath: 'projects/health/specialist.png' },
        date: '2023-08-30',
        link: { url: '#', caption: 'Specialist' },
      },
    ],
    featured:{
      isFeatured: true,
      priority: 6,
      title : 'Health-Coach',
      cover: { srcPath: 'projects/health/cover.png' },
      summary: [
        'Healthcoach is your all-in-one platform for achieving holistic wellness, offering personalized coaching, diverse health options, and expert guidance.',
      ],
      id: 'health-coach',
    },
    features:[
      ["User can able choose trainer for their health training program",
      "User will able set meeting with professional health coach",
      "User can track their progress and set goals for their health journey",
      "User can access a library of educational resources and articles on various health topics",
      "User can connect with a community of like-minded individuals for support and motivation"]
    ],
    overview: "At Healthcoach, our mission is to guide individuals on their journey towards holistic health and well-being. We understand that achieving optimal health requires a multifaceted approach, which is why we offer a comprehensive range of services and resources designed to empower our users to become the best version of themselves.",
    youtubeURL:""
  },
};
