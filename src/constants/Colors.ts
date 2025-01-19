type ColorsType = {
  // Core Colors
  primary: string;
  onPrimary: string;
  secondary: string;
  onSecondary: string;

  // Backgrounds
  background: string;
  cardBackground: string;
  lightBackground: string;

  // Text Colors
  text: string;
  darkText: string;
  lightText: string;
  mutedText: string;

  // Borders
  border: string;
  borderLight: string;

  // Alerts
  success: string;
  error: string;
  warning: string;
  info: string;

  // Others
  gray: string;
  black: string;
  white: string;
};

const Colors: ColorsType = {
  // Core Colors
  primary: '#FF6F00',
  onPrimary: '#FFFFFF',
  secondary: '#1E88E5',
  onSecondary: '#FFFFFF',

  // Backgrounds
  background: '#FFFFFF',
  cardBackground: '#F5F5F5',
  lightBackground: '#FAFAFA',

  // Text Colors
  text: '#212121',
  darkText: '#000000',
  lightText: '#FFFFFF',
  mutedText: '#757575',

  // Borders
  border: '#E0E0E0',
  borderLight: '#EEEEEE',

  // Alerts
  success: '#4CAF50',
  error: '#F44336',
  warning: '#FFC107',
  info: '#2196F3',

  // Others
  gray: '#9E9E9E',
  black: '#000000',
  white: '#FFFFFF',
};

export default Colors;
