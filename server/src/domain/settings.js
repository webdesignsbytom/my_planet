import dbClient from '../utils/dbClient.js';

export const updateSettingsById = async (userId, settingsData) => {
    return dbClient.setting.update({
      where: {
        userId: userId,
      },
      data: {
        ...settingsData,
      },
    });
  };