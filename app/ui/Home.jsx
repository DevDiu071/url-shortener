import Image from "next/image";
import Button from "./Button";

function Home() {
  return (
    <div className="mx-5">
      <Image
        src="/images/illustration-working.svg"
        width={600}
        height={300}
        alt="illustratino working"
        className="mt-10 ml-10 mb-10"
      />
      <h1 className="text-5xl font-bold text-center my-4">
        More than just shorter links
      </h1>
      <p className="text-xl text-center mt-4">
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </p>
      <Button margin={6} />
    </div>
  );
}

export default Home;
