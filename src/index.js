import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
import firebase from 'firebase/app';
import { composeWithDevTools } from 'redux-devtools-extension';


import {useSelector} from 'react-redux';
import {isLoaded} from 'react-redux-firebase';

const store = createStore(rootReducer, 
  composeWithDevTools(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  reduxFirestore(firebase, fbConfig),

  )
  );

  const profileSpecificProps = {
    userProfile: "users",
    useFirestoreForProfile: true,
    enableRedirectHandling: false,
    resetBeforeLogin: false,
  }

  const rrfConfig = {
    userProfile: "users",
  };
  const rrfProps = {
    firebase,
    config: rrfConfig && fbConfig && profileSpecificProps,  // here you set the config property to rrfconfig which you added earlier.
    dispatch: store.dispatch,
    createFirestoreInstance,
  };

  function AuthIsLoaded({ children }) {
    const auth = useSelector((state) => state.firebase.auth);
    if (!isLoaded(auth))
      return (
        <div className="center">
          {" "}
          <p>Loading...</p>
        </div>
      );
    return children;
  }


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
    <App />
    </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
