import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Component() {
  const channels = ["El Club de la IA", "Desarrollo e IA", "/Images IA"]

  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col items-center px-4 py-8">
      {/* Header with logo and title */}
      <div className="flex flex-col items-center text-center mb-8 max-w-sm">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-6 bg-white border-2 border-gray-200">
          <img src="/ai-robot-logo.jpeg" alt="AI Robot Logo" className="w-full h-full object-cover" />
        </div>

        <h1 className="text-2xl font-bold text-black mb-2">El Club de la IA</h1>

        <p className="text-black text-sm leading-relaxed">
          Únete a nuestra comunidad
          <br />
          de Inteligencia Artificial 🤖✨
        </p>
      </div>

      {/* Channel links */}
      <div className="w-full max-w-sm space-y-3">
        {channels.map((channel, index) => (
          <Button
            key={index}
            variant="outline"
            className="w-full h-16 bg-white border-2 border-black rounded-full flex items-center justify-between px-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-white border border-gray-200">
                <img src="/ai-robot-logo.jpeg" alt="AI Robot" className="w-full h-full object-cover" />
              </div>
              <span className="text-black font-bold text-sm text-left">{channel}</span>
            </div>
            <MoreHorizontal className="w-5 h-5 text-gray-600 flex-shrink-0" />
          </Button>
        ))}
      </div>
    </div>
  )
}
