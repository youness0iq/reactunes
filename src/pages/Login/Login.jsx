import { Mail, Lock } from 'lucide-react';
import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/userServices';

const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(user);
      localStorage.setItem("token", response.token);
      navigate("/");
    } catch (e) {
      alert(e);
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Please enter your details to login</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <Mail className="input-icon" />
            <input
              type="email"
              onChange={handleChange}
              placeholder="Enter your email"
              required
              name="email"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <Lock className="input-icon" />
            <input
              type="password"
              onChange={handleChange}
              placeholder="Enter your password"
              required
              name="password"
              className="form-input"
            />
          </div>


          <button type="submit" className="submit-button">
            Sign In
          </button>

          <p className="signup-prompt">
            {"Don't have an account? "}
            <button type="button" className="signup-link" onClick={() => navigate('/signup')}>
              Sign up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;