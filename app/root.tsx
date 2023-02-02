import type { LinksFunction, MetaFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useNavigation,
  useResolvedPath,
} from "@remix-run/react";
import { siteLinks } from "./constants/menus";
import styles from "./tailwind.css";
import me from "./img/me.jpeg";
import { getUser } from "./session.server";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export async function loader({ request }: LoaderArgs) {
  return json({
    user: await getUser(request),
  });
}

export default function App() {
  const location = useLocation();
  const path = location.pathname;
  console.log();
  return (
    <html lang="en" data-theme="dracula">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="drawer drawer-mobile">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle " />
          <div className="drawer-content flex flex-col bg-base-100">
            <div className="w-full navbar lg:hidden ">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1 px-2 mx-2 justify-center ">
                <p>Guillermo 🚀</p>
              </div>
            </div>
            <div className="flex flex-col justify-between align-bottom h-full max-w-[900px] mx-auto my-0 w-full">
              <Outlet />
              <footer className="footer footer-center p-4 text-base-content align-bottom">
                <div>
                  <p>Made by Guillermo with ❤️</p>
                </div>
              </footer>
            </div>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <div className="menu p-4 overflow-y-auto w-[19rem] text-base-content bg-base-200 flex flex-col justify-between">
              <div className="w-fit mb-4">
                <div className="avatar transition ease-in-out w-1/2 hover:scale-[102%] block m-auto mt-3 mb-8">
                  <div>
                    <img
                      className="mask mask-circle"
                      src={me}
                      alt="Guillermo"
                    />
                  </div>
                </div>
                <ul>
                  {siteLinks.map(({ name, link }) => (
                    <li key={link}>
                      <Link
                        to={link}
                        className={link === path ? "underline" : ""}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="social-icons px-4 my-2 flex self-center h-max">
                <a
                  href="https://github.com/guilleeh"
                  target="_blank"
                  className="mx-3"
                  aria-label="Github"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/guillermo-hernandez/"
                  target="_blank"
                  className="mx-3"
                  aria-label="Linkedin"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="4.983" cy="5.009" r="2.188"></circle>
                    <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
