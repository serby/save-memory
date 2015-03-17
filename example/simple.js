var save = require('save')

  // Create a save object
  , contactStore = save('Contact')

// Then we can create a new object.
contactStore.create({ name: 'Paul', email: 'paul@serby.net' }, function (error, contact) {

  // The created 'contact' is returned and has been given an _id
  console.log(contact)
})
