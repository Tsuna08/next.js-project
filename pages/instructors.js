import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Instructors = ({ instructors }) => {
  return (
    <MainContainer keywords="Instructors list">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        Our instructors
      </h1>
      <ul className="divide-y divide-gray-200 mt-4">
        {instructors?.users?.map((person, index) => (
          <Link key={index} href={`/instructors/${person.id}`}>
            <li key={person.email} className="py-1 flex">
              <img
                className="h-10 w-10 rounded-full"
                src={person.image}
                alt=""
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {person.firstName} {person.lastName}
                </p>
                <p className="text-sm text-gray-500">{person.email}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Instructors;

export async function getStaticProps() {
  const response = await fetch("https://dummyjson.com/users?limit=10&skip=10");
  const instructors = await response.json();
  return { props: { instructors } };
}
