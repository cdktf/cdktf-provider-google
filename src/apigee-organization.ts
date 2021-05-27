// https://www.terraform.io/docs/providers/google/r/apigee_organization.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigeeOrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Primary GCP region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization.html#analytics_region ApigeeOrganization#analytics_region}
  */
  readonly analyticsRegion?: string;
  /**
  * Compute Engine network used for Service Networking to be peered with Apigee runtime instances.
See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started).
Valid only when 'RuntimeType' is set to CLOUD. The value can be updated only when there are no runtime instances. For example: "default".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization.html#authorized_network ApigeeOrganization#authorized_network}
  */
  readonly authorizedNetwork?: string;
  /**
  * Description of the Apigee organization.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization.html#description ApigeeOrganization#description}
  */
  readonly description?: string;
  /**
  * The display name of the Apigee organization.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization.html#display_name ApigeeOrganization#display_name}
  */
  readonly displayName?: string;
  /**
  * The project ID associated with the Apigee organization.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization.html#project_id ApigeeOrganization#project_id}
  */
  readonly projectId: string;
  /**
  * Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances.
Update is not allowed after the organization is created.
If not specified, a Google-Managed encryption key will be used.
Valid only when 'RuntimeType' is CLOUD. For example: 'projects/foo/locations/us/keyRings/bar/cryptoKeys/baz'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization.html#runtime_database_encryption_key_name ApigeeOrganization#runtime_database_encryption_key_name}
  */
  readonly runtimeDatabaseEncryptionKeyName?: string;
  /**
  * Runtime type of the Apigee organization based on the Apigee subscription purchased. Default value: "CLOUD" Possible values: ["CLOUD", "HYBRID"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization.html#runtime_type ApigeeOrganization#runtime_type}
  */
  readonly runtimeType?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization.html#timeouts ApigeeOrganization#timeouts}
  */
  readonly timeouts?: ApigeeOrganizationTimeouts;
}
export interface ApigeeOrganizationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization.html#create ApigeeOrganization#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization.html#delete ApigeeOrganization#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization.html#update ApigeeOrganization#update}
  */
  readonly update?: string;
}

function apigeeOrganizationTimeoutsToTerraform(struct?: ApigeeOrganizationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/apigee_organization.html google_apigee_organization}
*/
export class ApigeeOrganization extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/apigee_organization.html google_apigee_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigeeOrganizationConfig
  */
  public constructor(scope: Construct, id: string, config: ApigeeOrganizationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_apigee_organization',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._analyticsRegion = config.analyticsRegion;
    this._authorizedNetwork = config.authorizedNetwork;
    this._description = config.description;
    this._displayName = config.displayName;
    this._projectId = config.projectId;
    this._runtimeDatabaseEncryptionKeyName = config.runtimeDatabaseEncryptionKeyName;
    this._runtimeType = config.runtimeType;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analytics_region - computed: false, optional: true, required: false
  private _analyticsRegion?: string;
  public get analyticsRegion() {
    return this.getStringAttribute('analytics_region');
  }
  public set analyticsRegion(value: string ) {
    this._analyticsRegion = value;
  }
  public resetAnalyticsRegion() {
    this._analyticsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsRegionInput() {
    return this._analyticsRegion
  }

  // authorized_network - computed: false, optional: true, required: false
  private _authorizedNetwork?: string;
  public get authorizedNetwork() {
    return this.getStringAttribute('authorized_network');
  }
  public set authorizedNetwork(value: string ) {
    this._authorizedNetwork = value;
  }
  public resetAuthorizedNetwork() {
    this._authorizedNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedNetworkInput() {
    return this._authorizedNetwork
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
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string ) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
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
  private _projectId: string;
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId
  }

  // runtime_database_encryption_key_name - computed: false, optional: true, required: false
  private _runtimeDatabaseEncryptionKeyName?: string;
  public get runtimeDatabaseEncryptionKeyName() {
    return this.getStringAttribute('runtime_database_encryption_key_name');
  }
  public set runtimeDatabaseEncryptionKeyName(value: string ) {
    this._runtimeDatabaseEncryptionKeyName = value;
  }
  public resetRuntimeDatabaseEncryptionKeyName() {
    this._runtimeDatabaseEncryptionKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeDatabaseEncryptionKeyNameInput() {
    return this._runtimeDatabaseEncryptionKeyName
  }

  // runtime_type - computed: false, optional: true, required: false
  private _runtimeType?: string;
  public get runtimeType() {
    return this.getStringAttribute('runtime_type');
  }
  public set runtimeType(value: string ) {
    this._runtimeType = value;
  }
  public resetRuntimeType() {
    this._runtimeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeTypeInput() {
    return this._runtimeType
  }

  // subscription_type - computed: true, optional: false, required: false
  public get subscriptionType() {
    return this.getStringAttribute('subscription_type');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApigeeOrganizationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApigeeOrganizationTimeouts ) {
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
      analytics_region: cdktf.stringToTerraform(this._analyticsRegion),
      authorized_network: cdktf.stringToTerraform(this._authorizedNetwork),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      project_id: cdktf.stringToTerraform(this._projectId),
      runtime_database_encryption_key_name: cdktf.stringToTerraform(this._runtimeDatabaseEncryptionKeyName),
      runtime_type: cdktf.stringToTerraform(this._runtimeType),
      timeouts: apigeeOrganizationTimeoutsToTerraform(this._timeouts),
    };
  }
}
