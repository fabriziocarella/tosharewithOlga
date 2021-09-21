import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header /> {/*Añadimos el componente Header --> Header contiene todos las etiquetas que van en Header */}
      <Main /> {/*Añadimos el componente Main --> Main contiene todos las etiquetas que van en Main */}
      <Footer /> {/*Añadimos el componente Footer --> Footer contiene todos las etiquetas que van en Footer */}
    </div>
  );
}
export default App;
