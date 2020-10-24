
import * as Loader from "../Loader"
import * as Result from "../../Result/Result"
import * as State from "../State"



export const STATE_UNSET = State.Unset()
export const STATE_INITIALIZING = State.Initializing()
export const STATE_INITIALIZED = State.InitializedState()
export const STATE_STARTING = State.Starting()
export const STATE_RUNNING = State.Running()
export const STATE_STOPPING = State.Stopping()
export const STATE_FINISHED = State.Finished()



export const MESSAGE_INITIALIZE = Loader.Initialize([])
export const MESSAGE_INITIALIZED = Loader.Initialized([])
export const MESSAGE_START = Loader.Start([])
export const MESSAGE_STARTED = Loader.Started([])
export const MESSAGE_STOP = Loader.Stop([])
export const MESSAGE_STOPPED = Loader.Stopped([])
