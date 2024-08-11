import bcrypt from 'bcrypt';
// Components
import { createVerificationInDB, createPasswordResetInDB } from './utils.js';
// Emitters
import { myEmitterUsers } from '../event/userEvents.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import {
  findAllUsers,
  findUserByEmail,
  findUserById,
  deleteUserById,
  createUser,
  createNewProfile,
  updateProfileById,
  findUserByEmailAdminCheck,
  updateUserCountryList,
} from '../domain/users.js';
// Response messages
import {
  EVENT_MESSAGES,
  sendDataResponse,
  sendMessageResponse,
} from '../utils/responses.js';
import {
  NotFoundEvent,
  ServerErrorEvent,
  MissingFieldEvent,
  RegistrationServerErrorEvent,
  BadRequestEvent,
} from '../event/utils/errorUtils.js';
// Password hash
const hashRate = 8;

export const getAllUsers = async (req, res) => {
  console.log('getAllUsers');
  try {
    const foundUsers = await findAllUsers();

    if (!foundUsers) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { users: foundUsers });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get all users`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getUserById = async (req, res) => {
  console.log('getUserById');
  const { userId } = req.params;

  try {
    const foundUser = await findUserById(userId);
    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    delete foundUser.password;
    delete foundUser.agreedToTerms;

    // myEmitterUsers.emit('get-user-by-id', req.user);
    return sendDataResponse(res, 200, { user: foundUser });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get user by ID`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getUserByEmail = async (req, res) => {
  console.log('getUserByEmail');
  const { email } = req.params;
  console.log('xxx', email);

  const lowerCaseEmail = email.toLowerCase();
  try {
    const foundUser = await findUserByEmail(lowerCaseEmail);

    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    console.log('found', foundUser);
    delete foundUser.password;
    delete foundUser.agreedToTerms;

    myEmitterUsers.emit('get-user-by-id', req.user);
    return sendDataResponse(res, 200, { user: foundUser });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get user by ID`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const registerNewUser = async (req, res) => {
  const { email, password, agreedToTerms } = req.body;
  const lowerCaseEmail = email.toLowerCase();

  try {
    // Check missing data
    if (!lowerCaseEmail || !password) {
      //
      const missingField = new MissingFieldEvent(
        null,
        'Registration: Missing Field/s event'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }

    // Check if unique names exist
    const foundUser = await findUserByEmailAdminCheck(lowerCaseEmail);
    if (foundUser) {
      return sendDataResponse(res, 400, { email: EVENT_MESSAGES.emailInUse });
    }

    // Encode password
    const hashedPassword = await bcrypt.hash(password, hashRate);

    // Create user
    const createdUser = await createUser(lowerCaseEmail, hashedPassword);

    if (!createdUser) {
      const notCreated = new BadRequestEvent(
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.createUserFail
      );
      myEmitterErrors.emit('error', notCreated);
      return sendMessageResponse(res, notCreated.code, notCreated.message);
    }

    delete createdUser.password;
    delete createdUser.updatedAt;

    return sendDataResponse(res, 202, { createdUser: createdUser });
  } catch (err) {
    // Error
    const serverError = new RegistrationServerErrorEvent(
      `Register Server error`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const createSinglePersonProfile = async (req, res) => {
  console.log('create new user profile');

  const { userId } = req.params;
  const {
    firstNamePerson1,
    lastNamePerson1,
    preferedNamePerson1,
    genderPerson1,
    birthCountryPerson1,
    favoriteCountryPerson1,
    hobbiesPerson1,
    instagramIdPerson1,
    specialHashtagsPerson1,
    hiddenHashtagsPerson1,
  } = req.body;

  try {
    // Create profile for the existing user
    const newProfile = await createNewProfile(userId, {
      firstName: firstNamePerson1,
      lastName: lastNamePerson1,
      preferedName: preferedNamePerson1,
      gender: genderPerson1,
      countryOfBirth: birthCountryPerson1,
      favoriteCountry: favoriteCountryPerson1,
      hobbies: hobbiesPerson1,
      instagramId: instagramIdPerson1,
      specialHashtags: specialHashtagsPerson1,
      hiddenHashtags: hiddenHashtagsPerson1,
    });

    if (!newProfile) {
      const notCreated = new BadRequestEvent(
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.createUserFail
      );
      myEmitterErrors.emit('error', notCreated);
      return sendMessageResponse(res, notCreated.code, notCreated.message);
    }

    return sendDataResponse(res, 201, { createdProfile: newProfile });
  } catch (err) {
    // Handle server error
    const serverError = new ServerErrorEvent('Creat profile Server error');
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const createCoupleProfiles = async (req, res) => {
  console.log('create new couple profiles');

  const { userId } = req.params;
  const {
    firstNamePerson1,
    lastNamePerson1,
    preferedNamePerson1,
    genderPerson1,
    birthCountryPerson1,
    favoriteCountryPerson1,
    hobbiesPerson1,
    instagramIdPerson1,
    specialHashtagsPerson1,
    hiddenHashtagsPerson1,
    firstNamePerson2,
    lastNamePerson2,
    preferedNamePerson2,
    genderPerson2,
    birthCountryPerson2,
    favoriteCountryPerson2,
    hobbiesPerson2,
    instagramIdPerson2,
    specialHashtagsPerson2,
    hiddenHashtagsPerson2,
  } = req.body;

  try {
    // Create profile for the first person
    const profile1 = await createNewProfile(userId, {
      firstName: firstNamePerson1,
      lastName: lastNamePerson1,
      preferedName: preferedNamePerson1,
      gender: genderPerson1,
      countryOfBirth: birthCountryPerson1,
      favoriteCountry: favoriteCountryPerson1,
      hobbies: hobbiesPerson1,
      instagramId: instagramIdPerson1,
      specialHashtags: specialHashtagsPerson1,
      hiddenHashtags: hiddenHashtagsPerson1,
    });

    // Create profile for the second person
    const profile2 = await createNewProfile(userId, {
      firstName: firstNamePerson2,
      lastName: lastNamePerson2,
      preferedName: preferedNamePerson2,
      gender: genderPerson2,
      countryOfBirth: birthCountryPerson2,
      favoriteCountry: favoriteCountryPerson2,
      hobbies: hobbiesPerson2,
      instagramId: instagramIdPerson2,
      specialHashtags: specialHashtagsPerson2,
      hiddenHashtags: hiddenHashtagsPerson2,
    });

    if (!profile1 || !profile2) {
      const notCreated = new BadRequestEvent(
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.createUserFail
      );
      myEmitterErrors.emit('error', notCreated);
      return sendMessageResponse(res, notCreated.code, notCreated.message);
    }

    return sendDataResponse(res, 201, { profile1, profile2 });
  } catch (err) {
    // Handle server error
    const serverError = new ServerErrorEvent('Create profile server error');
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const updateUserProfile = async (req, res) => {
  console.log('update user profile');

  const { profileId } = req.params;
  const {
    firstName,
    lastName,
    preferedName,
    gender,
    countryOfBirth,
    favoriteCountry,
    hobbies,
    instagramId,
    specialHashtags,
    hiddenHashtags,
  } = req.body;

  try {
    // Update profile with the given data
    const updatedProfile = await updateProfileById(profileId, {
      firstName,
      lastName,
      preferedName,
      gender,
      countryOfBirth,
      favoriteCountry,
      hobbies,
      instagramId,
      specialHashtags,
      hiddenHashtags,
    });

    if (!updatedProfile) {
      const notUpdated = new BadRequestEvent(
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.updateUserFail
      );
      myEmitterErrors.emit('error', notUpdated);
      return sendMessageResponse(res, notUpdated.code, notUpdated.message);
    }

    return sendDataResponse(res, 200, { updatedProfile });
  } catch (err) {
    // Handle server error
    const serverError = new ServerErrorEvent('Update profile server error');
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const updateCountriesVisitedHandler = async (req, res) => {
  console.log('updateCountriesVisitedHandler');

  const { userId } = req.params;
  const { countriesVisited } = req.body;

  try {
    // Assuming you are using a database query to update the user profile
    const updatedUser = await updateUserCountryList(
      userId,
      countriesVisited
    );
    if (!updatedUser) {
      const notUpdated = new BadRequestEvent(
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.updateUserFail
      );
      myEmitterErrors.emit('error', notUpdated);
      return sendMessageResponse(res, notUpdated.code, notUpdated.message);
    }

    return sendDataResponse(res, 200, { updatedUser });
  } catch (err) {
    const serverError = new ServerErrorEvent('Update profile server error');
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getProfileByIdHandler = async (req, res) => {
  const { profileId } = req.params;

  try {
    const profile = await getProfileById(profileId);

    if (!profile) {
      const notFound = new BadRequestEvent(
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.profileNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { profile });
  } catch (err) {
    // Handle server error
    const serverError = new ServerErrorEvent('Get profile server error');
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const deleteUser = async (req, res) => {
  console.log('deleteUser');
  const userId = req.params.userId;

  try {
    const foundUser = await findUserById(userId);
    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    await deleteUserById(userId);

    const updatedUserArray = await findAllUsers();

    return sendDataResponse(res, 202, {
      deletedUser: foundUser,
      updatedUserArray: updatedUserArray,
      message: `User ${foundUser.email} deleted`,
    });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `delete user by ID`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
