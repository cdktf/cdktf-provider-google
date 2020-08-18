// https://www.terraform.io/docs/providers/google/r/dns_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DnsPolicyConfig extends TerraformMetaArguments {
  /** A textual description field. Defaults to 'Managed by Terraform'. */
  readonly description?: string;
  /** Allows networks bound to this policy to receive DNS queries sent
by VMs or applications over VPN connections. When enabled, a
virtual IP address will be allocated from each of the sub-networks
that are bound to this policy. */
  readonly enableInboundForwarding?: boolean;
  /** Controls whether logging is enabled for the networks bound to this policy.
Defaults to no logging if not set. */
  readonly enableLogging?: boolean;
  /** User assigned name for this policy. */
  readonly name: string;
  readonly project?: string;
  /** alternative_name_server_config block */
  readonly alternativeNameServerConfig?: DnsPolicyAlternativeNameServerConfig[];
  /** networks block */
  readonly networks?: DnsPolicyNetworks[];
  /** timeouts block */
  readonly timeouts?: DnsPolicyTimeouts;
}
export interface DnsPolicyAlternativeNameServerConfigTargetNameServers {
  /** IPv4 address to forward to. */
  readonly ipv4Address: string;
}
export interface DnsPolicyAlternativeNameServerConfig {
  /** target_name_servers block */
  readonly targetNameServers: DnsPolicyAlternativeNameServerConfigTargetNameServers[];
}
export interface DnsPolicyNetworks {
  /** The id or fully qualified URL of the VPC network to forward queries to.
This should be formatted like 'projects/{project}/global/networks/{network}' or
'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}' */
  readonly networkUrl: string;
}
export interface DnsPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DnsPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DnsPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dns_policy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._enableInboundForwarding = config.enableInboundForwarding;
    this._enableLogging = config.enableLogging;
    this._name = config.name;
    this._project = config.project;
    this._alternativeNameServerConfig = config.alternativeNameServerConfig;
    this._networks = config.networks;
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

  // enable_inbound_forwarding - computed: false, optional: true, required: false
  private _enableInboundForwarding?: boolean;
  public get enableInboundForwarding() {
    return this._enableInboundForwarding;
  }
  public set enableInboundForwarding(value: boolean | undefined) {
    this._enableInboundForwarding = value;
  }

  // enable_logging - computed: false, optional: true, required: false
  private _enableLogging?: boolean;
  public get enableLogging() {
    return this._enableLogging;
  }
  public set enableLogging(value: boolean | undefined) {
    this._enableLogging = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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

  // alternative_name_server_config - computed: false, optional: true, required: false
  private _alternativeNameServerConfig?: DnsPolicyAlternativeNameServerConfig[];
  public get alternativeNameServerConfig() {
    return this._alternativeNameServerConfig;
  }
  public set alternativeNameServerConfig(value: DnsPolicyAlternativeNameServerConfig[] | undefined) {
    this._alternativeNameServerConfig = value;
  }

  // networks - computed: false, optional: true, required: false
  private _networks?: DnsPolicyNetworks[];
  public get networks() {
    return this._networks;
  }
  public set networks(value: DnsPolicyNetworks[] | undefined) {
    this._networks = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DnsPolicyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DnsPolicyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      enable_inbound_forwarding: this._enableInboundForwarding,
      enable_logging: this._enableLogging,
      name: this._name,
      project: this._project,
      alternative_name_server_config: this._alternativeNameServerConfig,
      networks: this._networks,
      timeouts: this._timeouts,
    };
  }
}
