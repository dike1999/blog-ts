import React, { createContext, useContext, useEffect, useState } from 'react';
import mitt from 'mitt';

export const BusContext: any = createContext(null);

const useBus = () => useContext(BusContext);

export const useListener = (name: any, fn: any) => {
  const bus: any = useBus();
  useEffect(() => {
    bus.on(name, fn);
    return () => {
      bus.off(name, fn);
    };
  }, [bus, name, fn]);
};

export const Provider = ({ children }: any) => {
  const [bus] = useState(() => mitt());
  return <BusContext.Provider value={bus}>{children}</BusContext.Provider>;
};

export default useBus;
