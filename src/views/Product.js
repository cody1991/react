import Axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
export default function About() {
  // https://mockapi.io/projects/5fb8b6472f145f0016c3c7be
  const { id } = useParams();
  const url = `https://5fb8b6472f145f0016c3c7bd.mockapi.io/products/${id}`;
  const [product, setProduct] = useState(null);

  // 通过使用这个Hook，你可以告诉React 组件需要在渲染后执行某些操作。
  useEffect(() => {
    Axios.get(url).then((res) => setProduct(res.data));
  }, [url]);

  let content = <div></div>;

  if (product) {
    content = (
      <div>
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
