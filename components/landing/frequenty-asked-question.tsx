"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="text-black px-10 pb-20">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-10  text-gradient">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="container md:mx-auto  ">
        <Accordion type="multiple">
          <AccordionItem value="item-1" className="cursor-pointer text-xl ">
            <AccordionTrigger>
              What payment methods does E-shop BD accept?
            </AccordionTrigger>
            <AccordionContent>
              E-shop BD accepts various payment methods, including Visa,
              MasterCard, American Express, bKash, Rocket, and cash on delivery
              (COD).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="cursor-pointer focus:outline-none">
              How can I track my order on E-shop BD?
            </AccordionTrigger>
            <AccordionContent>
              Once your order is dispatched, you will receive a tracking number
              via email or SMS. You can use this tracking number to monitor the
              status of your delivery on the E-shop BD website or through the
              couriers tracking portal.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="cursor-pointer focus:outline-none">
              What is E-shop BDs return policy?
            </AccordionTrigger>
            <AccordionContent>
              E-shop BD has a hassle-free return policy that allows you to
              return products within 7 days of delivery for a full refund or
              exchange. Please ensure that the product is unused, in its
              original packaging, and accompanied by the original receipt.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="cursor-pointer focus:outline-none">
              How secure are my personal and payment details on E-shop BD?
            </AccordionTrigger>
            <AccordionContent>
              E-shop BD takes the security of your personal and payment
              information seriously. Our website uses encryption technology to
              protect your data, and we comply with industry standards to
              safeguard your privacy.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="cursor-pointer focus:outline-none">
            How can I contact E-shop BDs customer support?
            </AccordionTrigger>
            <AccordionContent>
            You can contact E-shop BDs customer support team via email at support@eshopbd.com, by phone at +8801XXXXXXXXX, or through our live chat feature on the website. Our support agents are available [X] hours a day, [X] days a week.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="cursor-pointer focus:outline-none">
            What should I do if I encounter an issue with my order from E-shop BD?
            </AccordionTrigger>
            <AccordionContent>
            If you encounter any issues with your order, such as missing items, damaged goods, or delays in delivery, please contact E-shop BDs customer support team immediately. We will work to resolve the issue promptly and ensure your satisfaction.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="cursor-pointer focus:outline-none">
            Can I cancel my order on E-shop BD after it has been placed?
            </AccordionTrigger>
            <AccordionContent>
            Orders can typically be canceled within a short window after they are placed. However, once an order has been processed or shipped, it may not be possible to cancel it. Please contact E-shop BDs customer support team as soon as possible if you need to cancel an order.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
