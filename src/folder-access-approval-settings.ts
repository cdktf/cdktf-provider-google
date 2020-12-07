// https://www.terraform.io/docs/providers/google/r/folder_access_approval_settings.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FolderAccessApprovalSettingsConfig extends cdktf.TerraformMetaArguments {
  /** ID of the folder of the access approval settings. */
  readonly folderId: string;
  /** A list of email addresses to which notifications relating to approval requests should be sent.
Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed. */
  readonly notificationEmails?: string[];
  /** enrolled_services block */
  readonly enrolledServices: FolderAccessApprovalSettingsEnrolledServices[];
  /** timeouts block */
  readonly timeouts?: FolderAccessApprovalSettingsTimeouts;
}
export interface FolderAccessApprovalSettingsEnrolledServices {
  /** The product for which Access Approval will be enrolled. Allowed values are listed (case-sensitive):
  * all
  * App Engine
  * BigQuery
  * Cloud Bigtable
  * Cloud Key Management Service
  * Compute Engine
  * Cloud Dataflow
  * Cloud Identity and Access Management
  * Cloud Pub/Sub
  * Cloud Storage
  * Persistent Disk

Note: These values are supported as input, but considered a legacy format:
  * all
  * appengine.googleapis.com
  * bigquery.googleapis.com
  * bigtable.googleapis.com
  * cloudkms.googleapis.com
  * compute.googleapis.com
  * dataflow.googleapis.com
  * iam.googleapis.com
  * pubsub.googleapis.com
  * storage.googleapis.com */
  readonly cloudProduct: string;
  /** The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"] */
  readonly enrollmentLevel?: string;
}

function folderAccessApprovalSettingsEnrolledServicesToTerraform(struct?: FolderAccessApprovalSettingsEnrolledServices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloud_product: cdktf.stringToTerraform(struct!.cloudProduct),
    enrollment_level: cdktf.stringToTerraform(struct!.enrollmentLevel),
  }
}

export interface FolderAccessApprovalSettingsTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function folderAccessApprovalSettingsTimeoutsToTerraform(struct?: FolderAccessApprovalSettingsTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class FolderAccessApprovalSettings extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: FolderAccessApprovalSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'google_folder_access_approval_settings',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._folderId = config.folderId;
    this._notificationEmails = config.notificationEmails;
    this._enrolledServices = config.enrolledServices;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enrolled_ancestor - computed: true, optional: false, required: false
  public get enrolledAncestor() {
    return this.getBooleanAttribute('enrolled_ancestor');
  }

  // folder_id - computed: false, optional: false, required: true
  private _folderId: string;
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notification_emails - computed: true, optional: true, required: false
  private _notificationEmails?: string[];
  public get notificationEmails() {
    return this.getListAttribute('notification_emails');
  }
  public set notificationEmails(value: string[]) {
    this._notificationEmails = value;
  }
  public resetNotificationEmails() {
    this._notificationEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEmailsInput() {
    return this._notificationEmails
  }

  // enrolled_services - computed: false, optional: false, required: true
  private _enrolledServices: FolderAccessApprovalSettingsEnrolledServices[];
  public get enrolledServices() {
    return this.interpolationForAttribute('enrolled_services') as any;
  }
  public set enrolledServices(value: FolderAccessApprovalSettingsEnrolledServices[]) {
    this._enrolledServices = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enrolledServicesInput() {
    return this._enrolledServices
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FolderAccessApprovalSettingsTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: FolderAccessApprovalSettingsTimeouts ) {
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
      folder_id: cdktf.stringToTerraform(this._folderId),
      notification_emails: cdktf.listMapper(cdktf.stringToTerraform)(this._notificationEmails),
      enrolled_services: cdktf.listMapper(folderAccessApprovalSettingsEnrolledServicesToTerraform)(this._enrolledServices),
      timeouts: folderAccessApprovalSettingsTimeoutsToTerraform(this._timeouts),
    };
  }
}
