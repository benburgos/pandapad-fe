import { useEffect, useState } from 'react';

const Main = () => {
    const [data, setData] = useState(null);

  const URL = 'http://localhost:8000/tickets';

  async function getData() {
    const response = await fetch(URL).then(response => response.json())
    setData(response)
  }

  useEffect(() => {
    getData()
  }, []);

  return(
    <ul>
        {data.map(e => (
            <li key={e.id}>{e.subject}</li>
        ))}
    </ul>
  );
};

export default Main;
