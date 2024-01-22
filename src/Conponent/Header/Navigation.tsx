import React from 'react';

export const Items = [
  { id: 1, Item: 'Home' },
  { id: 2, Item: 'About Us' },
  { id: 3, Item: 'Contact' },
  { id: 4, Item: 'Shop' },
  { id: 5, Item: 'Blog' },
  { id: 6, Item: 'Track Order' },
];


const NavigationItem = ({ N1 }: { N1: string }) => {
  return <div>{N1}</div>;
};

const Navigation = () => {
  return (
    <div className='flex flex-row'>
      {Items.map((list) => {
        return (
          <NavigationItem key={list.id} N1={list.Item} />
        );
      })}
    </div>
  );
};

export default Navigation;
