import type { FC } from 'react';

import MetaTags from './utils/MetaTags';

const Loading: FC = () => {
  return (
    <div className="grid h-screen place-items-center">
      <MetaTags />
      <img className="w-32 h-32" height={150} width={150} src="/logo.svg" alt="Logo" />
    </div>
  );
};

export default Loading;
