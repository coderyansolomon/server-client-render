'use client'
import { useState } from 'react';

export default function ClientComponent() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 bg-gray-800 rounded-md shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-4">Client Component</h2>
      <p className="mb-4">This component is rendered on the client.</p>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-md transition duration-300"
      >
        Count: {count}
      </button>
      {/* <section className="mt-6">
        <ServerComponent />
      </section> */}
    </div>
  );
}
