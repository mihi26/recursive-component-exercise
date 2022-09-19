const roomData = [
  { id: "0", name: "Phòng ban 0", level: 1, code: "DPM0-0", children: [] },
  {
    id: "1",
    name: "Phòng ban 1",
    level: 1,
    code: "DPM0-1",
    children: [
      {
        id: "1.1",
        name: "Phòng ban 11",
        level: 2,
        code: "DPM0-1.1",
        children: [],
      },
      {
        id: "1.2",
        name: "Phòng ban 12",
        level: 2,
        code: "DPM0-1.2",
        children: [
          {
            id: "1.21",
            name: "Phòng ban 121",
            level: 3,
            code: "DPM0-1.21",
            children: [],
          }
        ],
      },
      {
        id: "1.3",
        name: "Phòng ban 13",
        level: 2,
        code: "DPM0-1.3",
        children: [],
      },
      {
        id: "1.4",
        name: "Phòng ban 14",
        level: 2,
        code: "DPM0-1.4",
        children: [
          {
            id: "1.41",
            name: "Phòng ban 141",
            level: 3,
            code: "DPM0-1.41",
            children: [
              {
                id: "1.411",
                name: "Phòng ban 1411",
                level: 4,
                code: "DPM0-1.411",
                children: [],
              },
              {
                id: "1.412",
                name: "Phòng ban 1412",
                level: 4,
                code: "DPM0-1.412",
                children: [],
              },
              {
                id: "1.413",
                name: "Phòng ban 1413",
                level: 4,
                code: "DPM0-1.413",
                children: [],
              },
            ],
          },
          {
            id: "1.42",
            name: "Phòng ban 142",
            level: 3,
            code: "DPM0-1.42",
            children: [],
          },
          {
            id: "1.43",
            name: "Phòng ban 143",
            level: 3,
            code: "DPM0-1.43",
            children: [],
          },
        ],
      },
    ],
  },
  { id: "2", name: "Phòng ban 2", level: 1, code: "DPM0-2", children: [] },
  { id: "3", name: "Phòng ban 3", level: 1, code: "DPM0-3", children: [] },
  { id: "4", name: "Phòng ban 4", level: 1, code: "DPM0-4", children: [] },
  { id: "5", name: "Phòng ban 5", level: 1, code: "DPM0-5", children: [] },
  { id: "6", name: "Phòng ban 6", level: 1, code: "DPM0-6", children: [] },
];
export default roomData;
