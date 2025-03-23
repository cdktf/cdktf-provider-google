/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_network_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeNetworkAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The connection preference of service attachment. The value can be set to ACCEPT_AUTOMATIC. An ACCEPT_AUTOMATIC service attachment is one that always accepts the connection from consumer forwarding rules. Possible values: ["ACCEPT_AUTOMATIC", "ACCEPT_MANUAL", "INVALID"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_network_attachment#connection_preference ComputeNetworkAttachment#connection_preference}
  */
  readonly connectionPreference: string;
  /**
  * An optional description of this resource. Provide this property when you create the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_network_attachment#description ComputeNetworkAttachment#description}
  */
  readonly description?: string;
  /**
  * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_network_attachment#name ComputeNetworkAttachment#name}
  */
  readonly name: string;
  /**
  * Projects that are allowed to connect to this network attachment. The project can be specified using its id or number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_network_attachment#producer_accept_lists ComputeNetworkAttachment#producer_accept_lists}
  */
  readonly producerAcceptLists?: string[];
  /**
  * Projects that are not allowed to connect to this network attachment. The project can be specified using its id or number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_network_attachment#producer_reject_lists ComputeNetworkAttachment#producer_reject_lists}
  */
  readonly producerRejectLists?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_network_attachment#project ComputeNetworkAttachment#project}
  */
  readonly project?: string;
  /**
  * URL of the region where the network attachment resides. This field applies only to the region resource. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_network_attachment#region ComputeNetworkAttachment#region}
  */
  readonly region?: string;
  /**
  * An array of URLs where each entry is the URL of a subnet provided by the service consumer to use for endpoints in the producers that connect to this network attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_network_attachment#subnetworks ComputeNetworkAttachment#subnetworks}
  */
  readonly subnetworks: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_network_attachment#timeouts ComputeNetworkAttachment#timeouts}
  */
  readonly timeouts?: ComputeNetworkAttachmentTimeouts;
}
export interface ComputeNetworkAttachmentConnectionEndpoints {
}

export function computeNetworkAttachmentConnectionEndpointsToTerraform(struct?: ComputeNetworkAttachmentConnectionEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeNetworkAttachmentConnectionEndpointsToHclTerraform(struct?: ComputeNetworkAttachmentConnectionEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeNetworkAttachmentConnectionEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeNetworkAttachmentConnectionEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeNetworkAttachmentConnectionEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // project_id_or_num - computed: true, optional: false, required: false
  public get projectIdOrNum() {
    return this.getStringAttribute('project_id_or_num');
  }

  // secondary_ip_cidr_ranges - computed: true, optional: false, required: false
  public get secondaryIpCidrRanges() {
    return this.getStringAttribute('secondary_ip_cidr_ranges');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnetwork - computed: true, optional: false, required: false
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
}

export class ComputeNetworkAttachmentConnectionEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): ComputeNetworkAttachmentConnectionEndpointsOutputReference {
    return new ComputeNetworkAttachmentConnectionEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeNetworkAttachmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_network_attachment#create ComputeNetworkAttachment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_network_attachment#delete ComputeNetworkAttachment#delete}
  */
  readonly delete?: string;
}

export function computeNetworkAttachmentTimeoutsToTerraform(struct?: ComputeNetworkAttachmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function computeNetworkAttachmentTimeoutsToHclTerraform(struct?: ComputeNetworkAttachmentTimeouts | cdktf.IResolvable): any {
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

export class ComputeNetworkAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeNetworkAttachmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeNetworkAttachmentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_network_attachment google_compute_network_attachment}
*/
export class ComputeNetworkAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_network_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeNetworkAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeNetworkAttachment to import
  * @param importFromId The id of the existing ComputeNetworkAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_network_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeNetworkAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_network_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_network_attachment google_compute_network_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeNetworkAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeNetworkAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_network_attachment',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.26.0',
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
    this._connectionPreference = config.connectionPreference;
    this._description = config.description;
    this._name = config.name;
    this._producerAcceptLists = config.producerAcceptLists;
    this._producerRejectLists = config.producerRejectLists;
    this._project = config.project;
    this._region = config.region;
    this._subnetworks = config.subnetworks;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_endpoints - computed: true, optional: false, required: false
  private _connectionEndpoints = new ComputeNetworkAttachmentConnectionEndpointsList(this, "connection_endpoints", false);
  public get connectionEndpoints() {
    return this._connectionEndpoints;
  }

  // connection_preference - computed: false, optional: false, required: true
  private _connectionPreference?: string; 
  public get connectionPreference() {
    return this.getStringAttribute('connection_preference');
  }
  public set connectionPreference(value: string) {
    this._connectionPreference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPreferenceInput() {
    return this._connectionPreference;
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
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

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // producer_accept_lists - computed: false, optional: true, required: false
  private _producerAcceptLists?: string[]; 
  public get producerAcceptLists() {
    return this.getListAttribute('producer_accept_lists');
  }
  public set producerAcceptLists(value: string[]) {
    this._producerAcceptLists = value;
  }
  public resetProducerAcceptLists() {
    this._producerAcceptLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerAcceptListsInput() {
    return this._producerAcceptLists;
  }

  // producer_reject_lists - computed: false, optional: true, required: false
  private _producerRejectLists?: string[]; 
  public get producerRejectLists() {
    return this.getListAttribute('producer_reject_lists');
  }
  public set producerRejectLists(value: string[]) {
    this._producerRejectLists = value;
  }
  public resetProducerRejectLists() {
    this._producerRejectLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerRejectListsInput() {
    return this._producerRejectLists;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // self_link_with_id - computed: true, optional: false, required: false
  public get selfLinkWithId() {
    return this.getStringAttribute('self_link_with_id');
  }

  // subnetworks - computed: false, optional: false, required: true
  private _subnetworks?: string[]; 
  public get subnetworks() {
    return this.getListAttribute('subnetworks');
  }
  public set subnetworks(value: string[]) {
    this._subnetworks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworksInput() {
    return this._subnetworks;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeNetworkAttachmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeNetworkAttachmentTimeouts) {
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
      connection_preference: cdktf.stringToTerraform(this._connectionPreference),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      producer_accept_lists: cdktf.listMapper(cdktf.stringToTerraform, false)(this._producerAcceptLists),
      producer_reject_lists: cdktf.listMapper(cdktf.stringToTerraform, false)(this._producerRejectLists),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      subnetworks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetworks),
      timeouts: computeNetworkAttachmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_preference: {
        value: cdktf.stringToHclTerraform(this._connectionPreference),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      producer_accept_lists: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._producerAcceptLists),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      producer_reject_lists: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._producerRejectLists),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnetworks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnetworks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeouts: {
        value: computeNetworkAttachmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeNetworkAttachmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
