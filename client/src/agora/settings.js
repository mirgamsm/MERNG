
import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const token = '00648ac82b7e0d743a6971e73eba4407fb9IAClCopI+NNJ11/SALpQzTX+P1W6jcPtOb7Roxg1FctO+JtRn3IAAAAAEACGukDPGHzwYgEAAQAXfPBi';
const appId= '48ac82b7e0d743a6971e73eba4407fb9'
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "room";
