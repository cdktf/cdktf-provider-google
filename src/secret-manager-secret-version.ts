// https://www.terraform.io/docs/providers/google/r/secret_manager_secret_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretManagerSecretVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The current state of the SecretVersion.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret_version.html#enabled SecretManagerSecretVersion#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Secret Manager secret resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret_version.html#secret SecretManagerSecretVersion#secret}
  */
  readonly secret: string;
  /**
  * The secret data. Must be no larger than 64KiB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret_version.html#secret_data SecretManagerSecretVersion#secret_data}
  */
  readonly secretData: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret_version.html#timeouts SecretManagerSecretVersion#timeouts}
  */
  readonly timeouts?: SecretManagerSecretVersionTimeouts;
}
export interface SecretManagerSecretVersionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret_version.html#create SecretManagerSecretVersion#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret_version.html#delete SecretManagerSecretVersion#delete}
  */
  readonly delete?: string;
}

function secretManagerSecretVersionTimeoutsToTerraform(struct?: SecretManagerSecretVersionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret_version.html google_secret_manager_secret_version}
*/
export class SecretManagerSecretVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_secret_manager_secret_version";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret_version.html google_secret_manager_secret_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretManagerSecretVersionConfig
  */
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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // destroy_time - computed: true, optional: false, required: false
  public get destroyTime() {
    return this.getStringAttribute('destroy_time');
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // secret - computed: false, optional: false, required: true
  private _secret: string;
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret
  }

  // secret_data - computed: false, optional: false, required: true
  private _secretData: string;
  public get secretData() {
    return this.getStringAttribute('secret_data');
  }
  public set secretData(value: string) {
    this._secretData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretDataInput() {
    return this._secretData
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SecretManagerSecretVersionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SecretManagerSecretVersionTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      secret: cdktf.stringToTerraform(this._secret),
      secret_data: cdktf.stringToTerraform(this._secretData),
      timeouts: secretManagerSecretVersionTimeoutsToTerraform(this._timeouts),
    };
  }
}
