// https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/cloud_quotas_quota_preference
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudQuotasQuotaPreferenceConfig extends cdktf.TerraformMetaArguments {
  /**
  * An email address that can be used for quota related communication between the Google Cloud and the user in case the Google Cloud needs further information to make a decision on whether the user preferred quota can be granted.
  * 
  * The Google account for the email address must have quota update permission for the project, folder or organization this quota preference is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/cloud_quotas_quota_preference#contact_email CloudQuotasQuotaPreference#contact_email}
  */
  readonly contactEmail?: string;
  /**
  * The dimensions that this quota preference applies to. The key of the map entry is the name of a dimension, such as "region", "zone", "network_id", and the value of the map entry is the dimension value. If a dimension is missing from the map of dimensions, the quota preference applies to all the dimension values except for those that have other quota preferences configured for the specific value.
  * 
  * NOTE: QuotaPreferences can only be applied across all values of "user" and "resource" dimension. Do not set values for "user" or "resource" in the dimension map.
  * 
  * Example: '{"provider": "Foo Inc"}' where "provider" is a service specific dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/cloud_quotas_quota_preference#dimensions CloudQuotasQuotaPreference#dimensions}
  */
  readonly dimensions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/cloud_quotas_quota_preference#id CloudQuotasQuotaPreference#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The list of quota safety checks to be ignored. Default value: "QUOTA_SAFETY_CHECK_UNSPECIFIED" Possible values: ["QUOTA_SAFETY_CHECK_UNSPECIFIED", "QUOTA_DECREASE_BELOW_USAGE", "QUOTA_DECREASE_PERCENTAGE_TOO_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/cloud_quotas_quota_preference#ignore_safety_checks CloudQuotasQuotaPreference#ignore_safety_checks}
  */
  readonly ignoreSafetyChecks?: string;
  /**
  * The reason / justification for this quota preference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/cloud_quotas_quota_preference#justification CloudQuotasQuotaPreference#justification}
  */
  readonly justification?: string;
  /**
  * The resource name of the quota preference. Required except in the CREATE requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/cloud_quotas_quota_preference#name CloudQuotasQuotaPreference#name}
  */
  readonly name?: string;
  /**
  * The parent of the quota preference. Allowed parents are "projects/[project-id / number]" or "folders/[folder-id / number]" or "organizations/[org-id / number]".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/cloud_quotas_quota_preference#parent CloudQuotasQuotaPreference#parent}
  */
  readonly parent?: string;
  /**
  * The id of the quota to which the quota preference is applied. A quota id is unique in the service.
  * Example: 'CPUS-per-project-region'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/cloud_quotas_quota_preference#quota_id CloudQuotasQuotaPreference#quota_id}
  */
  readonly quotaId?: string;
  /**
  * The name of the service to which the quota preference is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/cloud_quotas_quota_preference#service CloudQuotasQuotaPreference#service}
  */
  readonly service?: string;
  /**
  * quota_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/cloud_quotas_quota_preference#quota_config CloudQuotasQuotaPreference#quota_config}
  */
  readonly quotaConfig: CloudQuotasQuotaPreferenceQuotaConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/cloud_quotas_quota_preference#timeouts CloudQuotasQuotaPreference#timeouts}
  */
  readonly timeouts?: CloudQuotasQuotaPreferenceTimeouts;
}
export interface CloudQuotasQuotaPreferenceQuotaConfig {
  /**
  * The annotations map for clients to store small amounts of arbitrary data. Do not put PII or other sensitive information here. See https://google.aip.dev/128#annotations.
  * 
  * An object containing a list of "key: value" pairs. Example: '{ "name": "wrench", "mass": "1.3kg", "count": "3" }'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/cloud_quotas_quota_preference#annotations CloudQuotasQuotaPreference#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The preferred value. Must be greater than or equal to -1. If set to -1, it means the value is "unlimited".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/cloud_quotas_quota_preference#preferred_value CloudQuotasQuotaPreference#preferred_value}
  */
  readonly preferredValue: string;
}

export function cloudQuotasQuotaPreferenceQuotaConfigToTerraform(struct?: CloudQuotasQuotaPreferenceQuotaConfigOutputReference | CloudQuotasQuotaPreferenceQuotaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    preferred_value: cdktf.stringToTerraform(struct!.preferredValue),
  }
}


