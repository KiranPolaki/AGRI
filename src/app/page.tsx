import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  FacebookIcon,
  Linkedin,
  MessageSquareHeart,
  QrCode,
  Send,
  Share2,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import master from "../public/signin.jpg";
import AvatarCircles from "@/components/ui/avatar-circles";
import { Timeline } from "@/components/ui/timeline";
import farmer from "../public/farmerStep1.png";
import step20 from "../public/step2.png";
import step21 from "../public/step21.png";
// import step30 from "../public/farm-social-1.jpg";
// import step31 from "../public/farmspary.jpg";
// import step32 from "../public/pump.png";
import step1 from "../public/step1.jpg";
import step12 from "../public/step12.jpg";
import return2 from "../public/return2.png";
import return1 from "../public/return1.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Iphone15Pro from "@/components/ui/iphone-15-pro";
import Link from "next/link";

export default function Home() {
  const avatarUrls = [
    "https://avatars.githubusercontent.com/u/16860528",
    "https://avatars.githubusercontent.com/u/20110627",
    "https://avatars.githubusercontent.com/u/106103625",
    "https://avatars.githubusercontent.com/u/59228569",
  ];

  const data = [
    {
      title: "Check Price",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-800 text-lg md:text-xl font-medium mb-8">
            Select your Equipemnt & tell us about its current condition, and our
            advanced AI tech will tailor make the perfect price for you.
          </p>
          <div className="w-full h-full flex items-center justify-center gap-4">
            <Image
              src={farmer}
              alt="farmerhappy"
              width="350"
              height="350"
              placeholder="blur"
              className="rounded-lg"
            ></Image>
            <div className="flex flex-col gap-2">
              <Image
                src={step12}
                alt="farmerhappy"
                width="325"
                height="325"
                placeholder="blur"
                className="rounded-lg lg:block hidden"
              ></Image>
              <Image
                src={step1}
                alt="farmerhappy"
                width="325"
                height="325"
                placeholder="blur"
                className="rounded-lg lg:block hidden"
              ></Image>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Rent it & Use it",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-900 text-lg md:text-xl font-medium mb-8 text-start">
            Book a free pickup from your home or work at a time slot that best
            suits your convenience. call directly.
          </p>

          <div className="w-full h-full flex items-center justify-center gap-4">
            <Image
              src={step20}
              alt="farmerhappy"
              width="350"
              height="350"
              placeholder="blur"
              className="rounded-lg"
            ></Image>
            <Image
              src={step21}
              alt="farmerhappy"
              width="350"
              height="350"
              placeholder="blur"
              className="rounded-lg hidden lg:block"
            ></Image>
          </div>
        </div>
      ),
    },
    {
      title: "Return It",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-800 text-lg md:text-xl font-medium mb-4">
            Return is hassle free too. Return and recive a instant refund of
            advance.
          </p>
          <div className="w-full h-full flex items-center justify-center gap-4">
            <Image
              src={return2}
              alt="farmerhappy"
              width="350"
              height="350"
              placeholder="blur"
              className="rounded-lg"
            ></Image>
            <Image
              src={return1}
              alt="farmerhappy"
              width="350"
              height="350"
              placeholder="blur"
              className="rounded-lg hidden lg:block"
            ></Image>
          </div>
        </div>
      ),
    },
  ];

  const faqs = [
    {
      question: "What is Agrid Rental?",
      answer:
        "Agrid Rental is an app that connects farmers and agricultural professionals with rental services for various farming equipment, making it easier to access the tools you need.",
    },
    {
      question: "How do I rent equipment?",
      answer:
        "To rent equipment, simply browse the available listings, select the equipment you need, choose the rental period, and complete the booking process through the app.",
    },
    {
      question: "What types of equipment are available?",
      answer:
        "Our app offers a wide range of agricultural equipment, including tractors, plows, harvesters, irrigation systems, and more.",
    },
    {
      question: "Is the equipment insured?",
      answer:
        "Yes, all equipment rented through Agrid Rental is insured. You can find detailed insurance information in the equipment listing.",
    },
    {
      question: "How do I return the equipment?",
      answer:
        "You can return the equipment by coordinating with the rental service provider through the app. Follow the instructions provided at the time of booking.",
    },
    {
      question: "What happens if the equipment is damaged?",
      answer:
        "If the equipment is damaged during the rental period, please contact the rental service provider immediately. They will guide you through the steps for repair or replacement.",
    },
    {
      question: "Can I extend the rental period?",
      answer:
        "Yes, you can request an extension through the app. Please note that extension requests are subject to availability and may incur additional charges.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "For any assistance or inquiries, you can contact our customer support team through the app's support section or by emailing support@agridrental.com.",
    },
    {
      question: "Are there any membership or subscription fees?",
      answer:
        "No, there are no membership or subscription fees to use Agrid Rental. You only pay for the equipment you rent.",
    },
    {
      question: "How do I list my equipment for rent?",
      answer:
        "To list your equipment for rent, register as a service provider on the app, create a listing with details and photos of your equipment, and set your rental rates.",
    },
  ];

  const testimonials = [
    {
      name: "Ravi Kumar",
      role: "Farmer",
      avatar: "/images/block/avatar-1.webp",
      content:
        "Agrid Rental has been a game changer for me. The app makes it so easy to get the equipment I need without any hassle. Highly recommend!",
    },
    {
      name: "Priya Singh",
      role: "Agricultural Consultant",
      avatar: "/images/block/avatar-2.webp",
      content:
        "This app has streamlined our operations significantly. The variety of equipment available is impressive, and the customer service is top-notch.",
    },
    {
      name: "Arjun Verma",
      role: "Farm Manager",
      avatar: "/images/block/avatar-3.webp",
      content:
        "Agrid Rental is incredibly user-friendly and has made renting equipment a breeze. The insurance coverage is a great peace of mind too.",
    },
    {
      name: "Meera Patel",
      role: "Crop Specialist",
      avatar: "/images/block/avatar-4.webp",
      content:
        "Finding the right equipment used to be a challenge, but not anymore. Agrid Rental has a great selection and the process is super quick!",
    },
    {
      name: "Rajesh Nair",
      role: "Agronomist",
      avatar: "/images/block/avatar-5.webp",
      content:
        "I’ve tried a few equipment rental services, but Agrid Rental stands out. The app is intuitive and the support team is always ready to help.",
    },
    {
      name: "Ananya Sharma",
      role: "Horticulturist",
      avatar: "/images/block/avatar-6.webp",
      content:
        "As a horticulturist, having access to specialized equipment is crucial. Agrid Rental has made it so much easier to get what I need, when I need it.",
    },
  ];

  return (
    <>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-gradient-to-b from-lime-600 via-lime-400 to-lime-100">
        <Navbar />
        <div className="flex items-center justify-center w-full flex-col">
          <div className="max-w-5xl text-center py-2">
            <h1 className="text-6xl text-bold pb-2">
              Get your Dream Equipment with the best quality and offers
            </h1>
            <p className="text-lg">All farm needs can be full filled here</p>
          </div>
          <div className="flex w-full max-w-56 justify-between mb-12">
            <Button className="bg-lime-700 hover:bg-lime-600 text-white">
              <Link href={"/#explore"}>Explore</Link>
            </Button>
            <Button
              variant={"outline"}
              className="bg-transparent border-lime-600 text-lime-800 hover:bg-lime-500"
            >
              <Link href={"https://agrirentalproduction.vercel.app"}>
                Rent yours
              </Link>
              <Send />
            </Button>
          </div>
          <div className="max-w-7xl ">
            <Image
              src={master}
              alt="logo"
              width={850}
              height={850}
              placeholder="blur"
              className="object-cover w- h-[390px] rounded-t-xl shadow-lg"
            />
          </div>
        </div>
      </main>
      <div className="flex w-full flex-col lg:flex-row justify-center">
        <div className="lg:w-1/3 p-24 bg-slate-100 flex flex-col text-black lg:border-r md:border-b border-gray-400">
          <h3 className="text-6xl mb-3">10K+</h3>
          <p className="mb-4">
            Thousands of farmers get benifited with every sale. Join them!
          </p>
          <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
        </div>
        <span className="text-black"></span>
        <div className="lg:w-1/3 p-24 bg-slate-100 text-black">
          <h3 className="text-6xl mb-3">4/5</h3>
          <p className="mb-4">
            Farmers finds what they want, Explore our users review:
          </p>
          <div className="flex gap-3">
            <Button className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 py-2 whitespace-pre md:flex group relative justify-center rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black">
              <MessageSquareHeart className="h-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300" />
              See Reviews
            </Button>

            <Button className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 py-2 whitespace-pre md:flex group relative justify-center rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black ">
              <svg
                className="h-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300"
                data-slot="icon"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  fillRule="evenodd"
                ></path>
              </svg>
              <span className="text-white">Give Review</span>
            </Button>
          </div>
        </div>
        <div className="lg:w-1/3 p-24 bg-lime-600">
          <Button className="rounded-3xl mb-8">
            <Share2 />
            Community
          </Button>
          <div className="flex items-center justify-between">
            <p className="text-5xl font-mono w-60">Join ... and rent.</p>
            <div className="w-16 h-16 rounded-[100%] bg-white flex items-center justify-center p-2">
              <QrCode className="text-black" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col py-12 px-28 bg-white text-black"
        id="explore"
      >
        <div className="flex justify-between lg:flex-row md:flex-col my-12">
          <h3 className="max-w-2xl text-5xl lg:text-6xl font-medium mb-2">
            Explore how to use Agri Rental its easy !
          </h3>
          <p className="text-xl max-w-xl pt-3">
            our services are designed to help you find quality goods and take
            your exp to a new level. The following are the steps you need to
            follow to get what you want:
          </p>
        </div>
        <div className="">
          <Timeline data={data} />
        </div>
      </div>
      <div className="flex flex-col py-12 px-28 bg-white text-black">
        <div className="flex justify-between lg:flex-row md:flex-col">
          <h3 className="max-w-2xl text-5xl lg:text-6xl font-medium">
            Make transaction easily and trusted with Razor Pay
          </h3>
          <p className="text-xl max-w-xl pt-3">
            our services are designed to help you find quality goods and take
            your experience to a new level. The following are the charming
            features provided by ...:
          </p>
        </div>
        <div className="flex gap-12 flex-col lg:flex-row">
          <div className="flex mt-12 bg-gradient-to-b from-lime-600 via-lime-400 to-lime-200 w-full lg:w-1/2 rounded-2xl pt-12 px-8 flex-col gap-6">
            <p className="text-white text-2xl font-medium">
              All your transactions are secured by RazorPay
            </p>
            <p className="text-white/80 text-lg">
              It helps processes online payments for online as well as offline
              businesses. Razorpay allows you to accept credit cards, debit
              cards, netbanking, wallet, and UPI payments with the Mobile App
              integration
            </p>
            <div className="flex w-full items-center justify-center mt-3 ">
              <Iphone15Pro
                className=""
                src="https://d6xcmfyh68wv8.cloudfront.net/learn-content/uploads/2020/06/Untitled-design-2-770x515.png"
              />
            </div>
          </div>
          <div className="flex mt-12 bg-gradient-to-b from-lime-600 via-lime-400 to-lime-200 w-full lg:w-1/2 rounded-2xl pt-12 px-8 flex-col gap-6">
            <p className="text-white text-2xl font-medium">
              Test First before buying
            </p>
            <p className="text-white/80 text-lg">
              We Provide features for those of you who want to ensure that the
              vehicle you want to rent is what you want and can be used
              properly. Only Buy after testing we proviode services which healp
              people get better lives
            </p>
            <div className="flex w-full items-center justify-center mt-3">
              <Iphone15Pro
                className=""
                src={
                  "https://ichef.bbci.co.uk/news/1024/branded_news/16DF2/production/_91528639_p04b0x3b.jpg"
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white flex items-center justify-center text-black">
        <section className="py-12 px-28">
          <div className="container bg-white">
            <Carousel className="w-full">
              <div className="mb-8 flex justify-between px-1 lg:mb-12">
                <h2 className="text-5xl font-medium lg:text-6xl">
                  Farmers Love
                </h2>
                <div className="flex items-center space-x-2">
                  <CarouselPrevious className="static translate-y-0 bg-white" />
                  <CarouselNext className="static translate-y-0 bg-white" />
                </div>
              </div>
              <CarouselContent>
                {testimonials.map((testimonial, idx) => (
                  <CarouselItem
                    key={idx}
                    className="basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-full p-1">
                      <div className="flex h-full flex-col justify-between rounded-lg border p-6">
                        <q className="leading-7 text-black text-lg">
                          {testimonial.content}
                        </q>
                        <div className="mt-6 flex gap-4 leading-5">
                          <Avatar className="size-9 rounded-full ring-1 ring-input ">
                            <AvatarImage
                              src={testimonial.avatar}
                              alt={testimonial.name}
                            />
                          </Avatar>
                          <div className="text-sm">
                            <p className="font-medium">{testimonial.name}</p>
                            <p className="text-muted-foreground">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </section>
      </div>
      <div
        className="w-full flex items-center justify-center py-12 px-28 b bg-white
        text-black"
      >
        <div className=" flex justify-between w-full gap-16 lg:flex-row md:flex-col">
          <div className="w-1/2 md:w-full max-w-3xl flex flex-col gap-10">
            <h3 className="text-6xl font-medium">Frequently Aksed Questions</h3>
            <p className="text-xl">
              Welcome to our FAQ section we adress common queries about
              everything about ... to help make informed decisions.
            </p>
            <div className="flex justify-between w-full gap-6">
              <input
                placeholder="Enter your email..."
                className="rounded-full bg-white border p-3 text-black w-full"
                type="email"
              ></input>
              <Button className="bg-lime-500 hover:bg-lime-600 rounded-full p-6 text-white">
                Submit
              </Button>
            </div>
          </div>
          <div className="w-1/2 md:w-full px-8">
            {faqs.map((faq, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="hover:text-foreground/80 hover:no-underline text-xl font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
      <footer className="bg-gradient-to-b from-lime-700 via-lime-600 to-lime-300 flex items-center w-full justify-center py-16 px-28 flex-col">
        <div className="flex justify-between w-full pb-6">
          <div className="flex gap-4 w-full flex-col max-w-3xl">
            <div className="flex items-center gap-3">
              <a className="block text-black dark:text-white" href="/">
                <svg
                  className="h-8 sm:h-10"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <p className="text-2xl">
                by <span className="font-bold">Agri Rentals</span>
              </p>
            </div>
            <div className="flex items-center text-2xl font-mono font-bold">
              Quality is our priority
            </div>
          </div>
          <div className="flex justify-between w-full lg:pl-10 text-xl font-medium">
            <div className="">
              <p>Home</p>
              <p>About Us</p>
              <p>Customers</p>
              <p>FAQ</p>
              <p>Contact Us</p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold">Our address</h4>
              <p className="max-w-48">
                main street hitechcity, Hyderabad, India
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold">Our Contact</h4>
              <div>
                <p>+91 9951207810</p>
                <p>harsha@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p flex justify-between text-lg">
          <p>Privacy and Policies</p>
          <p>@2024 ..., All rights reserved.</p>
          <div className="flex gap-4">
            <Linkedin className="fill-white" />
            <Twitter className="fill-white" />
            <FacebookIcon className="fill-white" />
          </div>
        </div>
      </footer>
    </>
  );
}
