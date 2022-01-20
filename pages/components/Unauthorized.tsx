import { useRouter } from "next/router";

export const Unauthorized = () => {
  const router = useRouter();

  return (
    <div className="container mt-64 text-slate-100 text-2xl text-center">
      <h1>Access Denied🤨</h1>
      <h4>Go to Home, Login to access the chat!</h4>
      <button
        className="mt-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={() => {
          router.push("/");
        }}
      >
        Go Back to Home
      </button>
    </div>
  );
};
