import Header from './Header.jsx';
import {useSelector} from "react-redux";
import UserDashboard from './UserDashboard.jsx';
import AdminDashboard from './AdminDashboard.jsx';
const Dashboard = () => {
    console.log("in Dashboard");
    const readRole = useSelector((store)=> store?.user?.role);
    
    return (
        <>
        <Header context="dashboard" />
        {readRole === "user" ? <UserDashboard /> : <AdminDashboard />}
        </>
    )
};

export default Dashboard;