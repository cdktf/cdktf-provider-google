// https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkConnectivitySpokeConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional description of the spoke.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#description NetworkConnectivitySpoke#description}
  */
  readonly description?: string;
  /**
  * Immutable. The URI of the hub that this spoke is attached to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#hub NetworkConnectivitySpoke#hub}
  */
  readonly hub: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#id NetworkConnectivitySpoke#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#labels NetworkConnectivitySpoke#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#location NetworkConnectivitySpoke#location}
  */
  readonly location: string;
  /**
  * Immutable. The name of the spoke. Spoke names must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#name NetworkConnectivitySpoke#name}
  */
  readonly name: string;
  /**
  * The project for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#project NetworkConnectivitySpoke#project}
  */
  readonly project?: string;
  /**
  * linked_interconnect_attachments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#linked_interconnect_attachments NetworkConnectivitySpoke#linked_interconnect_attachments}
  */
  readonly linkedInterconnectAttachments?: NetworkConnectivitySpokeLinkedInterconnectAttachments;
  /**
  * linked_router_appliance_instances block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#linked_router_appliance_instances NetworkConnectivitySpoke#linked_router_appliance_instances}
  */
  readonly linkedRouterApplianceInstances?: NetworkConnectivitySpokeLinkedRouterApplianceInstances;
  /**
  * linked_vpn_tunnels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#linked_vpn_tunnels NetworkConnectivitySpoke#linked_vpn_tunnels}
  */
  readonly linkedVpnTunnels?: NetworkConnectivitySpokeLinkedVpnTunnels;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#timeouts NetworkConnectivitySpoke#timeouts}
  */
  readonly timeouts?: NetworkConnectivitySpokeTimeouts;
}
export interface NetworkConnectivitySpokeLinkedInterconnectAttachments {
  /**
  * A value that controls whether site-to-site data transfer is enabled for these resources. Note that data transfer is available only in supported locations.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#site_to_site_data_transfer NetworkConnectivitySpoke#site_to_site_data_transfer}
  */
  readonly siteToSiteDataTransfer: boolean | cdktf.IResolvable;
  /**
  * The URIs of linked interconnect attachment resources
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#uris NetworkConnectivitySpoke#uris}
  */
  readonly uris: string[];
}

export function networkConnectivitySpokeLinkedInterconnectAttachmentsToTerraform(struct?: NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference | NetworkConnectivitySpokeLinkedInterconnectAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site_to_site_data_transfer: cdktf.booleanToTerraform(struct!.siteToSiteDataTransfer),
    uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uris),
  }
}

export class NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkConnectivitySpokeLinkedInterconnectAttachments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._siteToSiteDataTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteToSiteDataTransfer = this._siteToSiteDataTransfer;
    }
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectivitySpokeLinkedInterconnectAttachments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._siteToSiteDataTransfer = undefined;
      this._uris = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._siteToSiteDataTransfer = value.siteToSiteDataTransfer;
      this._uris = value.uris;
    }
  }

  // site_to_site_data_transfer - computed: false, optional: false, required: true
  private _siteToSiteDataTransfer?: boolean | cdktf.IResolvable; 
  public get siteToSiteDataTransfer() {
    return this.getBooleanAttribute('site_to_site_data_transfer');
  }
  public set siteToSiteDataTransfer(value: boolean | cdktf.IResolvable) {
    this._siteToSiteDataTransfer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteToSiteDataTransferInput() {
    return this._siteToSiteDataTransfer;
  }

  // uris - computed: false, optional: false, required: true
  private _uris?: string[]; 
  public get uris() {
    return this.getListAttribute('uris');
  }
  public set uris(value: string[]) {
    this._uris = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urisInput() {
    return this._uris;
  }
}
export interface NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances {
  /**
  * The IP address on the VM to use for peering.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#ip_address NetworkConnectivitySpoke#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * The URI of the virtual machine resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#virtual_machine NetworkConnectivitySpoke#virtual_machine}
  */
  readonly virtualMachine?: string;
}

export function networkConnectivitySpokeLinkedRouterApplianceInstancesInstancesToTerraform(struct?: NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    virtual_machine: cdktf.stringToTerraform(struct!.virtualMachine),
  }
}

