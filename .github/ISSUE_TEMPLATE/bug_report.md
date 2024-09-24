name: Bug Report
about: Create a report to help us improve
title: "[BUG] "
labels: ["bug"]
assignees: []

body:
  - type: markdown
    attributes:
      value: |
        ## Describe the bug
        A clear and concise description of what the bug is.

  - type: textarea
    attributes:
      label: To Reproduce
      description: Steps to reproduce the behavior
      value: |
        1. Go to '...'
        2. Click on '....'
        3. Scroll down to '....'
        4. See error
    validations:
      required: true

  - type: textarea
    attributes:
      label: Expected behavior
      description: A clear and concise description of what you expected to happen.
    validations:
      required: true

  - type: textarea
    attributes:
      label: Screenshots
      description: If applicable, add screenshots to help explain your problem.

  - type: dropdown
    attributes:
      label: Device
      description: What type of device are you using?
      options:
        - Desktop
        - Tablet
        - Smartphone
    validations:
      required: true

  - type: input
    attributes:
      label: Browser
      description: e.g. Chrome, Safari, Firefox
    validations:
      required: true

  - type: input
    attributes:
      label: Version
      description: e.g. 22
    validations:
      required: true

  - type: textarea
    attributes:
      label: Additional context
      description: Add any other context about the problem here.