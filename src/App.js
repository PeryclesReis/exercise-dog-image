import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.api = this.api.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      listImgs: [],
      loading: true,
    }
  }
 
  async api() {
    this.setState({
      loading: true,
    }, async () => {
      const apiReq = await fetch('https://dog.ceo/api/breeds/image/random');
      const response = await apiReq.json();
      this.setState({
        listImgs: response.message,
        loading: false,
      })
    })
  }

  componentDidMount() {
    this.api();
  }

  handleClick() {
    this.api();
  }

  render() {
    return (
      <div>
        Vai uma imagem aqui!
        <div>
          {this.state.loading ? 'Loading...' : <img src={this.state.listImgs} alt="Dogs-images" />}
        </div>
        <button type="button" onClick={this.handleClick}>Próximo</button>
      </div>
    );
  }
}

export default App;
