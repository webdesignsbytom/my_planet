import dbClient from '../utils/dbClient.js';

export const findAllUsers = () =>
  dbClient.user.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

export const findUserByEmail = (email) =>
  dbClient.user.findUnique({
    where: { email: email },
    include: {
      profile: true,
    },
  });

export const findUserById = (userId) =>
  dbClient.user.findUnique({
    where: {
      id: userId,
    },
  });

export const findUserByIdBasic = (userId) =>
  dbClient.user.findUnique({
    where: {
      id: userId,
    },
  });

export const findUsersByRole = (role) =>
  dbClient.user.findMany({
    where: {
      role: role,
    },
  });

export const createUser = (email, password) =>
  dbClient.user.create({
    data: {
      email: email,
      password: password,
    },
  });

export const createNewProfile = (userId, profileData) =>
  dbClient.profile.create({
    data: {
      userId: userId,
      email: profileData.email,
      firstName: profileData.firstName,
      lastName: profileData.lastName,
      preferedName: profileData.preferedName,
      gender: profileData.gender,
      countryOfBirth: profileData.countryOfBirth,
      favoriteCountry: profileData.favoriteCountry,
      hobbies: profileData.hobbies,
      instagramId: profileData.instagramId,
      specialHashtags: profileData.specialHashtags,
      hiddenHashtags: profileData.hiddenHashtags,
    },
  });

export const updateProfileById = async (profileId, profileData) => {
  return dbClient.profile.update({
    where: {
      id: profileId,
    },
    data: {
      ...profileData,
    },
  });
};

export const getProfileById = async (profileId) => {
  return dbClient.profile.findUnique({
    where: {
      id: profileId,
    },
  });
};

export const findVerification = (userId) =>
  dbClient.userVerification.findUnique({
    where: {
      userId: userId,
    },
  });

export const findResetRequest = (userId) =>
  dbClient.passwordReset.findUnique({
    where: {
      userId: userId,
    },
  });

export const resetUserPassword = (userId, password) =>
  dbClient.user.update({
    where: {
      id: userId,
    },
    data: {
      password: password,
    },
  });

export const deleteUserById = (userId) =>
  dbClient.user.delete({
    where: {
      id: userId,
    },
  });
