import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/7/75/San_Francisco_China_Town_MC.jpg"
      title="Chinatown"
      address="870 Washington St, San Francisco, CA 94108"
      description="Chinatown in San Francisco, CA"
    />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false ,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  //fetch data for a single meetup

  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/75/San_Francisco_China_Town_MC.jpg",
      id: "m1",
      title: "Chinatown",
      address: "870 Washington St, San Francisco, CA 94108",
      description: "Chinatown in San Francisco, CA",
    },
  };
};

export default MeetupDetails;
