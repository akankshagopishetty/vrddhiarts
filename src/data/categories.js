export const categoryTree = {
  id: 'resin-art',
  title: 'Resin Art',
  slug: 'resin-art',
  description:
    'Preserved memories, wearable pieces, home accents, and thoughtful handmade gifts in resin.',
  image: '/images/resin-art/cover.jpg',
  children: [
    {
      id: 'deep-casting-varmala-preservation-frames',
      title: 'Deep Casting Varmala Preservation Frames',
      slug: 'deep-casting-varmala-preservation-frames',
      description: 'Statement keepsake frames for wedding varmala and floral preservation.',
      image: '/images/resin-art/deep-casting-varmala-preservation-frames/cover.jpg',
    },
    {
      id: 'keychains',
      title: 'Keychains',
      slug: 'keychains',
      description: 'Personal resin keychains for names, photos, florals, and custom moments.',
      image: '/images/resin-art/keychains/cover.jpg',
      children: [
        {
          id: 'drop-keychains',
          title: 'Drop Keychains',
          slug: 'drop-keychains',
          image: '/images/resin-art/keychains/drop/cover.jpg',
        },
        {
          id: 'photo-keychains',
          title: 'Photo Keychains',
          slug: 'photo-keychains',
          image: '/images/resin-art/keychains/photo/cover.jpg',
        },
        {
          id: 'customized-keychains',
          title: 'Customized Keychains',
          slug: 'customized-keychains',
          image: '/images/resin-art/keychains/customized/cover.jpg',
        },
        {
          id: 'alphabet-keychains',
          title: 'Alphabet Keychains',
          slug: 'alphabet-keychains',
          image: '/images/resin-art/keychains/alphabet/cover.jpg',
          children: [
            {
              id: 'floral-keychains',
              title: 'Floral Keychains',
              slug: 'floral-keychains',
              image: '/images/resin-art/keychains/alphabet/floral/cover.jpg',
            },
            {
              id: 'name-keychains',
              title: 'Name Keychains',
              slug: 'name-keychains',
              image: '/images/resin-art/keychains/alphabet/name/cover.jpg',
            },
            {
              id: 'customisation',
              title: 'Customisation',
              slug: 'customisation',
              image: '/images/resin-art/keychains/alphabet/customisation/cover.jpg',
            },
          ],
        },
      ],
    },
    {
      id: 'rakhis',
      title: 'Rakhis',
      slug: 'rakhis',
      description: 'Handmade resin rakhis designed for names, photos, stickers, and custom sets.',
      image: '/images/resin-art/rakhis/cover.jpg',
      children: [
        { id: 'photo-rakhis', title: 'Photo Rakhis', slug: 'photo-rakhis', image: '/images/resin-art/rakhis/photo/cover.jpg' },
        { id: 'name-rakhis', title: 'Name Rakhis', slug: 'name-rakhis', image: '/images/resin-art/rakhis/name/cover.jpg' },
        { id: 'sticker-rakhis', title: 'Sticker Rakhis', slug: 'sticker-rakhis', image: '/images/resin-art/rakhis/sticker/cover.jpg' },
        { id: 'customized-rakhis', title: 'Customized Rakhis', slug: 'customized-rakhis', image: '/images/resin-art/rakhis/customized/cover.jpg' },
      ],
    },
    {
      id: 'jewellery',
      title: 'Jewellery',
      slug: 'jewellery',
      description: 'Delicate resin jewellery pieces with a personal handmade finish.',
      image: '/images/resin-art/jewellery/cover.jpg',
      children: [
        { id: 'bracelets', title: 'Bracelets', slug: 'bracelets', image: '/images/resin-art/jewellery/bracelets/cover.jpg' },
        { id: 'chains-pendants', title: 'Chains & Pendants', slug: 'chains-pendants', image: '/images/resin-art/jewellery/chains-pendants/cover.jpg' },
        { id: 'earrings', title: 'Earrings', slug: 'earrings', image: '/images/resin-art/jewellery/earrings/cover.jpg' },
        { id: 'bangles', title: 'Bangles', slug: 'bangles', image: '/images/resin-art/jewellery/bangles/cover.jpg' },
      ],
    },
    { id: 'fridge-magnets', title: 'Fridge Magnets', slug: 'fridge-magnets', image: '/images/resin-art/fridge-magnets/cover.jpg' },
    { id: 'phone-cases', title: 'Phone Cases', slug: 'phone-cases', image: '/images/resin-art/phone-cases/cover.jpg' },
    { id: 'bookmarks', title: 'Bookmarks', slug: 'bookmarks', image: '/images/resin-art/bookmarks/cover.jpg' },
    { id: 'wall-clock', title: 'Wall Clock', slug: 'wall-clock', image: '/images/resin-art/wall-clock/cover.jpg' },
    { id: 'name-plate-board', title: 'Name Plate Board', slug: 'name-plate-board', image: '/images/resin-art/name-plate-board/cover.jpg' },
    { id: 'engagement-ring-platter', title: 'Engagement Ring Platter', slug: 'engagement-ring-platter', image: '/images/resin-art/engagement-ring-platter/cover.jpg' },
    { id: 'decor-items', title: 'Decor Items', slug: 'decor-items', image: '/images/resin-art/decor-items/cover.jpg' },
    { id: 'customised-flower-preservation', title: 'Customised Flower Preservation', slug: 'customised-flower-preservation', image: '/images/resin-art/customised-flower-preservation/cover.jpg' },
    {
      id: 'photo-frames',
      title: 'Photo Frames',
      slug: 'photo-frames',
      image: '/images/resin-art/photo-frames/cover.jpg',
      children: [
        { id: 'hanging-frames', title: 'Hanging Frames', slug: 'hanging-frames', image: '/images/resin-art/photo-frames/hanging/cover.jpg' },
        { id: 'customised-frames', title: 'Customised Frames', slug: 'customised-frames', image: '/images/resin-art/photo-frames/customised/cover.jpg' },
      ],
    },
  ],
}

export const flattenCategories = (node = categoryTree, parentPath = []) => {
  const path = [...parentPath, node.slug]
  const current = { ...node, path, url: `/collections/${path.join('/')}` }
  const children = node.children?.flatMap((child) => flattenCategories(child, path)) ?? []
  return [current, ...children]
}

export const allCategories = flattenCategories()
