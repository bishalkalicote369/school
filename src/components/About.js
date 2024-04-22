import React from 'react'

const About = () => {
  return (
    <section className=" body-font padding-x py-8   w-full dark:bg-white-100 dark:text-gray-800">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
        </div>
        <div className="flex flex-wrap -m-2">
          <TeamMember name="Holden Caulfield" role="UI Designer" imageSrc="https://dummyimage.com/80x80" />
          <TeamMember name="Henry Letham" role="CTO" imageSrc="https://dummyimage.com/84x84" />
          <TeamMember name="Oskar Blinde" role="Founder" imageSrc="https://dummyimage.com/88x88" />
          <TeamMember name="John Doe" role="DevOps" imageSrc="https://dummyimage.com/90x90" />
          <TeamMember name="Martin Eden" role="Software Engineer" imageSrc="https://dummyimage.com/94x94" />
          <TeamMember name="Boris Kitua" role="UX Researcher" imageSrc="https://dummyimage.com/98x98" />
          <TeamMember name="Atticus Finch" role="QA Engineer" imageSrc="https://dummyimage.com/100x90" />
          <TeamMember name="Alper Kamu" role="System" imageSrc="https://dummyimage.com/104x94" />
          <TeamMember name="Rodrigo Monchi" role="Product Manager" imageSrc="https://dummyimage.com/108x98" />
        </div>
      </div>
    </section>
  );
}

const TeamMember = ({ name, role, imageSrc }) => {
  return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
      <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={imageSrc} />
        <div className="flex-grow">
          <h2 className="text-gray-900 title-font font-medium">{name}</h2>
          <p className="text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default About