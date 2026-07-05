import { Link } from 'react-router-dom'
import { allCategories } from '../../data/categories'

function Breadcrumbs({ segments = [], current }) {
  const crumbs = []

  segments.forEach((_, index) => {
    const path = segments.slice(0, index + 1)
    const category = allCategories.find((item) => item.path.join('/') === path.join('/'))
    if (category) crumbs.push({ label: category.title, url: `/collections/${path.join('/')}` })
  })

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      <Link to="/collections">Collections</Link>
      {crumbs.map((crumb, index) =>
        index === crumbs.length - 1 && !current ? (
          <span key={crumb.url}>{crumb.label}</span>
        ) : (
          <Link key={crumb.url} to={crumb.url}>
            {crumb.label}
          </Link>
        ),
      )}
      {current && <span>{current}</span>}
    </nav>
  )
}

export default Breadcrumbs
