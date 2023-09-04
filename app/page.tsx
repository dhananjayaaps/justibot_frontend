import { ChatWindow } from "../app/components/ChatWindow";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <ToastContainer />
      <ChatWindow
        apiBaseUrl={"http://20.204.169.249:8000"}
        titleText="Chat JustiBot"
        placeholder="How may I assist you today?"
      ></ChatWindow>
    </>
  );
}
