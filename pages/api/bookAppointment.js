export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, age, gender, phoneNumber } = req.body;

    try {
      setTimeout(() => {
        res.status(200).json({ message: 'Appointment booked successfully!' });
      }, 1000); 
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}