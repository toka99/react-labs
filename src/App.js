import logo from './logo.svg';
import './App.css';
import React from "react";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "Toka",
            count: 1
        }
    }
    changeName = () => {
        this.setState({ name: 'menna' });
    }

    setInitCount = (value) => {
        this.setState({ initCount: value })
    }


    render() {
        return ( <
            div className = "container" > < br / >
            <
            p className = "p" > My name is { this.state.name } < /p> <
            button onClick = { this.changeName }
            className = "btn btn-primary" > change name < /button><br/ >
            <
            Counter initCount = { 5 }
            changeCount = { this.setInitCount }
            />  <
            /div>
        );
    }
}

class Counter extends React.Component {

    constructor(props) {
        super();
        this.state = {
            name: "Toka",
            count: props.initCount
        }
    }



    changeCount = (op) => {
        if (op === '+') {
            this.setState({ count: this.state.count + 1 })
        } else if (op === '-') {
            this.setState({ count: this.state.count - 1 })
        }

        // this.props.changeCount(18)
    }

    render() {
        return ( <
            >

            <
            div >
            <
            div > count: { this.state.count } < /div> <
            button onClick = {
                () => this.changeCount("+") }
            className = "btn btn-primary" > increase < /button> <
            button onClick = {
                () => this.changeCount("-") }
            className = "btn btn-primary" > decrease < /button> <
            /div>

            <
            />
        );
    }

}



/*
class App extends React.Component {
    render() {
        let a = "toka";

        return ( <
            div style = {
                {
                    width: 500,
                    height: 300,
                    backgroundColor: "red",
                }
            } >
            <
            Header / >
            welcome { 5 + 6 } <
            /div>
        );
    }

}

class Header extends React.Component {
    render() {
        return ( <
            h1 > website1 < /h1>
        );
    }
}

class Footer extends React.Component {
    render() {
        return ( <
            h5 > 2021 < /h5>
        );
    }
}
*/
export default App;