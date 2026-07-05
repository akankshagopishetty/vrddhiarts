import Button from '../components/ui/Button'

function NotFound() {
  return (
    <section className="section page-section">
      <div className="container narrow empty-state">
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist or has moved.</p>
        <Button to="/collections">Back to Collections</Button>
      </div>
    </section>
  )
}

export default NotFound
