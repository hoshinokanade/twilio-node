'use strict';

var _ = require('lodash');
var Instance = require('../../../../../../base');
var InstanceContext = require('../../../../../../base/InstanceContext');
var values = require('../../../../../../base/values');

var CredentialListMappingInstance;
var CredentialListMappingContext;

function CredentialListMappingInstance() {
}

Object.defineProperty(CredentialListMappingInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new CredentialListMappingContext(
        this._version,
        this._solution.accountSid,
        this._solution.domainSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(CredentialListMappingInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(CredentialListMappingInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(CredentialListMappingInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(CredentialListMappingInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(CredentialListMappingInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(CredentialListMappingInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Initialize the CredentialListMappingContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} domainSid: The domain_sid
 * @param {sid} sid: The sid
 *
 * @returns {CredentialListMappingContext}
 */
CredentialListMappingInstance.prototype.CredentialListMappingInstance = function
    CredentialListMappingInstance(version, payload, accountSid, domainSid, sid)
    {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    domainSid: domainSid,
    sid: sid || this._properties.sid,
  };
};

/**
 * Fetch a CredentialListMappingInstance
 *
 * @returns Fetched CredentialListMappingInstance
 */
CredentialListMappingInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Deletes the CredentialListMappingInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
CredentialListMappingInstance.prototype.delete = function delete() {
  return this._proxy.delete();
};


/**
 * Initialize the CredentialListMappingContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} domainSid - The domain_sid
 * @param {sid} sid - The sid
 *
 * @returns {CredentialListMappingContext}
 */
function CredentialListMappingContext(version, accountSid, domainSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    domainSid: domainSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<% account_sid %>/SIP/Domains/<% domain_sid %>/CredentialListMappings/<% sid %>.json', // jshint ignore:line
    this._solution
  );
}

/**
 * Fetch a CredentialListMappingInstance
 *
 * @returns Fetched CredentialListMappingInstance
 */
CredentialListMappingContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new CredentialListMappingInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.domainSid,
    this._solution.sid
  );
};

/**
 * Deletes the CredentialListMappingInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
CredentialListMappingContext.prototype.delete = function delete() {
  return this._version.delete('delete', this._uri);
};

module.exports = {
  CredentialListMappingInstance: CredentialListMappingInstance,
  CredentialListMappingContext: CredentialListMappingContext
};