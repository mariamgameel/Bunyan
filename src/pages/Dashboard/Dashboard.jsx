import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../../components/Dashboard/Footer/Footer";
import Navbar from "../../components/Dashboard/Navbar/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import HomeDashboard from "./HomeDashboard";
import Users from "./Users";
import Projects from "./Projects";
import Developers from "./Developers";
import TableDashboard from "../../components/ui/TableDashboard/TableDashboard";
import FormDashboard from "../../components/ui/FormDashboard/FormDashboard";
function Dashboard() {
    const [drafts, setDrafts] = useState({
    users: false,
    projects: false,
    developers: false
    });

    const handleDraftChange = (type, value) => {
    setDrafts(prev => ({
    ...prev,
    [type]: value
    }));
    };
    return (
        <>
            <Navbar adminName="Mariam Gameel" />
            <div className="d-flex">
                <Sidebar drafts={drafts} />
                <main className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={<HomeDashboard/>} />

                        <Route path="/users" element={<Users/>}>
                            {/*first child*/}
                            <Route index element={<TableDashboard title="Users" button="Add New User" />} />
                            {/*second child*/}
                            <Route path="add" element={<FormDashboard setIsDraft={(value) => handleDraftChange ("users", value)} />} />
                        </Route>

                        <Route path="/projects" element={<Projects/>}>
                            {/*first child*/}
                            <Route index element={<TableDashboard title="Projects" button="Add New Project" />} />
                            {/*second child*/}
                            <Route path="add" element={<FormDashboard setIsDraft={(value) => handleDraftChange ("projects", value)} />} />
                        </Route>

                        <Route path="/developers" element={<Developers/>}>
                            {/*first child*/}
                            <Route index element={<TableDashboard title="Developers" button="Add New Developer" />} />
                            {/*second child*/}
                            <Route path="add" element={<FormDashboard setIsDraft={(value) => handleDraftChange ("developers", value)} />} />
                        </Route>
                       
                    </Routes>
                </main>
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;

