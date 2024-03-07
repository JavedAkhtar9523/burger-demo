import React from "react";
import { Country, State } from "country-state-city";

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label htmlFor="">House No.</label>
            <input type="text" placeholder="Enter House No." />
          </div>
          <div>
            <label htmlFor="">City</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
            <label htmlFor="">Country</label>
            <select>
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label htmlFor="">State</label>
            <select>
              <option value="">State</option>
              {State &&
                State.getStatesOfCountry("IN").map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label htmlFor="">Pin code</label>
            <input type="text" placeholder="Enter Pincode" />
          </div>
          <div>
            <label htmlFor="">Phone No.</label>
            <input type="number" placeholder="Enter Phone No." />
          </div>
          <button type="submit">Confirm Order</button>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
