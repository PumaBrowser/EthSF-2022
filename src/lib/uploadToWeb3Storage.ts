import axios from 'axios';
import toast from 'react-hot-toast';
import { ERROR_MESSAGE } from 'src/constants';

/**
 *
 * @param data - Data to upload to Web3.Storage
 * @returns web3.storage transaction id
 */
const uploadToWeb3Storage = async (data: any): Promise<string> => {
  try {
    const upload = await axios('/api/metadata/uploadToWeb3', {
      method: 'POST',
      data
    });

    const { id }: { id: string } = upload?.data;

    return id;
  } catch (error) {
    console.log(error);
    toast.error(ERROR_MESSAGE);
    throw new Error(ERROR_MESSAGE);
  }
};

export default uploadToWeb3Storage;
