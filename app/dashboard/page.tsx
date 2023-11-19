"use client"

import { NextPage } from "next";
import DashboardWrapper from "../components/dashboard/DashboardWrapper";
import PrivateRoute from "../routes/PrivateRoute";

const DashboardPage: NextPage = () => {
    return <DashboardWrapper />
}

export default PrivateRoute(DashboardPage);