import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent } from
"@/components/ui/card";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  Loader2 } from
"lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon."
      });
      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white" data-id="ce59cpje0" data-path="src/components/portfolio/Contact.tsx">
      <div className="container mx-auto px-4" data-id="s85fbljk7" data-path="src/components/portfolio/Contact.tsx">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-id="c8du9zmdh" data-path="src/components/portfolio/Contact.tsx">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6" data-id="flrnc90w3" data-path="src/components/portfolio/Contact.tsx"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-id="vm4oemj38" data-path="src/components/portfolio/Contact.tsx">
            Interested in working together or have a question? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto" data-id="jet6vhxes" data-path="src/components/portfolio/Contact.tsx">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2">

            <h3 className="text-2xl font-bold mb-6" data-id="uzycyqpek" data-path="src/components/portfolio/Contact.tsx">Contact Information</h3>
            <p className="text-gray-600 mb-8" data-id="mw6q4mgbu" data-path="src/components/portfolio/Contact.tsx">
              Feel free to reach out to me through any of these channels. I'm
              always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="space-y-6" data-id="e575j3s7c" data-path="src/components/portfolio/Contact.tsx">
              <ContactCard
                icon={<MapPin className="text-purple-600" size={24} />}
                title="Location"
                details="VIT Chennai, India" />

              
              <ContactCard
                icon={<Mail className="text-purple-600" size={24} />}
                title="Email"
                details="vaibhavkumawat1003@gmail.com" />

              
              <ContactCard
                icon={<Phone className="text-purple-600" size={24} />}
                title="Phone"
                details="Available on request" />

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-3">

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6" data-id="bs1vkdfus" data-path="src/components/portfolio/Contact.tsx">Send Me a Message</h3>
                <form onSubmit={handleSubmit} data-id="mz37amlf7" data-path="src/components/portfolio/Contact.tsx">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4" data-id="ulye6w8va" data-path="src/components/portfolio/Contact.tsx">
                    <div data-id="mnlwrpxep" data-path="src/components/portfolio/Contact.tsx">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1" data-id="27x2igdgc" data-path="src/components/portfolio/Contact.tsx">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required />

                    </div>
                    <div data-id="ppc9m5xb5" data-path="src/components/portfolio/Contact.tsx">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1" data-id="wswtfneun" data-path="src/components/portfolio/Contact.tsx">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        required />

                    </div>
                  </div>
                  <div className="mb-4" data-id="mgmh50k4s" data-path="src/components/portfolio/Contact.tsx">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1" data-id="o0wru3i4n" data-path="src/components/portfolio/Contact.tsx">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      required />

                  </div>
                  <div className="mb-6" data-id="pv09dqo1f" data-path="src/components/portfolio/Contact.tsx">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1" data-id="kxtgsa5ea" data-path="src/components/portfolio/Contact.tsx">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      required />

                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full"
                    disabled={isSubmitting}>

                    {isSubmitting ?
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </> :

                    <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    }
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>);

};

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  details: string;
}

const ContactCard = ({ icon, title, details }: ContactCardProps) => {
  return (
    <Card>
      <CardContent className="p-4 flex items-start gap-4">
        <div className="mt-1" data-id="ixb6mc667" data-path="src/components/portfolio/Contact.tsx">{icon}</div>
        <div data-id="e6jhd5cx0" data-path="src/components/portfolio/Contact.tsx">
          <h4 className="font-medium text-gray-900" data-id="sqbkj6nah" data-path="src/components/portfolio/Contact.tsx">{title}</h4>
          <p className="text-gray-600" data-id="5nwechpji" data-path="src/components/portfolio/Contact.tsx">{details}</p>
        </div>
      </CardContent>
    </Card>);

};

export default Contact;