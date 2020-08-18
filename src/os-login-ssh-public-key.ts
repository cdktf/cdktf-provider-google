// https://www.terraform.io/docs/providers/google/r/os_login_ssh_public_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface OsLoginSshPublicKeyConfig extends TerraformMetaArguments {
  /** An expiration time in microseconds since epoch. */
  readonly expirationTimeUsec?: string;
  /** Public key text in SSH format, defined by RFC4253 section 6.6. */
  readonly key: string;
  /** The user email. */
  readonly user: string;
  /** timeouts block */
  readonly timeouts?: OsLoginSshPublicKeyTimeouts;
}
export interface OsLoginSshPublicKeyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class OsLoginSshPublicKey extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: OsLoginSshPublicKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_os_login_ssh_public_key',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._expirationTimeUsec = config.expirationTimeUsec;
    this._key = config.key;
    this._user = config.user;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expiration_time_usec - computed: false, optional: true, required: false
  private _expirationTimeUsec?: string;
  public get expirationTimeUsec() {
    return this._expirationTimeUsec;
  }
  public set expirationTimeUsec(value: string | undefined) {
    this._expirationTimeUsec = value;
  }

  // fingerprint - computed: true, optional: false, required: true
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // key - computed: false, optional: false, required: true
  private _key: string;
  public get key() {
    return this._key;
  }
  public set key(value: string) {
    this._key = value;
  }

  // user - computed: false, optional: false, required: true
  private _user: string;
  public get user() {
    return this._user;
  }
  public set user(value: string) {
    this._user = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: OsLoginSshPublicKeyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: OsLoginSshPublicKeyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      expiration_time_usec: this._expirationTimeUsec,
      key: this._key,
      user: this._user,
      timeouts: this._timeouts,
    };
  }
}
