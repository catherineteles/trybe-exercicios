import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const appointment = ['Terminar Exercícios', 'Jantar', 'Fechamento'];

function App() {
  return appointment.map((app) => Task(app));
}

export default App;
