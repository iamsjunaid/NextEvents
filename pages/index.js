// import '../styles/global.css';

import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";

function HomePage(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const FeaturedEvents = await getFeaturedEvents();
  return {
    props: {
      events: FeaturedEvents,
    },
    revalidate: 30,
  };
}

export default HomePage;
