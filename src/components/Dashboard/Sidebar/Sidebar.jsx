import styles from "./Sidebar.module.css";

function Sidebar() {

    const links = [
        {icon: "fa-chart-line", title: "STATUS"},
        {icon: "fa-users", title: "USER MANAGEMENT"},
        {icon: "fa-building", title: "PROJECTS MANAGEMENT"},
        {icon: "fa-building", title: "DEVELOPERS MANAGEMENT"},
        {icon: "fa-globe", title: "WEBSITE CMS"},
        {icon: "fa-message", title: "LIVE CHAT"},
    ];

    return (
    <>
        <aside className={`${styles.sidebar} min-vh-100 py-4`}>
            <div>DASHBOARDS</div>
            <nav>
               {links.map((item, index) => (
                 <div className="navItem" key={index}>
                    <i className={`fa-solid ${item.icon}`}></i>
                    <span className="title">{item.title}</span>
                </div>
               ))}
            </nav>
        </aside>
    </>
    );
}
export default Sidebar;