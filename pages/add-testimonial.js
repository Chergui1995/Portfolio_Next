import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/AddTestimonial.module.css';
import Layout from '../components/Layout';
const AddTestimonial = () => {
  const [form, setForm] = useState({
    name: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    message: ''
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  }

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!form.name) {
      errors.name = "Le nom est requis.";
      valid = false;
    }

    if (!form.message) {
      errors.message = "Le message est requis.";
      valid = false;
    }

    setErrors(errors);
    return valid;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
     
      console.log("Testimonial submitted successfully", form);
  
      setForm({
        name: '',
        message: ''
      });
      setErrors({});
     
      router.push('/testimonials');
    }
  }

  return (
    <Layout>
    <div className={`container mt-5 ${styles.addTestimonialPage}`}>
      <h1 className="text-center mb-4">Ajouter un Témoignage</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nom</label>
          <input
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>
        <button type="submit" className="btn btn-primary">Envoyer</button>
      </form>
    </div>
    </Layout>
  );
}

export default AddTestimonial;
