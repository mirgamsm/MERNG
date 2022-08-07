
import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const token = '006f179dbf0fe8b401791feb77a41dc9fdeIAACBkll0snCf0DXFpiVe2q0Asx6XJlYkh0rQsSNm9JSNZtRn3IAAAAAEACGukDP7s3wYgEAAQDuzfBi';
const appId= 'f179dbf0fe8b401791feb77a41dc9fde'
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "room";
