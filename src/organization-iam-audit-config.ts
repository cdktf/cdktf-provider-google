// https://www.terraform.io/docs/providers/google/r/organization_iam_audit_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface OrganizationIamAuditConfigConfig extends TerraformMetaArguments {
  /** The numeric ID of the organization in which you want to manage the audit logging config. */
  readonly orgId: string;
  /** Service which will be enabled for audit logging. The special value allServices covers all services. */
  readonly service: string;
  /** audit_log_config block */
  readonly auditLogConfig: OrganizationIamAuditConfigAuditLogConfig[];
}
export interface OrganizationIamAuditConfigAuditLogConfig {
  /** Identities that do not cause logging for this type of permission. Each entry can have one of the following values:user:{emailid}: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com. serviceAccount:{emailid}: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com. group:{emailid}: An email address that represents a Google group. For example, admins@example.com. domain:{domain}: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com. */
  readonly exemptedMembers?: string[];
  /** Permission type for which logging is to be configured. Must be one of DATA_READ, DATA_WRITE, or ADMIN_READ. */
  readonly logType: string;
}

// Resource

export class OrganizationIamAuditConfig extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: OrganizationIamAuditConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_organization_iam_audit_config',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._orgId = config.orgId;
    this._service = config.service;
    this._auditLogConfig = config.auditLogConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // service - computed: false, optional: false, required: true
  private _service: string;
  public get service() {
    return this._service;
  }
  public set service(value: string) {
    this._service = value;
  }

  // audit_log_config - computed: false, optional: false, required: true
  private _auditLogConfig: OrganizationIamAuditConfigAuditLogConfig[];
  public get auditLogConfig() {
    return this._auditLogConfig;
  }
  public set auditLogConfig(value: OrganizationIamAuditConfigAuditLogConfig[]) {
    this._auditLogConfig = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      org_id: this._orgId,
      service: this._service,
      audit_log_config: this._auditLogConfig,
    };
  }
}
