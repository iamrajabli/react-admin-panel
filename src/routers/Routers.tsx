import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import PartnerAdd from "../pages/partners/PartnerAdd";
import PartnerEdit from "../pages/partners/PartnerEdit";
import Partners from "../pages/partners/Partners";
import Profile from "../pages/profile/Profile";
import Settings from "../pages/settings/Settings";
import Users from "../pages/users/Users";
import UsersEdit from "../pages/users/UserEdit";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/:id" element={<UsersEdit />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/partners/:id" element={<PartnerEdit />} />
                <Route path="/partners/add" element={<PartnerAdd />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </>
    );
};

export default Routers;