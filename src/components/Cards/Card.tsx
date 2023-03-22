export default function Card({ title }: { title: string }) {
  return (
    <div className="mb-5">
      <img
        src="https://source.unsplash.com/random/350x350"
        alt=" random imgee"
        className="w-full object-cover object-center rounded-lg shadow-md"
      />

      <div className="relative -mt-16 px-4">
        <div className="bg-gray-500 p-2 rounded-lg shadow-lg">
          <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate text-white">
            {title}
          </h4>
        </div>
      </div>
    </div>
  );
}
