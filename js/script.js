/* ricordarsi di inserire nel body nell'html:  */
const { createApp } = Vue;

createApp({
    data() {
        return {
            activeIndex: 0,
            newMessageElement: '',
            searchInput: '',
            contacts: [
                {
                    id: 0,
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,

                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            toggle: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            toggle: false,
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            toggle: false,
                        }
                    ],
                },
                {
                    id: 1,
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            toggle: false,
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            toggle: false,
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            toggle: false,
                        }
                    ],
                },
                {
                    id: 2,
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                            toggle: false,
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            toggle: false,
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                            toggle: false,
                        }
                    ],
                },
                {
                    id: 3,
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            toggle: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            toggle: false,
                        }
                    ],
                },
                {
                    id: 4,
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
              
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                            toggle: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                            toggle: false,
                        }
                    ],
                },
                {
                    id: 5,
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                            toggle: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                            toggle: false,
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            toggle: false,
                        }
                    ],
                },
                {
                    id: 6,
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                            toggle: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                            toggle: false,
                        }
                    ],
                },
                {
                    id: 7,
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                            toggle: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            toggle: false,
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
                            toggle: false,
                        }
                    ],
                }
            ]
            
        }
    },

    methods: {
        changeChat(index){
            this.activeIndex = index;
            console.log(this.activeIndex);
        },

        newMessage() {
            const newAnswer = {
                date: this.getNewDate(),
                message: this.newMessageElement,
                status: 'sent',
            }
            if (this.newMessageElement != "") {
                this.contacts[this.activeIndex].messages.push(newAnswer);
                this.newMessageElement = "";
                this.botAnswer();
            }
        },

        botAnswer() {
            const newBotAnswer = {
                date: this.getNewDate(),
                message: 'HODOR',
                status: 'received',
            }
            setTimeout(() => {
                this.contacts[this.activeIndex].messages.push(newBotAnswer);
            }, 1000);
        },



        showMenu(activeIndex, index){
            if(!this.contacts[activeIndex].messages[index].toggle) {
                this.contacts[activeIndex].messages[index].toggle = !this.contacts[activeIndex].messages[index].toggle;
            } else {
                this.contacts[activeIndex].messages[index].toggle = !this.contacts[activeIndex].messages[index].toggle;
            }
        },

        deleteMessage(activeIndex, index) {
            this.contacts[activeIndex].messages.splice(index, 1);
            console.log(index);
            console.log(activeIndex);
            console.log(this.contacts[activeIndex].messages[index].toggle);
            console.log(this.contacts[activeIndex].messages[0].toggle);
            console.log(this.contacts[activeIndex].messages[1].toggle);
        },

        searchContact(string) {
            this.contacts.forEach(element => {
                const includesInputSearched = element.name.toLowerCase().includes(string.toLowerCase());
                if (!includesInputSearched) {
                    element.visible = false;
                } else {
                    element.visible = true;
                }
            })
        },

        getNewDate() {
            const fullDate = new Date();
            const day = fullDate.getDate();
            const month = fullDate.getMonth() + 1;
            const year = fullDate.getFullYear();
            const hours = fullDate.getHours();
            const minutes = fullDate.getMinutes();
            const seconds = fullDate.getSeconds();
            const formatDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
            
            return formatDate;     
        },



    },

    
}).mount('#app');