import { Router } from 'express';
import {
  createCoupleProfiles,
  createSinglePersonProfile,
  deleteUser,
  getAllUsers,
  getProfileByIdHandler,
  getUserByEmail,
  registerNewUser,
  updateCountriesVisitedHandler,
  updateUserProfile,
} from '../controllers/users.js';
import {
  validateAuthentication,
  validateAdminRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/get-all-users', getAllUsers);
router.post('/register', registerNewUser);
router.post('/create-single-person-profile/:userId', createSinglePersonProfile);
router.post('/create-couples-profile/:userId', createCoupleProfiles);
router.patch('/update-user-profile/:profileId', updateUserProfile);
router.patch('/update-user-profile/countries-visited/:userId', updateCountriesVisitedHandler);
router.get('/get-profile-by-id/:profileId', getProfileByIdHandler);
router.get('/user/email/:email', getUserByEmail);
router.delete('/delete/:userId', deleteUser);

export default router;
