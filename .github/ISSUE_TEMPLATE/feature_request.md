name: Feature Request
about: Suggest an idea for this project
title: "[FEATURE] "
labels: ["enhancement"]
assignees: []
body:
  - type: markdown
    attributes:
      value: |
        ## Is your feature request related to a problem? Please describe.
        A clear and concise description of what the problem is. Ex. I'm always frustrated when [...]

  - type: textarea
    attributes:
      label: Describe the solution you'd like
      description: A clear and concise description of what you want to happen.
      required: true

  - type: textarea
    attributes:
      label: Describe alternatives you've considered
      description: A clear and concise description of any alternative solutions or features you've considered.

  - type: dropdown
    attributes:
      label: Feature priority
      multiple: false
      options:
        - Low
        - Medium
        - High
      required: true

  - type: checkboxes
    attributes:
      label: Affected components
      options:
        - label: Frontend
          required: false
        - label: Backend
          required: false
        - label: UI/UX
          required: false
        - label: Performance
          required: false
        - label: Security
          required: false
        - label: Documentation
          required: false

  - type: textarea
    attributes:
      label: Additional context
      description: Add any other context or screenshots about the feature request here.

# Human tasks:
# - Review and adjust the feature request template to ensure it aligns with the Hello World web application's development process
# - Consider adding project-specific fields or options to the template
# - Ensure the labels used in the template are created in the GitHub repository
# - Set up any necessary automation or integrations for feature request triage and prioritization
# - Update contributing guidelines to reference this feature request template
# - Consider adding a field for potential implementation ideas or technical considerations
# - Evaluate if a user story format would be beneficial for feature requests in this project