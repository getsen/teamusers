import { httpGet } from "../utils/ApiClient";
import { UserMapper } from '../utils/DataToUserMapper';

export const fetchUsers = async (
  callback?: (responseData: any) => any,
  errorCallback?: (reason: any) => any
) => {
  await httpGet(
    "https://jsonplaceholder.typicode.com/users/",
    undefined,
    (res) => {   
      return callback && callback(UserMapper(res));
    },
    (err) => {
      return errorCallback && errorCallback(err);
    }
  );
};
