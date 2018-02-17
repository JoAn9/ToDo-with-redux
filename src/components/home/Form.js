import React, {PropTypes} from 'react';

const Form = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Imię"
        />
      <div></div>
      <input
        type="text"
        placeholder="Ulubiony zespół muzyczny"
        />
      <div></div>
      <input
        className="btn btn-primary btn-lg"
        type="submit"
        value="Potwierdzam dane"/>
    </form>
    /*<form onSubmit={this.handleSubmit}>
      <input
        type="text"
        placeholder="Imię"
        value={this.state.name}
        onChange={this.handleNameChange}/>
      <div>{this.state.nameText}</div>
      <input
        type="text"
        placeholder="Ulubiony zespół muzyczny"
        value={this.state.band}
        onChange={this.handleBandChange}/>
      <div>{this.state.bandText}</div>
      <input
        className="btn btn-primary btn-lg"
        type="submit"
        value="Potwierdzam dane"/>
    </form>*/


  );
};

export default Form;
