const recipesMock = [
  {
    id: 1,
    name: 'recipe1',
    checked: true,
    time: 10,
    complements: [
      {
        id: 1,
        name: "complement1",
        checked: true,
        time: 15
      },
      {
        id: 2,
        name: "complement2",
        checked: false,
        time: 20
      },
      {
        id: 3,
        name: "complement3",
        checked: false,
        time: 25
      },
    ]
  },
  {
    id: 2,
    name: 'recipe2',
    checked: false,
    time: 30,
    complements: [
      {
        id: 1,
        name: "complement1",
        checked: true,
        time: 15
      },
      {
        id: 2,
        name: "complement2",
        checked: false,
        time: 20
      },
      {
        id: 4,
        name: "complement4",
        checked: false,
        time: 40
      },
    ]
  },
]

export default recipesMock