export class NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._virtualMachine !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualMachine = this._virtualMachine;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._virtualMachine = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._virtualMachine = value.virtualMachine;
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

  // virtual_machine - computed: false, optional: true, required: false
  private _virtualMachine?: string; 
  public get virtualMachine() {
    return this.getStringAttribute('virtual_machine');
  }
  public set virtualMachine(value: string) {
    this._virtualMachine = value;
  }
  public resetVirtualMachine() {
    this._virtualMachine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineInput() {
    return this._virtualMachine;
  }
}

export class NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList extends cdktf.ComplexList {
  public internalValue? : NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances[] | cdktf.IResolvable

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
  public get(index: number): NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference {
    return new NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkConnectivitySpokeLinkedRouterApplianceInstances {
  /**
  * A value that controls whether site-to-site data transfer is enabled for these resources. Note that data transfer is available only in supported locations.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#site_to_site_data_transfer NetworkConnectivitySpoke#site_to_site_data_transfer}
  */
  readonly siteToSiteDataTransfer: boolean | cdktf.IResolvable;
  /**
  * instances block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#instances NetworkConnectivitySpoke#instances}
  */
  readonly instances: NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances[] | cdktf.IResolvable;
}

export function networkConnectivitySpokeLinkedRouterApplianceInstancesToTerraform(struct?: NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference | NetworkConnectivitySpokeLinkedRouterApplianceInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site_to_site_data_transfer: cdktf.booleanToTerraform(struct!.siteToSiteDataTransfer),
    instances: cdktf.listMapper(networkConnectivitySpokeLinkedRouterApplianceInstancesInstancesToTerraform, true)(struct!.instances),
  }
}

export class NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkConnectivitySpokeLinkedRouterApplianceInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._siteToSiteDataTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteToSiteDataTransfer = this._siteToSiteDataTransfer;
    }
    if (this._instances?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectivitySpokeLinkedRouterApplianceInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._siteToSiteDataTransfer = undefined;
      this._instances.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._siteToSiteDataTransfer = value.siteToSiteDataTransfer;
      this._instances.internalValue = value.instances;
    }
  }

  // site_to_site_data_transfer - computed: false, optional: false, required: true
  private _siteToSiteDataTransfer?: boolean | cdktf.IResolvable; 
  public get siteToSiteDataTransfer() {
    return this.getBooleanAttribute('site_to_site_data_transfer');
  }
  public set siteToSiteDataTransfer(value: boolean | cdktf.IResolvable) {
    this._siteToSiteDataTransfer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteToSiteDataTransferInput() {
    return this._siteToSiteDataTransfer;
  }

  // instances - computed: false, optional: false, required: true
  private _instances = new NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }
  public putInstances(value: NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances[] | cdktf.IResolvable) {
    this._instances.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances.internalValue;
  }
}
export interface NetworkConnectivitySpokeLinkedVpnTunnels {
  /**
  * A value that controls whether site-to-site data transfer is enabled for these resources. Note that data transfer is available only in supported locations.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#site_to_site_data_transfer NetworkConnectivitySpoke#site_to_site_data_transfer}
  */
  readonly siteToSiteDataTransfer: boolean | cdktf.IResolvable;
  /**
  * The URIs of linked VPN tunnel resources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#uris NetworkConnectivitySpoke#uris}
  */
  readonly uris: string[];
}

export function networkConnectivitySpokeLinkedVpnTunnelsToTerraform(struct?: NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference | NetworkConnectivitySpokeLinkedVpnTunnels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site_to_site_data_transfer: cdktf.booleanToTerraform(struct!.siteToSiteDataTransfer),
    uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uris),
  }
}

export class NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkConnectivitySpokeLinkedVpnTunnels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._siteToSiteDataTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteToSiteDataTransfer = this._siteToSiteDataTransfer;
    }
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectivitySpokeLinkedVpnTunnels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._siteToSiteDataTransfer = undefined;
      this._uris = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._siteToSiteDataTransfer = value.siteToSiteDataTransfer;
      this._uris = value.uris;
    }
  }

  // site_to_site_data_transfer - computed: false, optional: false, required: true
  private _siteToSiteDataTransfer?: boolean | cdktf.IResolvable; 
  public get siteToSiteDataTransfer() {
    return this.getBooleanAttribute('site_to_site_data_transfer');
  }
  public set siteToSiteDataTransfer(value: boolean | cdktf.IResolvable) {
    this._siteToSiteDataTransfer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteToSiteDataTransferInput() {
    return this._siteToSiteDataTransfer;
  }

  // uris - computed: false, optional: false, required: true
  private _uris?: string[]; 
  public get uris() {
    return this.getListAttribute('uris');
  }
  public set uris(value: string[]) {
    this._uris = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urisInput() {
    return this._uris;
  }
}
export interface NetworkConnectivitySpokeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#create NetworkConnectivitySpoke#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#delete NetworkConnectivitySpoke#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#update NetworkConnectivitySpoke#update}
  */
  readonly update?: string;
}

