import { useSelector } from 'react-redux';
import isEqual from 'react-fast-compare';
import List from './components/List';

function App({ isCorrectVersion }) {
  const prosCons = useSelector((state) => state.prosCons, isEqual);
  if (isCorrectVersion) {
    return (
      <div className="App">
        <div className="container">
          <div className="mainTitle">Should I eat at McDonalds?</div>
          <List title="PROS" data={prosCons.filter(el => el.type === "pros")} />
          <List title="CONS" data={prosCons.filter(el => el.type === "cons")} />
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="unsupportedBrowser" >
        You are using a browser version that we do not support. Please use the last version of&nbsp;
        <a href="https://www.google.com/intl/en/chrome/">Chrome</a>
        :
      </div>
    )
  }
}

export default App;
