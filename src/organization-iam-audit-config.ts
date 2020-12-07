// https://www.terraform.io/docs/providers/google/r/organization_iam_audit_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationIamAuditConfigConfig extends cdktf.TerraformMetaArguments {
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

function organizationIamAuditConfigAuditLogConfigToTerraform(struct?: OrganizationIamAuditConfigAuditLogConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exempted_members: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exemptedMembers),
    log_type: cdktf.stringToTerraform(struct!.logType),
  }
}


// Resource

export class OrganizationIamAuditConfig extends cdktf.TerraformResource {

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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId: string;
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId
  }

  // service - computed: false, optional: false, required: true
  private _service: string;
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service
  }

  // audit_log_config - computed: false, optional: false, required: true
  private _auditLogConfig: OrganizationIamAuditConfigAuditLogConfig[];
  public get auditLogConfig() {
    return this.interpolationForAttribute('audit_log_config') as any;
  }
  public set auditLogConfig(value: OrganizationIamAuditConfigAuditLogConfig[]) {
    this._auditLogConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogConfigInput() {
    return this._auditLogConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      org_id: cdktf.stringToTerraform(this._orgId),
      service: cdktf.stringToTerraform(this._service),
      audit_log_config: cdktf.listMapper(organizationIamAuditConfigAuditLogConfigToTerraform)(this._auditLogConfig),
    };
  }
}
