import BookContextProvider from "./context/BookContext";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import NewBookeForm from "./components/NewBookForm";
function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookeForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
