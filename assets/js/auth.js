const AUTH = {
  register: function(email, password, firstName, lastName) {
    email = (email || '').toLowerCase().trim();

    if (!email || !password) {
      return { success: false, error: 'Email and password are required' };
    }

    const users = JSON.parse(localStorage.getItem('loopy_users') || '{}');

    if (users[email]) {
      return { success: false, error: 'Email already registered' };
    }

    users[email] = {
      email: email,
      password: password,
      firstName: firstName || '',
      lastName: lastName || '',
      profilePicture: null,
      useLoopy: false,
      savedItems: [],
      profileData: {},
      createdAt: new Date().toISOString()
    };

    localStorage.setItem('loopy_users', JSON.stringify(users));
    return { success: true };
  },

  login: function(email, password) {
    email = (email || '').toLowerCase().trim();

    if (!email || !password) {
      return { success: false, error: 'Email and password are required' };
    }

    const users = JSON.parse(localStorage.getItem('loopy_users') || '{}');

    if (!users[email]) {
      return { success: false, error: 'Email not found' };
    }

    if (users[email].password !== password) {
      return { success: false, error: 'Incorrect password' };
    }

    localStorage.setItem('loopy_current_user', email);
    return { success: true, user: users[email] };
  },

  logout: function() {
    localStorage.removeItem('loopy_current_user');
  },

  getCurrentUser: function() {
    const email = localStorage.getItem('loopy_current_user');
    if (!email) return null;

    const users = JSON.parse(localStorage.getItem('loopy_users') || '{}');
    return users[email] || null;
  },

  updateUser: function(updates) {
    const email = localStorage.getItem('loopy_current_user');
    if (!email) return { success: false, error: 'Not logged in' };

    const users = JSON.parse(localStorage.getItem('loopy_users') || '{}');
    if (!users[email]) return { success: false, error: 'User not found' };

    users[email] = { ...users[email], ...updates };
    localStorage.setItem('loopy_users', JSON.stringify(users));

    return { success: true, user: users[email] };
  },

  updatePassword: function(oldPassword, newPassword) {
    const user = this.getCurrentUser();
    if (!user) return { success: false, error: 'Not logged in' };

    if (user.password !== oldPassword) {
      return { success: false, error: 'Current password is incorrect' };
    }

    return this.updateUser({ password: newPassword });
  },

  saveItem: function(item) {
    const user = this.getCurrentUser();
    if (!user) return { success: false, error: 'Not logged in' };

    const savedItems = user.savedItems || [];

    if (savedItems.some(saved => saved.title === item.title)) {
      return { success: false, error: 'Item already saved' };
    }

    savedItems.push(item);
    return this.updateUser({ savedItems: savedItems });
  },

  removeSavedItem: function(title) {
    const user = this.getCurrentUser();
    if (!user) return { success: false, error: 'Not logged in' };

    const savedItems = (user.savedItems || []).filter(item => item.title !== title);
    return this.updateUser({ savedItems: savedItems });
  },

  getSavedItems: function() {
    const user = this.getCurrentUser();
    return user ? (user.savedItems || []) : [];
  }
};

if (typeof window !== 'undefined') {
  window.AUTH = AUTH;
}
