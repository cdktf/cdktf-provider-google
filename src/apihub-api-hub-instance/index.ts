/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apihub_api_hub_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApihubApiHubInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Identifier to assign to the Api Hub instance. Must be unique within
  * scope of the parent resource. If the field is not provided,
  * system generated id will be used.
  * 
  * This value should be 4-40 characters, and valid characters
  * are '/a-z[0-9]-_/'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apihub_api_hub_instance#api_hub_instance_id ApihubApiHubInstance#api_hub_instance_id}
  */
  readonly apiHubInstanceId?: string;
  /**
  * Optional. Description of the ApiHub instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apihub_api_hub_instance#description ApihubApiHubInstance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apihub_api_hub_instance#id ApihubApiHubInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional. Instance labels to represent user-provided metadata.
  * Refer to cloud documentation on labels for more details.
  * https://cloud.google.com/compute/docs/labeling-resources
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apihub_api_hub_instance#labels ApihubApiHubInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apihub_api_hub_instance#location ApihubApiHubInstance#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apihub_api_hub_instance#project ApihubApiHubInstance#project}
  */
  readonly project?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apihub_api_hub_instance#config ApihubApiHubInstance#config}
  */
  readonly config: ApihubApiHubInstanceConfigA;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apihub_api_hub_instance#timeouts ApihubApiHubInstance#timeouts}
  */
  readonly timeouts?: ApihubApiHubInstanceTimeouts;
}
export interface ApihubApiHubInstanceConfigA {
  /**
  * Optional. The Customer Managed Encryption Key (CMEK) used for data encryption.
  * The CMEK name should follow the format of
  * 'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)',
  * where the location must match the instance location.
  * If the CMEK is not provided, a GMEK will be created for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apihub_api_hub_instance#cmek_key_name ApihubApiHubInstance#cmek_key_name}
  */
  readonly cmekKeyName?: string;
  /**
  * Optional. If true, the search will be disabled for the instance. The default value
  * is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apihub_api_hub_instance#disable_search ApihubApiHubInstance#disable_search}
  */
  readonly disableSearch?: boolean | cdktf.IResolvable;
  /**
  * Optional. Encryption type for the region. If the encryption type is CMEK, the
  * cmek_key_name must be provided. If no encryption type is provided,
  * GMEK will be used.
  * Possible values:
  * ENCRYPTION_TYPE_UNSPECIFIED
  * GMEK
  * CMEK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apihub_api_hub_instance#encryption_type ApihubApiHubInstance#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Optional. The name of the Vertex AI location where the data store is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apihub_api_hub_instance#vertex_location ApihubApiHubInstance#vertex_location}
  */
  readonly vertexLocation?: string;
}

export function apihubApiHubInstanceConfigAToTerraform(struct?: ApihubApiHubInstanceConfigAOutputReference | ApihubApiHubInstanceConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmek_key_name: cdktf.stringToTerraform(struct!.cmekKeyName),
    disable_search: cdktf.booleanToTerraform(struct!.disableSearch),
    encryption_type: cdktf.stringToTerraform(struct!.encryptionType),
    vertex_location: cdktf.stringToTerraform(struct!.vertexLocation),
  }
}


