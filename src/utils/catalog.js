import { allCategories, categoryTree } from '../data/categories'
import { products } from '../data/products'

export const getCategoryByPath = (segments = []) => {
  if (!segments.length) return categoryTree
  return allCategories.find((category) => category.path.join('/') === segments.join('/'))
}

export const getCategoryChildren = (category) => category?.children ?? []

export const getProductsForPath = (segments = []) =>
  products.filter((product) => product.categoryPath.join('/') === segments.join('/'))

export const getFeaturedCategories = () =>
  allCategories.filter((category) =>
    ['keychains', 'jewellery', 'customised-flower-preservation', 'photo-frames'].includes(category.slug),
  )

export const getFeaturedProducts = () => products.slice(0, 4)

export const getProductById = (productId) => products.find((product) => product.id === productId)

export const getRelatedProducts = (product) =>
  products
    .filter(
      (item) =>
        item.id !== product?.id &&
        item.categoryPath.slice(0, 2).join('/') === product?.categoryPath.slice(0, 2).join('/'),
    )
    .slice(0, 3)
