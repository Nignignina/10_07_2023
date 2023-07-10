import { Link, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
        {/* <a href="" className="link_404>" */}

        <Link to="/" className="link_404">
          Return Back Bitch
        </Link>
      </p>
    </div>
  );
}
