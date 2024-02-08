import Link from 'next/link';

// `app/dashboard/page.js` is the UI for the `/dashboard` URL
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          {[
            ['Input', 'Input Here', '/input'],
            ['Output', 'Track Here', '/output']
          ].map(([title, info, url]) => (
            <>
            <a
              href={url}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_self"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                {title}{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{info}</p>
            </a>
            </>
          ))}
        </div>
    </main>
  )
}