
  export const getCollections = async () => {
    const collections = await fetch(`http://localhost:3000/api/collections`)
    return await collections.json()
  }

  export const getInteriorCollections = async () => {
    const collections = await fetch(`http://localhost:3000/api/interiorCollections`)
    return await collections.json()
  }
  
  export const getCollectionDetails = async (collectionId: string) => {
    const collection = await fetch(`http://localhost:3000/api/collections/${collectionId}`)
    return await collection.json()
  }
  
  export const getProducts = async () => {
    const products = await fetch(`http://localhost:3000/api/products`)
    return await products.json()
  }
  
  export const getProductDetails = async (productId: string) => {
    const product = await fetch(`http://localhost:3000/api/products/${productId}`)
    return await product.json()
  }
  
  export const getSearchedProducts = async (query: string) => {
    const searchedProducts = await fetch(`http://localhost:3000/api/search/${query}`)
    return await searchedProducts.json()
  }
  
  export const getOrders = async (customerId: string) => {
    const orders = await fetch(`http://localhost:3000/api/orders/customers/${customerId}`)
    return await orders.json()
  }
  
  // export const getRelatedProducts = async (productId: string) => {
  //   const relatedProducts = await fetch(`http://localhost:3000/api/products/${productId}/related`)
  //   return await relatedProducts.json()
  // }
  
  // export const getRelatedProduct = async () => {
  //   const relatedProducts = await fetch(`http://localhost:3000/api/products/[produtcId]/related/`)
  //   return await relatedProducts.json()
  // }

