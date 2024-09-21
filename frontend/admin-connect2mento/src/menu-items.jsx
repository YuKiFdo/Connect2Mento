const menuItems = {
  items: [
    {
      id: 'navigation',
      title: 'Navigation',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: 'feather icon-home',
          url: '/admin/dashboard'
        },
    
      ]
    },

    {
      id: 'mentor-section',
      title: 'Mentor',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'view-mentor',
          title: 'View Mentors',
          type: 'item',
          icon: 'feather icon-book',
          url: '/admin/mentor/view'
        },
        {
          id: 'mentor-application',
          title: 'Mentor Application',
          type: 'item',
          icon: 'feather icon-book',
          url: '/admin/mentor/application'
        }
      ]
    },

    {
      id: 'mentee-section',
      title: 'Mentee',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'view-mentee',
          title: 'View Mentees',
          type: 'item',
          icon: 'feather icon-book',
          url: '/admin/mentee/view'
        },
      ]
    },
  ]
};

export default menuItems;
