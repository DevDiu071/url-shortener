import Image from "next/image";

function Footer() {
  return (
    <div className="bg-darkviolet pb-8 pt-12">
      <h2 className="text-3xl font-semibold text-white text-center">Shortly</h2>
      <p className="text-xl text-white font-semibold text-center mt-12 mb-6">
        Features
      </p>
      <nav className="text-center text-xl">
        <ul className="text-gray">
          <li>
            <a href="#"> Link Shortening</a>
          </li>
          <li>
            <a href="#"> Branded Links</a>
          </li>
          <li>
            <a href="#"> Analytics</a>
          </li>
        </ul>
      </nav>
      <p className="text-xl text-white font-semibold text-center mt-12 mb-6">
        Resources
      </p>
      <nav className="text-center text-xl">
        <ul className="text-gray">
          <li>
            <a href="#"> Blog</a>
          </li>
          <li>
            <a href="#">Developers</a>
          </li>
          <li>
            <a href="#"> Support</a>
          </li>
        </ul>
      </nav>
      <p className="text-xl text-white font-semibold text-center mt-12 mb-6">
        Company
      </p>
      <nav className="text-center text-xl">
        <ul className="text-gray">
          <li>
            <a href="#"> About</a>
          </li>
          <li>
            <a href="#"> Our Team</a>
          </li>
          <li>
            <a href="#"> Careers</a>
          </li>
          <li>
            <a href="#"> Contact</a>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center mt-10 gap-x-6 items-center mb-4">
        <Image
          src="/images/icon-facebook.svg"
          width={30}
          height={30}
          alt="social media icon"
        />
        <Image
          src="/images/icon-twitter.svg"
          width={30}
          height={30}
          alt="social media icon"
        />
        <Image
          src="/images/icon-pinterest.svg"
          width={30}
          height={30}
          alt="social media icon"
        />
        <Image
          src="/images/icon-instagram.svg"
          width={30}
          height={30}
          alt="social media icon"
        />
      </div>
    </div>
  );
}

export default Footer;
