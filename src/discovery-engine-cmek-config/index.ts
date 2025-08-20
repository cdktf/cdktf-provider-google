/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/discovery_engine_cmek_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiscoveryEngineCmekConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique id of the cmek config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/discovery_engine_cmek_config#cmek_config_id DiscoveryEngineCmekConfig#cmek_config_id}
  */
  readonly cmekConfigId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/discovery_engine_cmek_config#id DiscoveryEngineCmekConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * KMS key resource name which will be used to encrypt resources
  * 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{keyId}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/discovery_engine_cmek_config#kms_key DiscoveryEngineCmekConfig#kms_key}
  */
  readonly kmsKey: string;
  /**
  * The geographic location where the CMEK config should reside. The value can
  * only be one of "us" and "eu".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/discovery_engine_cmek_config#location DiscoveryEngineCmekConfig#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/discovery_engine_cmek_config#project DiscoveryEngineCmekConfig#project}
  */
  readonly project?: string;
  /**
  * Set the following CmekConfig as the default to be used for child resources
  * if one is not specified. The default value is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/discovery_engine_cmek_config#set_default DiscoveryEngineCmekConfig#set_default}
  */
  readonly setDefault?: boolean | cdktf.IResolvable;
  /**
  * single_region_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/discovery_engine_cmek_config#single_region_keys DiscoveryEngineCmekConfig#single_region_keys}
  */
  readonly singleRegionKeys?: DiscoveryEngineCmekConfigSingleRegionKeys[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/discovery_engine_cmek_config#timeouts DiscoveryEngineCmekConfig#timeouts}
  */
  readonly timeouts?: DiscoveryEngineCmekConfigTimeouts;
}
export interface DiscoveryEngineCmekConfigSingleRegionKeys {
  /**
  * Single-regional kms key resource name which will be used to encrypt
  * resources
  * 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{keyId}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/discovery_engine_cmek_config#kms_key DiscoveryEngineCmekConfig#kms_key}
  */
  readonly kmsKey: string;
}

export function discoveryEngineCmekConfigSingleRegionKeysToTerraform(struct?: DiscoveryEngineCmekConfigSingleRegionKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
  }
}


export function discoveryEngineCmekConfigSingleRegionKeysToHclTerraform(struct?: DiscoveryEngineCmekConfigSingleRegionKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key: {
      value: cdktf.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineCmekConfigSingleRegionKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiscoveryEngineCmekConfigSingleRegionKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineCmekConfigSingleRegionKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKey = value.kmsKey;
    }
  }

  // kms_key - computed: false, optional: false, required: true
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }
}

export class DiscoveryEngineCmekConfigSingleRegionKeysList extends cdktf.ComplexList {
  public internalValue? : DiscoveryEngineCmekConfigSingleRegionKeys[] | cdktf.IResolvable

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
  public get(index: number): DiscoveryEngineCmekConfigSingleRegionKeysOutputReference {
    return new DiscoveryEngineCmekConfigSingleRegionKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryEngineCmekConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/discovery_engine_cmek_config#create DiscoveryEngineCmekConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/discovery_engine_cmek_config#delete DiscoveryEngineCmekConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/discovery_engine_cmek_config#update DiscoveryEngineCmekConfig#update}
  */
  readonly update?: string;
}

export function discoveryEngineCmekConfigTimeoutsToTerraform(struct?: DiscoveryEngineCmekConfigTimeouts | cdktf.IResolvable): any {
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


export function discoveryEngineCmekConfigTimeoutsToHclTerraform(struct?: DiscoveryEngineCmekConfigTimeouts | cdktf.IResolvable): any {
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

export class DiscoveryEngineCmekConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DiscoveryEngineCmekConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DiscoveryEngineCmekConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/discovery_engine_cmek_config google_discovery_engine_cmek_config}
*/
export class DiscoveryEngineCmekConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_discovery_engine_cmek_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DiscoveryEngineCmekConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiscoveryEngineCmekConfig to import
  * @param importFromId The id of the existing DiscoveryEngineCmekConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/discovery_engine_cmek_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiscoveryEngineCmekConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_discovery_engine_cmek_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/discovery_engine_cmek_config google_discovery_engine_cmek_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiscoveryEngineCmekConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DiscoveryEngineCmekConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_discovery_engine_cmek_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.49.0',
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
    this._cmekConfigId = config.cmekConfigId;
    this._id = config.id;
    this._kmsKey = config.kmsKey;
    this._location = config.location;
    this._project = config.project;
    this._setDefault = config.setDefault;
    this._singleRegionKeys.internalValue = config.singleRegionKeys;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cmek_config_id - computed: false, optional: true, required: false
  private _cmekConfigId?: string; 
  public get cmekConfigId() {
    return this.getStringAttribute('cmek_config_id');
  }
  public set cmekConfigId(value: string) {
    this._cmekConfigId = value;
  }
  public resetCmekConfigId() {
    this._cmekConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmekConfigIdInput() {
    return this._cmekConfigId;
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

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // kms_key - computed: false, optional: false, required: true
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // kms_key_version - computed: true, optional: false, required: false
  public get kmsKeyVersion() {
    return this.getStringAttribute('kms_key_version');
  }

  // last_rotation_timestamp_micros - computed: true, optional: false, required: false
  public get lastRotationTimestampMicros() {
    return this.getNumberAttribute('last_rotation_timestamp_micros');
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

  // notebooklm_state - computed: true, optional: false, required: false
  public get notebooklmState() {
    return this.getStringAttribute('notebooklm_state');
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

  // set_default - computed: false, optional: true, required: false
  private _setDefault?: boolean | cdktf.IResolvable; 
  public get setDefault() {
    return this.getBooleanAttribute('set_default');
  }
  public set setDefault(value: boolean | cdktf.IResolvable) {
    this._setDefault = value;
  }
  public resetSetDefault() {
    this._setDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDefaultInput() {
    return this._setDefault;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // single_region_keys - computed: false, optional: true, required: false
  private _singleRegionKeys = new DiscoveryEngineCmekConfigSingleRegionKeysList(this, "single_region_keys", false);
  public get singleRegionKeys() {
    return this._singleRegionKeys;
  }
  public putSingleRegionKeys(value: DiscoveryEngineCmekConfigSingleRegionKeys[] | cdktf.IResolvable) {
    this._singleRegionKeys.internalValue = value;
  }
  public resetSingleRegionKeys() {
    this._singleRegionKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleRegionKeysInput() {
    return this._singleRegionKeys.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DiscoveryEngineCmekConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DiscoveryEngineCmekConfigTimeouts) {
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
      cmek_config_id: cdktf.stringToTerraform(this._cmekConfigId),
      id: cdktf.stringToTerraform(this._id),
      kms_key: cdktf.stringToTerraform(this._kmsKey),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      set_default: cdktf.booleanToTerraform(this._setDefault),
      single_region_keys: cdktf.listMapper(discoveryEngineCmekConfigSingleRegionKeysToTerraform, true)(this._singleRegionKeys.internalValue),
      timeouts: discoveryEngineCmekConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cmek_config_id: {
        value: cdktf.stringToHclTerraform(this._cmekConfigId),
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
      kms_key: {
        value: cdktf.stringToHclTerraform(this._kmsKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      set_default: {
        value: cdktf.booleanToHclTerraform(this._setDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      single_region_keys: {
        value: cdktf.listMapperHcl(discoveryEngineCmekConfigSingleRegionKeysToHclTerraform, true)(this._singleRegionKeys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryEngineCmekConfigSingleRegionKeysList",
      },
      timeouts: {
        value: discoveryEngineCmekConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DiscoveryEngineCmekConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
