const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { json } = require('body-parser');




dotenv.config();

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

const apiKey = process.env.API_KEY;
console.log(apiKey);

app.post('/api/data',async (req,res)=>{
    const { city } = req.body;

    if (!city) {
        return res.status(400).json({ error: 'City name is required' });
    }

    try {
        const fetch = await import('node-fetch').then(mod => mod.default);
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`);

        if (!response.ok) {
            throw new Error(`Could not be fetched: ${response.statusText}`);
        }

        const data = await response.json();
        res.json(data);

    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.post('/starter',async (req,res) =>{
    const {latitude,longitude} = req.body;

    console.log('Received coordinates:', latitude, longitude);
    try{
        const fetch = await import('node-fetch').then(mod => mod.default);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
        console.log(`Response status: ${response.status} - ${response.statusText}`);

        if(!response.ok){
            throw new Error('Could not be fetched stupid ',response.statusText);

        }
        const data = await response.json();
        res.json(data);
    } catch(error) {
        console.error('error fetching data', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });