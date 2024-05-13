const { User, Book } = require('../models')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id});
            }
            throw AuthenticationError;
        },
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);
            return { token, user }
        },

        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user)
            console.log(token)
            return { token, user}
        },

        saveBook: async (parent, { newBook }, context) => {
            console.log(newBook)
            console.log(context.user._id)
            if (context.user) {            
                const updatedData = await User.findByIdAndUpdate(
                { _id: context.user._id },
                {
                    $push: { savedBooks: newBook },
                },
                {
                    new: true,
                    runValidators: true
                }
            )
            return updatedData
        }
        },

        removeBook: async (parent, { bookId }, context) => {
            return await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $pull: { savedBooks: { bookId: bookId }}},
                { new: true }
            );
        },
    },
};

module.exports = resolvers;