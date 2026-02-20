module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `http://sakshisuman12.github.io/`,
    // Your Name
    name: 'Sakshi Suman',
    // Main Site Title
    title: `Sakshi Suman | Graduate Student - Applied Mathematics | Aspiring Machine Learning Engineer`,
    // Description that goes under your name in main bio
    description: `An aspiring Machine Learning Engineer. I'm looking for internships and co-ops in Machine Learning/Data Science starting Summer 2022.`,
    // Optional: Twitter account handle
    author: `@sakshisuman12`,
    // Optional: Github account URL
    github: `https://github.com/sakshisuman12`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/sakshisuman12/`,
    // Content of the About Me section
    about: `I'm pursuing a master's degree in Applied Mathematics at Northeastern University - College of Science with a concentration in Machine Learning and Statistics. My primary strength is Data Structure & Algorithm Implementation. Besides this, I hold a strong background in Linear Algebra, Calculus, Probability & Statistics. I'm looking for a long term career in Machine Learning.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Transfer Learning with MobileNetV2',
        description:
          'Used pre-trained weights of MobileNetV2 Convolutional Neural Netowrk on ImageNet dataset. Modified the network architecture by deleting the top layer and adding a new classification layer. Performed training only on the new layer in order to create a binary Alpaca classifier to increase accuracy from 0 % to 99 %.',
        link: '',
      },
      {
        name: 'Matrix Factorization for User Rating Predictions',
        description:
          'Derived update rules and implemented Weighted Alternating Least Squares for predicting missing user ratings of MovieLens data. Evaluated the algorithm using MSE and found that it is 62 % better than baseline model.',
        link: '',
      },
      {
        name: 'Data Modeling using Markov Chain',
        description:
          'Performed Time Series Analysis of average runs of opening batters in baseball from 1871 - 2015 with a Markov Chain. Calculated autocorrelation between original time series and a simulated time series. Performed GoF test at 5 % significance level to determine valid states of Markov Chain in a two-step transition matrix.',
        link: '',
      },
      {
        name: 'Customer Experience & Data Analytics Project',
        description:
          'Proposed and developed a Sentiment Analysis model to predict customer satisfaction on chats and emails using Logistic Regression and Naive Bayes models in Python and SQL.',
        link: '',
      },
      {
        name: 'Predator-Prey Mathematical Modeling',
        description:
          'Modeled Predator (Bald Eagle) - Prey (Rodents) population growth using Lotka-Volterra equations modified with weak Allee effect and pesticide constant. Simulated population plots with/independent of time and improved the existing model accuracy to 94 %. Also calculated lethal limit for rodenticide usage.',
        link: '',
      },
      {
        name: 'Northeastern NEWS Updates',
        description:
          'Developed a Google Chrome extension to get instant notification updates from News @ Northeastern portal using JavaScript, AJAX, HTML, and CSS.',
        link: '',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Pelatro Solution Pvt. Limited',
        description: 'Software Engineer - Machine Learning, Jun 2019 - August 2021. • Implemented K-Means algorithm to predict the Next Best Action for customers. Achieved accuracy of 61 %. • Developed an interactive web application to analyse and report statistics for a Machine Learning pipeline. • Predicted the Customer Lifetime Value using a Markov Chain and achieved an accuracy of 76 %. • Optimized duplicate row detection algorithm using probabilistic approach; reduced time complexity from O(n^2) to O(n). • Containerized and deployed end-to-end applications on production servers using Docker.',
        link: 'https://www.pelatro.com/',
      },
      {
        name: 'Walkter Beacon Lab',
        description: 'Data Science Intern, Jan 2019 - May 2019. • Built a CountVectorizer NLP model for comparing a user resume with job descriptions. Automated resume matching process and decreased the time spent by recruiting team by approximately 80 %. • Designed an efficient user visit logging system to calculate the user retention rate and automated email system for an ATS. • Adapted Tesseract OCR\'s code, to increase accuracy in text-recognition for screen fonts from 50 % to 95 %.',
        link: 'https://www.linkedin.com/company/walkterbeaconlab?originalSubdomain=in',
      },
      {
        name: 'REVA University',
        description: 'Teaching Assistant, Jan 2018 - Dec 2018. • Courses: Core Java, Object Oriented Programming, Mathematical Foundations of Computer Science I & II. • Promoted to Head TA in Fall 2018; led weekly meetings and supervised four other TAs.',
        link: 'https://reva.edu.in/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'Python, R, Java, SQL, MATLAB, HTML, CSS, JavaScript/TypeScript',
      },
      {
        name: 'Machine Learning',
        description: 'Regression, Classification, Clustering, Dimensionality Reduction, Decision Trees, Random Forests, Bagging, Boosting, Neural Networks, Feature Engineering, Principal Component Analysis',
      },
      {
        name: 'Frameworks',
        description:
          'tenosrflow, PyTorch, Hadoop, Apache Spark, Flask, NumPy, pandas, Matplotlib, scikit-learn, SymPy, Jupyter',
      },
      {
        name: 'Additional',
        description:
          'Git, Jenkins, JIRA, Docker, Excel, IntelliJ IDEA, PyCharm, VSCode',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-190445738-1`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sakshisuman12`,
        short_name: `sakshisuman12`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
