function Shorten() {
  return (
    <form className="flex mx-5 rounded-lg flex-col bg-[url('/images/bg-shorten-mobile.svg')] bg-cover bg-no-repeat bg-darkviolet px-8 py-6 -mb-[80px] z-50 relative">
      <input
        placeholder="Shorten a link here..."
        className="py-3 px-4 mb-4 rounded-lg"
      />
      <button className="bg-cyan py-3 text-xl font-bold text-white rounded-lg">
        Shorten it!
      </button>
    </form>
  );
}

export default Shorten;
