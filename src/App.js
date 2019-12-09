import React from "react";
import ContactCard from "./components/ContactCard";

function App() {
  return (
    <div className="contacts">
      <ContactCard
        contact={{
        name:"Mr.Whiskerson",
        imgUrl:"http://placekitten.com/300/200",
        phone:"(212) 555-1234",
        email:"mr.whiskaz@catnap.meow",
        }}
      />

      <ContactCard
        contact={{
        name:"Fluffykins",
        imgUrl:"http://placekitten.com/400/200",
        phone:"(212) 555-2345",
        email:"fluff@catnap.meow",
        }}
      />

      <ContactCard
        contact={{
        name:"Destroyer",
        imgUrl:"http://placekitten.com/400/300",
        phone:"(212) 555-3456",
        email:"ofworlds@catnap.meow",
        }}
      />

      <ContactCard
        contact={{
        name:"Felix",
        imgUrl:"http://placekitten.com/500/200",
        phone:"(212) 555-4567",
        email:"thecat@catnap.meow",
        }}
      />
    </div>
  );
}

export default App;
