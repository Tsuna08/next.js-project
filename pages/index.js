import MainContainer from "../components/MainContainer";

const Index = () => {
  return (
    <MainContainer keywords="Main page">
      <div className="mx-auto max-w-2xl py-20 sm:py-22 lg:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Time for adventure
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Welcome to the fascinating world of travel! We know how to turn your
            journey into an unforgettable adventure filled with vivid
            experiences and new discoveries.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Index;
