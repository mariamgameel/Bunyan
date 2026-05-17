import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar({drafts}) {

    const links = [
        {icon: "fa-chart-line", title: "STATUS", path: "/"},
        {icon: "fa-users", title: "USER MANAGEMENT", path: "/users"},
        {icon: "fa-building", title: "PROJECTS MANAGEMENT", path: "/projects"},
        {icon: "fa-building", title: "DEVELOPERS MANAGEMENT", path: "/developers"},
        {icon: "fa-globe", title: "WEBSITE CMS"},
        {icon: "fa-message", title: "LIVE CHAT"},
    ];

    return (
    <>
        <aside className={`${styles.sidebar} min-vh-100 py-4`}>
            <div className="fw-semibold px-3 fs-4 mb-2">DASHBOARD</div>
            <nav>
               {links.map((item, index) => (
                 <NavLink 
                    to={item.path}
                    className={`${styles.navItem} d-flex align-items-center gap-3`} key={index}>
                    <i className={`fa-solid ${item.icon}`}></i>
                    <span className="fs-5">{item.title}</span>
                     {
 item.title === "USER MANAGEMENT" && drafts.users && (
 <span className={styles.badge}>Draft</span>
 )
 }

 {
 item.title === "PROJECTS MANAGEMENT" && drafts.projects && (
 <span className={styles.badge}>Draft</span>
 )
 }

 {
 item.title === "DEVELOPERS MANAGEMENT" && drafts.developers && (
 <span className={styles.badge}>Draft</span>
 )
 }

 
 
 </NavLink>
 
               ))}
            </nav>
        </aside>
    </>
    );
}
export default Sidebar;