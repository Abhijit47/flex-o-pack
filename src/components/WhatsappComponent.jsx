import { FloatingWhatsApp } from "react-floating-whatsapp";
// import { WhatsAppWidget } from "react-whatsapp-widget";
// import "react-whatsapp-widget/dist/index.css";
// import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsappComponent() {
  return (
    <div className={"fixed bottom-0 right-0"}>
      <FloatingWhatsApp
        phoneNumber={1234567890}
        accountName="demo"
        chatMessage="Hello there! 🤝 \nHow can we help?"
        placeholder="Type a message..."
        messageDelay={2000}
        avatar={
          "https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg"
        }
        notification={true}
      />
      {/* <WhatsAppWidget CompanyIcon={FaWhatsapp} phoneNumber="1234567890" /> */}
    </div>
  );
}
