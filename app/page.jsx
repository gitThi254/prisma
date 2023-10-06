import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className='text-4xl'>Home Page</h1>
      <p className='py-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, pariatur
        nemo earum eligendi libero repellendus quod suscipit inventore corporis
        reiciendis, similique culpa aspernatur? Et, repudiandae earum. Animi,
        laudantium. Delectus, deleniti.
      </p>
      <Link href='/about'>About page</Link>
    </main>
  );
}
