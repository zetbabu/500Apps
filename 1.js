const arr = [
  {'id':1, 'type': 'external'}, 
  {'id':2}, {'id':3, type: 'internal'}];

const filteredArr = arr.filter(item => item.type === 'external');
