import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { HomeIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Typography variant="h1" color="white" className="mb-6 font-black">
                  Your home ownership journey starts with us.
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <Typography variant="lead" color="white" className="opacity-80">
                  We make buying a home simple and stress-free with expert mortgage solutions. Explore competitive rates, flexible loan options, and personalized guidance—all designed to help you secure your dream home with confidence.
                </Typography>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <FeatureCard
                  color={color}
                  title={title}
                  icon={React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                  description={description}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-32 flex flex-wrap items-center">
            <motion.div
              className="mx-auto -mt-8 w-full px-4 md:w-5/12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#14B8A6] p-2 text-center shadow-lg">
                <HomeIcon className="h-8 w-8 text-white" />
              </div>
              <Typography variant="h3" className="mb-3 font-bold" color="blue-gray">
                Mortgage Made Simple
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Buying a home is one of the most significant decisions you'll ever make.
                We simplify the mortgage process, offering expert guidance, competitive rates, and tailored loan solutions.
                <br />
                <br />
                Whether you're a first-time buyer or looking to refinance, our team is here to help you every step of the way.
                Let us make homeownership easy and stress-free for you.
              </Typography>
              <Button variant="filled">Learn More</Button>
            </motion.div>

            <motion.div
              className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Mortgage Advice"
                    src="/img/mortgage-advice.webp"
                    className="object-fill h-56 w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">Expert Guidance</Typography>
                  <Typography variant="h5" color="blue-gray" className="mb-3 mt-2 font-bold">
                    Personalized Mortgage Solutions
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    We work with you to find the best mortgage plan that fits your financial goals.
                    Our specialists ensure a smooth and successful home-buying journey with transparent processes and expert advice.
                  </Typography>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="Our Experts" heading="Meet Our Mortgage Specialists">
            Our experienced mortgage advisors are here to guide you every step of the way. From loan applications to securing the best rates, we ensure a smooth and transparent home-buying journey.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (

              <TeamCard
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>

        </div>
      </section>

      <section className="relative bg-white py-18 px-4">
        <div className="container mx-auto">
          <PageTitle section="Mortgage Solutions" heading="Find Your Perfect Home Loan">
            We make home financing simple and stress-free. Whether you're a first-time homebuyer or refinancing, our experts guide you every step of the way.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card
                  color="transparent"
                  shadow={false}
                  className="text-center text-blue-gray-900"
                >
                  <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                    {React.createElement(icon, {
                      className: "w-5 h-5 text-white",
                    })}
                  </div>
                  <Typography variant="h5" color="blue-gray" className="mb-2 whitespace-nowrap">
                    {title}
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    {description}
                  </Typography>
                </Card>
              </motion.div>
            ))}
          </div>

          <PageTitle section="Get in Touch" heading="Let’s Find Your Best Mortgage Plan">
            Fill out the form below, and our mortgage experts will reach out within 24 hours to guide you through your home financing options.
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Full Name" />
              <Input variant="outlined" size="lg" label="Phone Number" />
            </div>
            <Textarea
              variant="outlined"
              size="lg"
              label="Tell us about your mortgage needs"
              rows={6}
            />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree to the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Privacy Policy
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Request a Consultation
            </Button>
          </form>
        </div>
      </section>

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
