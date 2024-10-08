import { Link } from "react-router-dom"
// import { FaExclamationTriangle } from "react-icons/fa"

const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
        {/* <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">This page does not exist</p>
      <Link
        to="/"
        className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
        >Go Back home
      </Link> */}
      {/* <main className="mx-auto flex w-full max-w-7xl flex-auto flex-col justify-center px-6 py-24 sm:py-64 lg:px-8"> */}
          <p className="text-base font-semibold leading-8 text-indigo-600">404</p>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-white">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10">
            <Link to="/" className="text-base font-semibold leading-7 text-indigo-600">
              <span aria-hidden="true">&larr;</span> Back to home
            </Link>
          </div>
        {/* </main> */}
    </section>
  )
}

export default NotFoundPage