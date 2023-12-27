"use client"

import { NextPage } from 'next';
import FileLists from '../components/files/FileLists';
import PrivateRoute from '../routes/PrivateRoute';

const AllFilesPage: NextPage = () => {
  return <FileLists />;
};

export default PrivateRoute(AllFilesPage);
