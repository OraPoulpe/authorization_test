import {useState} from "react";
import {useDispatch} from 'react-redux';
import {setUser} from '../store/slices/userSlice';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  ч

  
  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;








// const auth = getAuth();

    // console.log(user);
    // dispatch(
    //   setUser({
    //     email: email,
    //     id: uid,
    //     token: user.accessToken,
    //   })
    // );
    // push("/");

    // .catch(() => alert("Invalid user!"));
    // signInWithEmailAndPassword(auth, email, password)
    //   .then(({ user }) => {
    //     console.log(user);
    //     dispatch(
    //       setUser({
    //         email: user.email,
    //         id: user.uid,
    //         token: user.accessToken,
    //       })
    //     );
    //     push("/");
    //   })
    //   .catch(() => alert("Invalid user!"));