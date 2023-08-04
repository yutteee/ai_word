export default function Layout(props: {
  children: React.ReactNode;
  words: React.ReactNode;
  articles: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-12 m-12">
      {props.children}
      {props.words}
      {props.articles}
    </div>
  );
}
