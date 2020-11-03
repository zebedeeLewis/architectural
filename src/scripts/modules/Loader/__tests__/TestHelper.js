
import * as State from "../State"
import * as Message from "../Message"



export const STATE_UNSET = State.Unset()
export const STATE_INITIALIZING = State.Initializing()
export const STATE_INITIALIZED = State.InitializedState()
export const STATE_STARTING = State.Starting()
export const STATE_RUNNING = State.Running()
export const STATE_STOPPING = State.Stopping()
export const STATE_FINISHED = State.Finished()


const argv = []

export const MESSAGE_INITIALIZE = Message.Initialize({argv})
export const MESSAGE_INITIALIZED = Message.Initialized({argv})
export const MESSAGE_START = Message.Start({argv})
export const MESSAGE_STARTED = Message.Started({argv})
export const MESSAGE_STOP = Message.Stop({argv})
export const MESSAGE_STOPPED = Message.Stopped({argv})
