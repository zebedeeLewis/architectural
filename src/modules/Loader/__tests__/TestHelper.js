
import * as State from "../State"
import * as Message from "../Message"



export const STATE_UNSET = State.Unset()
export const STATE_INITIALIZING = State.Initializing()
export const STATE_INITIALIZED = State.InitializedState()
export const STATE_STARTING = State.Starting()
export const STATE_RUNNING = State.Running()
export const STATE_STOPPING = State.Stopping()
export const STATE_FINISHED = State.Finished()



export const MESSAGE_INITIALIZE = Message.Initialize([])
export const MESSAGE_INITIALIZED = Message.Initialized([])
export const MESSAGE_START = Message.Start([])
export const MESSAGE_STARTED = Message.Started([])
export const MESSAGE_STOP = Message.Stop([])
export const MESSAGE_STOPPED = Message.Stopped([])
