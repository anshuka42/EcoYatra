const validateDestination = (req, res, next) => {

    const { name, state } = req.body;

    if (!name || !state) {

        return res.status(400).json({

            success: false,

            message: "Name and State are required.",

        });

    }

    next();

};

module.exports = validateDestination;