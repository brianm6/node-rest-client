let models = {
    categoryModel: {
        isNew: true,
        isValid: false,
        // model
        id: null,
        categoryName: null,
        description: null
    },
    productModel: {
        // used for validation
        isNew: true,
        isValid: false,
        // model
        id: null,
        productName: null,
        description: null,
        stock: 0,
        price: 0,
        picture: null,
        categoryId: null
    },
    userModel: {
        // used for validation
        isNew: true,
        isValid: false,
        // used for display
        isAdmin: false,
        // model
        id: null,
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        role: null,
    }
}

export default models;
