import React, { Component } from "react";
import { Container } from "./styles";


class Form extends Component {
  constructor(props) {

    super()

    this.state = {
      name: "",
      gender: "",
      pronoun: "",
      hometown: "",
      threeFavoriteFoods: "",
      birthday: "",
      HUID: "",
      concentration: "",
      submit: false
    }
  }

  changeHandler = async (event) => {
    await this.setState({ [event.target.name]: event.target.value })
    console.log(this.state)
  } 

  submitHandler = (event) => {
    this.setState({ submit: !this.state.submit })
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <br/>
        <div>
          <label>Name</label>
          <br/>
          <input name="name" type="text" value={ this.state.name } onChange={ this.changeHandler }></input>
        </div>
        <br/>
        <div>
          <label>Gender</label>
          <br/>
          <label>Male</label>
          <input type="radio" name="gender" value="male" onChange={ this.changeHandler }></input>
          <br/>
          <label>Female</label>
          <input type="radio" name="gender" value="female" onChange={ this.changeHandler }></input>
          <br/>
          <label>Other</label>
          <input type="radio" name="gender" value="other" onChange={ this.changeHandler }></input>
        </div>
        <br/>
        <div>
          <label>Pronoun</label>
          <br/>
          <input name="pronoun" type="text" value={ this.state.pronoun } onChange={ this.changeHandler }></input>
        </div>
        <br/>
        <div>
          <label>Hometown</label>
          <br/>
          <input name="hometown" type="text" value={ this.state.hometown } onChange={ this.changeHandler }></input>
        </div>
        <br/>
        <div>
          <label>Three Favorite Foods</label>
          <br/>
          <input name="threeFavoriteFoods" type="text" value={ this.state.threeFavoriteFoods } onChange={ this.changeHandler }></input>
        </div>
        <br/>
        <div>
          <label>Birthday</label>
          <br/>
          <input name="birthday" type="date" value={ this.state.birthday } onChange={ this.changeHandler }></input>
        </div>
        <br/>
        <div>
          <label>HUID</label>
          <br/>
          <input name="HUID" type="text" value={ this.state.HUID } onChange={ this.changeHandler }></input>
        </div>
        <br/>
        <div>
          <label>Concentration</label>
          <br/>
          <input name="concentration" type="text" value={ this.state.concentration } onChange={ this.changeHandler }></input>
        </div>
        <br/>
        <button type="submit" onClick={ this.submitHandler }>Submit</button>
        <div>{ this.state.submit && <h1> {'User\'s name is ' + this.state.name + ' and ' + this.state.pronoun + ' are from ' + this.state.hometown + '. ' + this.state.pronoun + ' was born on ' + this.state.birthday +', and ' + this.state.pronoun + ' favorite foods are ' + this.state.threeFavoriteFoods + '. At Harvard, ' + this.state.name + ' studies ' + this.state.concentration + '.'} </h1>} </div>
        
      </React.Fragment>
    );
  }
}

export default Form;

