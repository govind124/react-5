import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Higher Order Functions</h1>
      <ul>
        <li>A higher-order component (HOC) is an advanced technique in React for reusing component logic. </li>
        <li> HOCs are not part of the React API,They are a pattern that emerges from React’s compositional nature.</li>
        <li>a higher-order component is a function that takes a component and returns a new component.</li>
      </ul>
      <h3>
      Reason to use Higher-Order component:
      </h3>
      <ul>
        <li>Easy to handle</li>
      </ul>
      <h1>Pure Components</h1>
      <ul>
        <li>Pure Components in React are the components which do not re-renders when the value of state and props has been updated with the same values</li>
        <li>We can use React.memo for transforming a component into pure component</li>
        <li>A React component is considered pure if it renders the same output for the same state and props. For this type of classs component,React Provides the PureComponent base class.
         The class Component that extend the React.PureComponent class are treated as pure component.</li>
      </ul>
    </div>
  );
}

export default App;