import { useEffect } from 'react'

const policySections = [
  {
    title: 'Privacy Policy',
    blocks: [
      { type: 'paragraph', text: 'At VrddhiArts, your privacy is important to us.' },
      {
        type: 'paragraph',
        text: 'When you place an order or contact us, we may collect information such as your name, phone number, email address, shipping address, and customization details. This information is used solely for processing your order, communicating with you, providing customer support, and delivering your products.',
      },
      {
        type: 'paragraph',
        text: 'Any photographs, reference images, or personal details shared for customization purposes will be used only to create your order and will never be shared publicly without your permission.',
      },
      {
        type: 'paragraph',
        text: 'We do not sell, rent, or disclose your personal information to third parties except where required for payment processing, shipping, or legal obligations.',
      },
      { type: 'paragraph', text: 'By using our website, you agree to this Privacy Policy.' },
    ],
  },
  {
    title: 'Terms & Conditions',
    intro: [
      'Welcome to VrddhiArts.',
      'By placing an order with us, you agree to the following terms and conditions.',
    ],
    blocks: [
      {
        type: 'subsection',
        title: 'Handmade Creations',
        paragraphs: [
          'Every creation at VrddhiArts is handcrafted individually with care and attention to detail.',
          'As handmade products cannot be replicated exactly, slight variations in colour, texture, dimensions, finishing, placement of decorative elements, or artistic details are natural characteristics of handcrafted work and should not be considered manufacturing defects.',
          'These variations make every creation unique.',
        ],
      },
      {
        type: 'subsection',
        title: 'Custom Orders',
        paragraphs: [
          'Every product is created according to your requirements.',
          'Once the design, colours, names, photographs, wording, size, or customization details have been finalized and production begins, further modifications may not be possible.',
        ],
      },
      {
        type: 'subsection',
        title: 'Design Assistance',
        paragraphs: [
          'Not sure what to choose?',
          "Simply share your occasion, idea, or inspiration with us. We'll guide you in selecting the most suitable design based on your requirements.",
        ],
      },
      {
        type: 'subsection',
        title: 'Natural Materials',
        paragraphs: [
          'Some creations may include natural materials such as flowers, leaves, wood, dried botanicals, or similar organic elements.',
          'As these are natural materials, slight changes in colour, texture, or appearance over time are completely natural and are not considered defects.',
        ],
      },
      {
        type: 'subsection',
        title: 'Product Images',
        paragraphs: [
          'The images displayed on our website and social media showcase our actual handcrafted work.',
          'However, due to lighting conditions, photography, editing, and differences in mobile or computer displays, the actual product may vary slightly in colour from the images shown.',
        ],
      },
      {
        type: 'subsection',
        title: 'Customer Responsibilities',
        paragraphs: [
          'Customers are requested to provide accurate spellings, names, dates, addresses, photographs, and customization details.',
          'VrddhiArts is not responsible for errors resulting from incorrect information provided by the customer.',
        ],
      },
      {
        type: 'subsection',
        title: 'Intellectual Property',
        paragraphs: [
          'All artwork, product designs, photographs, logos, branding materials, website content, and creative concepts belong exclusively to VrddhiArts.',
          'Copying, reproducing, modifying, or using our content without written permission is strictly prohibited.',
        ],
      },
    ],
  },
  {
    title: 'Payment Policy',
    blocks: [
      {
        type: 'paragraph',
        text: 'Since every order is handcrafted and customized specifically for each customer, production begins only after payment confirmation.',
      },
      { type: 'subsection', title: 'Orders below ₹2,000', list: ['100% advance payment is required to confirm the order.'] },
      {
        type: 'subsection',
        title: 'Orders above ₹2,000',
        list: [
          '80% advance payment is required to begin production.',
          'The remaining 20% must be paid before dispatch.',
        ],
      },
      { type: 'paragraph', text: 'Orders will be shipped only after the complete payment has been received.' },
      { type: 'paragraph', text: 'Currently, Cash on Delivery (COD) is not available.' },
    ],
  },
  {
    title: 'Shipping & Delivery Policy',
    blocks: [
      { type: 'paragraph', text: 'Each order is handcrafted before dispatch.' },
      {
        type: 'paragraph',
        text: 'Production time varies depending on the complexity of the artwork, customization requirements, and current order volume.',
      },
      {
        type: 'subsection',
        title: 'Shipping Charges',
        paragraphs: ['Shipping charges are calculated separately and vary based on:'],
        list: ['Product size', 'Product weight', 'Delivery location', 'Courier charges'],
        after: ['As a growing startup, we currently do not offer free shipping.'],
      },
      {
        type: 'subsection',
        title: 'Courier Services',
        paragraphs: [
          'We use trusted courier partners for deliveries.',
          'If you prefer a specific courier service, please inform us before dispatch. We will ship through your preferred courier wherever possible, and the applicable shipping charges will be borne by the customer.',
        ],
      },
      {
        type: 'subsection',
        title: 'Delivery Timeline',
        paragraphs: [
          'Delivery timelines depend on the courier company and destination.',
          'VrddhiArts is not responsible for delays caused by courier services, weather conditions, transportation issues, natural disasters, or any unforeseen circumstances beyond our control.',
        ],
      },
      {
        type: 'subsection',
        title: 'Transit Damage',
        paragraphs: [
          'Every order is packed securely using suitable protective packaging.',
          'However, damages occurring during transit are beyond our control.',
          'If your order arrives damaged, you must contact us within 24 hours of delivery.',
          'To process your concern, the following is mandatory:',
        ],
        list: [
          'A full-length, uninterrupted unboxing video starting from the unopened package.',
          'Clear photographs of the damaged product and packaging.',
        ],
        after: ['Claims submitted without a complete unboxing video cannot be considered.'],
      },
    ],
  },
  {
    title: 'Cancellation Policy',
    blocks: [
      {
        type: 'paragraph',
        text: 'As every order is custom-made, cancellation requests are accepted only under specific circumstances.',
      },
      {
        type: 'subsection',
        title: 'Cancellation may be accepted if:',
        list: [
          'Production has not yet started.',
          'Materials have not been specially purchased for your order.',
          'The cancellation request is received before work begins.',
        ],
      },
      {
        type: 'subsection',
        title: 'Cancellation cannot be accepted if:',
        list: [
          'Production or crafting has started.',
          'Materials have been ordered specifically for your project.',
          'Personalization has begun.',
          'Design work has been completed.',
          'The product is ready for dispatch.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Each order is prepared exclusively for one customer, making it impossible to reuse personalized materials.',
      },
    ],
  },
  {
    title: 'Refund Policy',
    blocks: [
      {
        type: 'paragraph',
        text: 'Due to the customized and handmade nature of our products, refunds are generally not applicable.',
      },
      {
        type: 'subsection',
        title: 'Refunds cannot be provided if:',
        list: [
          'Production has begun.',
          'Materials have been purchased.',
          'Crafting or personalization has started.',
          'The product has been completed.',
          'The order has been dispatched.',
        ],
      },
      {
        type: 'subsection',
        title: 'Refunds may only be considered in exceptional cases such as:',
        list: [
          'Duplicate payment.',
          'Cancellation approved before production begins.',
          'The order cannot be completed by VrddhiArts due to unavoidable circumstances.',
        ],
      },
      { type: 'paragraph', text: 'Approved refunds, if applicable, will be processed using the original payment method.' },
    ],
  },
  {
    title: 'Returns & Exchanges',
    blocks: [
      { type: 'paragraph', text: 'Since every product is handmade and customized, returns and exchanges are not accepted.' },
      { type: 'paragraph', text: 'Customers are requested to carefully review all customization details before confirming their order.' },
    ],
  },
  {
    title: 'Product Care & Disclaimer',
    blocks: [
      { type: 'paragraph', text: 'Our creations are handcrafted with love and attention to detail.' },
      {
        type: 'subsection',
        title: 'To ensure their longevity:',
        list: [
          'Handle products with care.',
          'Avoid dropping or applying excessive force.',
          'Keep products away from prolonged exposure to direct sunlight, extreme heat, or moisture unless specifically mentioned otherwise.',
          'Follow any care instructions provided with your product.',
        ],
      },
      {
        type: 'paragraph',
        text: 'As every handmade creation is unique, slight variations in colour, texture, finish, dimensions, and artistic details are natural characteristics of handcrafted work.',
      },
      { type: 'paragraph', text: 'Products containing natural materials may undergo slight changes over time due to their organic nature.' },
      { type: 'paragraph', text: 'These variations should not be considered defects.' },
    ],
  },
  {
    title: 'Portfolio & Photography',
    blocks: [
      { type: 'paragraph', text: 'We take pride in showcasing our handcrafted creations.' },
      {
        type: 'paragraph',
        text: 'Unless specifically requested otherwise by the customer, VrddhiArts reserves the right to photograph completed products and use these images on our website, social media platforms, and promotional materials.',
      },
      {
        type: 'paragraph',
        text: 'Customer privacy is always respected, and personal information such as phone numbers, addresses, or other sensitive details will never be disclosed.',
      },
      {
        type: 'paragraph',
        text: 'If you prefer your order not to be showcased, kindly inform us while placing your order, and we will happily respect your request.',
      },
    ],
  },
  {
    title: 'Our Promise',
    blocks: [
      { type: 'paragraph', text: "At VrddhiArts, we don't just create handmade products-we create meaningful experiences." },
      {
        type: 'paragraph',
        text: 'Every creation begins with your story and is handcrafted with patience, creativity, and attention to detail.',
      },
      {
        type: 'paragraph',
        text: 'We believe every memory deserves to be celebrated, every gift deserves a personal touch, and every customer deserves honesty, transparency, and quality.',
      },
      { type: 'paragraph', text: 'Thank you for trusting VrddhiArts to be a part of your special moments.' },
    ],
  },
]

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

function renderBlock(block, index) {
  if (block.type === 'paragraph') {
    return <p key={index}>{block.text}</p>
  }

  return (
    <div className="policy-subsection" key={index}>
      <h3>{block.title}</h3>
      {block.paragraphs?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {block.list && (
        <ul>
          {block.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {block.after?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  )
}

function Policies() {
  useEffect(() => {
    const title = 'Policies | VrddhiArts'
    const description = 'Privacy policy, terms, payment, shipping, cancellation, refund, returns, product care, and photography policies for VrddhiArts.'
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
          <p>Our policies are written to keep every custom order clear, respectful, and transparent from the first idea to final delivery.</p>
        </div>

        <nav className="policies-toc" aria-label="Policies table of contents">
          <h2>Table of Contents</h2>
          <div>
            {policySections.map((section) => (
              <a href={`#${slugify(section.title)}`} key={section.title}>
                {section.title}
              </a>
            ))}
          </div>
        </nav>

        <div className="policies-content">
          {policySections.map((section) => (
            <section className="policy-section" id={slugify(section.title)} key={section.title}>
              <span className="eyebrow">{section.title}</span>
              <h2>{section.title}</h2>
              {section.intro?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.blocks.map(renderBlock)}
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Policies
