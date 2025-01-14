// https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/vmwareengine_external_access_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmwareengineExternalAccessRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The action that the external access rule performs. Possible values: ["ALLOW", "DENY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/vmwareengine_external_access_rule#action VmwareengineExternalAccessRule#action}
  */
  readonly action: string;
  /**
  * User-provided description for the external access rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/vmwareengine_external_access_rule#description VmwareengineExternalAccessRule#description}
  */
  readonly description?: string;
  /**
  * A list of destination ports to which the external access rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/vmwareengine_external_access_rule#destination_ports VmwareengineExternalAccessRule#destination_ports}
  */
  readonly destinationPorts: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/vmwareengine_external_access_rule#id VmwareengineExternalAccessRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The IP protocol to which the external access rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/vmwareengine_external_access_rule#ip_protocol VmwareengineExternalAccessRule#ip_protocol}
  */
  readonly ipProtocol: string;
  /**
  * The ID of the external access rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/vmwareengine_external_access_rule#name VmwareengineExternalAccessRule#name}
  */
  readonly name: string;
  /**
  * The resource name of the network policy.
  * Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
  * For example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/vmwareengine_external_access_rule#parent VmwareengineExternalAccessRule#parent}
  */
  readonly parent: string;
  /**
  * External access rule priority, which determines the external access rule to use when multiple rules apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/vmwareengine_external_access_rule#priority VmwareengineExternalAccessRule#priority}
  */
  readonly priority: number;
  /**
  * A list of source ports to which the external access rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/vmwareengine_external_access_rule#source_ports VmwareengineExternalAccessRule#source_ports}
  */
  readonly sourcePorts: string[];
  /**
  * destination_ip_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/vmwareengine_external_access_rule#destination_ip_ranges VmwareengineExternalAccessRule#destination_ip_ranges}
  */
  readonly destinationIpRanges: VmwareengineExternalAccessRuleDestinationIpRanges[] | cdktf.IResolvable;
  /**
  * source_ip_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/vmwareengine_external_access_rule#source_ip_ranges VmwareengineExternalAccessRule#source_ip_ranges}
  */
  readonly sourceIpRanges: VmwareengineExternalAccessRuleSourceIpRanges[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/vmwareengine_external_access_rule#timeouts VmwareengineExternalAccessRule#timeouts}
  */
  readonly timeouts?: VmwareengineExternalAccessRuleTimeouts;
}
export interface VmwareengineExternalAccessRuleDestinationIpRanges {
  /**
  * The name of an 'ExternalAddress' resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/vmwareengine_external_access_rule#external_address VmwareengineExternalAccessRule#external_address}
  */
  readonly externalAddress?: string;
  /**
  * An IP address range in the CIDR format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/vmwareengine_external_access_rule#ip_address_range VmwareengineExternalAccessRule#ip_address_range}
  */
  readonly ipAddressRange?: string;
}

export function vmwareengineExternalAccessRuleDestinationIpRangesToTerraform(struct?: VmwareengineExternalAccessRuleDestinationIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_address: cdktf.stringToTerraform(struct!.externalAddress),
    ip_address_range: cdktf.stringToTerraform(struct!.ipAddressRange),
  }
}


