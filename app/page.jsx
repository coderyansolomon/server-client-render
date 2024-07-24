import Head from 'next/head';
import ClientComponent from './_components/ClientComponent';
import ServerComponent from './_components/ServerComponent';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 min-h-screen text-white flex items-center justify-center">
      <Head>
        <title>Server-client Next.js Pattern</title>
        <meta name="description" content="Understanding server-client pattern in Next.js" />
      </Head>
      <main className="flex flex-col items-center justify-center py-10 text-center">
        <h1 className="text-4xl font-bold mb-6">
          Server-client Next.js Pattern
        </h1>
        <div className="max-w-3xl text-lg leading-relaxed space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Import Restrictions</h2>
            <p>
              In Next.js, you can't import a server component into a client component file.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">Passing as Props</h2>
            <p>
              However, you can pass a server component as a prop to client components.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">Import Permissions</h2>
            <p>
              You can import client components into server component files.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">Decoupled Rendering</h2>
            <p>
              With this approach, <code>&lt;ClientComponent&gt;</code> and <code>&lt;ServerComponent&gt;</code> are decoupled and can be rendered independently.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">Render Sequence</h2>
            <p>
              The child <code>&lt;ServerComponent&gt;</code> can be rendered on the server, well before <code>&lt;ClientComponent&gt;</code> is rendered on the client.
            </p>
          </section>
          <section className="mt-6">
            <ServerComponent />
            <ClientComponent />
          </section>
        </div>
      </main>
    </div>
  );
}
