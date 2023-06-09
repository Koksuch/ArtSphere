import { XIcon } from '@heroicons/react/solid'

function ClearButton({ title, onClick }) {
  return (
    <button
      className="inline-flex items-center justify-center w-full px-4 py-2 text-base font-medium text-gray-700 bg-gray-200 border border-transparent rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      onClick={onClick}
    >
      <XIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
      {title}
    </button>
  )
}

export default ClearButton
