import { useEffect } from 'react'

const policySections = [
  'Privacy Policy',
  'Terms & Conditions',
  'Payment Policy',
  'Shipping & Delivery Policy',
  'Cancellation Policy',
  'Refund Policy',
  'Returns & Exchanges',
  'Product Care & Disclaimer',
  'Portfolio & Photography',
  'Our Promise',
]

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

function Policies() {
  useEffect(() => {
    const title = 'Policies | VrddhiArts'
    const description = 'SEO placeholder for VrddhiArts policies page.'
    const previousTitle = document.title
    const metaDescription = document.querySelector('meta[name="description"]')
    const previousDescription = metaDescription?.getAttribute('content')

    document.title = title
    metaDescription?.setAttribute('content', description)

    return () => {
      document.title = previousTitle
      if (previousDescription) {
        metaDescription?.setAttribute('content', previousDescription)
      }
    }
  }, [])

  return (
    <section className="section page-section policies-page">
      <div className="container">
        <div className="policies-hero">
          <span className="eyebrow">Policies</span>
          <h1>VrddhiArts Policies</h1>
          <p>Complete policy content will be added here.</p>
        </div>

        <nav className="policies-toc" aria-label="Policies table of contents">
          <h2>Table of Contents</h2>
          <div>
            {policySections.map((section) => (
              <a href={`#${slugify(section)}`} key={section}>
                {section}
              </a>
            ))}
          </div>
        </nav>

        <div className="policies-content">
          {policySections.map((section) => (
            <section className="policy-section" id={slugify(section)} key={section}>
              <span className="eyebrow">{section}</span>
              <h2>{section}</h2>
              <p>Policy content placeholder.</p>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Policies
