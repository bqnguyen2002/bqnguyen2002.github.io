// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'bqnguyen2002', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 12, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {

    },
  },
  seo: {
    title: 'Portfolio of Brandon Nguyen',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'brandon-nguyen-75a914206',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '571-405-0830',
    email: 'bqnguyen2002@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1e04lVA7y74uPy0h-iPDF7SrHfccQOEGI/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Python',
    'JavaScript',
    'React.js',
    'Node.js',
    'C',
    'C++',
    'Bash',
    'Git',
    'Powershell',
    'Bash',
    'HTML/CSS',
    'Flask',
  ],
  experiences: [
    {
      company: 'Azure Summit Technology',
      position: 'Software Engineer',
      from: 'January 2024',
      to: 'Present',
      companyLink: 'https://www.azuresummit.com/',
    },
    {
      company: 'Signature Federal Credit Union',
      position: 'IT Core System Programmer',
      from: 'June 2023',
      to: 'January 2024',
      companyLink: 'https://www.signaturefcu.org/',
    },
    {
      company: 'Craxel Inc.',
      position: 'Software Engineer Intern',
      from: 'June 2022',
      to: 'August 2022',
      companyLink: 'https://www.craxel.com/',
    },
    {
      company: 'Happy Mobility',
      position: 'Embedded Software Engineer Intern',
      from: 'July 2020',
      to: 'October 2021',
      companyLink: 'https://thehmlab.com/',
    },
  ],
  educations: [
    {
      institution: 'College of William and Mary',
      degree: 'B.S in Computer Science',
      from: 'August 2020',
      to: 'May 2023',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business'
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
