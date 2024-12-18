document.getElementById("year").innerText = new Date().getFullYear();

const app = Vue.createApp({
    data() {
        return {
            product: 'Stylish Boxers',
            description: 'available in various sizes and colors',
            brand: 'ComfortWear',
            image: 'img/boxers-black.png',
            url: 'https://comfortwear.com/boxers',
            inStock: true,
            inventory: 15,
            onSale: true,
            features: ['Breathable fabric', 'Elastic waistband', 'Multiple sizes available'],
            options: [
                { id: 2010, color: '#000', image: "img/boxers-black.png", quantity: 8 },
                { id: 2020, color: '#fff', image: "img/boxers-white.png", quantity: 5 },
                { id: 2030, color: '#1e90ff', image: "img/boxers-blue.png", quantity: 2 }
            ],
            selectedOption:{ id: 2010, color: '#000', image: "img/boxers-black.png", quantity: 8 } , // To store the selected option
            cart: 0,
            styles: {
                color: 'darkblue',
                backgroundColor: 'lightblue',
                fontStyle: 'italic'
            }
        };
    },
    methods: {
        // Select an option based on the color clicked
        selectOption(option) {
            this.selectedOption = option;
            this.image = option.image; // Update the image based on the selected color
        },
        addToCart() {
            if (this.selectedOption && this.selectedOption.quantity > 0) {
                this.selectedOption.quantity--;
                this.cart++;
            } else {
                alert("You have already bought all the available quantity for this product.");
            }
        },
        removeFromCart() {
            if (this.cart > 0) {
                this.cart--;
                if (this.selectedOption) {
                    this.selectedOption.quantity++;
                }
            }
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        }
    }
});
