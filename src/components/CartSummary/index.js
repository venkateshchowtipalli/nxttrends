// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartlist} = value
      let total = 0

      cartlist.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <div className="cart-summary-container">
          <h1 className="order-total-value">
            <span className="order-total-label">Order Total:</span> Rs {total}
            /-
          </h1>
          <p className="total-items">{cartlist.length} Items in cart</p>
          <button type="button" className="checkout-button d-sm-none">
            Checkout
          </button>
          <button type="button" className="checkout-button d-lg-none">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
