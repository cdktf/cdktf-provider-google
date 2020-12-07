// https://www.terraform.io/docs/providers/google/r/folder_organization_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FolderOrganizationPolicyConfig extends cdktf.TerraformMetaArguments {
  /** The name of the Constraint the Policy is configuring, for example, serviceuser.services. */
  readonly constraint: string;
  /** The resource name of the folder to set the policy for. Its format is folders/{folder_id}. */
  readonly folder: string;
  /** Version of the Policy. Default version is 0. */
  readonly version?: number;
  /** boolean_policy block */
  readonly booleanPolicy?: FolderOrganizationPolicyBooleanPolicy[];
  /** list_policy block */
  readonly listPolicy?: FolderOrganizationPolicyListPolicy[];
  /** restore_policy block */
  readonly restorePolicy?: FolderOrganizationPolicyRestorePolicy[];
  /** timeouts block */
  readonly timeouts?: FolderOrganizationPolicyTimeouts;
}
export interface FolderOrganizationPolicyBooleanPolicy {
  /** If true, then the Policy is enforced. If false, then any configuration is acceptable. */
  readonly enforced: boolean;
}

function folderOrganizationPolicyBooleanPolicyToTerraform(struct?: FolderOrganizationPolicyBooleanPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enforced: cdktf.booleanToTerraform(struct!.enforced),
  }
}

export interface FolderOrganizationPolicyListPolicyAllow {
  /** The policy allows or denies all values. */
  readonly all?: boolean;
  /** The policy can define specific values that are allowed or denied. */
  readonly values?: string[];
}

function folderOrganizationPolicyListPolicyAllowToTerraform(struct?: FolderOrganizationPolicyListPolicyAllow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface FolderOrganizationPolicyListPolicyDeny {
  /** The policy allows or denies all values. */
  readonly all?: boolean;
  /** The policy can define specific values that are allowed or denied. */
  readonly values?: string[];
}

function folderOrganizationPolicyListPolicyDenyToTerraform(struct?: FolderOrganizationPolicyListPolicyDeny): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface FolderOrganizationPolicyListPolicy {
  /** If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy. */
  readonly inheritFromParent?: boolean;
  /** The Google Cloud Console will try to default to a configuration that matches the value specified in this field. */
  readonly suggestedValue?: string;
  /** allow block */
  readonly allow?: FolderOrganizationPolicyListPolicyAllow[];
  /** deny block */
  readonly deny?: FolderOrganizationPolicyListPolicyDeny[];
}

function folderOrganizationPolicyListPolicyToTerraform(struct?: FolderOrganizationPolicyListPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    inherit_from_parent: cdktf.booleanToTerraform(struct!.inheritFromParent),
    suggested_value: cdktf.stringToTerraform(struct!.suggestedValue),
    allow: cdktf.listMapper(folderOrganizationPolicyListPolicyAllowToTerraform)(struct!.allow),
    deny: cdktf.listMapper(folderOrganizationPolicyListPolicyDenyToTerraform)(struct!.deny),
  }
}

export interface FolderOrganizationPolicyRestorePolicy {
  /** May only be set to true. If set, then the default Policy is restored. */
  readonly default: boolean;
}

function folderOrganizationPolicyRestorePolicyToTerraform(struct?: FolderOrganizationPolicyRestorePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default: cdktf.booleanToTerraform(struct!.default),
  }
}

export interface FolderOrganizationPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function folderOrganizationPolicyTimeoutsToTerraform(struct?: FolderOrganizationPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class FolderOrganizationPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: FolderOrganizationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_folder_organization_policy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._constraint = config.constraint;
    this._folder = config.folder;
    this._version = config.version;
    this._booleanPolicy = config.booleanPolicy;
    this._listPolicy = config.listPolicy;
    this._restorePolicy = config.restorePolicy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // constraint - computed: false, optional: false, required: true
  private _constraint: string;
  public get constraint() {
    return this.getStringAttribute('constraint');
  }
  public set constraint(value: string) {
    this._constraint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintInput() {
    return this._constraint
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // folder - computed: false, optional: false, required: true
  private _folder: string;
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // version - computed: true, optional: true, required: false
  private _version?: number;
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // boolean_policy - computed: false, optional: true, required: false
  private _booleanPolicy?: FolderOrganizationPolicyBooleanPolicy[];
  public get booleanPolicy() {
    return this.interpolationForAttribute('boolean_policy') as any;
  }
  public set booleanPolicy(value: FolderOrganizationPolicyBooleanPolicy[] ) {
    this._booleanPolicy = value;
  }
  public resetBooleanPolicy() {
    this._booleanPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanPolicyInput() {
    return this._booleanPolicy
  }

  // list_policy - computed: false, optional: true, required: false
  private _listPolicy?: FolderOrganizationPolicyListPolicy[];
  public get listPolicy() {
    return this.interpolationForAttribute('list_policy') as any;
  }
  public set listPolicy(value: FolderOrganizationPolicyListPolicy[] ) {
    this._listPolicy = value;
  }
  public resetListPolicy() {
    this._listPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listPolicyInput() {
    return this._listPolicy
  }

  // restore_policy - computed: false, optional: true, required: false
  private _restorePolicy?: FolderOrganizationPolicyRestorePolicy[];
  public get restorePolicy() {
    return this.interpolationForAttribute('restore_policy') as any;
  }
  public set restorePolicy(value: FolderOrganizationPolicyRestorePolicy[] ) {
    this._restorePolicy = value;
  }
  public resetRestorePolicy() {
    this._restorePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restorePolicyInput() {
    return this._restorePolicy
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FolderOrganizationPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: FolderOrganizationPolicyTimeouts ) {
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
      constraint: cdktf.stringToTerraform(this._constraint),
      folder: cdktf.stringToTerraform(this._folder),
      version: cdktf.numberToTerraform(this._version),
      boolean_policy: cdktf.listMapper(folderOrganizationPolicyBooleanPolicyToTerraform)(this._booleanPolicy),
      list_policy: cdktf.listMapper(folderOrganizationPolicyListPolicyToTerraform)(this._listPolicy),
      restore_policy: cdktf.listMapper(folderOrganizationPolicyRestorePolicyToTerraform)(this._restorePolicy),
      timeouts: folderOrganizationPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
