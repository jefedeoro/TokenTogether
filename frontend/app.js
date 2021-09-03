import { createApp } from 'vue'
import VueNear from "vue-near"

const app = createApp(App)

app.use(VueNear, {
  // Needs the environment for the correct RPC to use
  env: process.env.NODE_ENV || 'development',
  config: {
    appTite: 'Cool dApp',
    contractName: 'cool_dapp.testnet',
  },
})

const app = Vue.createApp({
    data() {
        return {
            tokenName: '',
            tokenSymbol: '',
            account: '',
            counter: 0

 
        };
    },

    computed: {

        nameIsValid() {
            return !!this.form.name
        },

        symIsValid() {
            return !! this.form.symCheck 
        },

        tsIsValid() {
            return this.form.tsCheck > 0
        },


    },


    methods: {
        setName(event) {
            this.tokenName = event.target.value;
        },
        setSym(event) {
            this.tokenSymbol = event.target.value;
        },
        setAccount(event) {
            this.account = event.target.value + '.near ';
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
            // this.counter--;
        },


        minted() {
            if (this.formIsValid) {
                Swal.fire('Now Minting'),
                // this.$near.getContractInstance('cool_contract.testnet', {
                //     changeMethods: ['set_something'],
                //     viewMethods: ['get_something'],
            } else {
                Swal.fire('Please complete the form. Make sure Token Name, Token Symbol and Total Supply are entered. Once that is done you can create your token before someone else does.')
            };
        }

        zeroOut() {
            this.counter = '0';
            // this.counter--;
        },

    },

});

app.mount('#events');
