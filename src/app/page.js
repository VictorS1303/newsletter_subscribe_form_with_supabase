import Image from "next/image";
import Form from '../components/Form.jsx'
import SubscriberCard from '../components/SubscriberCard.jsx'

export default function Home() {
  return (
    <div className="grid place-content-center min-h-screen gap-20">
      <Form />
      <SubscriberCard />
    </div>
  );
}
