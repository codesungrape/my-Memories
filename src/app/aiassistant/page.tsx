import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Navigation from "../components/navigation/navigation";
import { Chatbox } from "@/app/aiassistant/chatbox";

export default function Assistant() {
  return (
    <div>
      <Header></Header>
      <Navigation></Navigation>
      <Chatbox />
      <Footer></Footer>
    </div>
  );
}
