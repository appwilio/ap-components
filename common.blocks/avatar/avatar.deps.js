([{
    mustDeps: [],
    shouldDeps: [
        {
          elems: ['link', 'image']
        },
        {
          mods: { default : true, size: ['w41', 'w60', 'w150', 'w256', 's', 'm', 'l']}
        },
        {
            block : 'image'
        }
    ]
},
{
  tech: 'bemhtml',
  shouldDeps: [
    {
      block: 'image',
      tech: 'bemhtml'
    },
    {
        elems : ['image', 'link'],
        tech: 'bemhtml'
    }
  ]
}])
