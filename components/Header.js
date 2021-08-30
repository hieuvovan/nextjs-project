import Link from 'next/link'

export default function Header() {

  return (
    <header>
      <div className="container">
        <div className="flex justify-between py-6 header-wrapper">
          <div className="header-left">
            <Link href="/">
              <a>
                <h1 className="shop-name">GAMES STORE</h1>
              </a>
            </Link>
          </div>
          <div className="header-right">
            <ul className="flex nav-list">
              <li className="pr-8 nav-item">
                <Link href="/shop">
                  <a>SHOP</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/cart">
                  <a>CART</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