export function apihubApiHubInstanceConfigAToHclTerraform(struct?: ApihubApiHubInstanceConfigAOutputReference | ApihubApiHubInstanceConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cmek_key_name: {
      value: cdktf.stringToHclTerraform(struct!.cmekKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_search: {
      value: cdktf.booleanToHclTerraform(struct!.disableSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encryption_type: {
      value: cdktf.stringToHclTerraform(struct!.encryptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vertex_location: {
      value: cdktf.stringToHclTerraform(struct!.vertexLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApihubApiHubInstanceConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApihubApiHubInstanceConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmekKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmekKeyName = this._cmekKeyName;
    }
    if (this._disableSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSearch = this._disableSearch;
    }
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._vertexLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.vertexLocation = this._vertexLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApihubApiHubInstanceConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cmekKeyName = undefined;
      this._disableSearch = undefined;
      this._encryptionType = undefined;
      this._vertexLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cmekKeyName = value.cmekKeyName;
      this._disableSearch = value.disableSearch;
      this._encryptionType = value.encryptionType;
      this._vertexLocation = value.vertexLocation;
    }
  }

  // cmek_key_name - computed: false, optional: true, required: false
  private _cmekKeyName?: string; 
  public get cmekKeyName() {
    return this.getStringAttribute('cmek_key_name');
  }
  public set cmekKeyName(value: string) {
    this._cmekKeyName = value;
  }
  public resetCmekKeyName() {
    this._cmekKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmekKeyNameInput() {
    return this._cmekKeyName;
  }

  // disable_search - computed: false, optional: true, required: false
  private _disableSearch?: boolean | cdktf.IResolvable; 
  public get disableSearch() {
    return this.getBooleanAttribute('disable_search');
  }
  public set disableSearch(value: boolean | cdktf.IResolvable) {
    this._disableSearch = value;
  }
  public resetDisableSearch() {
    this._disableSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSearchInput() {
    return this._disableSearch;
  }

  // encryption_type - computed: true, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // vertex_location - computed: false, optional: true, required: false
  private _vertexLocation?: string; 
  public get vertexLocation() {
    return this.getStringAttribute('vertex_location');
  }
  public set vertexLocation(value: string) {
    this._vertexLocation = value;
  }
  public resetVertexLocation() {
    this._vertexLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vertexLocationInput() {
    return this._vertexLocation;
  }
}
export interface ApihubApiHubInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apihub_api_hub_instance#create ApihubApiHubInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apihub_api_hub_instance#delete ApihubApiHubInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apihub_api_hub_instance#update ApihubApiHubInstance#update}
  */
  readonly update?: string;
}

export function apihubApiHubInstanceTimeoutsToTerraform(struct?: ApihubApiHubInstanceTimeouts | cdktf.IResolvable): any {
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


export function apihubApiHubInstanceTimeoutsToHclTerraform(struct?: ApihubApiHubInstanceTimeouts | cdktf.IResolvable): any {
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

export class ApihubApiHubInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApihubApiHubInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApihubApiHubInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apihub_api_hub_instance google_apihub_api_hub_instance}
*/
export class ApihubApiHubInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_apihub_api_hub_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApihubApiHubInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApihubApiHubInstance to import
  * @param importFromId The id of the existing ApihubApiHubInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apihub_api_hub_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApihubApiHubInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_apihub_api_hub_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/apihub_api_hub_instance google_apihub_api_hub_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApihubApiHubInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ApihubApiHubInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_apihub_api_hub_instance',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.36.0',
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
    this._apiHubInstanceId = config.apiHubInstanceId;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._config.internalValue = config.config;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_hub_instance_id - computed: false, optional: true, required: false
  private _apiHubInstanceId?: string; 
  public get apiHubInstanceId() {
    return this.getStringAttribute('api_hub_instance_id');
  }
  public set apiHubInstanceId(value: string) {
    this._apiHubInstanceId = value;
  }
  public resetApiHubInstanceId() {
    this._apiHubInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiHubInstanceIdInput() {
    return this._apiHubInstanceId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // config - computed: false, optional: false, required: true
  private _config = new ApihubApiHubInstanceConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: ApihubApiHubInstanceConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApihubApiHubInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApihubApiHubInstanceTimeouts) {
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
      api_hub_instance_id: cdktf.stringToTerraform(this._apiHubInstanceId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      config: apihubApiHubInstanceConfigAToTerraform(this._config.internalValue),
      timeouts: apihubApiHubInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_hub_instance_id: {
        value: cdktf.stringToHclTerraform(this._apiHubInstanceId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: apihubApiHubInstanceConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApihubApiHubInstanceConfigAList",
      },
      timeouts: {
        value: apihubApiHubInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApihubApiHubInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
