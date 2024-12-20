const ProfileCardSkeleton = () => {
  return (
    <div className="flex flex-row items-center justify-center min-w-96 gap-4 w-full animate-pulse">
      <div className="bg-gray-300 w-24 h-28 rounded-md" />
      <div className="flex flex-col gap-2 text-start w-full">
        <div className="flex">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
        <div className="flex gap-2">
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        </div>
        <div className="h-4 bg-gray-300 rounded w-1/4 self-end"></div>
      </div>
    </div>
  )
}

export default ProfileCardSkeleton
