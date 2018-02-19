import React from 'react';
import { render } from 'react-dom';

let key = 0;


const libraries = [
  {
    title: 'React',
    description: 'A JavaScript library for building user interfaces'
  },
  {
    title: 'Redux',
    description: 'A predictable state container for JavaScript apps'
  },
  {
    title: 'Reselect',
    description: 'A simple selector library for Redux'
  }
];

const makeDescriptions = (inLineObj) => <div> {inLineObj.map(line => (<p key={key++}>{line.title}: {line.description}</p>))} </div>

const output = makeDescriptions(libraries);

render(output, document.getElementById('root'));
