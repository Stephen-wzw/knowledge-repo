export default [
  {
    text: 'Pro Git',
    icon: 'git',
    collapsible: true,
    prefix: '/reading/pro-git',
    children: [
      '01-getting-started',
      '02-git-basics',
      '03-git-branch',
      '04-git-server'
    ]
  },
  {
    text: 'Patterns',
    icon: 'shejimoshi',
    collapsible: true,
    prefix: '/reading/patterns/',
    children: [
      {
        text: 'Vanilla',
        collapsible: true,
        prefix: 'vanilla/',
        icon: 'js',
        children: ['', '01-command-pattern', '02-factory-pattern']
      }
    ]
  }
]