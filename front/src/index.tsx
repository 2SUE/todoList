import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
      <RecoilRoot>
        <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
        </Suspense>
      </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
