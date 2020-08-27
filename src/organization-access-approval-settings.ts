// https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface OrganizationAccessApprovalSettingsConfig extends TerraformMetaArguments {
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
export interface OrganizationAccessApprovalSettingsTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class OrganizationAccessApprovalSettings extends TerraformResource {

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

  // enrolled_ancestor - computed: true, optional: false, required: true
  public get enrolledAncestor() {
    return this.getBooleanAttribute('enrolled_ancestor');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // notification_emails - computed: true, optional: true, required: false
  private _notificationEmails?: string[];
  public get notificationEmails() {
    return this._notificationEmails ?? this.getListAttribute('notification_emails');
  }
  public set notificationEmails(value: string[] | undefined) {
    this._notificationEmails = value;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId: string;
  public get organizationId() {
    return this._organizationId;
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }

  // enrolled_services - computed: false, optional: false, required: true
  private _enrolledServices: OrganizationAccessApprovalSettingsEnrolledServices[];
  public get enrolledServices() {
    return this._enrolledServices;
  }
  public set enrolledServices(value: OrganizationAccessApprovalSettingsEnrolledServices[]) {
    this._enrolledServices = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: OrganizationAccessApprovalSettingsTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: OrganizationAccessApprovalSettingsTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      notification_emails: this._notificationEmails,
      organization_id: this._organizationId,
      enrolled_services: this._enrolledServices,
      timeouts: this._timeouts,
    };
  }
}
