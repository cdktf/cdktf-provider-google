// https://www.terraform.io/docs/providers/google/r/network_management_connectivity_test.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NetworkManagementConnectivityTestConfig extends TerraformMetaArguments {
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
export interface NetworkManagementConnectivityTestTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class NetworkManagementConnectivityTest extends TerraformResource {

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
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this._labels;
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this._labels = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string;
  public get protocol() {
    return this._protocol;
  }
  public set protocol(value: string | undefined) {
    this._protocol = value;
  }

  // related_projects - computed: false, optional: true, required: false
  private _relatedProjects?: string[];
  public get relatedProjects() {
    return this._relatedProjects;
  }
  public set relatedProjects(value: string[] | undefined) {
    this._relatedProjects = value;
  }

  // destination - computed: false, optional: false, required: true
  private _destination: NetworkManagementConnectivityTestDestination[];
  public get destination() {
    return this._destination;
  }
  public set destination(value: NetworkManagementConnectivityTestDestination[]) {
    this._destination = value;
  }

  // source - computed: false, optional: false, required: true
  private _source: NetworkManagementConnectivityTestSource[];
  public get source() {
    return this._source;
  }
  public set source(value: NetworkManagementConnectivityTestSource[]) {
    this._source = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetworkManagementConnectivityTestTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: NetworkManagementConnectivityTestTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      labels: this._labels,
      name: this._name,
      project: this._project,
      protocol: this._protocol,
      related_projects: this._relatedProjects,
      destination: this._destination,
      source: this._source,
      timeouts: this._timeouts,
    };
  }
}
