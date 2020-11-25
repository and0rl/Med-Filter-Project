import React from 'react';
import styles from './medicines.module.css';

const Medicines = ({ medicines, searchTerm }) => {
  const filteredArray = medicines.filter((medicine) => {
    if (
      medicine.name.toLowerCase().includes(searchTerm) ||
      medicine.company.toLowerCase().includes(searchTerm)
    ) {
      return true;
    }
  });

  //   const (ternary) = <condition> ? <ifTrue> : <ifFalse>
  const arrayToRender = searchTerm ? filteredArray : medicines;

  const myMedStyle = {
    textAlign: 'center',
    margin: '15px',
    border: '1px solid',
    padding: '15px',
    backgroundColor: 'lightgrey',
  };

  if (!medicines) {
    return <div>no medicines</div>;
  }

  const alert =
    filteredArray.length === 0
      ? `looks like you don't have any medicines!`
      : `looks like you have ${filteredArray.length} medicine${
          filteredArray.length !== 1 ? 's!' : '!'
        }`;

  return (
    <div className={styles.root}>
      {alert}
      {filteredArray.map((m, i) => (
        <div style={myMedStyle} key={i}>
          {' '}
          <div>name: {m.name}</div>
          <div> company: {m.company}</div>
        </div>
      ))}
    </div>
  );
};

export default Medicines;
