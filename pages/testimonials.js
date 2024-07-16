import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Testimonials.module.css';
import Layout from '../components/Layout';
const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    { id: 1, name: 'John Doe', message: 'Super expérience!' },
    { id: 2, name: 'Jane Smith', message: 'Très satisfait du service.' }
  ]);

  return (
    <Layout >
    <div className={`container mt-5 ${styles.testimonialsPage}`}>
      <h1 className="text-center mb-4">Témoignages</h1>
      <Link legacyBehavior  href="/add-testimonial">
        <a className="btn btn-primary mb-4">Ajouter un témoignage</a>
      </Link>
      <div className="list-group">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className={`list-group-item ${styles.listGroupItem}`}>
            <h5>{testimonial.name}</h5>
            <p>{testimonial.message}</p>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  );
}

export default Testimonials;
