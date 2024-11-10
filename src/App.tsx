import { Container } from 'react-bootstrap';
import './App.css';
import { UserInfoProps } from './models/UserInfoProps.model';
import UserInfo from './components/UserInfo';
import Card from './components/Card';

function App() {
  const user: UserInfoProps = {
      name: "Bob Jones", 
      age: 45,
      email: "bobby1jones@gmail.com"
    }
  
  return (
    <Container>
      <div>
        <UserInfo {...user} />
      </div>
      <Card>
        <h2>Example of a Text Child</h2>
        <p>More really cool example text</p>
      </Card>
      <Card>
        <ol>
          <li>Example Listing</li>
          <li>Using elements as a child</li>
        </ol>
      </Card>
    </Container>
  );
}

export default App;
