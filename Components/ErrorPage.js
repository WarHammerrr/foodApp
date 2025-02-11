import { useRouteError } from "react-router";


const ErrorPage = () => {
    const err=useRouteError()
  return (
    <>
      <h1> {err?.status}</h1>
      <h2>{err?.status?.text}</h2>
      <h2>{err?.data}</h2>
    
    </>
  );
};
export default ErrorPage;
