import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
//import ListGroup from "./components/ListGroup";

// function App() {

  // let items = ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Machakos"];

  // const handleSelectedItem = (item: string) => {
  //   console.log(item);
  // };

  // return (
  //   <div>
  //     <ListGroup items={items} heading="Cities" onSelectItem={ handleSelectedItem}/>
  //   </div>
  // );


//   function App() {
//     return (
//     <div>
//       <Alert>
//         Hello <span>Ancent</span>
//       </Alert>  
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Alert>
//         Hello <span>Ancent</span>
//       </Alert>
//     </div>
//   );
// }

function App() {
  const [alertVisible, setAlertVisiblility] = useState(false);

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisiblility(false)}>My Alert</Alert>}
      <Button color="primary" onClick={() => setAlertVisiblility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;