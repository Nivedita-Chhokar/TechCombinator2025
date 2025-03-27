import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      <div className="flex-1 space-y-4 p-4">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className={`flex ${i % 2 === 0 ? "justify-end" : "justify-start"}`}>
              <Skeleton className={`h-16 w-2/3 rounded-lg ${i % 2 === 0 ? "rounded-tr-none" : "rounded-tl-none"}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 p-4">
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
    </div>
  )
}

