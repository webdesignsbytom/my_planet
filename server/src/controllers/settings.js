import { updateSettingsById } from '../domain/settings.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import { BadRequestEvent, ServerErrorEvent } from '../event/utils/errorUtils.js';
import {
  EVENT_MESSAGES,
  sendDataResponse,
  sendMessageResponse,
} from '../utils/responses.js';

export const updateSettingsHandler = async (req, res) => {
  console.log('update user settings');

  const { userId } = req.params;
  const settingsData = req.body;

  try {
    // Update settings with the given data
    const updatedSettings = await updateSettingsById(userId, settingsData);

    if (!updatedSettings) {
      const notUpdated = new BadRequestEvent(
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.updateSettingsFail
      );
      myEmitterErrors.emit('error', notUpdated);
      return sendMessageResponse(res, notUpdated.code, notUpdated.message);
    }

    return sendDataResponse(res, 200, { updatedSettings });
  } catch (err) {
    // Handle server error
    const serverError = new ServerErrorEvent('Update settings server error');
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
