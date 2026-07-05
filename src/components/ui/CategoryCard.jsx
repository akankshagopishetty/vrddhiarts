import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ArtworkImage from './ArtworkImage'

function CategoryCard({ category, to }) {
  return (
    <Link className="category-card reveal" to={to ?? category.url}>
      <ArtworkImage src={category.image} alt={category.title} placeholderText={category.title} />
      <div>
        <h3>{category.title}</h3>
        {category.description && <p>{category.description}</p>}
      </div>
      <span className="card-link" aria-hidden="true">
        <ArrowUpRight size={18} />
      </span>
    </Link>
  )
}

export default CategoryCard
