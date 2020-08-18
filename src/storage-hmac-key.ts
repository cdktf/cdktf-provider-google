// https://www.terraform.io/docs/providers/google/r/storage_hmac_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StorageHmacKeyConfig extends TerraformMetaArguments {
  readonly project?: string;
  /** The email address of the key's associated service account. */
  readonly serviceAccountEmail: string;
  /** The state of the key. Can be set to one of ACTIVE, INACTIVE. Default value: "ACTIVE" Possible values: ["ACTIVE", "INACTIVE"] */
  readonly state?: string;
  /** timeouts block */
  readonly timeouts?: StorageHmacKeyTimeouts;
}
export interface StorageHmacKeyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class StorageHmacKey extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StorageHmacKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_hmac_key',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._project = config.project;
    this._serviceAccountEmail = config.serviceAccountEmail;
    this._state = config.state;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_id - computed: true, optional: false, required: true
  public get accessId() {
    return this.getStringAttribute('access_id');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // secret - computed: true, optional: false, required: true
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // service_account_email - computed: false, optional: false, required: true
  private _serviceAccountEmail: string;
  public get serviceAccountEmail() {
    return this._serviceAccountEmail;
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // updated - computed: true, optional: false, required: true
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StorageHmacKeyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: StorageHmacKeyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      project: this._project,
      service_account_email: this._serviceAccountEmail,
      state: this._state,
      timeouts: this._timeouts,
    };
  }
}
