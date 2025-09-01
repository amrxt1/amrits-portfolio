import Container from "@/components/Container";
import ContactForm from "@/components/contact/ContactForm";
import Links from "@/components/contact/Links";

export default function Contact() {
  return (
    <Container className="mt-4">
      <ContactForm />
      <p className="my-12">or you could connect with me below:</p>
      <Links />
    </Container>
  );
}
