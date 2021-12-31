
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
export async function getStaticProps() {
  // fetch data from an API 
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }, 
    revalidate: 10, 
    // number of seconds NextJs will take before taking anymore incoming data requests
  }
}

export default HomePage;
