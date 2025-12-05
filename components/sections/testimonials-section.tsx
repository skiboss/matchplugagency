const testimonials = [
  {
    name: "Pinnacle",
    text: "Matchplug has been a core partner throughout West africa to LATAM. thanks to his knowledge in the iGaming and affiliate we were able to maximize our budget together delivering quality results.",
  },
  {
    name: "BC.Game",
    text: "We've been working with Matchplug agency for a whole year now. They are highly skilled professionals who consistently surpasses our expectations. Working together as one contributor, we highly recommend the agency as a reliable partner.",
  },
  {
    name: "1XBET",
    text: "Working with the matchplug agency we always a pleasuric experience there were proponent solutions that solve deal due to lack of skill. Working with the agency for a solutions were received by the Matchplug agency with excellent quality and speed. I cannot say anything else but recommend them to anyone who is willing to do business.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">You're In Good Hands</h2>
          <p className="text-muted-foreground text-sm md:text-base">
            You don't have to take our words, hear from our clients
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-5 md:p-6 border border-border rounded-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-primary text-sm md:text-base">{testimonial.name.charAt(0)}</span>
                </div>
                <span className="font-semibold text-sm md:text-base">{testimonial.name}</span>
              </div>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-16 py-6 md:py-8 border-t border-border">
          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold text-foreground">79+ countries</p>
            <p className="text-xs md:text-sm text-muted-foreground">Trusted Brands</p>
          </div>
          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold text-foreground">12,000+ FTDs</p>
            <p className="text-xs md:text-sm text-muted-foreground">Delivered monthly</p>
          </div>
          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold text-foreground">90-day ROAS</p>
            <p className="text-xs md:text-sm text-muted-foreground">Market lead map</p>
          </div>
        </div>
      </div>
    </section>
  )
}
