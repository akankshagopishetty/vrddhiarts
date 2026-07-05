import SectionHeader from '../components/ui/SectionHeader'

function About() {
  return (
    <section className="section page-section">
      <div className="container narrow">
        <SectionHeader eyebrow="About" title="Handmade resin art with a boutique eye" />
        <div className="story-block">
          <p>
            Vrddhi Arts is a handmade resin art studio focused on meaningful keepsakes, thoughtful gifting, and custom
            preservation work. The website foundation keeps the content flexible so the catalogue can grow naturally as
            real product photography and client collections are added.
          </p>
          <p>
            The design language is intentionally quiet: generous spacing, refined typography, soft lavender surfaces,
            and a single signature purple accent. The result is a store experience that feels crafted instead of loud.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
