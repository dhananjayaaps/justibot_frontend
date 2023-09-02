import { ChatWindow } from "../app/components/ChatWindow";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <ToastContainer />
      <ChatWindow
        apiBaseUrl={process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://192.168.8.167:8000"}
        titleText="Chat JustiBot"
        placeholder="How may I assist you today?"
      ></ChatWindow>
    </>
  );
}
