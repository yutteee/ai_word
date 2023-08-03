export default function Article({ params }: { params: { id: number } }) {
  return <div>id: {params.id}</div>;
}
