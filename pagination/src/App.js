import logo from './logo.svg';
import './App.css';
import Pagination from './Pagination';

function App() {
  return (
    <div className="App">
      <Pagination totalPages={10} currentPage={1} onPageChange={(page) => console.log(page)} />
    </div>
  );
}

export default App;
