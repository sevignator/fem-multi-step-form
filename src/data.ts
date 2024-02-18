import iconArcadeSrc from '@assets/images/icon-arcade.svg';
import iconAdvancedSrc from '@assets/images/icon-advanced.svg';
import iconProSrc from '@assets/images/icon-pro.svg';

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
    imgSrc: iconArcadeSrc,
  },
  {
    label: 'Advanced',
    value: 'advanced',
    monthlyPrice: 12,
    imgSrc: iconAdvancedSrc,
  },
  {
    label: 'Pro',
    value: 'pro',
    monthlyPrice: 15,
    imgSrc: iconProSrc,
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
