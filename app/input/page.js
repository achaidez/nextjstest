export default async function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center p-20">
        <h1 className="flex items-center p-5 text-5xl font-bold">Hello, Input page!</h1>
        <p className="flex items-center p-5">Info posted here</p>
        <input type='text' className="text-black"/>
        <button>Submit</button>
    </div>
  )
}