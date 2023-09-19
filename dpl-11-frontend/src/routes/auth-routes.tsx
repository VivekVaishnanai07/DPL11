import { Route } from "react-router-dom";
import AuthGuard from "../components/auth/guards/auth-guard";
import About from "../screens/about/about";
import Dashboard from "../screens/dashboard/dashboard";
import Match from "../screens/matches/match";
import Teams from "../screens/teams/teams";
import AddTeam from "../screens/teams/add-team";
import AddMatch from "../screens/matches/add-match";

const AuthRoutes = [
    <Route key="Dashboard" path="/dashboard" element={<AuthGuard component={<Dashboard />} />} />,
    <Route key="Match" path="/matches" element={<AuthGuard component={<Match />} />} />,
    <Route key="Match" path="/match/add-match" element={<AuthGuard component={<AddMatch />} />} />,
    <Route key="Match" path="/match/:id" element={<AuthGuard component={<AddMatch />} />} />,
    <Route key="Teams" path="/teams" element={<AuthGuard component={<Teams />} />} />,
    <Route key="AddTeams" path="/team/add-teams" element={<AuthGuard component={<AddTeam />} />} />,
    <Route key="EditTeams" path="/team/:id" element={<AuthGuard component={<AddTeam />} />} />,
    <Route key="About" path="/about" element={<AuthGuard component={<About />} />} />,
]

export default AuthRoutes;