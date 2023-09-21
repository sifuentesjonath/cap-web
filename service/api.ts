import axios from 'axios';
import firebase from 'firebase/app';
import customAxios from './customAxios';
import { SignInputs } from '@types';

export const createUserAccount = async (data: SignInputs) => {
  try {
    const newUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.Email, data.Password);

    const newUserInCondoo = axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
      Email: data.Email,
      Password: data.Password,
      Uid: newUser.user.uid,
    });

    return newUserInCondoo
  } catch(error){
    return {
      status: 500,
      message: error.mesage
    }
  }

};

export const resetPassword = async (data: string) => {
   await firebase
    .auth()
    .sendPasswordResetEmail(data);
};

export const loginUser = async (email, password) => {
  const user = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);

  const isVerified = await firebase.auth().currentUser.emailVerified;
  await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

  if (isVerified) {
    const token = await firebase.auth().currentUser.getIdToken();
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      { token }
    );
    return response.data;
  } 
  else {
    return {
      email: '',
    };
  }
};

export const logoutUser = async () => {
  const res = await firebase.auth().signOut();
  return res;
};

export const getPlaidToken = () => {
  return customAxios.get(`/plaid/linkToken`).then(res => res.data);
};

export const getPlaidTokenUpdate = (plaidId:string) => {
  return customAxios.get(`/plaid/linkTokenUpdate/${plaidId}`).then(res => res.data);
};

export const getPlaidIdentity = (plaidId) => {
  return customAxios.get(`/plaid/identity/${plaidId}`).then(res => res.data);
};

export const getPlaidInstitution = (plaidId) => {
  return customAxios.get(`/plaid/institution-details/${plaidId}`).then(res => res.data);
};

export const uploadFile = file => {
  return customAxios.post(`/upload`, file).then(res => res.data);
};

export const createProperty = data => {
  return customAxios.post(`/property`, data).then(res => res.data);
};

export const getPropertyByEmail = email => {
  return customAxios.get(`/property/getPropertiesByUserEmail?email=${email}`).then(res => res.data);
}

export const getPropertiesByUser = userId => {
  return customAxios.get(`/property/getPropertiesByUser/${userId}`).then(res => res.data);
}

export const updateProperty = (id, data) => {
  return customAxios.patch(`/property/${id}`, data).then(res=> res.data);
};

export const deleteProperty = (id) => {
  return customAxios.delete(`/property/${id}`).then(res=> res.data);
};

export const updateEmailAndPassword = (data) => {
  return customAxios.patch(`/auth/email_and_password`, data).then(res => res.data);
};

export const updateAddress = (id, data) => {
  return customAxios.patch(`/address/${id}`, data).then(res => res.data);
};

export const setBillingAddress = data => {
  return customAxios.patch(`/titleholders/address`, data).then(res => res.data);
};

export const updateTitleholder = (id, data) => {
  return customAxios.patch(`/titleholders/${id}`, data).then(res => res.data);
};

export const createTitleholder = data => {
  return customAxios.post(`/titleholders`, data).then(res => res.data);
};

export const getTitleholders = () => {
  return customAxios.get(`/titleholders`).then(res => res.data);
};

export const getAdminTitleholders = () => {
  return customAxios.get(`/titleholders/admin`).then(res => res.data);
};

export const getProperties = () => {
  return customAxios.get(`/property`).then(res => res.data);
};

export const getPropertiesAdmin = () => {
  return customAxios.get(`/property/admin`).then(res => res.data);
};

export const getAccount = () => {
  return customAxios.get(`/profile/account`).then(res => res.data);
};

export const getProfile = () => {
  return customAxios.get(`/profile`).then(res => res.data);
};

export const updateStep = data => {
  return customAxios.post(`/profile/step`, data);
};

export const patchProfile = data => {
  return customAxios.patch(`/profile`, data);
};

export const docusign = data => {
  return customAxios.post(`/ds-send`, data);
};

export const docusignTitleHolders = data => {
  return customAxios.post(`/ds-send/titleholders`, data);
};

export const getTitleHolderEmailAndName = (titleHolderId:string) => {
  return customAxios.get(`/titleholders/id/${titleHolderId}`).then(res => res.data);
};

export const docusignDownloadDocuments = () => {
  return customAxios.get(`/ds-send/downloadDocument`, 
  { 
  responseType: 'blob',
  headers: {
    'Accept': 'application/pdf'
    }})
};

export const downloadDocumentfromAWS = (key) => { 
  return customAxios.get(`/documents/`, 
  { 
  params: {
    key:key
  } ,
  responseType: 'blob',
  headers: {
    'Accept': 'application/pdf'
    } })
};

export const bringDocumentsFromDocusign = (envelopeIds : Array<any>, userId: any ) => {
  return customAxios.get(`/ds-send/refreshDocuments`, {
    params: {
      envelopes: envelopeIds,
      userId
    }})
};


export const uploadDocumentstoAWSandDb = (documents : Array<any> ) => {
  return customAxios.post(`/document-share/uploadNewCompleteDocuments`,{data:documents});
};

export const createBank = data => {
  return customAxios.post(`/plaid`, data);
};

export const updatePlaidDetails = data => { 
  return customAxios.patch(`/plaid/${data.TitleHolderId}`, data);
};

export const updateBank = data => {
  return customAxios.patch(`/plaid/${data.bankId}`, data);
};

export const createDocumentinBuildium = args => {
  return customAxios.post(`/buildium-request`, args);
};

export const getUnitBuildiumId = propertyId => {
  return customAxios.get(`/buildium-request/getUnit/${propertyId}`);
};

export const getFinancialGLTransactions = (User) => {
  return customAxios.get(`/buildium-financials/all-gl-transactions?User=${User}`);
};

export const getOwnerDraw = args => {
  const { 
    startDate, 
    endDate, 
    buildiumIds // ['4842', '2134']
  } = args;

  const buildiumIdsAsString = buildiumIds.join();
  return customAxios.get(`/buildium-request/get-owner-draw`,{
    params: {
      startDate, endDate, buildiumIds: buildiumIdsAsString,
    },
  })};

  export const createZendeskJWT = ({sign, username, email}) => {
  return customAxios.post(`/zendesk/jwt`,{
    body: {
      sign,
      username,
      email
    }
  })

};
