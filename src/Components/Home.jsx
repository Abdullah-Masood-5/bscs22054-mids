// import React, { useEffect, useState,useContext } from 'react';
// import '../Styles/Home.css';
// import { ThemeCounterContext } from '../ThemeCounterContext';

// const Home = () => {
//   const [stats, setStats] = useState({ clients: 0, projects: 0, awards: 0 });

//   // Simulating a data fetch with useEffect
//   useEffect(() => {
//     // Simulating an API call with setTimeout
//     setTimeout(() => {
//       setStats({
//         clients: 120,
//         projects: 75,
//         awards: 30,
//       });
//     }, 1000);
//   }, []);

//   return (
//     <div className="home-container">
//       {/* Hero Section */}
//       <section className="hero">
//         <div className="hero-content">
//           <h1>Welcome to Our Professional Business</h1>
//           <p>Delivering innovative solutions for your business success.</p>
//           <a href="#services" className="cta-button">Discover Our Services</a>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="services-section" id="services">
//         <h2>Our Services</h2>
//         <div className="services">
//           <div className="service">
//             <h3>Consulting</h3>
//             <p>We offer expert consulting to guide your business through complex decisions.</p>
//           </div>
//           <div className="service">
//             <h3>Development</h3>
//             <p>End-to-end development solutions tailored to meet your needs.</p>
//           </div>
//           <div className="service">
//             <h3>Marketing</h3>
//             <p>Strategic marketing services to help you grow your brand.</p>
//           </div>
//         </div>
//       </section>

//       <div className="home-counter">
//       <h1>Welcome to the Home Page!</h1>
//     </div>

//       {/* Stats Section */}
//       <section className="stats-section">
//         <h2>Our Achievements</h2>
//         <div className="stats">
//           <div className="stat">
//             <h3>{stats.clients}</h3>
//             <p>Happy Clients</p>
//           </div>
//           <div className="stat">
//             <h3>{stats.projects}</h3>
//             <p>Completed Projects</p>
//           </div>
//           <div className="stat">
//             <h3>{stats.awards}</h3>
//             <p>Awards Won</p>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="testimonials-section">
//         <h2>What Our Clients Say</h2>
//         <div className="testimonials">
//           <div className="testimonial">
//             <p>"Working with this company was a fantastic experience. Their team truly understood our needs."</p>
//             <h4>John Doe, CEO of TechCo</h4>
//           </div>
//           <div className="testimonial">
//             <p>"Highly professional and reliable. They delivered our project on time and exceeded our expectations."</p>
//             <h4>Jane Smith, Director at BusinessCorp</h4>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="cta-section">
//         <h2>Ready to Grow Your Business?</h2>
//         <p>Contact us today to find out how we can help you achieve success.</p>
//         <a href="#contact" className="cta-button">Get in Touch</a>
//       </section>
//     </div>
//   );
// };

// export default Home;


import ListingsGrid from "./ListingMovies";
import "../Styles/ListingMovies.css"; // Import the CSS file

const Home = ({ category }) => {
  return (
    <div className="home">
      <ListingsGrid category={category} />
    </div>
  );
};

export default Home;