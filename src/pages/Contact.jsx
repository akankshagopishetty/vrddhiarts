import { Clock, Timer } from 'lucide-react'
import InstagramIcon from '../components/ui/InstagramIcon'
import Button from '../components/ui/Button'
import SectionHeader from '../components/ui/SectionHeader'
import { siteConfig } from '../config/siteConfig'

function Contact() {
  return (
    <section className="section page-section">
      <div className="container narrow empty-state">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Create Something Beautiful Together"
          text="Every creation begins with your idea. Share your occasion, artwork preferences, custom requirements, or reference images, and we'll help transform your vision into a handcrafted masterpiece. Customized quotations are provided based on your requirements."
          align="center"
        />
        <div className="cta-actions">
          <Button href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" variant="secondary">
            <InstagramIcon size={18} /> Contact on Instagram
          </Button>
        </div>
        <div className="contact-info-grid contact-info-grid-light">
          <article>
            <Clock size={20} />
            <span>Business Hours</span>
            <strong>Monday to Saturday: 10:00 AM - 9:00 PM</strong>
          </article>
          <article>
            <Timer size={20} />
            <span>Typical Response Time</span>
            <strong>Within 24-48 hours</strong>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact
