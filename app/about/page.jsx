import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <main>
      <h1 className='text-4xl'>About Page</h1>
      <p className='py-10'>
        This is our about page.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quas, pariatur nemo earum eligendi libero repellendus
        quod suscipit inventore corporis reiciendis, similique culpa aspernatur?
        Et, repudiandae earum. Animi, laudantium. Delectus, deleniti.
      </p>
      <Link href='/abot'>Home Page</Link>
    </main>
  );
};

export default About;
