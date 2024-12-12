import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export function ProductCardSkeleton() {
  return (
    <Card className="w-full max-w-80 border-0 shadow-none">
      <CardHeader className="flex flex-col items-center justify-center gap-4">
        <Skeleton className="w-60 h-80 rounded-md bg-gray-200" />
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-4">
        <Skeleton className="h-4 w-40 bg-gray-200" />
        <Skeleton className="h-4 w-20 bg-gray-200" />
        <Skeleton className="h-8 w-60 bg-gray-200" />
      </CardContent>
      <CardFooter className="flex justify-center">
        <Skeleton className="h-10 w-40 bg-gray-200" />
      </CardFooter>
    </Card>
  )
}

