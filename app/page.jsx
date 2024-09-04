import Boost from "./ui/Boost";
import Footer from "./ui/Footer";
import Home from "./ui/Home";
import Nav from "./ui/Nav";
import Shorten from "./ui/Shorten";
import Statistics from "./ui/Statistics";

function page() {
  return (
    <div>
      <Nav />
      <Home />
      <Shorten />
      <Statistics />
      <Boost />
      <Footer />
    </div>
  );
}

export default page;
