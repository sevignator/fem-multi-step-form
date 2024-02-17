import React from 'react';

export type PersonalInfo = {
  name: string;
  email: string;
  phone: string;
};

export type PlanType = 'arcade' | 'advanced' | 'pro';

export type AddOns = {
  'online-service': boolean;
  'larger-storage': boolean;
  'customizable-profile': boolean;
};

type DataContextType = {
  personalInfo: PersonalInfo;
  changePersonalInfo: (infoType: keyof PersonalInfo, value: string | undefined) => void;
  planType: PlanType;
  changePlanType: (planName: PlanType) => void;
  isYearly: boolean;
  toggleIsYearly: () => void;
  addOns: AddOns;
  toggleAddOn: (addOnName: keyof AddOns) => void;
};

export const DataContext = React.createContext<DataContextType | null>(null);

function DataProvider({ children }: { children: React.ReactNode }) {
  const [personalInfo, setPersonalInfo] = React.useState<PersonalInfo>({
    name: '',
    email: '',
    phone: '',
  });
  const [planType, setPlanType] = React.useState<PlanType>('arcade');
  const [isYearly, setIsYearly] = React.useState(false);
  const [addOns, setAddOns] = React.useState({
    'online-service': false,
    'larger-storage': false,
    'customizable-profile': false,
  });

  function changePersonalInfo(infoType: keyof PersonalInfo, value: string | undefined) {
    if (value === undefined) {
      throw new Error('A string value must be provided.')
    }

    setPersonalInfo({
      ...personalInfo,
      [infoType]: value,
    });
  }

  function changePlanType(planName: PlanType) {
    setPlanType(planName);
  }

  function toggleIsYearly() {
    setIsYearly(!isYearly);
  }

  function toggleAddOn(addOnName: keyof AddOns) {
    const copy = { ...addOns };
    copy[addOnName] = !copy[addOnName];
    setAddOns(copy);
  }

  return (
    <DataContext.Provider
      value={{
        personalInfo,
        changePersonalInfo,
        planType,
        changePlanType,
        isYearly,
        toggleIsYearly,
        addOns,
        toggleAddOn,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
