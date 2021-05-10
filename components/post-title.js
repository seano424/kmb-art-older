export default function PostTitle({ children }) {
  return (
    <h1 className="flex justify-end uppercase font-bold text-2xl mt-10 shadow-small mb-10">
      {children}
    </h1>
  );
}
