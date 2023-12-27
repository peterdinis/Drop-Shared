import { NextPage } from 'next';
import UploadFileWrapper from '../components/files/UploadFileWrapper';
import PrivateRoute from '../routes/PrivateRoute';

const UploadPage: NextPage = () => {
  return <UploadFileWrapper />;
};

export default PrivateRoute(UploadPage);
