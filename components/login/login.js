import './LoginForm.css';
import Button from '../Button';
import Link from 'next/link';

const LoginForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Here you can handle the login logic, for example, sending the credentials to the server
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };

  return (
    <div className="login-container">
      <form className="login-form" >
        <h2>Login</h2>
        <Link href='/'>
            <Button>Home</Button>
        </Link>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username"
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            required 
          />
        </div>
        <div>
            <Button>Log In</Button>
        </div>
        <div>
            <Button>Sign Up</Button>
        </div>        
      </form>
    </div>
  );
};

export default LoginForm;
