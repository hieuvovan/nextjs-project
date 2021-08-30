import data from './data.json'

export function getProducts() {
  return data;
}

export default function handler(req, res) {
  if (req.method === 'GET') {
    const products = getProducts()
    res.status(200).json(products)
  }
}
