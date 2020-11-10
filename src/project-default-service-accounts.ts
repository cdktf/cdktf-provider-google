// https://www.terraform.io/docs/providers/google/r/project_default_service_accounts.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface ProjectDefaultServiceAccountsConfig extends TerraformMetaArguments {
  /** The action to be performed in the default service accounts. Valid values are: DEPRIVILEGE, DELETE, DISABLE.
				Note that DEPRIVILEGE action will ignore the REVERT configuration in the restore_policy. */
  readonly action: string;
  /** The project ID where service accounts are created. */
  readonly project: string;
  /** The action to be performed in the default service accounts on the resource destroy.
				Valid values are NONE and REVERT. If set to REVERT it will attempt to restore all default SAs but in the DEPRIVILEGE action. */
  readonly restorePolicy?: string;
  /** timeouts block */
  readonly timeouts?: ProjectDefaultServiceAccountsTimeouts;
}
export interface ProjectDefaultServiceAccountsTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
}

// Resource

export class ProjectDefaultServiceAccounts extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ProjectDefaultServiceAccountsConfig) {
    super(scope, id, {
      terraformResourceType: 'google_project_default_service_accounts',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._action = config.action;
    this._project = config.project;
    this._restorePolicy = config.restorePolicy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action: string;
  public get action() {
    return this._action;
  }
  public set action(value: string) {
    this._action = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // project - computed: false, optional: false, required: true
  private _project: string;
  public get project() {
    return this._project;
  }
  public set project(value: string) {
    this._project = value;
  }

  // restore_policy - computed: false, optional: true, required: false
  private _restorePolicy?: string;
  public get restorePolicy() {
    return this._restorePolicy;
  }
  public set restorePolicy(value: string | undefined) {
    this._restorePolicy = value;
  }

  // service_accounts - computed: true, optional: false, required: true
  public serviceAccounts(key: string): string {
    return new StringMap(this, 'service_accounts').lookup(key);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ProjectDefaultServiceAccountsTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ProjectDefaultServiceAccountsTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: this._action,
      project: this._project,
      restore_policy: this._restorePolicy,
      timeouts: this._timeouts,
    };
  }
}
