// https://www.terraform.io/docs/providers/google/r/network_management_connectivity_test.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkManagementConnectivityTestConfig extends cdktf.TerraformMetaArguments {
  /** The user-supplied description of the Connectivity Test.
Maximum of 512 characters. */
  readonly description?: string;
  /** Resource labels to represent user-provided metadata. */
  readonly labels?: { [key: string]: string };
  /** Unique name for the connectivity test. */
  readonly name: string;
  readonly project?: string;
  /** IP Protocol of the test. When not provided, "TCP" is assumed. */
  readonly protocol?: string;
  /** Other projects that may be relevant for reachability analysis.
This is applicable to scenarios where a test can cross project
boundaries. */
  readonly relatedProjects?: string[];
  /** destination block */
  readonly destination: NetworkManagementConnectivityTestDestination[];
  /** source block */
  readonly source: NetworkManagementConnectivityTestSource[];
  /** timeouts block */
  readonly timeouts?: NetworkManagementConnectivityTestTimeouts;
}
export interface NetworkManagementConnectivityTestDestination {
  /** A Compute Engine instance URI. */
  readonly instance?: string;
  /** The IP address of the endpoint, which can be an external or
internal IP. An IPv6 address is only allowed when the test's
destination is a global load balancer VIP. */
  readonly ipAddress?: string;
  /** A Compute Engine network URI. */
  readonly network?: string;
  /** The IP protocol port of the endpoint. Only applicable when
protocol is TCP or UDP. */
  readonly port?: number;
  /** Project ID where the endpoint is located. The Project ID can be
derived from the URI if you provide a VM instance or network URI.
The following are two cases where you must provide the project ID:
1. Only the IP address is specified, and the IP address is within
a GCP project. 2. When you are using Shared VPC and the IP address
that you provide is from the service project. In this case, the
network that the IP address resides in is defined in the host
project. */
  readonly projectId?: string;
}

function networkManagementConnectivityTestDestinationToTerraform(struct?: NetworkManagementConnectivityTestDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance: cdktf.stringToTerraform(struct!.instance),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    network: cdktf.stringToTerraform(struct!.network),
    port: cdktf.numberToTerraform(struct!.port),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}

export interface NetworkManagementConnectivityTestSource {
  /** A Compute Engine instance URI. */
  readonly instance?: string;
  /** The IP address of the endpoint, which can be an external or
internal IP. An IPv6 address is only allowed when the test's
destination is a global load balancer VIP. */
  readonly ipAddress?: string;
  /** A Compute Engine network URI. */
  readonly network?: string;
  /** Type of the network where the endpoint is located. Possible values: ["GCP_NETWORK", "NON_GCP_NETWORK"] */
  readonly networkType?: string;
  /** The IP protocol port of the endpoint. Only applicable when
protocol is TCP or UDP. */
  readonly port?: number;
  /** Project ID where the endpoint is located. The Project ID can be
derived from the URI if you provide a VM instance or network URI.
The following are two cases where you must provide the project ID:

1. Only the IP address is specified, and the IP address is
   within a GCP project.
2. When you are using Shared VPC and the IP address
   that you provide is from the service project. In this case,
   the network that the IP address resides in is defined in the
   host project. */
  readonly projectId?: string;
}

function networkManagementConnectivityTestSourceToTerraform(struct?: NetworkManagementConnectivityTestSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance: cdktf.stringToTerraform(struct!.instance),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    network: cdktf.stringToTerraform(struct!.network),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    port: cdktf.numberToTerraform(struct!.port),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}

export interface NetworkManagementConnectivityTestTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function networkManagementConnectivityTestTimeoutsToTerraform(struct?: NetworkManagementConnectivityTestTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class NetworkManagementConnectivityTest extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NetworkManagementConnectivityTestConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_management_connectivity_test',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._labels = config.labels;
    this._name = config.name;
    this._project = config.project;
    this._protocol = config.protocol;
    this._relatedProjects = config.relatedProjects;
    this._destination = config.destination;
    this._source = config.source;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } ) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
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
    return this._project
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string;
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string ) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol
  }

  // related_projects - computed: false, optional: true, required: false
  private _relatedProjects?: string[];
  public get relatedProjects() {
    return this.getListAttribute('related_projects');
  }
  public set relatedProjects(value: string[] ) {
    this._relatedProjects = value;
  }
  public resetRelatedProjects() {
    this._relatedProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedProjectsInput() {
    return this._relatedProjects
  }

  // destination - computed: false, optional: false, required: true
  private _destination: NetworkManagementConnectivityTestDestination[];
  public get destination() {
    return this.interpolationForAttribute('destination') as any;
  }
  public set destination(value: NetworkManagementConnectivityTestDestination[]) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination
  }

  // source - computed: false, optional: false, required: true
  private _source: NetworkManagementConnectivityTestSource[];
  public get source() {
    return this.interpolationForAttribute('source') as any;
  }
  public set source(value: NetworkManagementConnectivityTestSource[]) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetworkManagementConnectivityTestTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: NetworkManagementConnectivityTestTimeouts ) {
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
      description: cdktf.stringToTerraform(this._description),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      protocol: cdktf.stringToTerraform(this._protocol),
      related_projects: cdktf.listMapper(cdktf.stringToTerraform)(this._relatedProjects),
      destination: cdktf.listMapper(networkManagementConnectivityTestDestinationToTerraform)(this._destination),
      source: cdktf.listMapper(networkManagementConnectivityTestSourceToTerraform)(this._source),
      timeouts: networkManagementConnectivityTestTimeoutsToTerraform(this._timeouts),
    };
  }
}
