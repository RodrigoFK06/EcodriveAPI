import FlipCard from "../ui/flip-card"

interface BenefitCardProps {
  title: string
  promotion: string
  location: string
  days: string
  imageSrc: string
}

export default function BenefitCard({ title, promotion, location, days, imageSrc }: BenefitCardProps) {
  return (
    <div className="flex items-start gap-8">
      <div className="w-48 h-48 flex-shrink-0">
        <FlipCard title={title} description={`${promotion}\n${location}\n${days}`} imageUrl={imageSrc} size="small" />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-3xl font-bold text-[#E67E22]">{title}</h3>
        <ul className="space-y-2 text-black">
          <li className="flex items-start">
            <span className="mr-2 text-[#E67E22]">•</span>
            {promotion}
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-[#E67E22]">•</span>
            {location}
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-[#E67E22]">•</span>
            {days}
          </li>
        </ul>
      </div>
    </div>
  )
}

