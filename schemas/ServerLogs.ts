import { Schema, model, models } from 'mongoose';

import { IServerLogsSchema } from '@/utils/types';

const ServerLogsSchema = new Schema<IServerLogsSchema>(
   {
      logUrl: {
         type: String,
         required: true,
      },
      logText: {
         type: String,
         required: true,
      },
   },
   { timestamps: true }
);

const ServerLogs =
   models.ServerLogs ||
   model<IServerLogsSchema>('ServerLogs', ServerLogsSchema);

export default ServerLogs;
