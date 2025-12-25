import Image from "next/image"

const clients = [
  { name: "Dafabet", logo: "/partners/dafabet_Logo.png" },
  { name: "1XBET", logo: "/partners/1XBET_logo.png" },
  { name: "Indibet", logo: "/partners/indiebet_logo.png" },
  { name: "Pinnacle", logo: "/partners/pinnacle_logo.png" },
  { name: "BET", logo: "/partners/bet_logo.png" },
  { name: "Alibabet", logo: "/partners/alibabet_logo.png" },
  { name: "22bet", logo: "/partners/22bet_logo.png" },
  { name: "Legacy", logo: "/partners/legacy_logo.png" },
  { name: "Gwalabet", logo: "/partners/gwalabet_logo.png" },
]

export function OurClientsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-14">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium mb-3">Our Clients</h2>
          <p className="text-muted-foreground text-base md:text-2xl font-light">
            Trusted by leading brands in 79+ countries
          </p>
        </div>

        {/* Clients Grid */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-14">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center justify-center h-16 md:h-20">
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                //  grayscale hover:grayscale-0 transition-all duration-300
                className="h-full w-auto object-contain max-w-[100px] md:max-w-[150px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
