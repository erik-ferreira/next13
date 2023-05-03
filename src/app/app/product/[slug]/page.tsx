interface ProductProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProductProps) {
  return {
    title: `Produto ${params.slug}`,
  };
}

export default function Product({ params }: ProductProps) {
  return <h1>Product: {params.slug}</h1>;
}
