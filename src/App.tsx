import Card from './components/Card/Card';
import './App.css';

const DataCart = {
  title: 'Новая коллекция',
  description: 'Откройте мир моды и комфорта с нашей новой коллекцией',
  buttonDescription: 'К покупкам'
}

const DataCart2 = {
  title: 'Мир стиля ',
  description: 'Создайте свой уникальный образ с товарами из нашей коллекции!',
  buttonDescription: 'К покупкам'
}
function App() {
  return (
    <div className="App">
      <Card {...DataCart}>
        <img width="250px" src='https://dasart.ru/userdata/image/88/07/8807de639332a5659e55e6416b45ba77.jpg' alt='photo'/>
      </Card>
      <Card {...DataCart2}>
      </Card>
    </div>
  );
}

export default App;
