import Axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import useAxiosGet from '../hooks/HttpRequest';
export default function About() {
  // https://mockapi.io/projects/5fb8b6472f145f0016c3c7be
  const { id } = useParams();
  const url = `https://5fb8b6472f145f0016c3c7bd.mockapi.io/products/${id}`;

  const { data: product, error, loading } = useAxiosGet(url);

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
