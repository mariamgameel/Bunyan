import Footer from "../components/Dashboard/Footer/Footer";
import Navbar from "../components/Dashboard/Navbar/Navbar";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
function Dashboard() {
    return (
        <>
            <Navbar adminName="Mariam Gameel" />
            <div className="d-flex">
                <Sidebar />
                <main className="flex-grow-1">
                    <h1>Test Dashboard</h1>
                </main>
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;