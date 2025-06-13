interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({ children, variant = "primary" }: ButtonProps) {
  const base =
    "py-3 px-6 rounded font-semibold transition cursor-pointer duration-300 inline-block";
  const styles =
    variant === "primary"
      ? "bg-indigo-600 hover:bg-indigo-700 text-white"
      : "bg-white text-indigo-600 hover:bg-gray-200";
  return <button className={`${base} ${styles}`}>{children}</button>;
}
