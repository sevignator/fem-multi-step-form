export type PlanOption = {
  label: string;
  value: string;
  monthlyPrice: number;
  imgSrc: string;
};

export type AddOnOption = {
  label: string;
  value: string;
  description: string;
  monthlyPrice: number;
};

export const planOptions: PlanOption[] = [
  {
    label: 'Arcade',
    value: 'arcade',
    monthlyPrice: 9,
    imgSrc: '/src/assets/images/icon-arcade.svg',
  },
  {
    label: 'Advanced',
    value: 'advanced',
    monthlyPrice: 12,
    imgSrc: '/src/assets/images/icon-advanced.svg',
  },
  {
    label: 'Pro',
    value: 'pro',
    monthlyPrice: 15,
    imgSrc: '/src/assets/images/icon-pro.svg',
  },
];

export const addOnOptions: AddOnOption[] = [
  {
    label: 'Online service',
    value: 'online-service',
    description: 'Access to multiplayer games',
    monthlyPrice: 1,
  },
  {
    label: 'Larger storage',
    value: 'larger-storage',
    description: 'Extra 1TB of cloud storage',
    monthlyPrice: 2,
  },
  {
    label: 'Customizable profile',
    value: 'customizable-profile',
    description: 'Custom theme on your profile',
    monthlyPrice: 2,
  },
];
