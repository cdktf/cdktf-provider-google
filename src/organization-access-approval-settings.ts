// https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationAccessApprovalSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The asymmetric crypto key version to use for signing approval requests.
Empty active_key_version indicates that a Google-managed key should be used for signing.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings#active_key_version OrganizationAccessApprovalSettings#active_key_version}
  */
  readonly activeKeyVersion?: string;
  /**
  * A list of email addresses to which notifications relating to approval requests should be sent.
Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings#notification_emails OrganizationAccessApprovalSettings#notification_emails}
  */
  readonly notificationEmails?: string[];
  /**
  * ID of the organization of the access approval settings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings#organization_id OrganizationAccessApprovalSettings#organization_id}
  */
  readonly organizationId: string;
  /**
  * enrolled_services block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings#enrolled_services OrganizationAccessApprovalSettings#enrolled_services}
  */
  readonly enrolledServices: OrganizationAccessApprovalSettingsEnrolledServices[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings#timeouts OrganizationAccessApprovalSettings#timeouts}
  */
  readonly timeouts?: OrganizationAccessApprovalSettingsTimeouts;
}
export interface OrganizationAccessApprovalSettingsEnrolledServices {
  /**
  * The product for which Access Approval will be enrolled. Allowed values are listed (case-sensitive):
  all
  appengine.googleapis.com
  bigquery.googleapis.com
  bigtable.googleapis.com
  cloudkms.googleapis.com
  compute.googleapis.com
  dataflow.googleapis.com
  iam.googleapis.com
  pubsub.googleapis.com
  storage.googleapis.com
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings#cloud_product OrganizationAccessApprovalSettings#cloud_product}
  */
  readonly cloudProduct: string;
  /**
  * The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings#enrollment_level OrganizationAccessApprovalSettings#enrollment_level}
  */
  readonly enrollmentLevel?: string;
}

export function organizationAccessApprovalSettingsEnrolledServicesToTerraform(struct?: OrganizationAccessApprovalSettingsEnrolledServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_product: cdktf.stringToTerraform(struct!.cloudProduct),
    enrollment_level: cdktf.stringToTerraform(struct!.enrollmentLevel),
  }
}

export interface OrganizationAccessApprovalSettingsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings#create OrganizationAccessApprovalSettings#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings#delete OrganizationAccessApprovalSettings#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings#update OrganizationAccessApprovalSettings#update}
  */
  readonly update?: string;
}

export function organizationAccessApprovalSettingsTimeoutsToTerraform(struct?: OrganizationAccessApprovalSettingsTimeoutsOutputReference | OrganizationAccessApprovalSettingsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class OrganizationAccessApprovalSettingsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationAccessApprovalSettingsTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationAccessApprovalSettingsTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings google_organization_access_approval_settings}
*/
export class OrganizationAccessApprovalSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_organization_access_approval_settings";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings google_organization_access_approval_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationAccessApprovalSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationAccessApprovalSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'google_organization_access_approval_settings',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.18.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._activeKeyVersion = config.activeKeyVersion;
    this._notificationEmails = config.notificationEmails;
    this._organizationId = config.organizationId;
    this._enrolledServices = config.enrolledServices;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_key_version - computed: false, optional: true, required: false
  private _activeKeyVersion?: string; 
  public get activeKeyVersion() {
    return this.getStringAttribute('active_key_version');
  }
  public set activeKeyVersion(value: string) {
    this._activeKeyVersion = value;
  }
  public resetActiveKeyVersion() {
    this._activeKeyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeKeyVersionInput() {
    return this._activeKeyVersion;
  }

  // ancestor_has_active_key_version - computed: true, optional: false, required: false
  public get ancestorHasActiveKeyVersion() {
    return this.getBooleanAttribute('ancestor_has_active_key_version');
  }

  // enrolled_ancestor - computed: true, optional: false, required: false
  public get enrolledAncestor() {
    return this.getBooleanAttribute('enrolled_ancestor');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // invalid_key_version - computed: true, optional: false, required: false
  public get invalidKeyVersion() {
    return this.getBooleanAttribute('invalid_key_version');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notification_emails - computed: true, optional: true, required: false
  private _notificationEmails?: string[]; 
  public get notificationEmails() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_emails'));
  }
  public set notificationEmails(value: string[]) {
    this._notificationEmails = value;
  }
  public resetNotificationEmails() {
    this._notificationEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEmailsInput() {
    return this._notificationEmails;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // enrolled_services - computed: false, optional: false, required: true
  private _enrolledServices?: OrganizationAccessApprovalSettingsEnrolledServices[] | cdktf.IResolvable; 
  public get enrolledServices() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('enrolled_services')));
  }
  public set enrolledServices(value: OrganizationAccessApprovalSettingsEnrolledServices[] | cdktf.IResolvable) {
    this._enrolledServices = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enrolledServicesInput() {
    return this._enrolledServices;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OrganizationAccessApprovalSettingsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OrganizationAccessApprovalSettingsTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_key_version: cdktf.stringToTerraform(this._activeKeyVersion),
      notification_emails: cdktf.listMapper(cdktf.stringToTerraform)(this._notificationEmails),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      enrolled_services: cdktf.listMapper(organizationAccessApprovalSettingsEnrolledServicesToTerraform)(this._enrolledServices),
      timeouts: organizationAccessApprovalSettingsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
