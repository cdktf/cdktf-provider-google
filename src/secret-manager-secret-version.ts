// https://www.terraform.io/docs/providers/google/r/secret_manager_secret_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SecretManagerSecretVersionConfig extends TerraformMetaArguments {
  /** The current state of the SecretVersion. */
  readonly enabled?: boolean;
  /** Secret Manager secret resource */
  readonly secret: string;
  /** The secret data. Must be no larger than 64KiB. */
  readonly secretData?: string;
  /** timeouts block */
  readonly timeouts?: SecretManagerSecretVersionTimeouts;
}
export interface SecretManagerSecretVersionTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class SecretManagerSecretVersion extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SecretManagerSecretVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_secret_manager_secret_version',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enabled = config.enabled;
    this._secret = config.secret;
    this._secretData = config.secretData;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: true
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // destroy_time - computed: true, optional: false, required: true
  public get destroyTime() {
    return this.getStringAttribute('destroy_time');
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this._enabled;
  }
  public set enabled(value: boolean | undefined) {
    this._enabled = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // secret - computed: false, optional: false, required: true
  private _secret: string;
  public get secret() {
    return this._secret;
  }
  public set secret(value: string) {
    this._secret = value;
  }

  // secret_data - computed: false, optional: true, required: false
  private _secretData?: string;
  public get secretData() {
    return this._secretData;
  }
  public set secretData(value: string | undefined) {
    this._secretData = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SecretManagerSecretVersionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SecretManagerSecretVersionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: this._enabled,
      secret: this._secret,
      secret_data: this._secretData,
      timeouts: this._timeouts,
    };
  }
}
