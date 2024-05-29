import Image from "next/image";
import AuthForm from "./components/AuthForm";

const Home = () => {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="logo"
          src={"/logo.svg"}
          width={"48"}
          height={"48"}
          className="mx-auto w-auto"
        />
        <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to <span className="text-blue-500">ChatKaro!</span>
        </h2>
      </div>
      <AuthForm />
    </div>
  );
};

export default Home;
