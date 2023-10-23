import Link from  'next/link'

export default function Home() {
  return (
    <>
<div>
            <p>Name: Fardin Abdul</p>
            <p>CPRG 306 D</p>
            <p>
                <Link href="https://github.com/fardin5">github</Link>
            </p>
            <p>
              <Link href= "/week2">week2
              </Link>
            </p>
            <p>
              <Link href= "/week3">week3
                </Link>
            </p>
            <p>
              <Link href= "/week4">week4
              </Link>
            </p>
            <p>
              <Link href= "/week5">week5
              </Link>
            </p>
        </div>
</>
  )
}
