/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_workforce_pool_provider_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamWorkforcePoolProviderKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_workforce_pool_provider_key#id IamWorkforcePoolProviderKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID to use for the key, which becomes the final component of the resource name. This value must be 4-32 characters, and may contain the characters [a-z0-9-].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_workforce_pool_provider_key#key_id IamWorkforcePoolProviderKey#key_id}
  */
  readonly keyId: string;
  /**
  * The location for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_workforce_pool_provider_key#location IamWorkforcePoolProviderKey#location}
  */
  readonly location: string;
  /**
  * The ID of the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_workforce_pool_provider_key#provider_id IamWorkforcePoolProviderKey#provider_id}
  */
  readonly providerId: string;
  /**
  * The purpose of the key. Possible values: ["ENCRYPTION"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_workforce_pool_provider_key#use IamWorkforcePoolProviderKey#use}
  */
  readonly use: string;
  /**
  * The ID of the workforce pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_workforce_pool_provider_key#workforce_pool_id IamWorkforcePoolProviderKey#workforce_pool_id}
  */
  readonly workforcePoolId: string;
  /**
  * key_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_workforce_pool_provider_key#key_data IamWorkforcePoolProviderKey#key_data}
  */
  readonly keyData: IamWorkforcePoolProviderKeyKeyData;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_workforce_pool_provider_key#timeouts IamWorkforcePoolProviderKey#timeouts}
  */
  readonly timeouts?: IamWorkforcePoolProviderKeyTimeouts;
}
export interface IamWorkforcePoolProviderKeyKeyData {
  /**
  * The specifications for the key. Possible values: ["RSA_2048", "RSA_3072", "RSA_4096"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_workforce_pool_provider_key#key_spec IamWorkforcePoolProviderKey#key_spec}
  */
  readonly keySpec: string;
}

export function iamWorkforcePoolProviderKeyKeyDataToTerraform(struct?: IamWorkforcePoolProviderKeyKeyDataOutputReference | IamWorkforcePoolProviderKeyKeyData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_spec: cdktf.stringToTerraform(struct!.keySpec),
  }
}


export function iamWorkforcePoolProviderKeyKeyDataToHclTerraform(struct?: IamWorkforcePoolProviderKeyKeyDataOutputReference | IamWorkforcePoolProviderKeyKeyData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_spec: {
      value: cdktf.stringToHclTerraform(struct!.keySpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamWorkforcePoolProviderKeyKeyDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamWorkforcePoolProviderKeyKeyData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keySpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySpec = this._keySpec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkforcePoolProviderKeyKeyData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keySpec = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keySpec = value.keySpec;
    }
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // key_spec - computed: false, optional: false, required: true
  private _keySpec?: string; 
  public get keySpec() {
    return this.getStringAttribute('key_spec');
  }
  public set keySpec(value: string) {
    this._keySpec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keySpecInput() {
    return this._keySpec;
  }

  // not_after_time - computed: true, optional: false, required: false
  public get notAfterTime() {
    return this.getStringAttribute('not_after_time');
  }

  // not_before_time - computed: true, optional: false, required: false
  public get notBeforeTime() {
    return this.getStringAttribute('not_before_time');
  }
}
export interface IamWorkforcePoolProviderKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_workforce_pool_provider_key#create IamWorkforcePoolProviderKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_workforce_pool_provider_key#delete IamWorkforcePoolProviderKey#delete}
  */
  readonly delete?: string;
}

export function iamWorkforcePoolProviderKeyTimeoutsToTerraform(struct?: IamWorkforcePoolProviderKeyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function iamWorkforcePoolProviderKeyTimeoutsToHclTerraform(struct?: IamWorkforcePoolProviderKeyTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamWorkforcePoolProviderKeyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IamWorkforcePoolProviderKeyTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkforcePoolProviderKeyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_workforce_pool_provider_key google_iam_workforce_pool_provider_key}
*/
export class IamWorkforcePoolProviderKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_iam_workforce_pool_provider_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamWorkforcePoolProviderKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamWorkforcePoolProviderKey to import
  * @param importFromId The id of the existing IamWorkforcePoolProviderKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_workforce_pool_provider_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamWorkforcePoolProviderKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_iam_workforce_pool_provider_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_workforce_pool_provider_key google_iam_workforce_pool_provider_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamWorkforcePoolProviderKeyConfig
  */
  public constructor(scope: Construct, id: string, config: IamWorkforcePoolProviderKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iam_workforce_pool_provider_key',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.50.0',
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
    this._id = config.id;
    this._keyId = config.keyId;
    this._location = config.location;
    this._providerId = config.providerId;
    this._use = config.use;
    this._workforcePoolId = config.workforcePoolId;
    this._keyData.internalValue = config.keyData;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
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

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
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

  // provider_id - computed: false, optional: false, required: true
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // use - computed: false, optional: false, required: true
  private _use?: string; 
  public get use() {
    return this.getStringAttribute('use');
  }
  public set use(value: string) {
    this._use = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useInput() {
    return this._use;
  }

  // workforce_pool_id - computed: false, optional: false, required: true
  private _workforcePoolId?: string; 
  public get workforcePoolId() {
    return this.getStringAttribute('workforce_pool_id');
  }
  public set workforcePoolId(value: string) {
    this._workforcePoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workforcePoolIdInput() {
    return this._workforcePoolId;
  }

  // key_data - computed: false, optional: false, required: true
  private _keyData = new IamWorkforcePoolProviderKeyKeyDataOutputReference(this, "key_data");
  public get keyData() {
    return this._keyData;
  }
  public putKeyData(value: IamWorkforcePoolProviderKeyKeyData) {
    this._keyData.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDataInput() {
    return this._keyData.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IamWorkforcePoolProviderKeyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IamWorkforcePoolProviderKeyTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      key_id: cdktf.stringToTerraform(this._keyId),
      location: cdktf.stringToTerraform(this._location),
      provider_id: cdktf.stringToTerraform(this._providerId),
      use: cdktf.stringToTerraform(this._use),
      workforce_pool_id: cdktf.stringToTerraform(this._workforcePoolId),
      key_data: iamWorkforcePoolProviderKeyKeyDataToTerraform(this._keyData.internalValue),
      timeouts: iamWorkforcePoolProviderKeyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_id: {
        value: cdktf.stringToHclTerraform(this._keyId),
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
      provider_id: {
        value: cdktf.stringToHclTerraform(this._providerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use: {
        value: cdktf.stringToHclTerraform(this._use),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workforce_pool_id: {
        value: cdktf.stringToHclTerraform(this._workforcePoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_data: {
        value: iamWorkforcePoolProviderKeyKeyDataToHclTerraform(this._keyData.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IamWorkforcePoolProviderKeyKeyDataList",
      },
      timeouts: {
        value: iamWorkforcePoolProviderKeyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IamWorkforcePoolProviderKeyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
