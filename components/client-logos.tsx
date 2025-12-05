interface ClientLogosProps {
  clients: string[]
}

export function ClientLogos({ clients }: ClientLogosProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
      {clients.map((client) => (
        <div
          key={client}
          className="text-sm md:text-base font-bold tracking-wide text-muted-foreground hover:text-foreground transition-colors"
        >
          {client.toUpperCase()}
        </div>
      ))}
    </div>
  )
}
