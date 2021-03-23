import initialState from './initialState.js';

const InstructorsContext = createContext(initialState);

export const InstructorsProvider = InstructorContext.Provider;
export const InstructorsConsumer = InstructorContext.Consumer;

export default InstructorsContext;
