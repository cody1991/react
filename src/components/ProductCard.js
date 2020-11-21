import { Link } from 'react-router-dom';
export default function ProductCard(props) {
  const product = props.product;
  return (
    <div className="border mb-4 rounded overflow-hidden">
      <Link to={`/products/${product.id}`}>
        <div
          style={{
            backgroundImage: `url('${product.images}')`,
          }}
          className="w-full h-64 bg-blue bg-cover"
        ></div>
      </Link>

      <div className="p-3">
        <div className="font-bold text-xl mb-3">
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </div>
        <div className="font-bold mb-3">$ {product.price}</div>
        <div className="mb-3">{product.description}</div>

        <Link
          to={`/products/${product.id}`}
          className="bg-blue-500 text-white p-2 flex justify-center"
        >
          View
        </Link>
      </div>
    </div>
  );
}
