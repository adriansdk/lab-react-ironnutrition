import React, { Component } from 'react';
import logo from './logo.svg';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import './App.css';

class App extends Component {

  state = {
    allFoods: foods,
    searchFoods: [],
    query: "",
    newFood: {
      name: " ",
      calories: " ",
      image: " ",
    }
  }

  handleNameChange = (event) => {
    this.setState({
      newFood: {
        name: event.target.value,
        calories: this.state.newFood.calories,
        image: this.state.newFood.image,
      }
    })
  }
  handleCaloriesChange = (event) => {
    this.setState({
      newFood: {
        calories: event.target.value,
        name: this.state.newFood.name,
        image: this.state.newFood.image
      }
    })
  }
  handleUrlChange = (event) => {
    this.setState({
      newFood: {
        image: event.target.value,
        name: this.state.newFood.name,
        calories: this.state.newFood.calories,
      }
    })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 0) {
        let foodsArray = []
        this.state.allFoods.map((eachFood) => {
          if (eachFood.name.includes(this.state.query)) {
            foodsArray.push(eachFood)
          }
        })
        this.setState({
          searchFoods: foodsArray
        })
      }
    })
  }

  newFood = (e) => {
    e.preventDefault();
    let newFood = {
      name: this.state.newFood.name,
      calories: this.state.newFood.calories,
      image: this.state.newFood.image,
    }
    let allFoods = [...this.state.allFoods]
    allFoods.push(newFood)
    this.setState({ allFoods })
  }

  displayFoodBox = () => {
    if (this.state.query.length == 0) {
      let display = this.state.allFoods.map((eachFood, i) => {
        return (
          <FoodBox key={i} foods={eachFood} />
        )
      })
      return display
    } else {
      console.log(this.state.searchFoods)
      let filteredDisplay = this.state.searchFoods.map((eachFood, i) => {
        return (
          <FoodBox key={i} foods={eachFood} />
        )
      })
      return filteredDisplay
    }
  }

  render() {
    return (
      <div className="App">
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
        <form onSubmit={this.newFood}>
          <p>Name:</p>
          <input type="text" ref="foodName" placeholder="New food name:" onChange={this.handleNameChange} value={this.state.newFood.name}></input>
          <p>Calories:</p>
          <input type="text" ref="foodCalories" placeholder="New food calories:" onChange={this.handleCaloriesChange} value={this.state.newFood.calories}></input>
          <p>Image Url:</p>
          <input type="text" ref="foodUrl" placeholder="New food url:" onChange={this.handleUrlChange} value={this.state.newFood.image}></input>
          <button>{"Create new food"}</button>
        </form>
        {this.displayFoodBox()}
      </div>
    );
  }
}

export default App;
