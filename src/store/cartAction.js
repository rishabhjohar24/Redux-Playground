import { cartItemActions } from "./cartItems";
import { toggleCartActions } from "./toggleCart";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      toggleCartActions.showNotifications({
        status: "pending",
        title: "sending",
        message: "sending card data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://moreonreact-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error({ message: "something went wrong!" });
      }
    };

    try {
      await sendRequest();
      dispatch(
        toggleCartActions.showNotifications({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        toggleCartActions.showNotifications({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://moreonreact-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error({ message: "Soomething went  wrong!" });
      }

      const data = await response.json();

      return data;
    };
    try {
      const cartdata = await fetchData();
      dispatch(
        cartItemActions.replaceCart({
          items: cartdata.items || [],
          totalQuantity: cartdata.totalQuantit,
        })
      );
    } catch (error) {
      dispatch(
        toggleCartActions.showNotifications({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};
