import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      walks : [
        {date : '29.10.2015', duration : 15},
        {date : '21.10.2020', duration : 22.5},
        {date : '29.07.2019', duration : 1.6}
      ]
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={() => this.buttonClick()}>
          Дата (ДД.ММ.ГГ)
          <label htmlFor="Дата (ДД.ММ.ГГ)"></label>
          <input id="date" name="date"/> 
          Пройдено км
          <label htmlFor="Пройдено км"></label>
          <input id="duration" name="duration" /> 
          <button type="submit">OK</button>
        </form>  
        <OutputForm walks = {this.state.walks} />
      </div>
    )
  };
  buttonClick() {
    console.log(this.state.walks);
  }
}


const OutputForm = (props) => {
  const {walks} = props;
  const renderWalks = walks => {
    return walks.map((walk) => {
      return (
        <tr>
          <td align="center">{walk.date}</td>
          <td align="center">{walk.duration}</td>
          <td align="center">X</td>
        </tr>
      )
    });
  }
  return (
    <tabel>
      <thead>
        <tr>
          <th>Дата</th>
          <th>Пройдено км</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {renderWalks(walks)}
      </tbody>
    </tabel>
  )
}

export default App;
