import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// this is instead of using useState and useEffect in the HomePage function. 
export const getStaticProps = async  () => {

  const client = await MongoClient.connect('mongodb+srv://mosesvk:Lukifanga2656@cluster0.4gc6f.mongodb.net/meetups?retryWrites=true&w=majority')
  const db = client.db()
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray()

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address, 
        image: meetup.image, 
        id: meetup._id.toString()
      }))
    }, 
    revalidate: 10, 
    // number of seconds NextJs will take before taking anymore incoming data requests
  }
}

export default HomePage;
