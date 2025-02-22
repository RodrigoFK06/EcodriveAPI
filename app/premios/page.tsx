import MainSection from "@/components/main-section"
import DailyRewards from "@/components/daily-rewards"
import DriverRewards from "@/components/driver-rewards"
import PassengerRewards from "@/components/passenger-rewards"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainSection />
      <div className="bg-[#FDF2E9] pt-16">
        <DailyRewards />
        <DriverRewards />
        <PassengerRewards />
      </div>
      <Footer />
    </div>
  )
}

