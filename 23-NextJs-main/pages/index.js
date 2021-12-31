import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Chinatown",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/75/San_Francisco_China_Town_MC.jpg",
    address: "870 Washington St, San Francisco, CA 94108",
    description: "Chinatown in San Francisco, CA",
  },
  {
    id: "m2",
    title: "Times Square",
    image: "https://wallpaperaccess.com/full/232905.jpg",
    address: "Manhattan, NY 10036",
    description: "Times Square in Manhattan, NY",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

// this is instead of using useState and useEffect in the HomePage function. 
export const getStaticProps = async() => {

  const client = MongoClient.connect('mongodb+srv://mosesvk:Lukifanga2656@cluster0.4gc6f.mongodb.net/meetups?retryWrites=true&w=majority')
  const db = client.json()
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray()

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address, 
        image: meetup.image
      }))
    }, 
    revalidate: 10, 
    // number of seconds NextJs will take before taking anymore incoming data requests
  }
}

export default HomePage;
