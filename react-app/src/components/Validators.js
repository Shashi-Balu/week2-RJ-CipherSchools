const EMAIL_REG_EX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const isEmail = (email) => {
    if (typeof email !== "string") {
        return false;
    }
    return EMAIL_REG_EX.test(email);
};

export const isValidUser = (user) => {
    return isEmail(user.email && user.password && user.firstName && user.lastName);
};
