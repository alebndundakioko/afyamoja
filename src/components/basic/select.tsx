import type { FC } from 'react';

import { Select } from 'antd';

// Custom select component
// const MySelect = <T extends SelectValue = SelectValue>({ children, ...props }: SelectProps<T>) => {
//   return <Select<T> {...props}>{children}</Select>;
// };

const BaseSelect: FC = props => {
  return <Select {...props} />;
};

const MySelect = Object.assign(Select, BaseSelect);

export default MySelect;
