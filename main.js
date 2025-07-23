//1) 
function queueSimulator(queue, newPerson) {
  queue.push(newPerson); 
  queue.shift();          
  return queue;          
}


const queue = ['Алия', 'Максат'];
const updated = queueSimulator(queue, 'Нурлан');
console.log(updated); 

//2)
function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b; 
    case '-':
      return a - b; 
    case '*':
      return a * b; 
    case '/':
      if (b === 0) {
        return "Нольго болууго болбойт"; 
      }
      return a / b; 
    default:
      return "Белгисиз операция"; 
  }
}

console.log(calculate(5, 3, "+"));   
console.log(calculate(10, 2, "*"));  
console.log(calculate(15, 0, "/"));  
console.log(calculate(9, 3, "/"));   
console.log(calculate(5, 1, "^"));   

