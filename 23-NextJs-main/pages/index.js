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

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
