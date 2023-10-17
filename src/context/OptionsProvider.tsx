import { createContext, useState, useContext, PropsWithChildren } from "react";

export type Options = {
  miles: number;
  vSize: string;
  dEnv: string;
};

interface Options_Context {
  options: Options;
  setOptions: React.Dispatch<React.SetStateAction<Options>>;
}

export const OptionsContext = createContext<Options_Context | undefined>(
  undefined,
);

export const OptionsProvider = ({ children }: PropsWithChildren) => {
  const [options, setOptions] = useState<Options>({
    miles: 0,
    vSize: "",
    dEnv: "",
  });

  return (
    <OptionsContext.Provider value={{ options, setOptions }}>
      {children}
    </OptionsContext.Provider>
  );
};

export const useOptions = () => {
  const context = useContext(OptionsContext);
  if (!context) {
    throw new Error(
      "useOptionsContext must be used inside the OptionsProvider",
    );
  }
  return context;
};
