import { library } from '@fortawesome/fontawesome-svg-core';

// Import specific icons
import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

// Add icons to the library
library.add(
  faUser, faEnvelope, faPhone,  // Solid icons
  faFacebook, faLinkedin, faTwitter // Brand icons
);

