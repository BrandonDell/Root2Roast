import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
// import { useMutation } from "@apollo/client";
// import { LOGIN_USER } from "../utils/mutations";
import { useContext, createContext, createRef, useImperativeHandle } from "react";

export const UserContextRef = createRef()

export const UserContext = createContext({
  token: {},
  user: {
    id: 0,
    username: '',
  }
})

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

const UserContextProvider = ({ children }) => {
  const contextValue = {
    token: localStorage.getItem("id_token") || "",
    user:{
      id:0,
      username: "",
    }
  }
useImperativeHandle(UserContextRef, () => contextValue)

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>

  )
}

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // const [login, { error, data }] = useMutation(LOGIN_USER);
  // console.log(data);

  return (
    <ApolloProvider client={client}>
      <UserContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </UserContextProvider>
    </ApolloProvider>
  );
}

export default App;
