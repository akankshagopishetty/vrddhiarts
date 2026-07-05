import Breadcrumbs from '../components/ui/Breadcrumbs'
import ProductCard from '../components/ui/ProductCard'
import SectionHeader from '../components/ui/SectionHeader'
import { products } from '../data/products'

function Gallery() {
  return (
    <section className="section page-section">
      <div className="container">
        <Breadcrumbs current="Gallery" />
        <SectionHeader
          eyebrow="Gallery"
          title="A growing archive of handmade work"
          text="The masonry layout preserves original artwork proportions and supports any number of future images."
        />
        <div className="masonry-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
