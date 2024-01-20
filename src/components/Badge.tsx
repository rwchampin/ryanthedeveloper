import Link from 'next/link'
export default function Badge({
    text,
    url
}:any) {
    return (
      <Link href={url} className='hover:translate-z-0.5 hover:scale-105 transition-all duration-200 ease-in-out transform drop-shadow-xl'>
        <span className="inline-flex items-center rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-800 border-2 border-indigo-500">
          <svg className="mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
            <circle cx={4} cy={4} r={3} />
          </svg>
          <span className='[text-shadow:_0_1px_0_var(--tw-shadow-color)]'>{text}</span>
        </span>
      </Link>
    )
  }
  