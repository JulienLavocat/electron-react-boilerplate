import { library } from '@fortawesome/fontawesome-svg-core';
import fas from '@fortawesome/fontawesome-free-solid';
import { render } from 'react-dom';
import App from './App';

library.add(fas);

render(<App />, document.getElementById('root'));
