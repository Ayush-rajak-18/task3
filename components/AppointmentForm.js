import React, { useState } from 'react';
import styles from './AppointmentForm.module.css';

const AppointmentForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [hasDiabetes, setHasDiabetes] = useState('no');
  const [bp, setBp] = useState('no');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !phoneNumber || !hasDiabetes || !bp) {
      alert('Please fill out all fields.');
      return;
    }
    onSubmit({ name, age, gender, phoneNumber, hasDiabetes, bp }); 
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>Name:</label>
        <input
          className={styles.input}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className={styles.label}>Age:</label>
        <input
          className={styles.input}
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <div className={styles.radioGroup}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              value="male"
              checked={gender === 'male'}
              onChange={() => setGender('male')}
            />
            Male
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              value="female"
              checked={gender === 'female'}
              onChange={() => setGender('female')}
            />
            Female
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              value="other"
              checked={gender === 'other'}
              onChange={() => setGender('other')}
            />
            Other
          </label>
        </div>

        <label className={styles.label}>Contact</label>
        <input
          className={styles.input}
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <label className={styles.label}>diabetes</label>
        <select
          className={styles.input}
          value={hasDiabetes}
          onChange={(e) => setHasDiabetes(e.target.value)}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <label className={styles.label}>blood pressure</label>
        <select
          className={styles.input}
          value={bp}
          onChange={(e) => setBp(e.target.value)}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <button type="submit" className={styles.submitButton}>
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;