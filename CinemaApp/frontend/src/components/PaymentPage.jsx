const paymentPage = () => {
    return (
        <>
            <div id="payment_form">
                <div id="left_col">
                    <h3>Billing Information</h3>
                    <form>
                        <ul className="hidePoint">
                            <li>
                                <label>First Name</label>
                                <input type="text" id="first_name" placeholder="Jane"></input>
                            </li>
                            <li>
                                <label>Last Name</label>
                                <input type="text" id="last_name" placeholder="Doe"></input>
                            </li>
                        </ul>
                    </form>
                </div>
                <div id="right_col">
                    <h3>Payment Information</h3>
                    <form>
                        <ul className="hidePoint">
                            <li>
                                <label>Card Number</label>
                                <input type="text" id="card_number" placeholder="1111-2222-3333-4444"></input>
                            </li>
                            <li>
                                <label>Expiry Date</label>
                                <input type="text" id="expirty_date" placeholder="1804 - 18th April"></input>
                            </li>
                            <li>
                                <label>CVC</label>
                                <input type="text" id="cvc" placeholder="739"></input>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </>
    )
}

export default paymentPage;