export default function Container({ children, background }) {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="h-screen container mx-auto px-10"
    >
      {children}
    </div>
  );
}
