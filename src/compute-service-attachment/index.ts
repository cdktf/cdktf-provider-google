/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeServiceAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The connection preference to use for this service attachment. Valid
  * values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#connection_preference ComputeServiceAttachment#connection_preference}
  */
  readonly connectionPreference: string;
  /**
  * An array of projects that are not allowed to connect to this service
  * attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#consumer_reject_lists ComputeServiceAttachment#consumer_reject_lists}
  */
  readonly consumerRejectLists?: string[];
  /**
  * An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#description ComputeServiceAttachment#description}
  */
  readonly description?: string;
  /**
  * If specified, the domain name will be used during the integration between
  * the PSC connected endpoints and the Cloud DNS. For example, this is a
  * valid domain name: "p.mycompany.com.". Current max number of domain names
  * supported is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#domain_names ComputeServiceAttachment#domain_names}
  */
  readonly domainNames?: string[];
  /**
  * If true, enable the proxy protocol which is for supplying client TCP/IP
  * address data in TCP connections that traverse proxies on their way to
  * destination servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#enable_proxy_protocol ComputeServiceAttachment#enable_proxy_protocol}
  */
  readonly enableProxyProtocol: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#id ComputeServiceAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the resource. The name must be 1-63 characters long, and
  * comply with RFC1035. Specifically, the name must be 1-63 characters
  * long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?'
  * which means the first character must be a lowercase letter, and all
  * following characters must be a dash, lowercase letter, or digit,
  * except the last character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#name ComputeServiceAttachment#name}
  */
  readonly name: string;
  /**
  * An array of subnets that is provided for NAT in this service attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#nat_subnets ComputeServiceAttachment#nat_subnets}
  */
  readonly natSubnets: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#project ComputeServiceAttachment#project}
  */
  readonly project?: string;
  /**
  * The number of consumer spokes that connected Private Service Connect endpoints can be propagated to through Network Connectivity Center.
  * This limit lets the service producer limit how many propagated Private Service Connect connections can be established to this service attachment from a single consumer.
  * 
  * If the connection preference of the service attachment is ACCEPT_MANUAL, the limit applies to each project or network that is listed in the consumer accept list.
  * If the connection preference of the service attachment is ACCEPT_AUTOMATIC, the limit applies to each project that contains a connected endpoint.
  * 
  * If unspecified, the default propagated connection limit is 250. To explicitly send a zero value, set 'send_propagated_connection_limit_if_zero = true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#propagated_connection_limit ComputeServiceAttachment#propagated_connection_limit}
  */
  readonly propagatedConnectionLimit?: number;
  /**
  * This flag determines whether a consumer accept/reject list change can reconcile the statuses of existing ACCEPTED or REJECTED PSC endpoints.
  * 
  * If false, connection policy update will only affect existing PENDING PSC endpoints. Existing ACCEPTED/REJECTED endpoints will remain untouched regardless how the connection policy is modified .
  * If true, update will affect both PENDING and ACCEPTED/REJECTED PSC endpoints. For example, an ACCEPTED PSC endpoint will be moved to REJECTED if its project is added to the reject list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#reconcile_connections ComputeServiceAttachment#reconcile_connections}
  */
  readonly reconcileConnections?: boolean | cdktf.IResolvable;
  /**
  * URL of the region where the resource resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#region ComputeServiceAttachment#region}
  */
  readonly region?: string;
  /**
  * Controls the behavior of propagated_connection_limit.
  * When false, setting propagated_connection_limit to zero causes the provider to use to the API's default value.
  * When true, the provider will set propagated_connection_limit to zero.
  * Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#send_propagated_connection_limit_if_zero ComputeServiceAttachment#send_propagated_connection_limit_if_zero}
  */
  readonly sendPropagatedConnectionLimitIfZero?: boolean | cdktf.IResolvable;
  /**
  * The URL of a service serving the endpoint identified by this service attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#target_service ComputeServiceAttachment#target_service}
  */
  readonly targetService: string;
  /**
  * consumer_accept_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#consumer_accept_lists ComputeServiceAttachment#consumer_accept_lists}
  */
  readonly consumerAcceptLists?: ComputeServiceAttachmentConsumerAcceptLists[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#timeouts ComputeServiceAttachment#timeouts}
  */
  readonly timeouts?: ComputeServiceAttachmentTimeouts;
}
export interface ComputeServiceAttachmentConnectedEndpoints {
}

