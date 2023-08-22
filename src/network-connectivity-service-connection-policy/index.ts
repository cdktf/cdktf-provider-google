/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/network_connectivity_service_connection_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkConnectivityServiceConnectionPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Free-text description of the resource.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/network_connectivity_service_connection_policy#description NetworkConnectivityServiceConnectionPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/network_connectivity_service_connection_policy#id NetworkConnectivityServiceConnectionPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User-defined labels.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/network_connectivity_service_connection_policy#labels NetworkConnectivityServiceConnectionPolicy#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location of the ServiceConnectionPolicy.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/network_connectivity_service_connection_policy#location NetworkConnectivityServiceConnectionPolicy#location}
  */
  readonly location: string;
  /**
  * The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/network_connectivity_service_connection_policy#name NetworkConnectivityServiceConnectionPolicy#name}
  */
  readonly name: string;
  /**
  * The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/network_connectivity_service_connection_policy#network NetworkConnectivityServiceConnectionPolicy#network}
  */
  readonly network: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/network_connectivity_service_connection_policy#project NetworkConnectivityServiceConnectionPolicy#project}
  */
  readonly project?: string;
  /**
  * The service class identifier for which this ServiceConnectionPolicy is for. The service class identifier is a unique, symbolic representation of a ServiceClass.
It is provided by the Service Producer. Google services have a prefix of gcp. For example, gcp-cloud-sql. 3rd party services do not. For example, test-service-a3dfcx.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/network_connectivity_service_connection_policy#service_class NetworkConnectivityServiceConnectionPolicy#service_class}
  */
  readonly serviceClass: string;
  /**
  * psc_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/network_connectivity_service_connection_policy#psc_config NetworkConnectivityServiceConnectionPolicy#psc_config}
  */
  readonly pscConfig?: NetworkConnectivityServiceConnectionPolicyPscConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/network_connectivity_service_connection_policy#timeouts NetworkConnectivityServiceConnectionPolicy#timeouts}
  */
  readonly timeouts?: NetworkConnectivityServiceConnectionPolicyTimeouts;
}
export interface NetworkConnectivityServiceConnectionPolicyPscConfig {
  /**
  * Max number of PSC connections for this policy.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/network_connectivity_service_connection_policy#limit NetworkConnectivityServiceConnectionPolicy#limit}
  */
  readonly limit?: string;
  /**
  * IDs of the subnetworks or fully qualified identifiers for the subnetworks
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/network_connectivity_service_connection_policy#subnetworks NetworkConnectivityServiceConnectionPolicy#subnetworks}
  */
  readonly subnetworks: string[];
}

export function networkConnectivityServiceConnectionPolicyPscConfigToTerraform(struct?: NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference | NetworkConnectivityServiceConnectionPolicyPscConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    subnetworks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetworks),
  }
}

export class NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkConnectivityServiceConnectionPolicyPscConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._subnetworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetworks = this._subnetworks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectivityServiceConnectionPolicyPscConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limit = undefined;
      this._subnetworks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limit = value.limit;
      this._subnetworks = value.subnetworks;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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
}
export interface NetworkConnectivityServiceConnectionPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/network_connectivity_service_connection_policy#create NetworkConnectivityServiceConnectionPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/network_connectivity_service_connection_policy#delete NetworkConnectivityServiceConnectionPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/network_connectivity_service_connection_policy#update NetworkConnectivityServiceConnectionPolicy#update}
  */
  readonly update?: string;
}

export function networkConnectivityServiceConnectionPolicyTimeoutsToTerraform(struct?: NetworkConnectivityServiceConnectionPolicyTimeouts | cdktf.IResolvable): any {
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

export class NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkConnectivityServiceConnectionPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkConnectivityServiceConnectionPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/network_connectivity_service_connection_policy google_network_connectivity_service_connection_policy}
*/
export class NetworkConnectivityServiceConnectionPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_connectivity_service_connection_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/network_connectivity_service_connection_policy google_network_connectivity_service_connection_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkConnectivityServiceConnectionPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkConnectivityServiceConnectionPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_connectivity_service_connection_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.79.0',
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
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._network = config.network;
    this._project = config.project;
    this._serviceClass = config.serviceClass;
    this._pscConfig.internalValue = config.pscConfig;
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

  // infrastructure - computed: true, optional: false, required: false
  public get infrastructure() {
    return this.getStringAttribute('infrastructure');
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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
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

  // psc_connections - computed: true, optional: false, required: false
  public get pscConnections() {
    return this.getListAttribute('psc_connections');
  }

  // service_class - computed: false, optional: false, required: true
  private _serviceClass?: string; 
  public get serviceClass() {
    return this.getStringAttribute('service_class');
  }
  public set serviceClass(value: string) {
    this._serviceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceClassInput() {
    return this._serviceClass;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // psc_config - computed: false, optional: true, required: false
  private _pscConfig = new NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference(this, "psc_config");
  public get pscConfig() {
    return this._pscConfig;
  }
  public putPscConfig(value: NetworkConnectivityServiceConnectionPolicyPscConfig) {
    this._pscConfig.internalValue = value;
  }
  public resetPscConfig() {
    this._pscConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscConfigInput() {
    return this._pscConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkConnectivityServiceConnectionPolicyTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      project: cdktf.stringToTerraform(this._project),
      service_class: cdktf.stringToTerraform(this._serviceClass),
      psc_config: networkConnectivityServiceConnectionPolicyPscConfigToTerraform(this._pscConfig.internalValue),
      timeouts: networkConnectivityServiceConnectionPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