export function cloudQuotasQuotaPreferenceQuotaConfigToHclTerraform(struct?: CloudQuotasQuotaPreferenceQuotaConfigOutputReference | CloudQuotasQuotaPreferenceQuotaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    preferred_value: {
      value: cdktf.stringToHclTerraform(struct!.preferredValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudQuotasQuotaPreferenceQuotaConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudQuotasQuotaPreferenceQuotaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._preferredValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredValue = this._preferredValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudQuotasQuotaPreferenceQuotaConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._preferredValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._preferredValue = value.preferredValue;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // granted_value - computed: true, optional: false, required: false
  public get grantedValue() {
    return this.getStringAttribute('granted_value');
  }

  // preferred_value - computed: false, optional: false, required: true
  private _preferredValue?: string; 
  public get preferredValue() {
    return this.getStringAttribute('preferred_value');
  }
  public set preferredValue(value: string) {
    this._preferredValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredValueInput() {
    return this._preferredValue;
  }

  // request_origin - computed: true, optional: false, required: false
  public get requestOrigin() {
    return this.getStringAttribute('request_origin');
  }

  // state_detail - computed: true, optional: false, required: false
  public get stateDetail() {
    return this.getStringAttribute('state_detail');
  }

  // trace_id - computed: true, optional: false, required: false
  public get traceId() {
    return this.getStringAttribute('trace_id');
  }
}
export interface CloudQuotasQuotaPreferenceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/cloud_quotas_quota_preference#create CloudQuotasQuotaPreference#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/cloud_quotas_quota_preference#delete CloudQuotasQuotaPreference#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/cloud_quotas_quota_preference#update CloudQuotasQuotaPreference#update}
  */
  readonly update?: string;
}

export function cloudQuotasQuotaPreferenceTimeoutsToTerraform(struct?: CloudQuotasQuotaPreferenceTimeouts | cdktf.IResolvable): any {
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


export function cloudQuotasQuotaPreferenceTimeoutsToHclTerraform(struct?: CloudQuotasQuotaPreferenceTimeouts | cdktf.IResolvable): any {
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

export class CloudQuotasQuotaPreferenceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudQuotasQuotaPreferenceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudQuotasQuotaPreferenceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/cloud_quotas_quota_preference google_cloud_quotas_quota_preference}
*/
export class CloudQuotasQuotaPreference extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloud_quotas_quota_preference";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudQuotasQuotaPreference resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudQuotasQuotaPreference to import
  * @param importFromId The id of the existing CloudQuotasQuotaPreference that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/cloud_quotas_quota_preference#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudQuotasQuotaPreference to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_cloud_quotas_quota_preference", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/cloud_quotas_quota_preference google_cloud_quotas_quota_preference} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudQuotasQuotaPreferenceConfig
  */
  public constructor(scope: Construct, id: string, config: CloudQuotasQuotaPreferenceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_quotas_quota_preference',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.4.0',
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
    this._contactEmail = config.contactEmail;
    this._dimensions = config.dimensions;
    this._id = config.id;
    this._ignoreSafetyChecks = config.ignoreSafetyChecks;
    this._justification = config.justification;
    this._name = config.name;
    this._parent = config.parent;
    this._quotaId = config.quotaId;
    this._service = config.service;
    this._quotaConfig.internalValue = config.quotaConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact_email - computed: false, optional: true, required: false
  private _contactEmail?: string; 
  public get contactEmail() {
    return this.getStringAttribute('contact_email');
  }
  public set contactEmail(value: string) {
    this._contactEmail = value;
  }
  public resetContactEmail() {
    this._contactEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactEmailInput() {
    return this._contactEmail;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dimensions - computed: true, optional: true, required: false
  private _dimensions?: { [key: string]: string }; 
  public get dimensions() {
    return this.getStringMapAttribute('dimensions');
  }
  public set dimensions(value: { [key: string]: string }) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // ignore_safety_checks - computed: false, optional: true, required: false
  private _ignoreSafetyChecks?: string; 
  public get ignoreSafetyChecks() {
    return this.getStringAttribute('ignore_safety_checks');
  }
  public set ignoreSafetyChecks(value: string) {
    this._ignoreSafetyChecks = value;
  }
  public resetIgnoreSafetyChecks() {
    this._ignoreSafetyChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSafetyChecksInput() {
    return this._ignoreSafetyChecks;
  }

  // justification - computed: false, optional: true, required: false
  private _justification?: string; 
  public get justification() {
    return this.getStringAttribute('justification');
  }
  public set justification(value: string) {
    this._justification = value;
  }
  public resetJustification() {
    this._justification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get justificationInput() {
    return this._justification;
  }

  // name - computed: true, optional: true, required: false
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

  // parent - computed: true, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // quota_id - computed: true, optional: true, required: false
  private _quotaId?: string; 
  public get quotaId() {
    return this.getStringAttribute('quota_id');
  }
  public set quotaId(value: string) {
    this._quotaId = value;
  }
  public resetQuotaId() {
    this._quotaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaIdInput() {
    return this._quotaId;
  }

  // reconciling - computed: true, optional: false, required: false
  public get reconciling() {
    return this.getBooleanAttribute('reconciling');
  }

  // service - computed: true, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // quota_config - computed: false, optional: false, required: true
  private _quotaConfig = new CloudQuotasQuotaPreferenceQuotaConfigOutputReference(this, "quota_config");
  public get quotaConfig() {
    return this._quotaConfig;
  }
  public putQuotaConfig(value: CloudQuotasQuotaPreferenceQuotaConfig) {
    this._quotaConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaConfigInput() {
    return this._quotaConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudQuotasQuotaPreferenceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudQuotasQuotaPreferenceTimeouts) {
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
      contact_email: cdktf.stringToTerraform(this._contactEmail),
      dimensions: cdktf.hashMapper(cdktf.stringToTerraform)(this._dimensions),
      id: cdktf.stringToTerraform(this._id),
      ignore_safety_checks: cdktf.stringToTerraform(this._ignoreSafetyChecks),
      justification: cdktf.stringToTerraform(this._justification),
      name: cdktf.stringToTerraform(this._name),
      parent: cdktf.stringToTerraform(this._parent),
      quota_id: cdktf.stringToTerraform(this._quotaId),
      service: cdktf.stringToTerraform(this._service),
      quota_config: cloudQuotasQuotaPreferenceQuotaConfigToTerraform(this._quotaConfig.internalValue),
      timeouts: cloudQuotasQuotaPreferenceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_email: {
        value: cdktf.stringToHclTerraform(this._contactEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dimensions: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._dimensions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_safety_checks: {
        value: cdktf.stringToHclTerraform(this._ignoreSafetyChecks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      justification: {
        value: cdktf.stringToHclTerraform(this._justification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quota_id: {
        value: cdktf.stringToHclTerraform(this._quotaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quota_config: {
        value: cloudQuotasQuotaPreferenceQuotaConfigToHclTerraform(this._quotaConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudQuotasQuotaPreferenceQuotaConfigList",
      },
      timeouts: {
        value: cloudQuotasQuotaPreferenceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudQuotasQuotaPreferenceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
