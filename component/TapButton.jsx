export default function TapBatton({ children, isSelsected , ...props }) {
  return (
    <button className={isSelsected ? "active" : undefined} {...props}>
      {children}
    </button>
  );
}
