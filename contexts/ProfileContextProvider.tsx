import React, { useState } from 'react';
const ProfileContext = React.createContext(null);
export { ProfileContext };
const ProfileContextContainer = props => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  return (
    <ProfileContext.Provider
      value={{
        isEmailSent,
        setIsEmailSent,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};
export default ProfileContextContainer;
