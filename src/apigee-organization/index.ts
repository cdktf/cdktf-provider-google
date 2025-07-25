/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigeeOrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Primary GCP region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_organization#analytics_region ApigeeOrganization#analytics_region}
  */
  readonly analyticsRegion?: string;
  /**
  * Cloud KMS key name used for encrypting API consumer data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_organization#api_consumer_data_encryption_key_name ApigeeOrganization#api_consumer_data_encryption_key_name}
  */
  readonly apiConsumerDataEncryptionKeyName?: string;
  /**
  * This field is needed only for customers using non-default data residency regions.
  * Apigee stores some control plane data only in single region.
  * This field determines which single region Apigee should use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_organization#api_consumer_data_location ApigeeOrganization#api_consumer_data_location}
  */
  readonly apiConsumerDataLocation?: string;
  /**
  * Compute Engine network used for Service Networking to be peered with Apigee runtime instances.
  * See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started).
  * Valid only when 'RuntimeType' is set to CLOUD. The value can be updated only when there are no runtime instances. For example: "default".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_organization#authorized_network ApigeeOrganization#authorized_network}
  */
  readonly authorizedNetwork?: string;
  /**
  * Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_organization#billing_type ApigeeOrganization#billing_type}
  */
  readonly billingType?: string;
  /**
  * Cloud KMS key name used for encrypting control plane data that is stored in a multi region.
  * Only used for the data residency region "US" or "EU".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_organization#control_plane_encryption_key_name ApigeeOrganization#control_plane_encryption_key_name}
  */
  readonly controlPlaneEncryptionKeyName?: string;
  /**
  * Description of the Apigee organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_organization#description ApigeeOrganization#description}
  */
  readonly description?: string;
  /**
  * Flag that specifies whether the VPC Peering through Private Google Access should be
  * disabled between the consumer network and Apigee. Required if an 'authorizedNetwork'
  * on the consumer project is not provided, in which case the flag should be set to 'true'.
  * Valid only when 'RuntimeType' is set to CLOUD. The value must be set before the creation
  * of any Apigee runtime instance and can be updated only when there are no runtime instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_organization#disable_vpc_peering ApigeeOrganization#disable_vpc_peering}
  */
  readonly disableVpcPeering?: boolean | cdktf.IResolvable;
  /**
  * The display name of the Apigee organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_organization#display_name ApigeeOrganization#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_organization#id ApigeeOrganization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The project ID associated with the Apigee organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_organization#project_id ApigeeOrganization#project_id}
  */
  readonly projectId: string;
  /**
  * Optional. This setting is applicable only for organizations that are soft-deleted (i.e., BillingType
  * is not EVALUATION). It controls how long Organization data will be retained after the initial delete
  * operation completes. During this period, the Organization may be restored to its last known state.
  * After this period, the Organization will no longer be able to be restored. Default value: "DELETION_RETENTION_UNSPECIFIED" Possible values: ["DELETION_RETENTION_UNSPECIFIED", "MINIMUM"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_organization#retention ApigeeOrganization#retention}
  */
  readonly retention?: string;
  /**
  * Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances.
  * Update is not allowed after the organization is created.
  * If not specified, a Google-Managed encryption key will be used.
  * Valid only when 'RuntimeType' is CLOUD. For example: 'projects/foo/locations/us/keyRings/bar/cryptoKeys/baz'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_organization#runtime_database_encryption_key_name ApigeeOrganization#runtime_database_encryption_key_name}
  */
  readonly runtimeDatabaseEncryptionKeyName?: string;
  /**
  * Runtime type of the Apigee organization based on the Apigee subscription purchased. Default value: "CLOUD" Possible values: ["CLOUD", "HYBRID"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_organization#runtime_type ApigeeOrganization#runtime_type}
  */
  readonly runtimeType?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_organization#properties ApigeeOrganization#properties}
  */
  readonly properties?: ApigeeOrganizationProperties;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_organization#timeouts ApigeeOrganization#timeouts}
  */
  readonly timeouts?: ApigeeOrganizationTimeouts;
}
export interface ApigeeOrganizationPropertiesProperty {
  /**
  * Name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_organization#name ApigeeOrganization#name}
  */
  readonly name?: string;
  /**
  * Value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_organization#value ApigeeOrganization#value}
  */
  readonly value?: string;
}

