// import '../styles/global.css';

import EventList from "../components/events/event-list";
import { getAllEvents } from "../helpers/api-util";

function HomePage(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const allEvents = await getAllEvents();
  return {
    props: {
      events: allEvents,
    },
    revalidate: 30,
  };
}

export default HomePage;
