import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'

class App extends Component {
    constructor() {
        super();
        // In realife we will have the robots coming from db, aoi ect 
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    // Part of react
    componentDidMount() {

        // Fetch is window declared function
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));

        // fetch("https://jsonplaceholder.typicode.com/users")
        // .then(response => {
        //     // converting the response to json
        //     return response.json();

        // })
        // .then(users => {
        //     this.setState({ robots: users })
        // });

        // this.setState({ robots: robots })
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots
            .filter(robot => {
                return robot.name.toLowerCase()
                    .includes(searchField.toLowerCase())
            });

        if (!robots.length) {
            return (<div className="tc"> <h1>Loading...</h1> </div>);
        }
        else {
            // Register a callback
            return (
                <div className='tc'>
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }

}


// const App = () => {
//     return (
//         <div className='tc'>
//             <h1>RoboFriends</h1>
//             <SearchBox />
//             <CardList robots={robots} />
//         </div>
//     );
// }

export default App;