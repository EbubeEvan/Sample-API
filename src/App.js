import ResourceBar from "./ResourceBar";
import Table from "./Table";
import { useEffect, useState } from "react";


function App() {

  const [resource, setResource] = useState('users')
  const [items, setItems] = useState([])

  const url = `https://jsonplaceholder.typicode.com/${resource}`
  console.log(url);

  useEffect(() => {
    const fetchResources = async () => {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data);
      setItems(data)
    }

    fetchResources()
  }, [resource] )

  return (
    <div className="App">
      <ResourceBar
       setResource = {setResource}
      />
      <Table
        items={items}
      />
    </div>
  );
}

export default App;