export function networkConnectivitySpokeTimeoutsToTerraform(struct?: NetworkConnectivitySpokeTimeoutsOutputReference | NetworkConnectivitySpokeTimeouts | cdktf.IResolvable): any {
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

export class NetworkConnectivitySpokeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkConnectivitySpokeTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkConnectivitySpokeTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke google_network_connectivity_spoke}
*/
export class NetworkConnectivitySpoke extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_connectivity_spoke";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke google_network_connectivity_spoke} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkConnectivitySpokeConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkConnectivitySpokeConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_connectivity_spoke',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._hub = config.hub;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._linkedInterconnectAttachments.internalValue = config.linkedInterconnectAttachments;
    this._linkedRouterApplianceInstances.internalValue = config.linkedRouterApplianceInstances;
    this._linkedVpnTunnels.internalValue = config.linkedVpnTunnels;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // hub - computed: false, optional: false, required: true
  private _hub?: string; 
  public get hub() {
    return this.getStringAttribute('hub');
  }
  public set hub(value: string) {
    this._hub = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hubInput() {
    return this._hub;
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

  // unique_id - computed: true, optional: false, required: false
  public get uniqueId() {
    return this.getStringAttribute('unique_id');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // linked_interconnect_attachments - computed: false, optional: true, required: false
  private _linkedInterconnectAttachments = new NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference(this, "linked_interconnect_attachments");
  public get linkedInterconnectAttachments() {
    return this._linkedInterconnectAttachments;
  }
  public putLinkedInterconnectAttachments(value: NetworkConnectivitySpokeLinkedInterconnectAttachments) {
    this._linkedInterconnectAttachments.internalValue = value;
  }
  public resetLinkedInterconnectAttachments() {
    this._linkedInterconnectAttachments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedInterconnectAttachmentsInput() {
    return this._linkedInterconnectAttachments.internalValue;
  }

  // linked_router_appliance_instances - computed: false, optional: true, required: false
  private _linkedRouterApplianceInstances = new NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference(this, "linked_router_appliance_instances");
  public get linkedRouterApplianceInstances() {
    return this._linkedRouterApplianceInstances;
  }
  public putLinkedRouterApplianceInstances(value: NetworkConnectivitySpokeLinkedRouterApplianceInstances) {
    this._linkedRouterApplianceInstances.internalValue = value;
  }
  public resetLinkedRouterApplianceInstances() {
    this._linkedRouterApplianceInstances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedRouterApplianceInstancesInput() {
    return this._linkedRouterApplianceInstances.internalValue;
  }

  // linked_vpn_tunnels - computed: false, optional: true, required: false
  private _linkedVpnTunnels = new NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference(this, "linked_vpn_tunnels");
  public get linkedVpnTunnels() {
    return this._linkedVpnTunnels;
  }
  public putLinkedVpnTunnels(value: NetworkConnectivitySpokeLinkedVpnTunnels) {
    this._linkedVpnTunnels.internalValue = value;
  }
  public resetLinkedVpnTunnels() {
    this._linkedVpnTunnels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedVpnTunnelsInput() {
    return this._linkedVpnTunnels.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkConnectivitySpokeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkConnectivitySpokeTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      hub: cdktf.stringToTerraform(this._hub),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      linked_interconnect_attachments: networkConnectivitySpokeLinkedInterconnectAttachmentsToTerraform(this._linkedInterconnectAttachments.internalValue),
      linked_router_appliance_instances: networkConnectivitySpokeLinkedRouterApplianceInstancesToTerraform(this._linkedRouterApplianceInstances.internalValue),
      linked_vpn_tunnels: networkConnectivitySpokeLinkedVpnTunnelsToTerraform(this._linkedVpnTunnels.internalValue),
      timeouts: networkConnectivitySpokeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
