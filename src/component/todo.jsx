import React, { Component } from "react";
class Todo extends Component {
  state = {
    tags: ["asd", "asdsds"],
  };
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  handleSubmit=()=>{
    
  }
  render() {
    return (
      <div class="container">
        <div class="row">
        <form onSubmit={this.handleSubmit}>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
          
        </div>
        <ul>
        
            {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
          
        </ul>
      </div>
    );
  }
}

export default Todo;
