import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import SearchForm from "./components/SearchForm";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import LocationsList from "./components/LocationsList"


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage}/>
      <Route  path="/characters" component={CharacterList}/>
      <Route  path="/searchform" component={SearchForm}/>
      <Route  path="/location" component={LocationsList}/>
    </main>
  );
}
