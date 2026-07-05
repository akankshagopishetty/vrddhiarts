import { Navigate, useParams } from 'react-router-dom'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import CategoryCard from '../components/ui/CategoryCard'
import ProductCard from '../components/ui/ProductCard'
import SectionHeader from '../components/ui/SectionHeader'
import { getCategoryByPath, getCategoryChildren, getProductsForPath } from '../utils/catalog'

function CategoryPage() {
  const params = useParams()
  const segments = params['*']?.split('/').filter(Boolean) ?? []
  const category = getCategoryByPath(segments)

  if (!category) return <Navigate to="/404" replace />

  const children = getCategoryChildren(category)
  const products = getProductsForPath(segments)

  return (
    <section className="section page-section">
      <div className="container">
        <Breadcrumbs segments={segments} />
        <SectionHeader
          eyebrow={children.length ? 'Category' : 'Gallery'}
          title={category.title}
          text={category.description ?? 'Browse handmade resin artwork in this collection.'}
        />

        {children.length ? (
          <div className="category-grid">
            {children.map((child) => (
              <CategoryCard
                key={child.id}
                category={{ ...child, url: `/collections/${[...segments, child.slug].join('/')}` }}
              />
            ))}
          </div>
        ) : (
          <div className="masonry-grid">
            {products.length ? (
              products.map((product) => <ProductCard key={product.id} product={product} />)
            ) : (
              <div className="empty-state">
                <h3>Artwork will be added here soon.</h3>
                <p>This gallery is data-ready and will show unlimited images once the real catalogue is uploaded.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default CategoryPage
