// https://www.terraform.io/docs/providers/google/r/apigee_organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigeeOrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Primary GCP region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#analytics_region ApigeeOrganization#analytics_region}
  */
  readonly analyticsRegion?: string;
  /**
  * Compute Engine network used for Service Networking to be peered with Apigee runtime instances.
See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started).
Valid only when 'RuntimeType' is set to CLOUD. The value can be updated only when there are no runtime instances. For example: "default".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#authorized_network ApigeeOrganization#authorized_network}
  */
  readonly authorizedNetwork?: string;
  /**
  * Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#billing_type ApigeeOrganization#billing_type}
  */
  readonly billingType?: string;
  /**
  * Description of the Apigee organization.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#description ApigeeOrganization#description}
  */
  readonly description?: string;
  /**
  * The display name of the Apigee organization.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#display_name ApigeeOrganization#display_name}
  */
  readonly displayName?: string;
  /**
  * The project ID associated with the Apigee organization.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#project_id ApigeeOrganization#project_id}
  */
  readonly projectId: string;
  /**
  * Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances.
Update is not allowed after the organization is created.
If not specified, a Google-Managed encryption key will be used.
Valid only when 'RuntimeType' is CLOUD. For example: 'projects/foo/locations/us/keyRings/bar/cryptoKeys/baz'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#runtime_database_encryption_key_name ApigeeOrganization#runtime_database_encryption_key_name}
  */
  readonly runtimeDatabaseEncryptionKeyName?: string;
  /**
  * Runtime type of the Apigee organization based on the Apigee subscription purchased. Default value: "CLOUD" Possible values: ["CLOUD", "HYBRID"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#runtime_type ApigeeOrganization#runtime_type}
  */
  readonly runtimeType?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#timeouts ApigeeOrganization#timeouts}
  */
  readonly timeouts?: ApigeeOrganizationTimeouts;
}
export interface ApigeeOrganizationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#create ApigeeOrganization#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#delete ApigeeOrganization#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#update ApigeeOrganization#update}
  */
  readonly update?: string;
}

export function apigeeOrganizationTimeoutsToTerraform(struct?: ApigeeOrganizationTimeoutsOutputReference | ApigeeOrganizationTimeouts | cdktf.IResolvable): any {
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

export class ApigeeOrganizationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigeeOrganizationTimeouts | undefined {
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

  public set internalValue(value: ApigeeOrganizationTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/apigee_organization google_apigee_organization}
*/
export class ApigeeOrganization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_apigee_organization";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/apigee_organization google_apigee_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigeeOrganizationConfig
  */
  public constructor(scope: Construct, id: string, config: ApigeeOrganizationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_apigee_organization',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.17.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._analyticsRegion = config.analyticsRegion;
    this._authorizedNetwork = config.authorizedNetwork;
    this._billingType = config.billingType;
    this._description = config.description;
    this._displayName = config.displayName;
    this._projectId = config.projectId;
    this._runtimeDatabaseEncryptionKeyName = config.runtimeDatabaseEncryptionKeyName;
    this._runtimeType = config.runtimeType;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analytics_region - computed: false, optional: true, required: false
  private _analyticsRegion?: string; 
  public get analyticsRegion() {
    return this.getStringAttribute('analytics_region');
  }
  public set analyticsRegion(value: string) {
    this._analyticsRegion = value;
  }
  public resetAnalyticsRegion() {
    this._analyticsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsRegionInput() {
    return this._analyticsRegion;
  }

  // authorized_network - computed: false, optional: true, required: false
  private _authorizedNetwork?: string; 
  public get authorizedNetwork() {
    return this.getStringAttribute('authorized_network');
  }
  public set authorizedNetwork(value: string) {
    this._authorizedNetwork = value;
  }
  public resetAuthorizedNetwork() {
    this._authorizedNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedNetworkInput() {
    return this._authorizedNetwork;
  }

  // billing_type - computed: true, optional: true, required: false
  private _billingType?: string; 
  public get billingType() {
    return this.getStringAttribute('billing_type');
  }
  public set billingType(value: string) {
    this._billingType = value;
  }
  public resetBillingType() {
    this._billingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingTypeInput() {
    return this._billingType;
  }

  // ca_certificate - computed: true, optional: false, required: false
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // runtime_database_encryption_key_name - computed: false, optional: true, required: false
  private _runtimeDatabaseEncryptionKeyName?: string; 
  public get runtimeDatabaseEncryptionKeyName() {
    return this.getStringAttribute('runtime_database_encryption_key_name');
  }
  public set runtimeDatabaseEncryptionKeyName(value: string) {
    this._runtimeDatabaseEncryptionKeyName = value;
  }
  public resetRuntimeDatabaseEncryptionKeyName() {
    this._runtimeDatabaseEncryptionKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeDatabaseEncryptionKeyNameInput() {
    return this._runtimeDatabaseEncryptionKeyName;
  }

  // runtime_type - computed: false, optional: true, required: false
  private _runtimeType?: string; 
  public get runtimeType() {
    return this.getStringAttribute('runtime_type');
  }
  public set runtimeType(value: string) {
    this._runtimeType = value;
  }
  public resetRuntimeType() {
    this._runtimeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeTypeInput() {
    return this._runtimeType;
  }

  // subscription_type - computed: true, optional: false, required: false
  public get subscriptionType() {
    return this.getStringAttribute('subscription_type');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApigeeOrganizationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApigeeOrganizationTimeouts) {
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
      analytics_region: cdktf.stringToTerraform(this._analyticsRegion),
      authorized_network: cdktf.stringToTerraform(this._authorizedNetwork),
      billing_type: cdktf.stringToTerraform(this._billingType),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      project_id: cdktf.stringToTerraform(this._projectId),
      runtime_database_encryption_key_name: cdktf.stringToTerraform(this._runtimeDatabaseEncryptionKeyName),
      runtime_type: cdktf.stringToTerraform(this._runtimeType),
      timeouts: apigeeOrganizationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
