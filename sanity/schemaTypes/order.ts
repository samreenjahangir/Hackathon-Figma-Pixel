export default {
    name: "order",
    title: "Order",
    type: "document",
    fields: [
      {
        name: "firstName",
        title: "First Name",
        type: "string",
      },
      {
        name: "lastName",
        title: "Last Name",
        type: "string",
      },
      {
        name: "address",
        title: "Address",
        type: "string",
      },
      {
        name: "city",
        title: "City",
        type: "string",
      },
      {
        name: "zipcode",
        title: "Zip code",
        type: "number",
      },
      {
        name: "phone",
        title: "Phone",
        type: "number",
      },
      {
        name: "email",
        title: "Email",
        type: "string",  // ← درست کیا گیا
      },
  
      {
        name: "discount",
        title: "Discount",
        type: "object", // ✅ درست
        fields: [
          {
            name: "percentage",
            title: "Percentage",
            type: "number",
          },
          {
            name: "couponCode",
            title: "Coupon Code",
            type: "string",
          }
        ]
      },
      
      {
        name: "cartItems",
        title: "Cart Items",
        type: "array",
        of: [{ type: "reference", to: [{ type: "product" }] }],
      },
      {
        name: "total",
        title: "Total",
        type: "number",
      },
      {
        name: "status",
        title: "Order Status",
        type: "string",
        options: {  // ← درست کیا گیا
          list: [
            { title: "Pending", value: "pending" },
            { title: "Success", value: "success" },
            { title: "Dispatch", value: "dispatch" },
          ],
          layout: "radio",
        },
        initialValue: "pending",  // ← درست کیا گیا
      },
    ],
  };
  