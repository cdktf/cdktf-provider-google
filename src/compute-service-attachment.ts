// https://www.terraform.io/docs/providers/google/r/compute_service_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeServiceAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The connection preference to use for this service attachment. Valid
values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment.html#connection_preference ComputeServiceAttachment#connection_preference}
  */
  readonly connectionPreference: string;
  /**
  * An array of projects that are not allowed to connect to this service
attachment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment.html#consumer_reject_lists ComputeServiceAttachment#consumer_reject_lists}
  */
  readonly consumerRejectLists?: string[];
  /**
  * An optional description of this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment.html#description ComputeServiceAttachment#description}
  */
  readonly description?: string;
  /**
  * If true, enable the proxy protocol which is for supplying client TCP/IP
address data in TCP connections that traverse proxies on their way to
destination servers.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment.html#enable_proxy_protocol ComputeServiceAttachment#enable_proxy_protocol}
  */
  readonly enableProxyProtocol: boolean | cdktf.IResolvable;
  /**
  * Name of the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment.html#name ComputeServiceAttachment#name}
  */
  readonly name: string;
  /**
  * An array of subnets that is provided for NAT in this service attachment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment.html#nat_subnets ComputeServiceAttachment#nat_subnets}
  */
  readonly natSubnets: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment.html#project ComputeServiceAttachment#project}
  */
  readonly project?: string;
  /**
  * URL of the region where the resource resides.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment.html#region ComputeServiceAttachment#region}
  */
  readonly region?: string;
  /**
  * The URL of a forwarding rule that represents the service identified by
this service attachment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment.html#target_service ComputeServiceAttachment#target_service}
  */
  readonly targetService: string;
  /**
  * consumer_accept_lists block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment.html#consumer_accept_lists ComputeServiceAttachment#consumer_accept_lists}
  */
  readonly consumerAcceptLists?: ComputeServiceAttachmentConsumerAcceptLists[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment.html#timeouts ComputeServiceAttachment#timeouts}
  */
  readonly timeouts?: ComputeServiceAttachmentTimeouts;
}
export class ComputeServiceAttachmentConnectedEndpoints extends cdktf.ComplexComputedList {

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface ComputeServiceAttachmentConsumerAcceptLists {
  /**
  * The number of consumer forwarding rules the consumer project can
create.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment.html#connection_limit ComputeServiceAttachment#connection_limit}
  */
  readonly connectionLimit: number;
  /**
  * A project that is allowed to connect to this service attachment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment.html#project_id_or_num ComputeServiceAttachment#project_id_or_num}
  */
  readonly projectIdOrNum: string;
}

function computeServiceAttachmentConsumerAcceptListsToTerraform(struct?: ComputeServiceAttachmentConsumerAcceptLists): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_limit: cdktf.numberToTerraform(struct!.connectionLimit),
    project_id_or_num: cdktf.stringToTerraform(struct!.projectIdOrNum),
  }
}

export interface ComputeServiceAttachmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment.html#create ComputeServiceAttachment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment.html#delete ComputeServiceAttachment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment.html#update ComputeServiceAttachment#update}
  */
  readonly update?: string;
}

function computeServiceAttachmentTimeoutsToTerraform(struct?: ComputeServiceAttachmentTimeoutsOutputReference | ComputeServiceAttachmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ComputeServiceAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment.html google_compute_service_attachment}
*/
export class ComputeServiceAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_service_attachment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment.html google_compute_service_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeServiceAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeServiceAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_service_attachment',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._connectionPreference = config.connectionPreference;
    this._consumerRejectLists = config.consumerRejectLists;
    this._description = config.description;
    this._enableProxyProtocol = config.enableProxyProtocol;
    this._name = config.name;
    this._natSubnets = config.natSubnets;
    this._project = config.project;
    this._region = config.region;
    this._targetService = config.targetService;
    this._consumerAcceptLists = config.consumerAcceptLists;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connected_endpoints - computed: true, optional: false, required: false
  public connectedEndpoints(index: string) {
    return new ComputeServiceAttachmentConnectedEndpoints(this, 'connected_endpoints', index);
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
    return this._connectionPreference
  }

  // consumer_reject_lists - computed: false, optional: true, required: false
  private _consumerRejectLists?: string[] | undefined; 
  public get consumerRejectLists() {
    return this.getListAttribute('consumer_reject_lists');
  }
  public set consumerRejectLists(value: string[] | undefined) {
    this._consumerRejectLists = value;
  }
  public resetConsumerRejectLists() {
    this._consumerRejectLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerRejectListsInput() {
    return this._consumerRejectLists
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // enable_proxy_protocol - computed: false, optional: false, required: true
  private _enableProxyProtocol?: boolean | cdktf.IResolvable; 
  public get enableProxyProtocol() {
    return this.getBooleanAttribute('enable_proxy_protocol') as any;
  }
  public set enableProxyProtocol(value: boolean | cdktf.IResolvable) {
    this._enableProxyProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableProxyProtocolInput() {
    return this._enableProxyProtocol
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._name
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
    return this._natSubnets
  }

  // project - computed: true, optional: true, required: false
  private _project?: string | undefined; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // region - computed: true, optional: true, required: false
  private _region?: string | undefined; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
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
    return this._targetService
  }

  // consumer_accept_lists - computed: false, optional: true, required: false
  private _consumerAcceptLists?: ComputeServiceAttachmentConsumerAcceptLists[] | undefined; 
  public get consumerAcceptLists() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('consumer_accept_lists') as any;
  }
  public set consumerAcceptLists(value: ComputeServiceAttachmentConsumerAcceptLists[] | undefined) {
    this._consumerAcceptLists = value;
  }
  public resetConsumerAcceptLists() {
    this._consumerAcceptLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerAcceptListsInput() {
    return this._consumerAcceptLists
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeServiceAttachmentTimeouts | undefined; 
  private __timeoutsOutput = new ComputeServiceAttachmentTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ComputeServiceAttachmentTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_preference: cdktf.stringToTerraform(this._connectionPreference),
      consumer_reject_lists: cdktf.listMapper(cdktf.stringToTerraform)(this._consumerRejectLists),
      description: cdktf.stringToTerraform(this._description),
      enable_proxy_protocol: cdktf.booleanToTerraform(this._enableProxyProtocol),
      name: cdktf.stringToTerraform(this._name),
      nat_subnets: cdktf.listMapper(cdktf.stringToTerraform)(this._natSubnets),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      target_service: cdktf.stringToTerraform(this._targetService),
      consumer_accept_lists: cdktf.listMapper(computeServiceAttachmentConsumerAcceptListsToTerraform)(this._consumerAcceptLists),
      timeouts: computeServiceAttachmentTimeoutsToTerraform(this._timeouts),
    };
  }
}
