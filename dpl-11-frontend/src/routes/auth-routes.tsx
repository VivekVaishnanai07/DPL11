import { Route } from "react-router-dom";
import AuthGuard from "../components/auth/guards/auth-guard";
import About from "../screens/about/about";
import Dashboard from "../screens/dashboard/dashboard";
import AddMatch from "../screens/matches/add-match";
import Match from "../screens/matches/match";
import AddTeam from "../screens/teams/add-team";
import Teams from "../screens/teams/teams";
import Users from "../screens/users/users";
import AddUser from "../screens/users/add-user";
import Prediction from "../screens/prediction/prediction";
import Status from "../screens/status/status";

const AuthRoutes = [
    <Route key="Dashboard" path="/dashboard" element={<AuthGuard component={<Dashboard />} />} />,
    <Route key="Prediction" path="/dashboard/prediction/:id" element={<AuthGuard component={<Prediction />} />} />,
    <Route key="Match" path="/matches" element={<AuthGuard component={<Match />} />} />,
    <Route key="AddMatch" path="/match/add-match" element={<AuthGuard component={<AddMatch />} />} />,
    <Route key="EditMatch" path="/match/:id" element={<AuthGuard component={<AddMatch />} />} />,
    <Route key="Teams" path="/teams" element={<AuthGuard component={<Teams />} />} />,
    <Route key="AddTeams" path="/team/add-teams" element={<AuthGuard component={<AddTeam />} />} />,
    <Route key="EditTeams" path="/team/:id" element={<AuthGuard component={<AddTeam />} />} />,
    <Route key="Users" path="/users" element={<AuthGuard component={<Users />} />} />,
    <Route key="AddUser" path="/user/add-user" element={<AuthGuard component={<AddUser />} />} />,
    <Route key="EditUser" path="/user/:id" element={<AuthGuard component={<AddUser />} />} />,
    <Route key="status" path="/status" element={<AuthGuard component={<Status />} />} />,
    <Route key="About" path="/about" element={<AuthGuard component={<About />} />} />,
]

export default AuthRoutes;