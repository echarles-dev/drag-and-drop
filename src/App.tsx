import React from 'react';
import './App.css';
import cat from './img/cat.jpg';

interface IAppState {
  mouseDown: boolean;
  positionX: number;
  positionY: number;
}
export class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      mouseDown: false,
      positionX: 0,
      positionY: 0
    };
  }

  public render() {
    return (
      <div
        className="background-surface"
        onMouseMove={this.onMouseMove}
        onMouseUp={this.onMouseUp}
      >
        <div
          className="draggable"
          onMouseDown={this.onMouseDown}
          style={{
            left: this.state.positionX + 'px',
            top: this.state.positionY + 'px'
          }}
        >
          <img src={cat} />
        </div>
      </div>
    );
  }

  private onMouseDown = (e: React.MouseEvent) => {
    this.setState({
      mouseDown: true
    });
  };

  private onMouseMove = (e: React.MouseEvent) => {
    if (this.state.mouseDown) {
      this.setState({
        positionX: e.clientX - 250,
        positionY: e.clientY - 160
      });
    }
  };

  private onMouseUp = (e: React.MouseEvent) => {
    this.setState({
      mouseDown: false
    });
  };
}

export default App;
