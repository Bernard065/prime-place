export const register = (req, res) => {
    // db operations or registration logic
    console.log('register endpoint');
    res.json({ message: "User registered successfully!" });
};

export const login = (req, res) => {
    // db operations or login logic
    console.log('login endpoint');
    res.json({ message: "User logged in successfully!" });
};

export const logout = (req, res) => {
    // db operations or logout logic
    console.log('logout endpoint');
    res.json({ message: "User logged out successfully!" });
};