export function vmwareengineExternalAccessRuleDestinationIpRangesToHclTerraform(struct?: VmwareengineExternalAccessRuleDestinationIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_address: {
      value: cdktf.stringToHclTerraform(struct!.externalAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address_range: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmwareengineExternalAccessRuleDestinationIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmwareengineExternalAccessRuleDestinationIpRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalAddress = this._externalAddress;
    }
    if (this._ipAddressRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressRange = this._ipAddressRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmwareengineExternalAccessRuleDestinationIpRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalAddress = undefined;
      this._ipAddressRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalAddress = value.externalAddress;
      this._ipAddressRange = value.ipAddressRange;
    }
  }

  // external_address - computed: false, optional: true, required: false
  private _externalAddress?: string; 
  public get externalAddress() {
    return this.getStringAttribute('external_address');
  }
  public set externalAddress(value: string) {
    this._externalAddress = value;
  }
  public resetExternalAddress() {
    this._externalAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAddressInput() {
    return this._externalAddress;
  }

  // ip_address_range - computed: false, optional: true, required: false
  private _ipAddressRange?: string; 
  public get ipAddressRange() {
    return this.getStringAttribute('ip_address_range');
  }
  public set ipAddressRange(value: string) {
    this._ipAddressRange = value;
  }
  public resetIpAddressRange() {
    this._ipAddressRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressRangeInput() {
    return this._ipAddressRange;
  }
}

export class VmwareengineExternalAccessRuleDestinationIpRangesList extends cdktf.ComplexList {
  public internalValue? : VmwareengineExternalAccessRuleDestinationIpRanges[] | cdktf.IResolvable

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
  public get(index: number): VmwareengineExternalAccessRuleDestinationIpRangesOutputReference {
    return new VmwareengineExternalAccessRuleDestinationIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmwareengineExternalAccessRuleSourceIpRanges {
  /**
  * A single IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/vmwareengine_external_access_rule#ip_address VmwareengineExternalAccessRule#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * An IP address range in the CIDR format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/vmwareengine_external_access_rule#ip_address_range VmwareengineExternalAccessRule#ip_address_range}
  */
  readonly ipAddressRange?: string;
}

export function vmwareengineExternalAccessRuleSourceIpRangesToTerraform(struct?: VmwareengineExternalAccessRuleSourceIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_address_range: cdktf.stringToTerraform(struct!.ipAddressRange),
  }
}


export function vmwareengineExternalAccessRuleSourceIpRangesToHclTerraform(struct?: VmwareengineExternalAccessRuleSourceIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address_range: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmwareengineExternalAccessRuleSourceIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmwareengineExternalAccessRuleSourceIpRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipAddressRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressRange = this._ipAddressRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmwareengineExternalAccessRuleSourceIpRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._ipAddressRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._ipAddressRange = value.ipAddressRange;
    }
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_address_range - computed: false, optional: true, required: false
  private _ipAddressRange?: string; 
  public get ipAddressRange() {
    return this.getStringAttribute('ip_address_range');
  }
  public set ipAddressRange(value: string) {
    this._ipAddressRange = value;
  }
  public resetIpAddressRange() {
    this._ipAddressRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressRangeInput() {
    return this._ipAddressRange;
  }
}

export class VmwareengineExternalAccessRuleSourceIpRangesList extends cdktf.ComplexList {
  public internalValue? : VmwareengineExternalAccessRuleSourceIpRanges[] | cdktf.IResolvable

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
  public get(index: number): VmwareengineExternalAccessRuleSourceIpRangesOutputReference {
    return new VmwareengineExternalAccessRuleSourceIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmwareengineExternalAccessRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/vmwareengine_external_access_rule#create VmwareengineExternalAccessRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/vmwareengine_external_access_rule#delete VmwareengineExternalAccessRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/vmwareengine_external_access_rule#update VmwareengineExternalAccessRule#update}
  */
  readonly update?: string;
}

export function vmwareengineExternalAccessRuleTimeoutsToTerraform(struct?: VmwareengineExternalAccessRuleTimeouts | cdktf.IResolvable): any {
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


export function vmwareengineExternalAccessRuleTimeoutsToHclTerraform(struct?: VmwareengineExternalAccessRuleTimeouts | cdktf.IResolvable): any {
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

export class VmwareengineExternalAccessRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VmwareengineExternalAccessRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VmwareengineExternalAccessRuleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/vmwareengine_external_access_rule google_vmwareengine_external_access_rule}
*/
export class VmwareengineExternalAccessRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vmwareengine_external_access_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VmwareengineExternalAccessRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VmwareengineExternalAccessRule to import
  * @param importFromId The id of the existing VmwareengineExternalAccessRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/vmwareengine_external_access_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VmwareengineExternalAccessRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_vmwareengine_external_access_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/vmwareengine_external_access_rule google_vmwareengine_external_access_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmwareengineExternalAccessRuleConfig
  */
  public constructor(scope: Construct, id: string, config: VmwareengineExternalAccessRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vmwareengine_external_access_rule',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.16.0',
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
    this._action = config.action;
    this._description = config.description;
    this._destinationPorts = config.destinationPorts;
    this._id = config.id;
    this._ipProtocol = config.ipProtocol;
    this._name = config.name;
    this._parent = config.parent;
    this._priority = config.priority;
    this._sourcePorts = config.sourcePorts;
    this._destinationIpRanges.internalValue = config.destinationIpRanges;
    this._sourceIpRanges.internalValue = config.sourceIpRanges;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // destination_ports - computed: false, optional: false, required: true
  private _destinationPorts?: string[]; 
  public get destinationPorts() {
    return this.getListAttribute('destination_ports');
  }
  public set destinationPorts(value: string[]) {
    this._destinationPorts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortsInput() {
    return this._destinationPorts;
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

  // ip_protocol - computed: false, optional: false, required: true
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // source_ports - computed: false, optional: false, required: true
  private _sourcePorts?: string[]; 
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
  }
  public set sourcePorts(value: string[]) {
    this._sourcePorts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortsInput() {
    return this._sourcePorts;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // destination_ip_ranges - computed: false, optional: false, required: true
  private _destinationIpRanges = new VmwareengineExternalAccessRuleDestinationIpRangesList(this, "destination_ip_ranges", false);
  public get destinationIpRanges() {
    return this._destinationIpRanges;
  }
  public putDestinationIpRanges(value: VmwareengineExternalAccessRuleDestinationIpRanges[] | cdktf.IResolvable) {
    this._destinationIpRanges.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpRangesInput() {
    return this._destinationIpRanges.internalValue;
  }

  // source_ip_ranges - computed: false, optional: false, required: true
  private _sourceIpRanges = new VmwareengineExternalAccessRuleSourceIpRangesList(this, "source_ip_ranges", false);
  public get sourceIpRanges() {
    return this._sourceIpRanges;
  }
  public putSourceIpRanges(value: VmwareengineExternalAccessRuleSourceIpRanges[] | cdktf.IResolvable) {
    this._sourceIpRanges.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpRangesInput() {
    return this._sourceIpRanges.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VmwareengineExternalAccessRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VmwareengineExternalAccessRuleTimeouts) {
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
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      destination_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destinationPorts),
      id: cdktf.stringToTerraform(this._id),
      ip_protocol: cdktf.stringToTerraform(this._ipProtocol),
      name: cdktf.stringToTerraform(this._name),
      parent: cdktf.stringToTerraform(this._parent),
      priority: cdktf.numberToTerraform(this._priority),
      source_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourcePorts),
      destination_ip_ranges: cdktf.listMapper(vmwareengineExternalAccessRuleDestinationIpRangesToTerraform, true)(this._destinationIpRanges.internalValue),
      source_ip_ranges: cdktf.listMapper(vmwareengineExternalAccessRuleSourceIpRangesToTerraform, true)(this._sourceIpRanges.internalValue),
      timeouts: vmwareengineExternalAccessRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      destination_ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destinationPorts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_protocol: {
        value: cdktf.stringToHclTerraform(this._ipProtocol),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourcePorts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      destination_ip_ranges: {
        value: cdktf.listMapperHcl(vmwareengineExternalAccessRuleDestinationIpRangesToHclTerraform, true)(this._destinationIpRanges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmwareengineExternalAccessRuleDestinationIpRangesList",
      },
      source_ip_ranges: {
        value: cdktf.listMapperHcl(vmwareengineExternalAccessRuleSourceIpRangesToHclTerraform, true)(this._sourceIpRanges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmwareengineExternalAccessRuleSourceIpRangesList",
      },
      timeouts: {
        value: vmwareengineExternalAccessRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VmwareengineExternalAccessRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
