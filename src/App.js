import Flow from './components/Flow';

function App() {
  return (
    <div className="App">
      <div className="body" style={{ background: 'whitesmoke', height: '100vh', width: '100%', overflowY: 'scroll' }}>
        <h1 style={{ textAlign: 'center' }}>React Flow</h1>
        <Flow />
      </div>
    </div>
  );
}

export default App;
