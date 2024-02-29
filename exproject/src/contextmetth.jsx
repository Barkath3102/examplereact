import React from "react";

const CreateContextvalue = React.createContext()
export const ProvideContextValue = CreateContextvalue.Provider
export const ConsumerContextValue = CreateContextvalue.Consumer

