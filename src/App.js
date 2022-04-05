//  localhost:3002
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';




class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hi...!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);


function App() {
  return (
    <div className="App">
      <header className="App-header">
         
        <h1>test</h1>
      </header>
    </div>
  );
}

export default App;


// class ScrollingList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.listRef = React.createRef();
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     // Are we adding new items to the list?
//     // Capture the scroll position so we can adjust scroll later.
//     if (prevProps.list.length < this.props.list.length) {
//       const list = this.listRef.current;
//       return list.scrollHeight - list.scrollTop;
//     }
//     return null;
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     // If we have a snapshot value, we've just added new items.
//     // Adjust scroll so these new items don't push the old ones out of view.
//     // (snapshot here is the value returned from getSnapshotBeforeUpdate)
//     if (snapshot !== null) {
//       const list = this.listRef.current;
//       list.scrollTop = list.scrollHeight - snapshot;
//     }
//   }

//   render() {
//     return (
//       <div ref={this.listRef}>{/* ...contents... */}</div>
//     );
//   }
// }


// root.render(<ScrollingList />);