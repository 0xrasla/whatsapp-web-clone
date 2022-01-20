import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Lets Chat 😎</h1>
      <p className="text-lg font-bold w-45 pt-10 from-neutral-300">
        Lets Chat is an online chatting place, where you can meet new peoples
        and chat with them!
      </p>
    </div>
  );
};

export default HomePage;
