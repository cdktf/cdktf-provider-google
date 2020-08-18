// https://www.terraform.io/docs/providers/google/r/organization_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface OrganizationPolicyConfig extends TerraformMetaArguments {
  /** The name of the Constraint the Policy is configuring, for example, serviceuser.services. */
  readonly constraint: string;
  readonly orgId: string;
  /** Version of the Policy. Default version is 0. */
  readonly version?: number;
  /** boolean_policy block */
  readonly booleanPolicy?: OrganizationPolicyBooleanPolicy[];
  /** list_policy block */
  readonly listPolicy?: OrganizationPolicyListPolicy[];
  /** restore_policy block */
  readonly restorePolicy?: OrganizationPolicyRestorePolicy[];
  /** timeouts block */
  readonly timeouts?: OrganizationPolicyTimeouts;
}
export interface OrganizationPolicyBooleanPolicy {
  /** If true, then the Policy is enforced. If false, then any configuration is acceptable. */
  readonly enforced: boolean;
}
export interface OrganizationPolicyListPolicyAllow {
  /** The policy allows or denies all values. */
  readonly all?: boolean;
  /** The policy can define specific values that are allowed or denied. */
  readonly values?: string[];
}
export interface OrganizationPolicyListPolicyDeny {
  /** The policy allows or denies all values. */
  readonly all?: boolean;
  /** The policy can define specific values that are allowed or denied. */
  readonly values?: string[];
}
export interface OrganizationPolicyListPolicy {
  /** If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy. */
  readonly inheritFromParent?: boolean;
  /** The Google Cloud Console will try to default to a configuration that matches the value specified in this field. */
  readonly suggestedValue?: string;
  /** allow block */
  readonly allow?: OrganizationPolicyListPolicyAllow[];
  /** deny block */
  readonly deny?: OrganizationPolicyListPolicyDeny[];
}
export interface OrganizationPolicyRestorePolicy {
  /** May only be set to true. If set, then the default Policy is restored. */
  readonly default: boolean;
}
export interface OrganizationPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class OrganizationPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: OrganizationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_organization_policy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._constraint = config.constraint;
    this._orgId = config.orgId;
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

  // org_id - computed: false, optional: false, required: true
  private _orgId: string;
  public get orgId() {
    return this._orgId;
  }
  public set orgId(value: string) {
    this._orgId = value;
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
  private _booleanPolicy?: OrganizationPolicyBooleanPolicy[];
  public get booleanPolicy() {
    return this._booleanPolicy;
  }
  public set booleanPolicy(value: OrganizationPolicyBooleanPolicy[] | undefined) {
    this._booleanPolicy = value;
  }

  // list_policy - computed: false, optional: true, required: false
  private _listPolicy?: OrganizationPolicyListPolicy[];
  public get listPolicy() {
    return this._listPolicy;
  }
  public set listPolicy(value: OrganizationPolicyListPolicy[] | undefined) {
    this._listPolicy = value;
  }

  // restore_policy - computed: false, optional: true, required: false
  private _restorePolicy?: OrganizationPolicyRestorePolicy[];
  public get restorePolicy() {
    return this._restorePolicy;
  }
  public set restorePolicy(value: OrganizationPolicyRestorePolicy[] | undefined) {
    this._restorePolicy = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: OrganizationPolicyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: OrganizationPolicyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      constraint: this._constraint,
      org_id: this._orgId,
      version: this._version,
      boolean_policy: this._booleanPolicy,
      list_policy: this._listPolicy,
      restore_policy: this._restorePolicy,
      timeouts: this._timeouts,
    };
  }
}
