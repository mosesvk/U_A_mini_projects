// api route ___ /api/new-meetup
// POST /api/new-meetup

import {MongoClient} from 'mongodb'

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body; 

    const client = await MongoClient.connect('mongodb+srv://mosesvk:Lukifanga2656@cluster0.4gc6f.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()

    const meetupCollection = db.collection('meetups')

    const result = await meetupsCollection.insertONe(data);

    console.log(result)
    
    client.close();

    res.status(201).json({message: 'Meetup inserted!'})
  }
};

export default handler;
