import { AtSign, MessageCircle } from 'lucide-react'
import { Navigate, useParams } from 'react-router-dom'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import Button from '../components/ui/Button'
import ArtworkImage from '../components/ui/ArtworkImage'
import ProductCard from '../components/ui/ProductCard'
import { siteConfig } from '../config/siteConfig'
import { getProductById, getRelatedProducts } from '../utils/catalog'

function ProductDetails() {
  const { productId } = useParams()
  const product = getProductById(productId)

  if (!product) return <Navigate to="/404" replace />

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    `Hi ${siteConfig.businessName}, I would like pricing for ${product.title}.`,
  )}`
  const related = getRelatedProducts(product)

  return (
    <section className="section page-section">
      <div className="container">
        <Breadcrumbs segments={product.categoryPath} current={product.title} />
        <div className="product-detail-grid">
          <div className="product-media">
            <ArtworkImage src={product.images?.[0]} alt={product.title} placeholderText={product.title} />
            <div className="thumbnail-row">
              {product.images.map((image) => (
                <ArtworkImage key={image} src={image} alt={product.title} placeholderText={product.title} />
              ))}
            </div>
          </div>

          <article className="product-detail-copy">
            <span className="eyebrow">Price on Request</span>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <div className="detail-list">
              <span>Customization Available</span>
              <span>Contact us for pricing</span>
              {product.placeholder && <span>Placeholder content</span>}
            </div>
            <div className="hero-actions">
              <Button href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> WhatsApp
              </Button>
              <Button href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" variant="secondary">
                <AtSign size={18} /> Instagram
              </Button>
            </div>
          </article>
        </div>

        {related.length > 0 && (
          <div className="related-section">
            <h2>Related Products</h2>
            <div className="product-grid">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductDetails

