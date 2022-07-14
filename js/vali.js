const validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Вы ввели меньше трех символов',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Вы ввели больще 30 символов',
    },
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
  ])

  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели телефон',
    },

  ]);