export function apigeeOrganizationPropertiesPropertyToTerraform(struct?: ApigeeOrganizationPropertiesProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apigeeOrganizationPropertiesPropertyToHclTerraform(struct?: ApigeeOrganizationPropertiesProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigeeOrganizationPropertiesPropertyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApigeeOrganizationPropertiesProperty | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeOrganizationPropertiesProperty | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApigeeOrganizationPropertiesPropertyList extends cdktf.ComplexList {
  public internalValue? : ApigeeOrganizationPropertiesProperty[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApigeeOrganizationPropertiesPropertyOutputReference {
    return new ApigeeOrganizationPropertiesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigeeOrganizationProperties {
  /**
  * property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_organization#property ApigeeOrganization#property}
  */
  readonly property?: ApigeeOrganizationPropertiesProperty[] | cdktf.IResolvable;
}

export function apigeeOrganizationPropertiesToTerraform(struct?: ApigeeOrganizationPropertiesOutputReference | ApigeeOrganizationProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    property: cdktf.listMapper(apigeeOrganizationPropertiesPropertyToTerraform, true)(struct!.property),
  }
}


export function apigeeOrganizationPropertiesToHclTerraform(struct?: ApigeeOrganizationPropertiesOutputReference | ApigeeOrganizationProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    property: {
      value: cdktf.listMapperHcl(apigeeOrganizationPropertiesPropertyToHclTerraform, true)(struct!.property),
      isBlock: true,
      type: "list",
      storageClassType: "ApigeeOrganizationPropertiesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigeeOrganizationPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigeeOrganizationProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._property?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeOrganizationProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._property.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._property.internalValue = value.property;
    }
  }

  // property - computed: false, optional: true, required: false
  private _property = new ApigeeOrganizationPropertiesPropertyList(this, "property", false);
  public get property() {
    return this._property;
  }
  public putProperty(value: ApigeeOrganizationPropertiesProperty[] | cdktf.IResolvable) {
    this._property.internalValue = value;
  }
  public resetProperty() {
    this._property.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property.internalValue;
  }
}
export interface ApigeeOrganizationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_organization#create ApigeeOrganization#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_organization#delete ApigeeOrganization#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_organization#update ApigeeOrganization#update}
  */
  readonly update?: string;
}

export function apigeeOrganizationTimeoutsToTerraform(struct?: ApigeeOrganizationTimeouts | cdktf.IResolvable): any {
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


export function apigeeOrganizationTimeoutsToHclTerraform(struct?: ApigeeOrganizationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigeeOrganizationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApigeeOrganizationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ApigeeOrganizationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_organization google_apigee_organization}
*/
export class ApigeeOrganization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_apigee_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApigeeOrganization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApigeeOrganization to import
  * @param importFromId The id of the existing ApigeeOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApigeeOrganization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_apigee_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_organization google_apigee_organization} Resource
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
        providerVersion: '6.45.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._analyticsRegion = config.analyticsRegion;
    this._apiConsumerDataEncryptionKeyName = config.apiConsumerDataEncryptionKeyName;
    this._apiConsumerDataLocation = config.apiConsumerDataLocation;
    this._authorizedNetwork = config.authorizedNetwork;
    this._billingType = config.billingType;
    this._controlPlaneEncryptionKeyName = config.controlPlaneEncryptionKeyName;
    this._description = config.description;
    this._disableVpcPeering = config.disableVpcPeering;
    this._displayName = config.displayName;
    this._id = config.id;
    this._projectId = config.projectId;
    this._retention = config.retention;
    this._runtimeDatabaseEncryptionKeyName = config.runtimeDatabaseEncryptionKeyName;
    this._runtimeType = config.runtimeType;
    this._properties.internalValue = config.properties;
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

  // api_consumer_data_encryption_key_name - computed: false, optional: true, required: false
  private _apiConsumerDataEncryptionKeyName?: string; 
  public get apiConsumerDataEncryptionKeyName() {
    return this.getStringAttribute('api_consumer_data_encryption_key_name');
  }
  public set apiConsumerDataEncryptionKeyName(value: string) {
    this._apiConsumerDataEncryptionKeyName = value;
  }
  public resetApiConsumerDataEncryptionKeyName() {
    this._apiConsumerDataEncryptionKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiConsumerDataEncryptionKeyNameInput() {
    return this._apiConsumerDataEncryptionKeyName;
  }

  // api_consumer_data_location - computed: false, optional: true, required: false
  private _apiConsumerDataLocation?: string; 
  public get apiConsumerDataLocation() {
    return this.getStringAttribute('api_consumer_data_location');
  }
  public set apiConsumerDataLocation(value: string) {
    this._apiConsumerDataLocation = value;
  }
  public resetApiConsumerDataLocation() {
    this._apiConsumerDataLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiConsumerDataLocationInput() {
    return this._apiConsumerDataLocation;
  }

  // apigee_project_id - computed: true, optional: false, required: false
  public get apigeeProjectId() {
    return this.getStringAttribute('apigee_project_id');
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

  // control_plane_encryption_key_name - computed: false, optional: true, required: false
  private _controlPlaneEncryptionKeyName?: string; 
  public get controlPlaneEncryptionKeyName() {
    return this.getStringAttribute('control_plane_encryption_key_name');
  }
  public set controlPlaneEncryptionKeyName(value: string) {
    this._controlPlaneEncryptionKeyName = value;
  }
  public resetControlPlaneEncryptionKeyName() {
    this._controlPlaneEncryptionKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneEncryptionKeyNameInput() {
    return this._controlPlaneEncryptionKeyName;
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

  // disable_vpc_peering - computed: false, optional: true, required: false
  private _disableVpcPeering?: boolean | cdktf.IResolvable; 
  public get disableVpcPeering() {
    return this.getBooleanAttribute('disable_vpc_peering');
  }
  public set disableVpcPeering(value: boolean | cdktf.IResolvable) {
    this._disableVpcPeering = value;
  }
  public resetDisableVpcPeering() {
    this._disableVpcPeering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVpcPeeringInput() {
    return this._disableVpcPeering;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // retention - computed: false, optional: true, required: false
  private _retention?: string; 
  public get retention() {
    return this.getStringAttribute('retention');
  }
  public set retention(value: string) {
    this._retention = value;
  }
  public resetRetention() {
    this._retention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
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

  // properties - computed: false, optional: true, required: false
  private _properties = new ApigeeOrganizationPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: ApigeeOrganizationProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
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
      api_consumer_data_encryption_key_name: cdktf.stringToTerraform(this._apiConsumerDataEncryptionKeyName),
      api_consumer_data_location: cdktf.stringToTerraform(this._apiConsumerDataLocation),
      authorized_network: cdktf.stringToTerraform(this._authorizedNetwork),
      billing_type: cdktf.stringToTerraform(this._billingType),
      control_plane_encryption_key_name: cdktf.stringToTerraform(this._controlPlaneEncryptionKeyName),
      description: cdktf.stringToTerraform(this._description),
      disable_vpc_peering: cdktf.booleanToTerraform(this._disableVpcPeering),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      retention: cdktf.stringToTerraform(this._retention),
      runtime_database_encryption_key_name: cdktf.stringToTerraform(this._runtimeDatabaseEncryptionKeyName),
      runtime_type: cdktf.stringToTerraform(this._runtimeType),
      properties: apigeeOrganizationPropertiesToTerraform(this._properties.internalValue),
      timeouts: apigeeOrganizationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      analytics_region: {
        value: cdktf.stringToHclTerraform(this._analyticsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_consumer_data_encryption_key_name: {
        value: cdktf.stringToHclTerraform(this._apiConsumerDataEncryptionKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_consumer_data_location: {
        value: cdktf.stringToHclTerraform(this._apiConsumerDataLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorized_network: {
        value: cdktf.stringToHclTerraform(this._authorizedNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      billing_type: {
        value: cdktf.stringToHclTerraform(this._billingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control_plane_encryption_key_name: {
        value: cdktf.stringToHclTerraform(this._controlPlaneEncryptionKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_vpc_peering: {
        value: cdktf.booleanToHclTerraform(this._disableVpcPeering),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention: {
        value: cdktf.stringToHclTerraform(this._retention),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime_database_encryption_key_name: {
        value: cdktf.stringToHclTerraform(this._runtimeDatabaseEncryptionKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime_type: {
        value: cdktf.stringToHclTerraform(this._runtimeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      properties: {
        value: apigeeOrganizationPropertiesToHclTerraform(this._properties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApigeeOrganizationPropertiesList",
      },
      timeouts: {
        value: apigeeOrganizationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApigeeOrganizationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
