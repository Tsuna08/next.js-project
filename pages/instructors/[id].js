import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";

export default function User({ user }) {
  const { query } = useRouter();

  return (
    <MainContainer keywords={user.name}>
      <div className="py-12 sm:py-12">
        <div className="mx-auto flex flex-col max-w-7xl px-8 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {user.firstName} {user.lastName}
            </h2>
          </div>

          <div className="flex items-center gap-x-6">
            <img className="h-16 w-16 rounded-full" src={user.image} alt="" />
            <div>
              <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                {user.firstName} {user.lastName}
              </h3>
              <p className="text-sm font-semibold leading-6 text-indigo-600">
                {user.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(`https://dummyjson.com/users/${params.id}`);
  const user = await response.json();
  return { props: { user } };
}
