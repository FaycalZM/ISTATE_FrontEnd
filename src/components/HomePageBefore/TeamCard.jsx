export default function TeamCard({ Path, FullName, Role }) {
  return (
    <div className="flex justify-center">
      <div class="shadow-lg hover:shadow-xl duration-300 w-52 xl:w-72 py-8 bg-white border border-gray-200 rounded-lg">
        <div class="flex flex-col items-center gap-y-2">
          <img
            class="w-1/2 rounded-full"
            src={Path}
            alt={`${FullName} photo`}
          />
          <h5 class="text-lg xl:text-xl font-medium text-gray-900">
            {FullName}
          </h5>
          <p class="text-sm text-gray-500">{Role}</p>
        </div>
      </div>
    </div>
  );
}
