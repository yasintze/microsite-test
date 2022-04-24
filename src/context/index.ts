import { createContext } from 'react';

type IPhoneContext = {
  inputValue: string;
  setInputValue?: any;
};

const defaultState = {
  inputValue: '',
};

export const PhoneContext = createContext<IPhoneContext>(defaultState);

export const PhoneProvider = PhoneContext.Provider;
