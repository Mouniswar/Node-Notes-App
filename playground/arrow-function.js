
var user = {
  name : 'Andrew',
  sayhi: () => {
    console.log(`Hi. I'm ${this.name}`);
  },
  sayhiAlt() {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};

user.sayhiAlt(1,2,3);
