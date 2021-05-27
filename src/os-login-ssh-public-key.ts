// https://www.terraform.io/docs/providers/google/r/os_login_ssh_public_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OsLoginSshPublicKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * An expiration time in microseconds since epoch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_login_ssh_public_key.html#expiration_time_usec OsLoginSshPublicKey#expiration_time_usec}
  */
  readonly expirationTimeUsec?: string;
  /**
  * Public key text in SSH format, defined by RFC4253 section 6.6.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_login_ssh_public_key.html#key OsLoginSshPublicKey#key}
  */
  readonly key: string;
  /**
  * The project ID of the Google Cloud Platform project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_login_ssh_public_key.html#project OsLoginSshPublicKey#project}
  */
  readonly project?: string;
  /**
  * The user email.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_login_ssh_public_key.html#user OsLoginSshPublicKey#user}
  */
  readonly user: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_login_ssh_public_key.html#timeouts OsLoginSshPublicKey#timeouts}
  */
  readonly timeouts?: OsLoginSshPublicKeyTimeouts;
}
export interface OsLoginSshPublicKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_login_ssh_public_key.html#create OsLoginSshPublicKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_login_ssh_public_key.html#delete OsLoginSshPublicKey#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_login_ssh_public_key.html#update OsLoginSshPublicKey#update}
  */
  readonly update?: string;
}

function osLoginSshPublicKeyTimeoutsToTerraform(struct?: OsLoginSshPublicKeyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/os_login_ssh_public_key.html google_os_login_ssh_public_key}
*/
export class OsLoginSshPublicKey extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/os_login_ssh_public_key.html google_os_login_ssh_public_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OsLoginSshPublicKeyConfig
  */
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
    this._project = config.project;
    this._user = config.user;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expiration_time_usec - computed: false, optional: true, required: false
  private _expirationTimeUsec?: string;
  public get expirationTimeUsec() {
    return this.getStringAttribute('expiration_time_usec');
  }
  public set expirationTimeUsec(value: string ) {
    this._expirationTimeUsec = value;
  }
  public resetExpirationTimeUsec() {
    this._expirationTimeUsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeUsecInput() {
    return this._expirationTimeUsec
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: false, required: true
  private _key: string;
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key
  }

  // project - computed: false, optional: true, required: false
  private _project?: string;
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string ) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // user - computed: false, optional: false, required: true
  private _user: string;
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: OsLoginSshPublicKeyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: OsLoginSshPublicKeyTimeouts ) {
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
      expiration_time_usec: cdktf.stringToTerraform(this._expirationTimeUsec),
      key: cdktf.stringToTerraform(this._key),
      project: cdktf.stringToTerraform(this._project),
      user: cdktf.stringToTerraform(this._user),
      timeouts: osLoginSshPublicKeyTimeoutsToTerraform(this._timeouts),
    };
  }
}
