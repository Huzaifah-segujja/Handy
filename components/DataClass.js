

const Data = {
  _email: '',
  _password: '',
  _address: '',
  _dob: '',
  _Title: '',
  _FirstName: '',
  _LastName: '',
  _PhoneNo: '',
  _CountryCode: '',
  _PostCode:'',

  // Getters
  get email() {
    return this._email;
  },
  get password() {
    return this._password;
  },
  get address() {
    return this._address;
  },
  get dob() {
    return this._dob;
  },
  get Title() {
    return this._Title;
  },
  get FirstName() {
    return this._FirstName;
  },
  get LastName() {
    return this._LastName;
  },
  get PhoneNo() {
    return this._PhoneNo;
  },
  get CountryCode() {
    return this._CountryCode;
  },

  // Setters
  set email(value) {
    this._email = value;
  },
  set password(value) {
    this._password = value;
  },
  set address(value) {
    this._address = value;
  },
  set dob(value) {
    this._dob = value;
  },
  set Title(value) {
    this._Title = value;
  },
  set FirstName(value) {
    this._FirstName = value;
  },
  set LastName(value) {
    this._LastName = value;
  },
  set PhoneNo(value) {
    this._PhoneNo = value;
  },
  set CountryCode(value) {
    this._CountryCode = value;
  }
};

export default Data
