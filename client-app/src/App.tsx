import { useEffect, useState } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import { Header, List } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/activities").then((response) => {
      console.log(response);
      setActivities(response.data);
    });
    return () => {};
  }, []);

  return (
    <div>
      <Header as="h2" icon="users" content="Reactivi20" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <div>
        <List>
          {activities.map((item: any) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </List>
      </div>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
