// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,s
// )



import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { persistStore } from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
// import HttpsRedirect from 'react-https-redirect';
import store from './store/store';


let persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

      <PersistGate loading={null} persistor={persistor}>
        {/*<HttpsRedirect> */}

          <App />

       {/* </HttpsRedirect> */}
      </PersistGate>

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals();