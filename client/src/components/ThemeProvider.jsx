import { useSelector } from "react-redux";

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className="dark">
        <div className="dark:bg-[rgb(16,23,42)] min-h-screen dark:text-[#eeeeee]">
            {children}
        </div>
    </div>
  );
}
