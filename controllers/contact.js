const Contacts = require('../repository/Contacts');

const getContacts = async (req, res, next) => {
  try {
    console.log(req.method);
    const contacts = await Contacts.listContacts();
    res.json({ status: 'success', code: 200, data: { contacts } });
  } catch (error) {
    next(error);
  }
};

const getContact = async (req, res, next) => {
  try {
    const contact = await Contacts.getContactById(req.params.id);
    console.log(contact);
    console.log(contact.id);
    if (contact) {
      return res
        .status(200)
        .json({ status: 'success', code: 200, data: { contact } });
    }
    return res
      .status(404)
      .json({ status: 'error', code: 404, message: 'Not Found' });
  } catch (error) {
    next(error);
  }
};

const saveContact = async (req, res, next) => {
  try {
    const contact = await Contacts.addContact(req.body);
    res.status(201).json({ status: 'success', code: 201, data: { ontact } });
  } catch (error) {
    next(error);
  }
};

const removeContact = async (req, res, next) => {
  try {
    const contact = await Contacts.removeContact(req.params.id);
    if (contact) {
      return res
        .status(200)
        .json({ status: 'success', code: 200, data: { contact } });
    }
    return res
      .status(404)
      .json({ status: 'error', code: 404, message: 'Not Found' });
  } catch (error) {
    next(error);
  }
};

const updateContact = async (req, res, next) => {
  try {
    console.log(req.method);
    const contact = await Contact.updateContact(req.params.id, req.body);
    if (contact) {
      return res
        .status(200)
        .json({ status: 'success', code: 200, data: { contact } });
    }
    return res
      .status(404)
      .json({ status: 'error', code: 404, message: 'Not Found' });
  } catch (error) {
    next(error);
  }
};

const updateStatusFavoriteContact = async (req, res, next) => {
  try {
    const contact = await Contacts.updateContact(req.params.id, req.body);
    if (contact) {
      return res
        .status(200)
        .json({ status: 'success', code: 200, data: { contact } });
    }
    return res
      .status(404)
      .json({ status: 'error', code: 404, message: 'Not Found' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getContact,
  getContacts,
  removeContact,
  saveContact,
  updateContact,
  updateStatusFavoriteContact,
};
