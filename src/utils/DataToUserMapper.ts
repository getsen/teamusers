import { IUser, ID, NAME, USERNAME, EMAIL, ADDRESS, PHONE, WEBSITE, COMPANY } from "../models/IUser";

// Method to map the response to form object
export const UserMapper = (data: [IUser]) => {
  const result = data.map((user: IUser) => {
    return {
      [ID]: user.id,
      [NAME]: user.name,
      [USERNAME]: user.username,
      [EMAIL]: user.email,
      [ADDRESS]: Object.values(user.address)
        .filter((val) => typeof val !== "object")
        .join(" "),
      [PHONE]: user.phone,
      [WEBSITE]: user.website,
      [COMPANY]: Object.values(user.company)
        .filter((val) => typeof val !== "object")
        .join(" "),
    };
  });
  return result;
};
