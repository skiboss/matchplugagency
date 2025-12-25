import Image from "next/image"

const testimonials = [
  {
    text: "Matchplug has been a close partner throughout these years in LATAM. thanks to his knowledge in eSports we were able to develop successful campaigns together delivering quality results.",
    logo: "/testimonials/pinnacle-logo.png",
    bgColor: "bg-pink-50/50",
  },
  {
    text: "We've been working with Matchplug agency for a whole year now. They are highly skilled professionals in streamers, ambassadors, social media and special projects for esports. Working together is very comfortable, so we highly recommend the agency as a reliable partner.",
    logo: "/testimonials/betano-logo.png",
    bgColor: "bg-amber-50/50",
  },
  {
    text: "Working with the matchplug agency we always a pleasuric experience there were proponent solutions that solve deal due to lack of skill. Working with the agency for a solutions were received by the Matchplug agency with excellent quality and speed. I cannot say anything else but recommend them to anyone who is willing to do business.",
    logo: "/testimonials/22bet-logo.png",
    bgColor: "bg-green-50/50",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium mb-4">You're In Good Hands</h2>
          <p className="text-muted-foreground text-sm md:text-lg font-normal">
            You don't have to take our words, hear from our clients
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-10 md:mb-14">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`p-6 md:px-6 md:py-10 border border-border rounded-2xl flex flex-col justify-between ${testimonial.bgColor}`}>
              {/* Testimonial Text */}
              <p className="text-foreground text-sm md:text-base font-regular tracking-wide [word-spacing:0.3rem] leading-relaxed mb-4 md:mb-20">
                {testimonial.text}
              </p>

              {/* Brand Logo */}
              <div>
                <Image
                  src={testimonial.logo}
                  alt="Brand logo"
                  width={100}
                  height={40}
                  className="h-11 min-w-32 w-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-24.5 py-6 md:py-8">
          <div className="text-center">
            <p className="text-xl md:text-2xl font-medium text-foreground mb-4">79+ countries</p>
            <p className="text-sm md:text-lg font-normal text-muted-foreground">Trusted Brands</p>
          </div>
          <div className="text-center">
            <p className="text-xl md:text-2xl font-medium text-foreground mb-4">12,000+ FTDs</p>
            <p className="text-xs md:text-lg font-normal text-muted-foreground">Delivered monthly</p>
          </div>
          <div className="text-center">
            <p className="text-xl md:text-2xl font-medium text-foreground mb-4">90-day ROAS</p>
            <p className="text-xs md:text-lg font-normal text-muted-foreground">Market lead map</p>
          </div>
        </div>
      </div>
    </section>
  )
}
