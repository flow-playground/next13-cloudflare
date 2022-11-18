// ./app/layout.tsx
import "../styles/globals.css";
import { FC } from "react";

const RootLayout: FC<{
  children: React.ReactNode;
}> = ({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) => {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
