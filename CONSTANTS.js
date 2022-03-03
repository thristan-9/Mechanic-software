var CONST = {

    Filter: {
        Property: "property",
        Operator: "operator",
        Operators: {
            Equal: "=",
            LessThan: "<",
            LessThanEqual: "<=",
            GreaterThan: ">",
            GreaterThanEqual: ">="
        },
        Value: "value"
    },

    Client: {
        Kind: "Client",
    },

    Vehicle: {
        Kind: "Vehicle",
    },

}

Object.freeze(CONST);

module.exports = CONST;
