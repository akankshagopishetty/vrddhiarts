import { AtSign, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../../config/siteConfig'

function Footer() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}`

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/logo/logo.png" alt={`${siteConfig.businessName} logo`} />
          <p>{siteConfig.tagline}</p>
        </div>

        <div>
          <h3>Explore</h3>
          <Link to="/about">About</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h3>Contact</h3>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={16} /> WhatsApp
          </a>
          <a href={`tel:${siteConfig.phone}`}>
            <Phone size={16} /> {siteConfig.phone}
          </a>
          <a href={`mailto:${siteConfig.email}`}>
            <Mail size={16} /> {siteConfig.email}
          </a>
          <span>
            <MapPin size={16} /> {siteConfig.address}
          </span>
        </div>

        <div>
          <h3>Social</h3>
          <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
            <AtSign size={16} /> Instagram
          </a>
          {siteConfig.businessHours.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.</div>
    </footer>
  )
}

export default Footer

