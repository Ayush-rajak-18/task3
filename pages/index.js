import React, { useState } from 'react';
import Head from 'next/head';
import AppointmentForm from '../components/AppointmentForm';
import styles from '../components/AppointmentForm.module.css'; 

const Home = () => {
  const [bookingStatus, setBookingStatus] = useState('');

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch('/api/bookAppointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setBookingStatus(data.message);
      } else {
        setBookingStatus('Booking failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      setBookingStatus('Internal server error.');
    }
  };

  return (
    <div>
      <Head>
        <title>Doctor Appointment Booking</title>
        <meta name="description" content="Doctor Appointment Booking Form" />
      </Head>

      <main>
      <header className={styles.header}>
        <h1 className={styles.heading}>
          Doctor Appointment Booking
        </h1>
      </header>
        <div className={styles.formContainer}>
          {bookingStatus && (
            <div className={styles.feedbackContainer}>
              <p className={styles.feedbackMessage}>{bookingStatus}</p>
              <button className={styles.backButton} onClick={() => setBookingStatus('')}>
                Back to Home
              </button>
            </div>
          )}
          {!bookingStatus && <AppointmentForm onSubmit={handleFormSubmit} />}
        </div>
      </main>
    </div>
  );
};

export default Home;