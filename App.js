import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};

    if (formData.firstName.length < 3) {
      newErrors.firstName = 'FirstName should have at least 3 chars';
    }

    if (formData.lastName.length < 1) {
      newErrors.lastName = 'LastName should have at least 1 char';
    }

    if (!formData.email.includes('@')) {
      newErrors.email = 'Email should contain @';
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number should have 10 digits';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
        </div>

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <div className="text-danger">{errors.phone}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
