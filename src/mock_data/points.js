export const POINTS = [
    {
      subject: "Toán Học",
      points: [
        { key: "Miệng", value: [9.5, 9.3, 8.3, 8.6]},
        { key: "15 Phút", value: [8.3, 9.2, 8.5]},
        { key: "1 Tiết", value: [8.5, 9.5] },
        { key: "KTHK", value: [9.2]},
      ],
      result: '9.0'
    },
    {
      subject: "Hoá học",
      points: [
        { key: "Miệng", value: [9.2, 9.5, 8.5, 8.5]},
        { key: "15 Phút", value: [8, 9.5, 8]},
        { key: "1 Tiết", value: [8.5, 9] },
        { key: "KTHK", value: [9]},
      ],
      result: '8.4'
    },
    {
      subject: "Vật lý",
      points: [
        { key: "Miệng", value: [9, 9.5, 8, 8]},
        { key: "15 Phút", value: [8.5, 9, 8]},
        { key: "1 Tiết", value: [8, 9.5] },
        { key: "KTHK", value: [9]},
      ],
      result: '8.2'
    },
    {
      subject: "Ngữ Văn",
      points: [
        { key: "Miệng", value: [9.5, 9, 8.5, 8]},
        { key: "15 Phút", value: [8, 9, 8.5]},
        { key: "1 Tiết", value: [8, 9.5] },
        { key: "KTHK", value: [9]},
      ],
      result: '7.8'
    },
    {
      subject: "Sinh học",
      points: [
        { key: "Miệng", value: [9, 9.5, 8, 8]},
        { key: "15 Phút", value: [8, 9.5, 8]},
        { key: "1 Tiết", value: [8, 9.5] },
        { key: "KTHK", value: [9]},
      ],
      result: '9.0'
    },
    {
      subject: "Tiếng anh",
      points: [
        { key: "Miệng", value: [9, 9.5, 8, 8]},
        { key: "15 Phút", value: [8, 9.5, 8]},
        { key: "1 Tiết", value: [8.5, 9] },
        { key: "KTHK", value: [9]},
      ],
      result: '7.5'
    },
    {
      subject: "Lịch sử",
      points: [
        { key: "Miệng", value: [9, 9, 8, 8]},
        { key: "15 Phút", value: [8, 9, 8]},
        { key: "1 Tiết", value: [8, 9] },
        { key: "KTHK", value: [9]},
      ],
      result: '8.2'
    },
    {
      subject: "Địa lý",
      points: [
        { key: "Miệng", value: [9, 9, 8, 8]},
        { key: "15 Phút", value: [8, 9, 8]},
        { key: "1 Tiết", value: [8, 9] },
        { key: "KTHK", value: [9]},
      ],
      result: '8.8'
    },
    {
      subject: "Công nghệ",
      points: [
        { key: "Miệng", value: [9, 9, 8, 8]},
        { key: "15 Phút", value: [8, 9, 8]},
        { key: "1 Tiết", value: [8, 9] },
        { key: "KTHK", value: [9]},
      ],
      result: '8.8'
    },
    {
      subject: "GDCD",
      points: [
        { key: "Miệng", value: [9, 9, 8, 8]},
        { key: "15 Phút", value: [8, 9, 8]},
        { key: "1 Tiết", value: [8, 9] },
        { key: "KTHK", value: [9]},
      ],
      result: '8.2'
    },
    
  ];
  export const picker = [
    { label: 'Học kỳ 1', value: 1 },
    { label: 'Học kỳ 2', value: 2 },
    { label: 'Cả năm', value: 3 },
  ]
  export const pickerTime = [
    { label: '2020', value: 1 },
    { label: '2019', value: 2 },
    { label: '2018', value: 3 },
    { label: '2017', value: 4 },
  ]
  
  export const timeTable = [
    ["Tiết 1", "Tiết 2", "Tiết 3", "Tiết 5", "Tiết 5", "Tiết 6"],
    ["Chào cờ", "Văn học", "Văn học", "Lịch sử", "Địa lý", null],
    ["Toán học", "Tiếng Pháp", "Hoá học", "Sinh học", "Địa lý", null],
    ["Toán học", "Vật lý", "Hoá học", "Sinh học", "Địa lý", null],
    ["Toán học", "Tiếng Anh", "Hoá học", "Sinh học", "Địa lý", null],
    ["Sinh học", "Vật lý", "Hoá học", "Sinh học", "Triết học", null],
    ["Sinh học", "Vật lý", "Hoá học", "Sinh học", "Văn học", null],
    ["Sinh học", "Vật lý", "Hoá học", "Sinh học", "Triết học", null],
  ];
  export const dataSchedule = [
    [ { subject : 'Chào cờ',note : null },
      { subject : 'Văn học',note : null },
      { subject : 'Toán học',note : null },
      { subject : 'Địa lý',note : null },
      { subject : 'Địa lý',note : null },
      { subject : '',note : null }
    ],
    [ { subject : 'Chào cờ',note : null },
      { subject : 'Văn học',note : null},
      { subject : 'Hoá học',note : null },
      { subject : 'Lịch sử',note : null },
      { subject : '',note : null },
      { subject : '',note : null }
    ],
    [ { subject : 'Chào cờ',note : null },
      { subject : 'Địa lý',note : null },
      { subject : 'Toán học',note : null },
      { subject : '',note : null },
      { subject : '',note : null },
      { subject : '',note : null }
    ],
    [ { subject : 'Chào cờ',note : null },
      { subject : 'Văn học',note : null},
      { subject : '',note : null },
      { subject : '',note : null },
      { subject : '',note : null },
      { subject : '',note : null }
    ],
    [ { subject : 'Chào cờ',note : null },
      { subject : 'Văn học',note : null },
      { subject : '',note : null },
      { subject : '',note : null },
      { subject : '',note : null },
      { subject : '',note : null }
    ],
    [ { subject : 'Văn học',note : null },
      { subject : '',note : null },
      { subject : '',note : null },
      { subject : '',note : null },
      { subject : '',note : null },
      { subject : '',note : null }
    ],
    [ { subject : 'Văn học',note : null },
      { subject : '',note : null },
      { subject : '',note : null },
      { subject : '',note : null },
      { subject : '',note : null },
      { subject : '',note : null }
    ],
     
  ]
  