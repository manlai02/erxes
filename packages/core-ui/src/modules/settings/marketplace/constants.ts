export const OS_SERVICES = [
  {
    name: 'Support service',
    description:
      'Get email and in-app chat technical support on setting up and using erxes',
    type: 'supportService',
    price: '20',
    logo: '/static/images/plan-icons/support-service.png'
  },
  {
    name: 'Customer success consulting',
    description:
      'Monthly sessions with a customer success consultant for guidance on your erxes',
    type: 'supportService2',
    price: '40',
    logo: '/static/images/plan-icons/customer-success.png'
  },
  {
    name: 'Setup service',
    description: 'Get technical support on setting up and using erxes',
    type: 'setupService',
    price: '50',
    logo: '/static/images/plan-icons/setupService.svg'
  },
  {
    name: 'Company Branding',
    description:
      'Set yourself apart by using your company branding and custom domain',
    type: 'whiteLabel',
    price: '5',
    logo: '/static/images/plan-icons/rgb.svg'
  }
];

export const SUB_KINDS = {
  setupService: {
    dataImport: 'Data import',
    eventTrackingInstallation: 'Event tracking config',
    widgetInstallation: 'Widget installation',
    awsSes: 'AWS SES Setup',
    webhooks: 'Webhooks',
    scriptInstallation: 'Script Installation'
  },
  integrationService: {
    facebook: 'Facebook'
  }
};

export const CATEGORIES = [
  { value: 'Marketing' },
  { value: 'Sales' },
  { value: 'Services' },
  { value: 'Operations' },
  { value: 'Communications' },
  { value: 'Productivity' },
  { value: 'Website' },
  { value: 'ECommerce' },
  { value: 'Document management' },
  { value: 'Human resource' },
  { value: 'Finance' },
  { value: 'Inventory' },
  { value: 'Analytics' },
  { value: 'Reporting' }
];

export const STATUS_TYPES = [
  { value: 'All' },
  { value: 'Free' },
  { value: 'Paid' }
];
