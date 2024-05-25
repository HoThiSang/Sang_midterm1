import CardItem from "./components/CardItem";
import USER_INFORMATION from "./data.js";

function App() {
  return (
    <>
      <header>
        <h1>My Items</h1>
      </header>

      <div className="cards-view">
        <div className="cards-grid">
            {
              USER_INFORMATION.map((user, index)=> (
                <CardItem 
                    key={index}
                    name = {user.name}
                    title = {user.title}
                    description= {user.description}
                    image= {user.image}
                />
              ))
            }
        </div>
      </div>
    </>
  );
}

export default App;
