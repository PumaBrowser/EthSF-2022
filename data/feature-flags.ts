import { pumaMembers } from './puma-members';

export const featureFlags = [
  {
    key: 'composer-v2',
    name: 'Composer v2',
    enabledFor: [...pumaMembers]
  },
  {
    key: 'trending-widget',
    name: 'Trending widget',
    enabledFor: [...pumaMembers]
  }
];
