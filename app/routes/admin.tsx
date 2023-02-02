import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";

import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";

export async function loader({ request }: LoaderArgs) {
  const userId = await requireUserId(request);
  return json({});
}

export default function AdminPage() {
  const data = useLoaderData<typeof loader>();
  const user = useUser();
  return (
    <div className="md:flex md:justify-start">
      <main className="p-6 pt-10 lg:pt-0 w-full">
        <header className="flex items-center justify-between p-4 text-white">
          <h1 className="text-3xl font-bold">
            <Link to=".">Admin</Link>
          </h1>
          <Form action="/logout" method="post">
            <button
              type="submit"
              className="rounded bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
            >
              Logout
            </button>
          </Form>
        </header>
        <div>
          <h3 className="text-3xl text-center">Welcome</h3>
        </div>
        <Outlet />
      </main>
    </div>
  );
}
