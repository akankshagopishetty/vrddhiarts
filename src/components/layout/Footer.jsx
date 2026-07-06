import InstagramIcon from '../ui/InstagramIcon'
import { Link } from 'react-router-dom'
import { siteConfig } from '../../config/siteConfig'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
        </div>

        <div>
          <h3>Explore</h3>
          <Link to="/about">About</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/gallery">Gallery</Link>
        </div>

        <div>
          <h3>Policies</h3>
          <Link to="/policies">Policies</Link>
        </div>

        <div>
          <h3>Social</h3>
          <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
            <InstagramIcon size={16} /> Contact on Instagram
          </a>
          {siteConfig.businessHours.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
