import Loader from '../components/Loader';
import ProductCard from '../components/ProductCard';
import useAxiosGet from '../hooks/HttpRequest';
export default function About() {
  const url = `https://5fb8b6472f145f0016c3c7bd.mockapi.io/products?page=1&limit=10`;

  const { data: products, error, loading } = useAxiosGet(url);

  let content = null;

  if (error) {
    content = <span>There was an error please refresh or try again later</span>;
  }

  if (loading) {
    content = <Loader></Loader>;
  }

  if (products) {
    content = (
      <div>
        <h1 className="font-bold text-2xl">Beat Sellers</h1>

        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product}></ProductCard>
          </div>
        ))}
      </div>
    );
  }

  return content;
}
