import { useEffect, useState } from 'react';

const Main = () => {
  const [ticket, setTicket] = useState(null);

  const URL = 'http://localhost:8000/tickets';

  async function getTickets() {
    const response = await fetch(URL).then((response) => response.json());
    setTicket(response);
  }

  async function createTicket(ticket) {
    await fetch(`${URL}/create'`, {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify(ticket),
    });
    getTickets();
  }

  async function updateTicket(ticket, id) {
    await fetch(`${URL}/tickets/edit?ticketID=${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ticket),
    });
    getTickets();
  }

  async function deleteTicket(id) {
    await fetch(`${URL}/tickets/delete?ticketID=${id}`, {
      method: 'DELETE',
    });
    getTickets();
  }

  useEffect(() => {
    getTickets();
  }, []);

  return <h1>Main Component</h1>;
};

export default Main;
