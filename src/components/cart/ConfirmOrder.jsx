import React from "react";

const ConfirmOrder = () => {
  return (
    <section className="confirmOrder">
      <main>
        <h1>Confirm Order</h1>

        <form>
          <div>
            <label htmlFor="cash">Cash On Delivery</label>
            <input type="radio" id="cash" name="payment" />
          </div>

          <div>
            <label htmlFor="online">Online</label>
            <input type="radio" id="online" name="payment" />
          </div>
          <button type="submit">Place Order</button>
        </form>
      </main>
    </section>
  );
};

export default ConfirmOrder;
