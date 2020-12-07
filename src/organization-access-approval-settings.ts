// https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationAccessApprovalSettingsConfig extends cdktf.TerraformMetaArguments {
  /** A list of email addresses to which notifications relating to approval requests should be sent.
Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed. */
  readonly notificationEmails?: string[];
  /** ID of the organization of the access approval settings. */
  readonly organizationId: string;
  /** enrolled_services block */
  readonly enrolledServices: OrganizationAccessApprovalSettingsEnrolledServices[];
  /** timeouts block */
  readonly timeouts?: OrganizationAccessApprovalSettingsTimeouts;
}
export interface OrganizationAccessApprovalSettingsEnrolledServices {
  /** The product for which Access Approval will be enrolled. Allowed values are listed (case-sensitive):
  all
  appengine.googleapis.com
  bigquery.googleapis.com
  bigtable.googleapis.com
  cloudkms.googleapis.com
  compute.googleapis.com
  dataflow.googleapis.com
  iam.googleapis.com
  pubsub.googleapis.com
  storage.googleapis.com */
  readonly cloudProduct: string;
  /** The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"] */
  readonly enrollmentLevel?: string;
}

function organizationAccessApprovalSettingsEnrolledServicesToTerraform(struct?: OrganizationAccessApprovalSettingsEnrolledServices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloud_product: cdktf.stringToTerraform(struct!.cloudProduct),
    enrollment_level: cdktf.stringToTerraform(struct!.enrollmentLevel),
  }
}

export interface OrganizationAccessApprovalSettingsTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function organizationAccessApprovalSettingsTimeoutsToTerraform(struct?: OrganizationAccessApprovalSettingsTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class OrganizationAccessApprovalSettings extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: OrganizationAccessApprovalSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'google_organization_access_approval_settings',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._notificationEmails = config.notificationEmails;
    this._organizationId = config.organizationId;
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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId: string;
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId
  }

  // enrolled_services - computed: false, optional: false, required: true
  private _enrolledServices: OrganizationAccessApprovalSettingsEnrolledServices[];
  public get enrolledServices() {
    return this.interpolationForAttribute('enrolled_services') as any;
  }
  public set enrolledServices(value: OrganizationAccessApprovalSettingsEnrolledServices[]) {
    this._enrolledServices = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enrolledServicesInput() {
    return this._enrolledServices
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: OrganizationAccessApprovalSettingsTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: OrganizationAccessApprovalSettingsTimeouts ) {
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
      notification_emails: cdktf.listMapper(cdktf.stringToTerraform)(this._notificationEmails),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      enrolled_services: cdktf.listMapper(organizationAccessApprovalSettingsEnrolledServicesToTerraform)(this._enrolledServices),
      timeouts: organizationAccessApprovalSettingsTimeoutsToTerraform(this._timeouts),
    };
  }
}