export function computeServiceAttachmentConnectedEndpointsToTerraform(struct?: ComputeServiceAttachmentConnectedEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeServiceAttachmentConnectedEndpointsToHclTerraform(struct?: ComputeServiceAttachmentConnectedEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeServiceAttachmentConnectedEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeServiceAttachmentConnectedEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeServiceAttachmentConnectedEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consumer_network - computed: true, optional: false, required: false
  public get consumerNetwork() {
    return this.getStringAttribute('consumer_network');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // propagated_connection_count - computed: true, optional: false, required: false
  public get propagatedConnectionCount() {
    return this.getNumberAttribute('propagated_connection_count');
  }

  // psc_connection_id - computed: true, optional: false, required: false
  public get pscConnectionId() {
    return this.getStringAttribute('psc_connection_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class ComputeServiceAttachmentConnectedEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): ComputeServiceAttachmentConnectedEndpointsOutputReference {
    return new ComputeServiceAttachmentConnectedEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeServiceAttachmentConsumerAcceptLists {
  /**
  * The number of consumer forwarding rules the consumer project can
  * create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#connection_limit ComputeServiceAttachment#connection_limit}
  */
  readonly connectionLimit: number;
  /**
  * The network that is allowed to connect to this service attachment.
  * Only one of project_id_or_num and network_url may be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#network_url ComputeServiceAttachment#network_url}
  */
  readonly networkUrl?: string;
  /**
  * A project that is allowed to connect to this service attachment.
  * Only one of project_id_or_num and network_url may be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#project_id_or_num ComputeServiceAttachment#project_id_or_num}
  */
  readonly projectIdOrNum?: string;
}

export function computeServiceAttachmentConsumerAcceptListsToTerraform(struct?: ComputeServiceAttachmentConsumerAcceptLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_limit: cdktf.numberToTerraform(struct!.connectionLimit),
    network_url: cdktf.stringToTerraform(struct!.networkUrl),
    project_id_or_num: cdktf.stringToTerraform(struct!.projectIdOrNum),
  }
}


export function computeServiceAttachmentConsumerAcceptListsToHclTerraform(struct?: ComputeServiceAttachmentConsumerAcceptLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_limit: {
      value: cdktf.numberToHclTerraform(struct!.connectionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_url: {
      value: cdktf.stringToHclTerraform(struct!.networkUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id_or_num: {
      value: cdktf.stringToHclTerraform(struct!.projectIdOrNum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeServiceAttachmentConsumerAcceptListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeServiceAttachmentConsumerAcceptLists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLimit = this._connectionLimit;
    }
    if (this._networkUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkUrl = this._networkUrl;
    }
    if (this._projectIdOrNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectIdOrNum = this._projectIdOrNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeServiceAttachmentConsumerAcceptLists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionLimit = undefined;
      this._networkUrl = undefined;
      this._projectIdOrNum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionLimit = value.connectionLimit;
      this._networkUrl = value.networkUrl;
      this._projectIdOrNum = value.projectIdOrNum;
    }
  }

  // connection_limit - computed: false, optional: false, required: true
  private _connectionLimit?: number; 
  public get connectionLimit() {
    return this.getNumberAttribute('connection_limit');
  }
  public set connectionLimit(value: number) {
    this._connectionLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitInput() {
    return this._connectionLimit;
  }

  // network_url - computed: false, optional: true, required: false
  private _networkUrl?: string; 
  public get networkUrl() {
    return this.getStringAttribute('network_url');
  }
  public set networkUrl(value: string) {
    this._networkUrl = value;
  }
  public resetNetworkUrl() {
    this._networkUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkUrlInput() {
    return this._networkUrl;
  }

  // project_id_or_num - computed: false, optional: true, required: false
  private _projectIdOrNum?: string; 
  public get projectIdOrNum() {
    return this.getStringAttribute('project_id_or_num');
  }
  public set projectIdOrNum(value: string) {
    this._projectIdOrNum = value;
  }
  public resetProjectIdOrNum() {
    this._projectIdOrNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdOrNumInput() {
    return this._projectIdOrNum;
  }
}

export class ComputeServiceAttachmentConsumerAcceptListsList extends cdktf.ComplexList {
  public internalValue? : ComputeServiceAttachmentConsumerAcceptLists[] | cdktf.IResolvable

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
  public get(index: number): ComputeServiceAttachmentConsumerAcceptListsOutputReference {
    return new ComputeServiceAttachmentConsumerAcceptListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeServiceAttachmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#create ComputeServiceAttachment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#delete ComputeServiceAttachment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#update ComputeServiceAttachment#update}
  */
  readonly update?: string;
}

export function computeServiceAttachmentTimeoutsToTerraform(struct?: ComputeServiceAttachmentTimeouts | cdktf.IResolvable): any {
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


export function computeServiceAttachmentTimeoutsToHclTerraform(struct?: ComputeServiceAttachmentTimeouts | cdktf.IResolvable): any {
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

export class ComputeServiceAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeServiceAttachmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeServiceAttachmentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment google_compute_service_attachment}
*/
export class ComputeServiceAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_service_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeServiceAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeServiceAttachment to import
  * @param importFromId The id of the existing ComputeServiceAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeServiceAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_service_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_service_attachment google_compute_service_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeServiceAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeServiceAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_service_attachment',
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
    this._connectionPreference = config.connectionPreference;
    this._consumerRejectLists = config.consumerRejectLists;
    this._description = config.description;
    this._domainNames = config.domainNames;
    this._enableProxyProtocol = config.enableProxyProtocol;
    this._id = config.id;
    this._name = config.name;
    this._natSubnets = config.natSubnets;
    this._project = config.project;
    this._propagatedConnectionLimit = config.propagatedConnectionLimit;
    this._reconcileConnections = config.reconcileConnections;
    this._region = config.region;
    this._sendPropagatedConnectionLimitIfZero = config.sendPropagatedConnectionLimitIfZero;
    this._targetService = config.targetService;
    this._consumerAcceptLists.internalValue = config.consumerAcceptLists;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connected_endpoints - computed: true, optional: false, required: false
  private _connectedEndpoints = new ComputeServiceAttachmentConnectedEndpointsList(this, "connected_endpoints", false);
  public get connectedEndpoints() {
    return this._connectedEndpoints;
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

  // consumer_reject_lists - computed: false, optional: true, required: false
  private _consumerRejectLists?: string[]; 
  public get consumerRejectLists() {
    return this.getListAttribute('consumer_reject_lists');
  }
  public set consumerRejectLists(value: string[]) {
    this._consumerRejectLists = value;
  }
  public resetConsumerRejectLists() {
    this._consumerRejectLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerRejectListsInput() {
    return this._consumerRejectLists;
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

  // domain_names - computed: false, optional: true, required: false
  private _domainNames?: string[]; 
  public get domainNames() {
    return this.getListAttribute('domain_names');
  }
  public set domainNames(value: string[]) {
    this._domainNames = value;
  }
  public resetDomainNames() {
    this._domainNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNamesInput() {
    return this._domainNames;
  }

  // enable_proxy_protocol - computed: false, optional: false, required: true
  private _enableProxyProtocol?: boolean | cdktf.IResolvable; 
  public get enableProxyProtocol() {
    return this.getBooleanAttribute('enable_proxy_protocol');
  }
  public set enableProxyProtocol(value: boolean | cdktf.IResolvable) {
    this._enableProxyProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableProxyProtocolInput() {
    return this._enableProxyProtocol;
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
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

  // nat_subnets - computed: false, optional: false, required: true
  private _natSubnets?: string[]; 
  public get natSubnets() {
    return this.getListAttribute('nat_subnets');
  }
  public set natSubnets(value: string[]) {
    this._natSubnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natSubnetsInput() {
    return this._natSubnets;
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

  // propagated_connection_limit - computed: true, optional: true, required: false
  private _propagatedConnectionLimit?: number; 
  public get propagatedConnectionLimit() {
    return this.getNumberAttribute('propagated_connection_limit');
  }
  public set propagatedConnectionLimit(value: number) {
    this._propagatedConnectionLimit = value;
  }
  public resetPropagatedConnectionLimit() {
    this._propagatedConnectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagatedConnectionLimitInput() {
    return this._propagatedConnectionLimit;
  }

  // reconcile_connections - computed: true, optional: true, required: false
  private _reconcileConnections?: boolean | cdktf.IResolvable; 
  public get reconcileConnections() {
    return this.getBooleanAttribute('reconcile_connections');
  }
  public set reconcileConnections(value: boolean | cdktf.IResolvable) {
    this._reconcileConnections = value;
  }
  public resetReconcileConnections() {
    this._reconcileConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconcileConnectionsInput() {
    return this._reconcileConnections;
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

  // send_propagated_connection_limit_if_zero - computed: false, optional: true, required: false
  private _sendPropagatedConnectionLimitIfZero?: boolean | cdktf.IResolvable; 
  public get sendPropagatedConnectionLimitIfZero() {
    return this.getBooleanAttribute('send_propagated_connection_limit_if_zero');
  }
  public set sendPropagatedConnectionLimitIfZero(value: boolean | cdktf.IResolvable) {
    this._sendPropagatedConnectionLimitIfZero = value;
  }
  public resetSendPropagatedConnectionLimitIfZero() {
    this._sendPropagatedConnectionLimitIfZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendPropagatedConnectionLimitIfZeroInput() {
    return this._sendPropagatedConnectionLimitIfZero;
  }

  // target_service - computed: false, optional: false, required: true
  private _targetService?: string; 
  public get targetService() {
    return this.getStringAttribute('target_service');
  }
  public set targetService(value: string) {
    this._targetService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetServiceInput() {
    return this._targetService;
  }

  // consumer_accept_lists - computed: false, optional: true, required: false
  private _consumerAcceptLists = new ComputeServiceAttachmentConsumerAcceptListsList(this, "consumer_accept_lists", true);
  public get consumerAcceptLists() {
    return this._consumerAcceptLists;
  }
  public putConsumerAcceptLists(value: ComputeServiceAttachmentConsumerAcceptLists[] | cdktf.IResolvable) {
    this._consumerAcceptLists.internalValue = value;
  }
  public resetConsumerAcceptLists() {
    this._consumerAcceptLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerAcceptListsInput() {
    return this._consumerAcceptLists.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeServiceAttachmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeServiceAttachmentTimeouts) {
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
      consumer_reject_lists: cdktf.listMapper(cdktf.stringToTerraform, false)(this._consumerRejectLists),
      description: cdktf.stringToTerraform(this._description),
      domain_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainNames),
      enable_proxy_protocol: cdktf.booleanToTerraform(this._enableProxyProtocol),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      nat_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._natSubnets),
      project: cdktf.stringToTerraform(this._project),
      propagated_connection_limit: cdktf.numberToTerraform(this._propagatedConnectionLimit),
      reconcile_connections: cdktf.booleanToTerraform(this._reconcileConnections),
      region: cdktf.stringToTerraform(this._region),
      send_propagated_connection_limit_if_zero: cdktf.booleanToTerraform(this._sendPropagatedConnectionLimitIfZero),
      target_service: cdktf.stringToTerraform(this._targetService),
      consumer_accept_lists: cdktf.listMapper(computeServiceAttachmentConsumerAcceptListsToTerraform, true)(this._consumerAcceptLists.internalValue),
      timeouts: computeServiceAttachmentTimeoutsToTerraform(this._timeouts.internalValue),
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
      consumer_reject_lists: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._consumerRejectLists),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      enable_proxy_protocol: {
        value: cdktf.booleanToHclTerraform(this._enableProxyProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      nat_subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._natSubnets),
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
      propagated_connection_limit: {
        value: cdktf.numberToHclTerraform(this._propagatedConnectionLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reconcile_connections: {
        value: cdktf.booleanToHclTerraform(this._reconcileConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_propagated_connection_limit_if_zero: {
        value: cdktf.booleanToHclTerraform(this._sendPropagatedConnectionLimitIfZero),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      target_service: {
        value: cdktf.stringToHclTerraform(this._targetService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumer_accept_lists: {
        value: cdktf.listMapperHcl(computeServiceAttachmentConsumerAcceptListsToHclTerraform, true)(this._consumerAcceptLists.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ComputeServiceAttachmentConsumerAcceptListsList",
      },
      timeouts: {
        value: computeServiceAttachmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeServiceAttachmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
