// https://www.terraform.io/docs/providers/google/r/folder_iam_audit_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface FolderIamAuditConfigConfig extends TerraformMetaArguments {
  readonly folder: string;
  /** Service which will be enabled for audit logging. The special value allServices covers all services. */
  readonly service: string;
  /** audit_log_config block */
  readonly auditLogConfig: FolderIamAuditConfigAuditLogConfig[];
}
export interface FolderIamAuditConfigAuditLogConfig {
  /** Identities that do not cause logging for this type of permission. Each entry can have one of the following values:user:{emailid}: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com. serviceAccount:{emailid}: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com. group:{emailid}: An email address that represents a Google group. For example, admins@example.com. domain:{domain}: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com. */
  readonly exemptedMembers?: string[];
  /** Permission type for which logging is to be configured. Must be one of DATA_READ, DATA_WRITE, or ADMIN_READ. */
  readonly logType: string;
}

// Resource

export class FolderIamAuditConfig extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // folder - computed: false, optional: false, required: true
  private _folder: string;
  public get folder() {
    return this._folder;
  }
  public set folder(value: string) {
    this._folder = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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
  private _auditLogConfig: FolderIamAuditConfigAuditLogConfig[];
  public get auditLogConfig() {
    return this._auditLogConfig;
  }
  public set auditLogConfig(value: FolderIamAuditConfigAuditLogConfig[]) {
    this._auditLogConfig = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      folder: this._folder,
      service: this._service,
      audit_log_config: this._auditLogConfig,
    };
  }
}
