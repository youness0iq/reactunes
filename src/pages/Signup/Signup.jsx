import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Signup.module.css';
import { register } from '../../services/userServices';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'firstName':
      case 'lastName':
        return !value.trim() ? `${name === 'firstName' ? 'First' : 'Last'} name is required` : '';
      
      case 'email':
        if (!value.trim()) return 'Email is required';
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email' : '';
      
      case 'password':
        if (!value) return 'Password is required';
        return value.length < 6 ? 'Password must be at least 6 characters' : '';
      
      case 'confirmPassword':
        if (!value) return 'Please confirm your password';
        return value !== formData.password ? 'Passwords do not match' : '';
      
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length === 0) {
      try {
        const {firstName,lastName,email,password} = formData
        const user = {firstName,lastName,email,password}
        const response = await register(user)
        const token = response.token;
        localStorage.setItem('token',token)
        navigate('/')
      }catch(e) {
        alert(e)
      }
    } else {
      setErrors(newErrors);
    }

  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>Create Account</h2>
          <p className={styles.subtitle}>Please fill in your information to sign up</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              placeholder="First Name"
              className={`${styles.input} ${errors.firstName ? styles.inputError : ''}`}
            />
            {errors.firstName && (
              <span className={styles.errorMessage}>{errors.firstName}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              placeholder="Last Name"
              className={`${styles.input} ${errors.lastName ? styles.inputError : ''}`}
            />
            {errors.lastName && (
              <span className={styles.errorMessage}>{errors.lastName}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              placeholder="Email address"
              className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            />
            {errors.email && (
              <span className={styles.errorMessage}>{errors.email}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              placeholder="Password"
              className={`${styles.input} ${errors.password ? styles.inputError : ''}`}
            />
            {errors.password && (
              <span className={styles.errorMessage}>{errors.password}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              placeholder="Confirm Password"
              className={`${styles.input} ${errors.confirmPassword ? styles.inputError : ''}`}
            />
            {errors.confirmPassword && (
              <span className={styles.errorMessage}>{errors.confirmPassword}</span>
            )}
          </div>

          <button type="submit" className={styles.button}>
            Sign Up
          </button>

          <p className={styles.loginPrompt}>
            Already have an account?{' '}
            <button 
              type="button" 
              className={styles.loginLink} 
              onClick={() => navigate('/login')}
            >
              Sign in
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;