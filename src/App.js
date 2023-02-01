import React from 'react';
import { fetchData } from "./api";


class App extends React.Component{
    render() {
        const {data, country} = this.state;
            return (
                <div style={{backgroundColor: 'white'}}>
                 Hello
                </div>
            )
    }
}
export default App;
