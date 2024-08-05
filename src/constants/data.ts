import mainLogo from "../../public/assets/svgs/logo.svg";
import mainLine from "../../public/assets/svgs/line.svg";
import Image1 from "../../public/assets/images/image1.png";
import Image2 from "../../public/assets/images/image2.png";
import Image3 from "../../public/assets/images/image3.png";
import Image4 from "../../public/assets/images/image4.png";
import Image5 from "../../public/assets/images/image5.png";
import Image6 from "../../public/assets/images/image6.png";
import reg_img from "../../public/assets/images/register_Img.png";
import line2 from "../../public/assets/images/line2.png";
import img from "../../public/assets/images/Ellipse 309.png";

// Content on the page
export const data = {
  logo: { title: "Founder’s Friday", logo: mainLogo },
  headers: [
    { title: "Home", uri: "/" },
    { title: "About Us", uri: "/" },
    { title: "Gallery", uri: "/" },
    { title: "Contact Us", uri: "/" },
  ],
  auth: { title: { title: "Register ", uri: "/" } },
  connect: {
    preText:
      "Join our premier monthly meetup for startup founders and tech visionaries",
    BoldText: "Connect, Collaborate, Innovate!",
    textBody:
      "Every last Friday of the month, we bring together the brightest minds in our local tech ecosystem. Whether you're a seasoned entrepreneur or just starting your journey, Founder's Friday is your launchpad for new ideas, valuable connections, and game-changing opportunities.",
    largeButon: "Register For Our Next Event",
    postText: "Join Us for our next meetup on the 26th of July 2024",
    lastText: "Become a collaborator today",
  },
  svgs: { line: mainLine },
  images: {
    one: Image1,
    two: Image2,
    three: Image3,
    four: Image4,
    five: Image5,
    six: Image6,
    regImage: reg_img,
    line: line2,
    image: img,
  },
  who: {
    title: "Who Are We?",
    button1: "Register",
    button2: "Donate",
    body: "Born from the vibrant startup ecosystem of Abuja, we recognized the need for a consistent, high-quality networking platform where founders, innovators, and tech enthusiasts could connect, share ideas, and foster collaboration.",
    postTxt: "Founder's Friday is more than just a meetup — it's a movement.",
  },
  what: {
    title: "What We Offer",
    body: [
      {
        title: "Monthly Meetups",
        body: "Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts.",
      },
      {
        title: "Diverse Network",
        body: "Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts.",
      },
      {
        title: "Knowledge Sharing",
        body: "Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts.",
      },
      {
        title: "Collaboration Opportunities",
        body: "Find potential co-founders, mentors, or partners for your next big venture.",
      },
      {
        title: "Community Support",
        body: "Be part of a supportive ecosystem that celebrates successes and provides guidance through challenges.",
      },
    ],
    postext: "What Happens At Founders Friday",
  },
  register2:{title:"At Founder’s Friday, Every Friday Is a Learning Experience!", body:"Join us in our mission to transform ideas into impact and shape the future of Nigeria’s startup landscape"},
  register3:{title:"What Do Our Attendees Have To Say?", subtitle:"Well See For Yourself!"},
  attendees:[{name:"Mr Belba Ngoy", comment:"Always a remarkable experience for my team and myself", picture:img},{name:"Mr Belba Ngoy", comment:"Always a remarkable experience for my team and myself", picture:img},{name:"Mr Belba Ngoy", comment:"Always a remarkable experience for my team and myself", picture:img},],
  empty: "What Happens At Founders Friday",
  why: {
    pretext: "Sponsor The Next Friday",
    title: "Why Sponsor Founders Friday?",
    circle: [
      {
        title: "Networking Opportunities",
        body: "Connect with industry leaders, founders, and potential partners.",
      },
      {
        title: "Community Impact",
        body: "Support the growth and development of the startup ecosystem.",
      },
      {
        title: "Brand Association",
        body: "Align your brand with innovation and entrepreneurial success.",
      },
      {
        title: "Visibility",
        body: "Gain exposure to a targeted audience of young professionals and entrepreneurs.",
      },
    ],
    how: {
      title: "How To Sponsor",
      pretext: "Ready to Make an Impact?",
      body: "Fill out the form below or contact us at [contact email/phone number] to learn more about how you can sponsor the next Founders Friday",
    },
  },
  register: {
    title: "Founders Friday is coming to",
    title2: "Register And Be Part of Our Community",
    town: "Kaduna",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo suscipit id. Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    body2: "Join our community of over 1000+ founders, developers, and tech junkies in general. Be inspired by people who live to inspire!",
    button: "Register",
  },
  
};
