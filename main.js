const app = Vue.createApp({
    data() {
        return {
            product: 'Shoes',
            brand: 'SE331',
            
            // image: './assets/images/socks_green.jpg',
            // inStock: true,
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
            ],
            cart: 0,
            SelectedVariant: 0,
            onSale:true

        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        updateVariant(index) {
            this.SelectedVariant = index;
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },

        image() {
            return this.variants[this.SelectedVariant].image
        },
        inStock() {
            return this.variants[this.SelectedVariant].quantity
        },
        onSales(){
            return this.brand+'is onSale '+this.product
        }


    }

})