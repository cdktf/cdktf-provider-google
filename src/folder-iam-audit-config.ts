// https://www.terraform.io/docs/providers/google/r/folder_iam_audit_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FolderIamAuditConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_iam_audit_config.html#folder FolderIamAuditConfig#folder}
  */
  readonly folder: string;
  /**
  * Service which will be enabled for audit logging. The special value allServices covers all services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_iam_audit_config.html#service FolderIamAuditConfig#service}
  */
  readonly service: string;
  /**
  * audit_log_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_iam_audit_config.html#audit_log_config FolderIamAuditConfig#audit_log_config}
  */
  readonly auditLogConfig: FolderIamAuditConfigAuditLogConfig[];
}
export interface FolderIamAuditConfigAuditLogConfig {
  /**
  * Identities that do not cause logging for this type of permission. Each entry can have one of the following values:user:{emailid}: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com. serviceAccount:{emailid}: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com. group:{emailid}: An email address that represents a Google group. For example, admins@example.com. domain:{domain}: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_iam_audit_config.html#exempted_members FolderIamAuditConfig#exempted_members}
  */
  readonly exemptedMembers?: string[];
  /**
  * Permission type for which logging is to be configured. Must be one of DATA_READ, DATA_WRITE, or ADMIN_READ.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_iam_audit_config.html#log_type FolderIamAuditConfig#log_type}
  */
  readonly logType: string;
}

function folderIamAuditConfigAuditLogConfigToTerraform(struct?: FolderIamAuditConfigAuditLogConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exempted_members: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exemptedMembers),
    log_type: cdktf.stringToTerraform(struct!.logType),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/folder_iam_audit_config.html google_folder_iam_audit_config}
*/
export class FolderIamAuditConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_folder_iam_audit_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/folder_iam_audit_config.html google_folder_iam_audit_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FolderIamAuditConfigConfig
  */
  public constructor(scope: Construct, id: string, config: FolderIamAuditConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_folder_iam_audit_config',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._folder = config.folder;
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

  // folder - computed: false, optional: false, required: true
  private _folder?: string; 
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

  // service - computed: false, optional: false, required: true
  private _service?: string; 
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
  private _auditLogConfig?: FolderIamAuditConfigAuditLogConfig[]; 
  public get auditLogConfig() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('audit_log_config') as any;
  }
  public set auditLogConfig(value: FolderIamAuditConfigAuditLogConfig[]) {
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
      folder: cdktf.stringToTerraform(this._folder),
      service: cdktf.stringToTerraform(this._service),
      audit_log_config: cdktf.listMapper(folderIamAuditConfigAuditLogConfigToTerraform)(this._auditLogConfig),
    };
  }
}
