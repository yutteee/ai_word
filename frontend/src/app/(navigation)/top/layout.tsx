export default function Layout(props: {
  children: React.ReactNode;
  words: React.ReactNode;
  articles: React.ReactNode;
}) {
  return (
    <>
      {props.children}
      {props.words}
      {props.articles}
    </>
  );
}
