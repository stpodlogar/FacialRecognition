import React from 'react';
import './Rank.css';

const Rank = ({name, entries}) => {
  return (
    <section className='rank-container'>
      <div>
        <p>{`${name}, your current entry count is...`}</p>
      </div>
      <div className='entries'>
        {entries}
      </div>
    </section>
  )
}
  
  export default Rank;