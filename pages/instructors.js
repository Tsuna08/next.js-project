import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Instructors = ({ instructors }) => {
  return (
    <MainContainer keywords="Instructors list">
      <div className="py-14 ">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet our leadership
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
              vitae elementum enim vitae ullamcorper suspendisse.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-8 xl:col-span-2"
          >
            {instructors?.users?.map((person, index) => (
              <li key={person.name}>
                <Link key={index} href={`/instructors/${person.id}`}>
                  <div className="flex items-center gap-x-6">
                    <img
                      className="h-16 w-16 rounded-full"
                      src={person.image}
                      alt=""
                    />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        {person.firstName} {person.lastName}
                      </h3>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MainContainer>
  );
};

export default Instructors;

export async function getStaticProps() {
  const response = await fetch("https://dummyjson.com/users?limit=10&skip=10");
  const instructors = await response.json();
  return { props: { instructors } };
}
