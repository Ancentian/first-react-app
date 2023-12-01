import ListGroup from "./components/ListGroup";

function App() {
  const items = [
    'Nairobi', 
    'Mombasa',
    'Kisumu',
    'Nakuru',
    'Eldoret',
    'Machakos'
  ]
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
