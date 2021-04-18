import React from 'react';

import { MenuItem } from './MenuItem';

export default {
  title: 'Example/MenuItem',
  component: MenuItem,
};

const Story = (args) => <MenuItem {...args} />;

export const SingleItem = Story.bind({});
SingleItem.args = {
  slug: "live-events",
  title:"Live Event",
  url:"https://www.we-conect.com/liveevents",
};
export const NestedChildren = Story.bind({});
NestedChildren.args = {
  slug:"we-connect",
  title:"We-Connect Home page",
  url:"https://www.we-conect.com/",
  children: [
    {
      slug: "live-events",
      title: "Live Event",
      url: "https://www.we-conect.com/liveevents",
    },
    {
      slug: "digital-managed-events",
      title: "Digital Managed Events",
      url: "https://www.we-conect.com/l-digital-managed-events ",
    }
  ]
};
