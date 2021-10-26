const Faq = () => {
  return (
    <div className="mb-40">
      <div className="m-16 text-2xl font-medium">
        Frequentyl Asked Questions
      </div>
      <div className="text-3xl font-semibold m-4 md:m-8">How much is the Teenternz's impact on climate change?</div>
      <div className="mx-4 md:mx-16">Teenternz&apos;s infrastructure is deployed using Vercel and Heroku, these platform depends on multiple cloud providers. For more information on our cloud providers&apos; dedication to reducing their overall carbon footprint, we recommend checking out the following pages:<br /><br /><a href="https://aws.amazon.com/about-aws/sustainability/sustainability-timeline/" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">- AWS & Sustainability Timeline</a><br /><a href="https://www.microsoft.com/en-us/corporate-responsibility/sustainability" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">- Microsoft Environmental Sustainability</a></div>

    </div>
  )
}

export default Faq
