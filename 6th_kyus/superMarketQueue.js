// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)

// Examples
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the 
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12
// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.

function queueTime(customers, n) {
  
    // Make an array containing n amount of elements, 
    // n representing the number of tills, 
    // and fill with zeroes
    var tills = new Array(n).fill(0);
  
    // Iterate through the customers 
    for (let time of customers) {
  
      // Find the till that has the least time
      let idx = tills.indexOf(Math.min(...tills));
  
      // Add the time, representing the customer to
      // the till that has the least time
      tills[idx] += time;
    }
  
    // Return the till that has the longest wait time
    // This is the required time to get all customers
    // through the que.
    return Math.max(...tills);
}