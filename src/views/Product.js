import Axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
export default function About() {
  // https://mockapi.io/projects/5fb8b6472f145f0016c3c7be
  const { id } = useParams();
  const url = `https://5fb8b6472f145f0016c3c7bd.mockapi.io/products/${id}`;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // 通过使用这个Hook，你可以告诉React 组件需要在渲染后执行某些操作。
  useEffect(() => {
    setLoading(true);
    setError(false);
    Axios.get(url)
      .then((res) => {
        setProduct(res.data);
        setLoading(true);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [url]);

  let content = <div></div>;

  if (error) {
    content = <span>There was an error please refresh or try again later</span>;
  }

  if (loading) {
    content = <Loader></Loader>;
  }

  if (product) {
    content = (
      <div>
        <span>{loading}</span>
        <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
        <div>
          <img src={product.images} alt={product.name} />
        </div>
        <div className="text-xl font-bold mb-3">$ {product.price}</div>
        <div>{product.description}</div>
      </div>
    );
  }

  return content;
}
