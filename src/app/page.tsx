import Sidebar from "@/components/header";
import Cart from "./cart/page";
export default function Home() {
  return (
    <html data-theme="synthwave">
      <body>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-4">
            <Cart />
          </div>
        </div>
      </body>
    </html>
  );
}
