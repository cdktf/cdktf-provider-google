// https://www.terraform.io/docs/providers/google/r/project_organization_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ProjectOrganizationPolicyConfig extends TerraformMetaArguments {
  /** The name of the Constraint the Policy is configuring, for example, serviceuser.services. */
  readonly constraint: string;
  /** The project ID. */
  readonly project: string;
  /** Version of the Policy. Default version is 0. */
  readonly version?: number;
  /** boolean_policy block */
  readonly booleanPolicy?: ProjectOrganizationPolicyBooleanPolicy[];
  /** list_policy block */
  readonly listPolicy?: ProjectOrganizationPolicyListPolicy[];
  /** restore_policy block */
  readonly restorePolicy?: ProjectOrganizationPolicyRestorePolicy[];
  /** timeouts block */
  readonly timeouts?: ProjectOrganizationPolicyTimeouts;
}
export interface ProjectOrganizationPolicyBooleanPolicy {
  /** If true, then the Policy is enforced. If false, then any configuration is acceptable. */
  readonly enforced: boolean;
}
export interface ProjectOrganizationPolicyListPolicyAllow {
  /** The policy allows or denies all values. */
  readonly all?: boolean;
  /** The policy can define specific values that are allowed or denied. */
  readonly values?: string[];
}
export interface ProjectOrganizationPolicyListPolicyDeny {
  /** The policy allows or denies all values. */
  readonly all?: boolean;
  /** The policy can define specific values that are allowed or denied. */
  readonly values?: string[];
}
export interface ProjectOrganizationPolicyListPolicy {
  /** If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy. */
  readonly inheritFromParent?: boolean;
  /** The Google Cloud Console will try to default to a configuration that matches the value specified in this field. */
  readonly suggestedValue?: string;
  /** allow block */
  readonly allow?: ProjectOrganizationPolicyListPolicyAllow[];
  /** deny block */
  readonly deny?: ProjectOrganizationPolicyListPolicyDeny[];
}
export interface ProjectOrganizationPolicyRestorePolicy {
  /** May only be set to true. If set, then the default Policy is restored. */
  readonly default: boolean;
}
export interface ProjectOrganizationPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ProjectOrganizationPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ProjectOrganizationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_project_organization_policy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._constraint = config.constraint;
    this._project = config.project;
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
    return this._constraint;
  }
  public set constraint(value: string) {
    this._constraint = value;
  }

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
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

  // update_time - computed: true, optional: false, required: true
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // version - computed: true, optional: true, required: false
  private _version?: number;
  public get version() {
    return this._version ?? this.getNumberAttribute('version');
  }
  public set version(value: number | undefined) {
    this._version = value;
  }

  // boolean_policy - computed: false, optional: true, required: false
  private _booleanPolicy?: ProjectOrganizationPolicyBooleanPolicy[];
  public get booleanPolicy() {
    return this._booleanPolicy;
  }
  public set booleanPolicy(value: ProjectOrganizationPolicyBooleanPolicy[] | undefined) {
    this._booleanPolicy = value;
  }

  // list_policy - computed: false, optional: true, required: false
  private _listPolicy?: ProjectOrganizationPolicyListPolicy[];
  public get listPolicy() {
    return this._listPolicy;
  }
  public set listPolicy(value: ProjectOrganizationPolicyListPolicy[] | undefined) {
    this._listPolicy = value;
  }

  // restore_policy - computed: false, optional: true, required: false
  private _restorePolicy?: ProjectOrganizationPolicyRestorePolicy[];
  public get restorePolicy() {
    return this._restorePolicy;
  }
  public set restorePolicy(value: ProjectOrganizationPolicyRestorePolicy[] | undefined) {
    this._restorePolicy = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ProjectOrganizationPolicyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ProjectOrganizationPolicyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      constraint: this._constraint,
      project: this._project,
      version: this._version,
      boolean_policy: this._booleanPolicy,
      list_policy: this._listPolicy,
      restore_policy: this._restorePolicy,
      timeouts: this._timeouts,
    };
  }
}
