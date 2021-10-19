// https://www.terraform.io/docs/providers/google/r/project_default_service_accounts.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectDefaultServiceAccountsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The action to be performed in the default service accounts. Valid values are: DEPRIVILEGE, DELETE, DISABLE.
				Note that DEPRIVILEGE action will ignore the REVERT configuration in the restore_policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_default_service_accounts.html#action ProjectDefaultServiceAccounts#action}
  */
  readonly action: string;
  /**
  * The project ID where service accounts are created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_default_service_accounts.html#project ProjectDefaultServiceAccounts#project}
  */
  readonly project: string;
  /**
  * The action to be performed in the default service accounts on the resource destroy.
				Valid values are NONE, REVERT and REVERT_AND_IGNORE_FAILURE. It is applied for any action but in the DEPRIVILEGE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_default_service_accounts.html#restore_policy ProjectDefaultServiceAccounts#restore_policy}
  */
  readonly restorePolicy?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_default_service_accounts.html#timeouts ProjectDefaultServiceAccounts#timeouts}
  */
  readonly timeouts?: ProjectDefaultServiceAccountsTimeouts;
}
export interface ProjectDefaultServiceAccountsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_default_service_accounts.html#create ProjectDefaultServiceAccounts#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_default_service_accounts.html#delete ProjectDefaultServiceAccounts#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_default_service_accounts.html#read ProjectDefaultServiceAccounts#read}
  */
  readonly read?: string;
}

function projectDefaultServiceAccountsTimeoutsToTerraform(struct?: ProjectDefaultServiceAccountsTimeoutsOutputReference | ProjectDefaultServiceAccountsTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class ProjectDefaultServiceAccountsTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/project_default_service_accounts.html google_project_default_service_accounts}
*/
export class ProjectDefaultServiceAccounts extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_project_default_service_accounts";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/project_default_service_accounts.html google_project_default_service_accounts} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectDefaultServiceAccountsConfig
  */
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
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // restore_policy - computed: false, optional: true, required: false
  private _restorePolicy?: string | undefined; 
  public get restorePolicy() {
    return this.getStringAttribute('restore_policy');
  }
  public set restorePolicy(value: string | undefined) {
    this._restorePolicy = value;
  }
  public resetRestorePolicy() {
    this._restorePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restorePolicyInput() {
    return this._restorePolicy
  }

  // service_accounts - computed: true, optional: false, required: false
  public serviceAccounts(key: string): string {
    return new cdktf.StringMap(this, 'service_accounts').lookup(key);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ProjectDefaultServiceAccountsTimeouts | undefined; 
  private __timeoutsOutput = new ProjectDefaultServiceAccountsTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ProjectDefaultServiceAccountsTimeouts | undefined) {
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
      action: cdktf.stringToTerraform(this._action),
      project: cdktf.stringToTerraform(this._project),
      restore_policy: cdktf.stringToTerraform(this._restorePolicy),
      timeouts: projectDefaultServiceAccountsTimeoutsToTerraform(this._timeouts),
    };
  }
}
