export default {
  // Page modules (views directory)
  pages: {
    // Login page
    login: {
      title: 'Login',
      accountLogin: 'Account Login',
      subTitle: 'Please use your account and password to log in to the system',
      usernamePlaceholder: 'Please enter username',
      passwordPlaceholder: 'Please enter password',
      rememberMe: 'Remember me',
      forgotPassword: 'Forgot password?',
      loginButton: 'Login',
      loginButtonLoading: 'Logging in...',
      noAccount: "Don't have an account?",
      register: 'Register now',
      loginSuccess: 'Login successful',
      welcomeBack: 'Welcome back',
      loginFailed: 'Login failed'
    },

    // System management pages
    system: {
      // Menu management
      menu: {
        title: 'Menu List',
        menuTitle: 'Menu Title',
        type: 'Type',
        path: 'Path',
        component: 'Component',
        menuType: 'Menu Type',
        menuIcon: 'Menu Icon',
        addMenu: 'Add Menu',
        editMenu: 'Edit Menu',
        routePath: 'Route Path',
        componentPath: 'Component Path',
        menuTitleLabel: 'Menu Title',
        menuI18nKey: 'Menu I18n Title Key',
        linkMode: 'Link Mode',
        linkAddress: 'Link Address',
        menuOrder: 'Menu Order',
        hideInMenu: 'Hide in Menu',
        hideInTabs: 'Hide in Tabs',
        hideInBreadcrumb: 'Hide in Breadcrumb',
        keepAlive: 'Keep Alive Component',
        pageLayout: 'Page Contains Layout',
        embedded: 'Embedded',
        externalLink: 'External Link'
      },

      // User management
      user: {
        title: 'User List',
        username: 'Username',
        nickname: 'User Nickname',
        nicknameShort: 'Nickname',
        gender: 'Gender',
        email: 'Email',
        phone: 'Phone Number',
        password: 'Password',
        role: 'Role',
        addUser: 'Add User',
        editUser: 'Edit User',
        usernameTooltip: 'Username'
      },

      // Role management
      role: {
        title: 'Role List',
        roleName: 'Role Name',
        roleCode: 'Role Code',
        addRole: 'Add Role',
        editRole: 'Edit Role',
        roleNameTooltip: 'Role Name',
        roleCodeTooltip: 'Role Code'
      }
    },

    // Demo pages
    demos: {
      // Wang Editor demo
      wangEditor: {
        title: 'ProWangEditor Rich Text Editor Example',
        subtitle:
          'Demonstrates various usages and configuration options of ProWangEditor global component',
        basicUsage: 'Basic Usage',
        editorHeight: 'Editor Height',
        status: 'Status',
        disabled: 'Disabled',
        successStatus: 'Success Status',
        errorStatus: 'Error Status',
        warningStatus: 'Warning Status',
        usingProForm: 'Using pro-form Validation',
        usingNForm: 'Using n-form Validation',
        richText: 'Rich Text',
        submit: 'Submit',
        validate: 'Validate',
        pleaseEnterContent: 'Please enter content',
        validateSuccess: 'Validation successful',
        validateFailed: 'Validation failed',
        editorCreated: 'Editor created successfully',
        editorDestroyed: 'Editor destroyed'
      },
      // Access demo
      access: {
        // Access toggle
        toggle: {
          toggleMode: 'Toggle Permission Mode',
          toggleAccount: 'Switch Account',
          frontendControl: 'Frontend Permission Control',
          backendControl: 'Backend Permission Control',
          afterToggleCheck:
            'Check [Left Menu -> System Management] after switching permission mode',
          afterAccountCheck: 'Check [Left Menu -> System Management] after switching account',
          superAdmin: 'Super Administrator',
          admin: 'Administrator',
          user: 'Regular User'
        }
      },
      // Icon demo
      icon: {
        remoteSearch1: 'Remote Search - Style 1',
        remoteSearch2: 'Remote Search - Style 2',
        singleIcon: 'Single Icon',
        multipleIcon: 'Multiple Icons',
        remoteSearchTooltip1: 'Remote search options when echoing',
        remoteSearchTooltip2: 'Merge options when echoing'
      },
      // Download demo
      download: {
        title: 'File Download',
        fileDownload: 'Download File by URL',
        imageDownload: 'Download Image by URL',
        textDownload: 'Text Download',
        base64Download: 'Base64 Stream Download',
        requestDownload: 'Request Download',
        fileUrlPlaceholder: 'Please enter file URL',
        imageUrlPlaceholder: 'Please enter image URL',
        textContentPlaceholder: 'Please enter text content to download',
        base64DataPlaceholder: 'Please enter base64 data',
        requestUrlPlaceholder: 'Please enter request URL',
        downloadFile: 'Download File',
        downloadImage: 'Download Image',
        downloadText: 'Download Text',
        downloadBase64: 'Download Base64 Data',
        getBlob: 'Get Blob',
        fetchBlobResponse: 'Get Response',
        downloadSuccess: 'Download successful',
        downloadFailed: 'Download failed',
        getBlobSuccess: 'Get Blob successful',
        getBlobFailed: 'Get Blob failed',
        getResponseSuccess: 'Get Response successful',
        getResponseFailed: 'Get Response failed',
        blobSize: 'Size',
        responseStatus: 'Status',
        extractFilenameFromUrl: 'Extract filename from URL',
        urlAddress: 'URL address',
        blobDownload: 'Generic Blob download function',
        blobObject: 'Blob object',
        filename: 'Filename',
        externalUrl: 'External URL',
        address: 'Address',
        downloadFileFailed: 'Download file failed',
        downloadImageFailed: 'Download image failed',
        downloadTextFailed: 'Download text failed',
        downloadBase64Failed: 'Download base64 data failed',
        requestUrl: 'Request URL',
        requestOptions: 'Request options'
      },
      nested: {
        title: 'Nested Route Demo',
        description: 'Demonstrates nested routing functionality, including list and detail pages',
        goToDetail: 'Click to go to detail page',
        detailTitle: 'Detail Page',
        detailDescription: 'Detail page that is not in the menu but can highlight the menu',
        backToList: 'Back to list'
      },
      keepAlive: {
        basicCache: {
          title: 'Basic Cache',
          description: 'This is a page demonstrating basic keep-alive functionality',
          inputPlaceholder: 'Please enter content to test cache...'
        },
        conditionalCache: {
          title: 'Conditional Cache',
          description: 'Only cached when entering from multi-tab page',
          inputPlaceholder: 'Please enter content to test cache...'
        }
      },
      pageComponent: {
        title: 'Page Component',
        description:
          'Page-level loading effect, you can switch layout or collapse to see the effect after enabling loading',
        description2: 'Can pass rich loading configuration',
        description3: 'Fixed bottom footer, which is also layout-adaptive',
        itemText: 'Hello, ',
        startLoading: 'Start Loading',
        randomNumber: 'Random Number',
        currentNumber: 'Current Number',
        loadingText: 'Loading...',
        loadingTime: 'Loading Time'
      },
      loading: {
        title: 'v-loading Directive Usage Examples',
        basicUsage: {
          title: '1. v-loading Basic Usage',
          description: 'This is a content area',
          description2: 'When loading is activated, a loading mask will be displayed',
          description3: 'Click the button below to toggle loading state',
          showButton: 'Show Loading',
          hideButton: 'Hide Loading'
        },
        fullscreen: {
          title: '2. v-loading.fullscreen Fullscreen Loading',
          description: 'Fullscreen loading example',
          description2: 'Use .fullscreen modifier to create fullscreen loading effect',
          description3: 'The mask will cover the entire viewport',
          showButton: 'Show Fullscreen Loading',
          hideButton: 'Hide Fullscreen Loading'
        },
        lock: {
          title: '3. v-loading.lock Lock Scrolling',
          description: 'Lock scrolling example',
          description2: 'Use .lock modifier to lock page scrolling',
          description3: 'Prevent users from scrolling the page during loading',
          scrollArea: 'This is a scrollable area',
          scrollAreaDesc: 'When loading is activated, scrolling will be locked',
          showButton: 'Show Lock Loading',
          hideButton: 'Hide Lock Loading'
        },
        dynamic: {
          title: '4. v-loading Dynamic Description Text',
          description: 'Dynamic description text example',
          description2: 'Can dynamically modify description text during loading',
          description3: 'Provides better user experience',
          showButton: 'Start Dynamic Loading',
          loadingData: 'Loading data...',
          processingRequest: 'Processing request...',
          almostDone: 'Almost done...'
        },
        functional: {
          title: '5. Functional Call',
          description: 'Functional call example',
          description2: 'Create functional loading through ProLoading.service()',
          description3: 'Suitable for use in asynchronous operations',
          showButton: 'Show Functional Loading',
          hideButton: 'Hide Functional Loading',
          functionalLoading: 'Functional loading...'
        },
        functionalDynamic: {
          title: '6. Functional Dynamic Description Text',
          description: 'Functional dynamic description text example',
          description2: 'Can also dynamically modify description text in functional calls',
          description3: 'Modify through the description.value property of the instance',
          showButton: 'Show Dynamic Functional Loading',
          hideButton: 'Hide Dynamic Functional Loading',
          startLoading: 'Starting loading...',
          connectingServer: 'Connecting to server...',
          fetchingData: 'Fetching data...',
          processingResult: 'Processing result...',
          almostComplete: 'Almost complete...'
        }
      },
      complexForm: {
        title: 'Complex Form Example',
        description: 'Demonstrate various features and component usage of large complex forms',
        submit: 'Submit',
        reset: 'Reset',
        fillForm: 'Fill Form',
        loadingText: 'Loading...',
        submitSuccess: 'Form submitted successfully!',
        basicInfo: {
          title: 'Basic Information',
          username: 'Username',
          email: 'Email',
          phone: 'Phone',
          gender: 'Gender',
          birthDate: 'Birth Date',
          status: 'Status'
        },
        contentInfo: {
          title: 'Content Information',
          contentTitle: 'Content Title',
          category: 'Category',
          tags: 'Tags',
          priority: 'Priority',
          publishTime: 'Publish Time',
          content: 'Content Details',
          dynamicList: 'Dynamic List',
          itemName: 'Item Name',
          itemValue: 'Item Value',
          // Category options
          categoryTech: 'Technical Documentation',
          categoryProduct: 'Product Introduction',
          categoryGuide: 'User Guide',
          categoryOther: 'Other',
          // Tag options
          tagVue: 'Vue',
          tagReact: 'React',
          tagJavaScript: 'JavaScript',
          tagTypeScript: 'TypeScript',
          tagCSS: 'CSS',
          tagHTML: 'HTML'
        },
        dataTable: {
          title: 'Data Management',
          department: 'Department',
          departmentPlaceholder: 'Please select department',
          departmentTech: 'Technology Department',
          departmentMarketing: 'Marketing Department',
          departmentSales: 'Sales Department',
          departmentFinance: 'Finance Department',
          position: 'Position',
          positionPlaceholder: 'Please select position',
          positionJunior: 'Junior Engineer',
          positionMid: 'Mid-level Engineer',
          positionSenior: 'Senior Engineer',
          positionExpert: 'Technical Expert',
          positionManager: 'Technical Manager',
          level: 'Level',
          levelPlaceholder: 'Please select level',
          personnelManagement: 'Personnel Management',
          tableTitle: 'Title',
          tableTime: 'Time',
          actions: 'Actions',
          edit: 'Edit',
          save: 'Save',
          delete: 'Delete'
        }
      }
    },

    // Home page
    home: {
      welcomeBack: 'Welcome back',
      today: 'Today is',
      completed: 'Completed',
      inProgress: 'In Progress',
      newMessages: 'New Messages',
      comparedToLastWeek: 'vs last week',
      totalVisits: 'Total Visits',
      totalUsers: 'Total Users',
      totalOrders: 'Total Orders',
      totalRevenue: 'Total Revenue',
      activityLog: 'Activity Log',
      recentUserActivity: 'Recent User Activity',
      viewAll: 'View All',
      projectUpdates: 'Project Updates',
      systemAnnouncementsAndUpdates: 'System Announcements & Updates',
      // Activity types
      activities: {
        completedTask: 'completed task',
        commentedDocument: 'commented on document',
        uploadedFile: 'uploaded file',
        createdTask: 'created task',
        updatedStatus: 'updated status',
        solvedProblem: 'solved problem',
        mergedCode: 'merged code',
        closedIssue: 'closed issue'
      },
      targets: {
        systemArchitectureDesign: 'System Architecture Design',
        productRequirements: 'Product Requirements',
        databaseDesign: 'Database Design',
        frontendDevelopment: 'Frontend Development',
        backendDevelopment: 'Backend Development',
        testingAndDeployment: 'Testing and Deployment',
        documentation: 'Documentation'
      },
      // Project updates
      updates: {
        newVersionRelease: 'New Version Release',
        newVersionDesc:
          'Version v2.3.0 has been successfully released, fixing multiple known issues',
        systemMaintenanceNotice: 'System Maintenance Notice',
        systemMaintenanceDesc:
          'The system will undergo routine maintenance this Saturday, estimated to take 2 hours',
        featureUpdatePreview: 'Feature Update Preview',
        featureUpdateDesc: 'The next version will add a data analysis module, stay tuned',
        securityUpdateReminder: 'Security Update Reminder',
        securityUpdateDesc:
          'All users are advised to update their passwords promptly to enhance account security',
        userFeedbackImprovement: 'User Feedback Improvement',
        userFeedbackDesc:
          'Based on user feedback, optimized interface interaction and response speed',
        newFeatureResearch: 'New Feature Research',
        newFeatureDesc:
          'Researching AI intelligent analysis features, welcome to provide suggestions'
      },
      // Time
      time: {
        minutesAgo: 'minutes ago',
        hourAgo: 'hour ago',
        yesterday: 'yesterday',
        daysAgo: 'days ago',
        weekAgo: 'week ago',
        today: 'today'
      }
    }
  },

  // Common component modules (components directory)
  common: {
    // Layout components
    layout: {
      // User avatar component
      userAvatar: {
        documentation: 'Documentation',
        documentationForProNaiveUI: 'ProNaiveUI Documentation',
        logout: 'Logout',
        logoutConfirmTitle: 'Confirm',
        logoutConfirmContent: 'Are you sure you want to logout?'
      },

      // Tab menu component
      tabs: {
        pin: 'Pin',
        unpin: 'Unpin',
        closeLeft: 'Close Left',
        closeRight: 'Close Right',
        closeOthers: 'Close Others',
        closeAll: 'Close All',
        openInNewWindow: 'Open in New Window',
        close: 'Close',
        dynamicTitle: 'Dynamic Page',
        tabManagement: 'Tab Management',
        tabManagementDesc: 'Support dynamic creation, batch operations and smart interception',
        dynamicTabs: 'Dynamic Tabs',
        interceptor: 'Interceptor',
        dynamicTitleDesc:
          'Create dynamic titles with timestamps, demonstrating one-time interceptor functionality',
        createDynamicTitlePage: 'Create Dynamic Title Page',
        openCloseTabs: 'Open/Close Tabs',
        basic: 'Basic',
        openCloseTabsDesc: 'If exists, activate existing tab, otherwise open new tab',
        openPage: 'Open "403" Page',
        closePage: 'Close "403" Page',
        tabOperations: 'Tab Operations',
        batch: 'Batch',
        tabOperationsDesc: 'For dynamic tab configuration',
        closeCurrentTab: 'Close Current Tab',
        closeLeftTabs: 'Close Left Tabs',
        closeRightTabs: 'Close Right Tabs',
        closeOtherTabs: 'Close Other Tabs',
        closeAllTabs: 'Close All Tabs',
        fullscreen: 'Fullscreen',
        exitFullscreen: 'Exit Fullscreen',
        refresh: 'Refresh'
      }
    },

    // Error page components
    fallback: {
      403: {
        title: 'Access Denied',
        description: 'You do not have permission to access this page'
      },
      404: {
        title: 'Page Not Found',
        description: 'The page you are looking for was not found'
      },
      500: {
        title: 'Server Error',
        description: 'The server is having a break, please try again later'
      },
      backHome: 'Back to Home'
    },

    // Preference setting components
    preference: {
      title: 'Preference Settings',
      resetConfig: 'Reset Config',
      restoreConfig: 'Restore Config',
      copyConfig: 'Copy Config',
      other: 'Other',
      layout: {
        title: 'Layout',
        vertical: 'Vertical Layout',
        horizontal: 'Horizontal Layout',
        mixedTwoColumn: 'Mixed Two-column Layout',
        sidebar: 'Sidebar Layout',
        mixedSidebar: 'Mixed Sidebar Layout',
        fullContent: 'Full Content Layout',
        twoColumn: 'Two-column Layout',
        chrome: 'Chrome',
        card: 'Card',
        showLogo: 'Show Logo',
        layoutMode: 'Layout Mode',
        menuGroup: 'Menu Group',
        menuDivider: 'Menu Divider',
        header: 'Header',
        showHeader: 'Show Header',
        fixedHeader: 'Fixed Header',
        headerHeight: 'Header Height',
        tabbar: 'Tab Bar',
        showTabbar: 'Show Tab Bar',
        fixedTabbar: 'Fixed Tab Bar',
        tabbarHeight: 'Tab Bar Height',
        showTabbarIcon: 'Show Tab Bar Icon',
        tabsMode: 'Tabs Mode',
        tabsPersist: 'Tabs Persist',
        resetCacheAfterCloseTab: 'Reset Cache After Close Tab',
        showSidebar: 'Show Sidebar',
        mixedSidebarFixed: 'Mixed Sidebar Fixed',
        sidebarCollapsed: 'Sidebar Collapsed',
        sidebarWidth: 'Sidebar Width',
        collapsedWidth: 'Collapsed Width',
        showSidebarTitle: 'Show Sidebar Title',
        showMenuTitle: 'Show Menu Title When Collapsed',
        sidebarTitleWidth: 'Sidebar Title Width',
        footer: 'Footer',
        showFooter: 'Show Footer',
        fixedFooter: 'Fixed Footer',
        footerHeight: 'Footer Height',
        animationMode: 'Animation Mode',
        none: 'None',
        fade: 'Fade',
        fadeSlide: 'Fade Slide',
        fadeBottom: 'Fade Bottom',
        fadeScale: 'Fade Scale',
        zoomFade: 'Zoom Fade',
        zoomOut: 'Zoom Out'
      },
      theme: {
        title: 'Theme',
        followSystem: 'Follow System',
        light: 'Light',
        dark: 'Dark',
        themeColor: 'Theme Color',
        primaryColor: 'Primary Color',
        grayMode: 'Gray Mode',
        colorWeakness: 'Color Weakness Mode'
      },
      app: {
        routeTransition: 'Route Transition',
        fade: 'Fade',
        fadeUp: 'Fade Up',
        fadeDown: 'Fade Down',
        fadeSlide: 'Fade Slide',
        none: 'None'
      }
    },

    // Common status and options
    status: {
      // Gender options
      male: 'Male',
      female: 'Female',
      other: 'Other',

      // Menu types
      directory: 'Directory',
      menu: 'Menu',
      button: 'Button',

      // Link methods
      newWindow: 'New Window',
      iframe: 'iframe',

      // Roles
      admin: 'Administrator',
      user: 'Regular User',
      guest: 'Guest',
      super: 'Super Administrator'
    },

    // Common texts
    often: {
      status: 'Status',
      remark: 'Remark',
      operation: 'Operation',
      add: 'Add',
      edit: 'Edit',
      delete: 'Delete',
      index: 'Index',
      deleteConfirm: 'Confirm delete',
      deleteQuestion: '?',
      deleteSuccess: 'Delete successful',
      createTime: 'Create Time',
      updateTime: 'Update Time',
      cancel: 'Cancel',
      confirm: 'Confirm',
      close: 'Close',
      success: 'Success',
      failed: 'Failed',
      operationSuccess: 'Operation successful',
      enable: 'Enable',
      disable: 'Disable'
    }
  },

  // Route titles
  routes: {
    home: 'Home',
    login: 'Login',
    demo: 'Demo',
    system: 'System Management',
    userManagement: 'User Management',
    roleManagement: 'Role Management',
    menuManagement: 'Menu Management',
    access: 'Access',
    accessToggle: 'Access Toggle',
    exception: 'Exception Page',
    richText: 'Rich Text',
    complexForm: 'Complex Form',
    externalPage: 'External Page',
    editTable: 'Edit Table',
    embedded: 'Embedded',
    externalOpenRoute: 'External Open Route',
    noLayout: 'No Layout',
    menuManagementExternal: 'Menu Management (External)',
    baiduIframe: 'Baidu (iframe)',
    menuManagementIframe: 'Menu Management (iframe)',
    iframeLoadFailed: 'iframe Load Failed',
    externalLink: 'External Link',
    iconSelector: 'Icon Selector',
    loading: 'Loading Directive',
    nestedDetail: 'Nested Detail',
    nestedDetail2: 'Nested Detail (2)',
    detail: 'Detail',
    detail1: 'Detail (1)',
    detail2: 'Detail (2)',
    fileDownload: 'File Download',
    pageComponent: 'Page Component',
    tabs: 'Tabs',
    403: '403',
    404: '404',
    500: '500',
    keepAlive: 'Keep Alive',
    keepAliveDemo1: 'Basic Cache',
    keepAliveDemo2: 'Conditional Cache'
  }
} as const
