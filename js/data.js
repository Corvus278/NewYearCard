const data = {
  mainButtonText: {
    0: 'Нажми!',
    1: 'Мимо :)',
    2: 'Опять!',
    3: 'Я здесь)',
    4: 'Ладно :)',
  },

  treeButtonText: {
    0: 'Зажечь ёлку!',
    1: 'Раз...',
    2: 'Два...',
    3: 'Три...',
    4: 'Гори!',
  },

  treeButtonColor: {
    0: '#7effd4',
    1: '#FFD276',
    2: '#FFAD05',
    3: '#FF7976',
    4: '#FF4944',
  },

  createOwner(owner) {
    if (owner === 'mash') {
      return data.owner = 'Маша'
    } else {
      return owner
    }
  }
}
