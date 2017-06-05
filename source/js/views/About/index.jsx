import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className='About'>
        <h1>React Redux Boilerplate</h1>

        <p>
          <h1>What is Lorem Ipsum?</h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          When an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
          Visit documentation
          on <a href='https://github.com/alexpivtorak/react-boilerplate'>GitHub</a>
        </p>
      </div>
    );
  }
}
