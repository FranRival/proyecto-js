console.log("hello world")


//implicit binding
const person = {
    name: 'Adam',
    greet: function() {
      console.log(`Hello, I'm ${this.name}`);
    }
  };
  
  person.greet(); // Output: Hello, I'm Adam




  //Explicit binding
  function greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
  
  const adam = { name: 'Adam' };
  
  greet.call(adam); // Output: Hello, I'm Adam



  //New Binding

  function Person(name) {
    this.name = name;
  }
  
  const adam1 = new Person('Adam');
  console.log(adam1.name); // Output: Adam



  //Lexical Binding:

  const person1 = {
    name: 'Adam',
    greet: function() {
      const innerFunction = () => {
        console.log(`Hello, I'm ${this.name}`);
      };
      innerFunction();
    }
  };
  
  person1.greet(); // Output: Hello, I'm Adam


  //Window Binding:
  function showName() {
    console.log(this.name);
  }
  
  window.name = 'Adam';
  showName(); // Output: Adam