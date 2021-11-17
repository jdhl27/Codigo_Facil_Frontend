import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormComponent from './components/Form';
import Navigation from './layaouts/Navigation';

import './App.css';
import { Col, Row } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navigation />
      <div className="containerFormImage">
        <Row>
          <Col>
            <FormComponent />
          </Col>
          <Col>
           <img src={logo} className="App-logo" alt="logo" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
