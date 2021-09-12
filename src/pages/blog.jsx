import Head from "next/head";

const Home = () => (
  <>
    <Head>
      <title>Blog - Marco Escaleira</title>
    </Head>

    <main className="min-h-full flex justify-center items-center bg-blue-100">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-blue-800">Marco Escaleira - Blog</h1>
        <span className="text-lg text-blue-400 font-light">Coming soon...</span>
      </div>
    </main>
  </>
);

export default Home;
