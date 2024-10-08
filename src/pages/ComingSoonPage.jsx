import { Link } from "react-router-dom";

const ComingSoonPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <p className="text-base font-semibold leading-8 text-indigo-600">Ooops!! Not Yet.</p>
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl">
        Coming Soon!!!
      </h1>
      <p className="mt-6 text-base leading-7 text-white">
        Sorry, We Are Still Building.
      </p>
      <div className="mt-10">
        <Link
          to="/"
          className="text-base font-semibold leading-7 text-indigo-600"
        >
          <span aria-hidden="true">&larr;</span> Back to home
        </Link>
      </div>
    </section>
  );
};

export default ComingSoonPage;
