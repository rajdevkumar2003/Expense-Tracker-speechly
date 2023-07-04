import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { Provider } from './context/context';
import {SpeechProvider} from '@speechly/react-client'


ReactDOM.render(
<SpeechProvider appId='1d8decdf-544a-4f40-b677-b4266705436a' language='en-US'>
<Provider><App/></Provider>
</SpeechProvider>

, document.getElementById('root'));