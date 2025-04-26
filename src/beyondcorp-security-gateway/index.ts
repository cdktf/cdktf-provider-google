/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/beyondcorp_security_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BeyondcorpSecurityGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. An arbitrary user-provided name for the SecurityGateway.
  * Cannot exceed 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/beyondcorp_security_gateway#display_name BeyondcorpSecurityGateway#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/beyondcorp_security_gateway#id BeyondcorpSecurityGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. Must be omitted or set to 'global'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/beyondcorp_security_gateway#location BeyondcorpSecurityGateway#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/beyondcorp_security_gateway#project BeyondcorpSecurityGateway#project}
  */
  readonly project?: string;
  /**
  * Optional. User-settable SecurityGateway resource ID.
  * * Must start with a letter.
  * * Must contain between 4-63 characters from '/a-z-/'.
  * * Must end with a number or letter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/beyondcorp_security_gateway#security_gateway_id BeyondcorpSecurityGateway#security_gateway_id}
  */
  readonly securityGatewayId: string;
  /**
  * hubs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/beyondcorp_security_gateway#hubs BeyondcorpSecurityGateway#hubs}
  */
  readonly hubs?: BeyondcorpSecurityGatewayHubs[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/beyondcorp_security_gateway#timeouts BeyondcorpSecurityGateway#timeouts}
  */
  readonly timeouts?: BeyondcorpSecurityGatewayTimeouts;
}
export interface BeyondcorpSecurityGatewayHubsInternetGateway {
}

export function beyondcorpSecurityGatewayHubsInternetGatewayToTerraform(struct?: BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference | BeyondcorpSecurityGatewayHubsInternetGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function beyondcorpSecurityGatewayHubsInternetGatewayToHclTerraform(struct?: BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference | BeyondcorpSecurityGatewayHubsInternetGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BeyondcorpSecurityGatewayHubsInternetGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BeyondcorpSecurityGatewayHubsInternetGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assigned_ips - computed: true, optional: false, required: false
  public get assignedIps() {
    return this.getListAttribute('assigned_ips');
  }
}
export interface BeyondcorpSecurityGatewayHubs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/beyondcorp_security_gateway#region BeyondcorpSecurityGateway#region}
  */
  readonly region: string;
  /**
  * internet_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/beyondcorp_security_gateway#internet_gateway BeyondcorpSecurityGateway#internet_gateway}
  */
  readonly internetGateway?: BeyondcorpSecurityGatewayHubsInternetGateway;
}

export function beyondcorpSecurityGatewayHubsToTerraform(struct?: BeyondcorpSecurityGatewayHubs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    internet_gateway: beyondcorpSecurityGatewayHubsInternetGatewayToTerraform(struct!.internetGateway),
  }
}


export function beyondcorpSecurityGatewayHubsToHclTerraform(struct?: BeyondcorpSecurityGatewayHubs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_gateway: {
      value: beyondcorpSecurityGatewayHubsInternetGatewayToHclTerraform(struct!.internetGateway),
      isBlock: true,
      type: "list",
      storageClassType: "BeyondcorpSecurityGatewayHubsInternetGatewayList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BeyondcorpSecurityGatewayHubsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BeyondcorpSecurityGatewayHubs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._internetGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetGateway = this._internetGateway?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BeyondcorpSecurityGatewayHubs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
      this._internetGateway.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
      this._internetGateway.internalValue = value.internetGateway;
    }
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // internet_gateway - computed: false, optional: true, required: false
  private _internetGateway = new BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference(this, "internet_gateway");
  public get internetGateway() {
    return this._internetGateway;
  }
  public putInternetGateway(value: BeyondcorpSecurityGatewayHubsInternetGateway) {
    this._internetGateway.internalValue = value;
  }
  public resetInternetGateway() {
    this._internetGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetGatewayInput() {
    return this._internetGateway.internalValue;
  }
}

export class BeyondcorpSecurityGatewayHubsList extends cdktf.ComplexList {
  public internalValue? : BeyondcorpSecurityGatewayHubs[] | cdktf.IResolvable

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
  public get(index: number): BeyondcorpSecurityGatewayHubsOutputReference {
    return new BeyondcorpSecurityGatewayHubsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BeyondcorpSecurityGatewayTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/beyondcorp_security_gateway#create BeyondcorpSecurityGateway#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/beyondcorp_security_gateway#delete BeyondcorpSecurityGateway#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/beyondcorp_security_gateway#update BeyondcorpSecurityGateway#update}
  */
  readonly update?: string;
}

export function beyondcorpSecurityGatewayTimeoutsToTerraform(struct?: BeyondcorpSecurityGatewayTimeouts | cdktf.IResolvable): any {
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


export function beyondcorpSecurityGatewayTimeoutsToHclTerraform(struct?: BeyondcorpSecurityGatewayTimeouts | cdktf.IResolvable): any {
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

export class BeyondcorpSecurityGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BeyondcorpSecurityGatewayTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BeyondcorpSecurityGatewayTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/beyondcorp_security_gateway google_beyondcorp_security_gateway}
*/
export class BeyondcorpSecurityGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_beyondcorp_security_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BeyondcorpSecurityGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BeyondcorpSecurityGateway to import
  * @param importFromId The id of the existing BeyondcorpSecurityGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/beyondcorp_security_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BeyondcorpSecurityGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_beyondcorp_security_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/beyondcorp_security_gateway google_beyondcorp_security_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BeyondcorpSecurityGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: BeyondcorpSecurityGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'google_beyondcorp_security_gateway',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.32.0',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._securityGatewayId = config.securityGatewayId;
    this._hubs.internalValue = config.hubs;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // external_ips - computed: true, optional: false, required: false
  public get externalIps() {
    return this.getListAttribute('external_ips');
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
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

  // security_gateway_id - computed: false, optional: false, required: true
  private _securityGatewayId?: string; 
  public get securityGatewayId() {
    return this.getStringAttribute('security_gateway_id');
  }
  public set securityGatewayId(value: string) {
    this._securityGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGatewayIdInput() {
    return this._securityGatewayId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // hubs - computed: false, optional: true, required: false
  private _hubs = new BeyondcorpSecurityGatewayHubsList(this, "hubs", true);
  public get hubs() {
    return this._hubs;
  }
  public putHubs(value: BeyondcorpSecurityGatewayHubs[] | cdktf.IResolvable) {
    this._hubs.internalValue = value;
  }
  public resetHubs() {
    this._hubs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubsInput() {
    return this._hubs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BeyondcorpSecurityGatewayTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BeyondcorpSecurityGatewayTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      security_gateway_id: cdktf.stringToTerraform(this._securityGatewayId),
      hubs: cdktf.listMapper(beyondcorpSecurityGatewayHubsToTerraform, true)(this._hubs.internalValue),
      timeouts: beyondcorpSecurityGatewayTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      security_gateway_id: {
        value: cdktf.stringToHclTerraform(this._securityGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hubs: {
        value: cdktf.listMapperHcl(beyondcorpSecurityGatewayHubsToHclTerraform, true)(this._hubs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BeyondcorpSecurityGatewayHubsList",
      },
      timeouts: {
        value: beyondcorpSecurityGatewayTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BeyondcorpSecurityGatewayTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
