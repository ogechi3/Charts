import "./App.css";
import Cards from "./components/Cards";
import Category from "./components/Category";
import EmptySection from "./components/Dashboard/EmptySection";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Cards />
      <Category />
      <Table />
      <EmptySection/>
    </>
  );
}

export default App;
