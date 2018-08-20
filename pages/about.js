// This is the Link API
import Link from 'next/link'

const Index = () => (
  <div>
    <p>About Page</p>
    <Link href="/">
      <a>Index Page</a>
    </Link>
  </div>
)

export default Index
