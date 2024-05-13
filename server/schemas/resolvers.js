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

        saveBook: async (parent, { saveBook }, context) => {
            console.log(context)
            if (context.user) {            
                return User.findOneAndUpdate(
                { _id: context.user._id },
                {
                    $push: { savedBooks: saveBook },
                },
                {
                    new: true,
                    runValidators: true
                }
            )}
        },

        removeBook: async (parent, { userId, bookId}) => {
            return User.findOneAndUpdate(
                { _id: userId },
                { $pull: { savedBooks: { bookId: bookId }}},
                { new: true }
            );
        },
    },
};

module.exports = resolvers;