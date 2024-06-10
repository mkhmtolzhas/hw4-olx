import React from 'react'

const TriangleAlertIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}

const Error: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-8 h-[40vh] md:h-[50vh] font-mono">
      <div className="rounded-lg bg-white p-6 shadow text-black">
        <div className="flex items-center justify-center">
          <TriangleAlertIcon className="h-8 w-8 text-red-500 dark:text-red-400" />
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-lg font-medium">Oops, something went wrong</h3>
          <p className="mt-2">
            Sorry, but an error has occurred. Please try again later.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Error