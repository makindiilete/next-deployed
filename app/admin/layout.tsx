import React from "react";
import styles from "./admin.module.css";

interface IProps {
  children: React.ReactNode;
}
const AdminLayout = ({ children }: IProps) => {
  return (
    <div className={styles.sideBar}>
      <aside className="bg-gray-400 min-h-dvh w-1/4 p-5 mr-5">
        Admin Sidebar
      </aside>
      <div className="p-5">{children}</div>
    </div>
  );
};

export default AdminLayout;
