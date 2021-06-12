const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Greggory',
      middleName: '',
      lastName: 'Ryouga',
      url: 'https://google.com',
      raw_url: `<a href="url" target="_blank">Google</a>`,
      age: 20,
    };
  },
  methods: {
    increment() {
      this.age++;
    },
    updateLastName(msg, event) {
      console.log(msg);

      this.lastName = event.target.value;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
    // Can watch data and computed properties
    watch: {
      age(newVal, oldVal) {
        setTimeout(() => {
          this.age = 20;
        }, 1000);
      },
    },
  },
  computed: {
    fullName() {
      console.log('fullName computed property was called');

      // Having age property in this function will cause invoking this function unnecessarily
      // this.age;

      return `${this.firstName} ${this.middleName} ${
        this.lastName
          ? this.lastName[0].toLowerCase() + this.lastName.slice(1)
          : ''
      }`;
    },
  },
}).mount('#app');

// setTimeout(() => {
//   vm.firstName = 'is on G';
//   vm.lastName = 'for sure';
// }, 2000);

// Vue.createApp({
//   data() {
//     return {
//       firstName: 'Yoseob',
//       lastName: 'Shin',
//     };
//   },
// }).mount('#app2');
