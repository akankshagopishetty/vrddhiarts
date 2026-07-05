import Breadcrumbs from '../components/ui/Breadcrumbs'
import CategoryCard from '../components/ui/CategoryCard'
import SectionHeader from '../components/ui/SectionHeader'
import { categoryTree } from '../data/categories'

function Collections() {
  return (
    <section className="section page-section">
      <div className="container">
        <Breadcrumbs />
        <SectionHeader
          eyebrow="Collections"
          title="Resin Art"
          text="Begin with the main collection, then move into categories, subcategories, galleries, and product details."
        />
        <div className="category-grid">
          <CategoryCard category={categoryTree} to="/collections/resin-art" />
        </div>
      </div>
    </section>
  )
}

export default Collections
