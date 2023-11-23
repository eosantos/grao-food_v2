
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorege = localStorage.getItem("user_db");

    if (userToken && usersStorege) {
      const hasUser =
        JSON.parse *
        usersStorege?.filter(
          (user) => user.email === JSON.parse(userToken).email
        );
      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

  const signin = (email, password) => {
    const usersStorege = JSON.parse(localStorage.getItem("users_db"));

    const hasUser = usersStorege?.filter((user) => user.email === email);

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ email, token }));
        setUser({ email, password });
        return;
      } else {
        return "E-mail ou senha incorretos";
      }
    } else {
      return "Usuário não cadastrado";
    }
  };

  const signup = (email, password) => {
    const usersStorege = JSON.parse(localStorage.getItem("users_db"));

    const hasUser = usersStorege?.filter((user) => user.email === email);

    if (hasUser?.length) {
      return "Já tem uma conta com esse E-mail";
    }
    let newUser;

    if (usersStorege) {
      newUser = [...usersStorege, { email, password }];
    } else {
      newUser = [{ email, password }];
    }

    localStorage.setItem("users_db", JSON.stringify(newUser));

    return;
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// import { createContext, useEffect, useState } from "react";

// export const AuthContext = createContext({});

// export const AuthProvider = ({ children }): IAuthProdvider => {
//   const [user, setUser] = useState<IUser | null>();

//   async function authenticate (email: string, password: string) {

//   }

//   function logout() {

//   }

//   return (
//     <AuthContext.Provider
//       value={{...user, authenticate, logout }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };