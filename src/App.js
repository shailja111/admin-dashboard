import { LoginSocialFacebook } from 'reactjs-social-login';  // Ensure this is the correct package
import { FacebookLoginButton } from 'react-social-login-buttons'; // Ensure the package is installed
import './App.css';

// Import icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

// Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// import Header from './components/Header';
// import SideBar from './components/SideBar';

function App() {
  return (
    <>
      {/* <Header />
      <SideBar /> */}

      <LoginSocialFacebook
        appId="1257900685572448" // Make sure this App ID is correct
        onResolve={(response) => {
          console.log('Login Success:', response);
        }}
        onReject={(error) => {
          console.error('Login Failed:', error);
        }}
      >
        <FacebookLoginButton />
      </LoginSocialFacebook>
    </>
  );
}

export default App;
