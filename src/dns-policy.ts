// https://www.terraform.io/docs/providers/google/r/dns_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A textual description field. Defaults to 'Managed by Terraform'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy.html#description DnsPolicy#description}
  */
  readonly description?: string;
  /**
  * Allows networks bound to this policy to receive DNS queries sent
by VMs or applications over VPN connections. When enabled, a
virtual IP address will be allocated from each of the sub-networks
that are bound to this policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy.html#enable_inbound_forwarding DnsPolicy#enable_inbound_forwarding}
  */
  readonly enableInboundForwarding?: boolean | cdktf.IResolvable;
  /**
  * Controls whether logging is enabled for the networks bound to this policy.
Defaults to no logging if not set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy.html#enable_logging DnsPolicy#enable_logging}
  */
  readonly enableLogging?: boolean | cdktf.IResolvable;
  /**
  * User assigned name for this policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy.html#name DnsPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy.html#project DnsPolicy#project}
  */
  readonly project?: string;
  /**
  * alternative_name_server_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy.html#alternative_name_server_config DnsPolicy#alternative_name_server_config}
  */
  readonly alternativeNameServerConfig?: DnsPolicyAlternativeNameServerConfig[];
  /**
  * networks block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy.html#networks DnsPolicy#networks}
  */
  readonly networks?: DnsPolicyNetworks[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy.html#timeouts DnsPolicy#timeouts}
  */
  readonly timeouts?: DnsPolicyTimeouts;
}
export interface DnsPolicyAlternativeNameServerConfigTargetNameServers {
  /**
  * Forwarding path for this TargetNameServer. If unset or 'default' Cloud DNS will make forwarding
decision based on address ranges, i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go
to the Internet. When set to 'private', Cloud DNS will always send queries through VPC for this target Possible values: ["default", "private"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy.html#forwarding_path DnsPolicy#forwarding_path}
  */
  readonly forwardingPath?: string;
  /**
  * IPv4 address to forward to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy.html#ipv4_address DnsPolicy#ipv4_address}
  */
  readonly ipv4Address: string;
}

function dnsPolicyAlternativeNameServerConfigTargetNameServersToTerraform(struct?: DnsPolicyAlternativeNameServerConfigTargetNameServers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    forwarding_path: cdktf.stringToTerraform(struct!.forwardingPath),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
  }
}

export interface DnsPolicyAlternativeNameServerConfig {
  /**
  * target_name_servers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy.html#target_name_servers DnsPolicy#target_name_servers}
  */
  readonly targetNameServers: DnsPolicyAlternativeNameServerConfigTargetNameServers[];
}

function dnsPolicyAlternativeNameServerConfigToTerraform(struct?: DnsPolicyAlternativeNameServerConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    target_name_servers: cdktf.listMapper(dnsPolicyAlternativeNameServerConfigTargetNameServersToTerraform)(struct!.targetNameServers),
  }
}

export interface DnsPolicyNetworks {
  /**
  * The id or fully qualified URL of the VPC network to forward queries to.
This should be formatted like 'projects/{project}/global/networks/{network}' or
'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy.html#network_url DnsPolicy#network_url}
  */
  readonly networkUrl: string;
}

function dnsPolicyNetworksToTerraform(struct?: DnsPolicyNetworks): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    network_url: cdktf.stringToTerraform(struct!.networkUrl),
  }
}

export interface DnsPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy.html#create DnsPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy.html#delete DnsPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy.html#update DnsPolicy#update}
  */
  readonly update?: string;
}

function dnsPolicyTimeoutsToTerraform(struct?: DnsPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/dns_policy.html google_dns_policy}
*/
export class DnsPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_dns_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/dns_policy.html google_dns_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsPolicyConfig
  */
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

  // enable_inbound_forwarding - computed: false, optional: true, required: false
  private _enableInboundForwarding?: boolean | cdktf.IResolvable;
  public get enableInboundForwarding() {
    return this.getBooleanAttribute('enable_inbound_forwarding');
  }
  public set enableInboundForwarding(value: boolean | cdktf.IResolvable ) {
    this._enableInboundForwarding = value;
  }
  public resetEnableInboundForwarding() {
    this._enableInboundForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInboundForwardingInput() {
    return this._enableInboundForwarding
  }

  // enable_logging - computed: false, optional: true, required: false
  private _enableLogging?: boolean | cdktf.IResolvable;
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
  }
  public set enableLogging(value: boolean | cdktf.IResolvable ) {
    this._enableLogging = value;
  }
  public resetEnableLogging() {
    this._enableLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoggingInput() {
    return this._enableLogging
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // alternative_name_server_config - computed: false, optional: true, required: false
  private _alternativeNameServerConfig?: DnsPolicyAlternativeNameServerConfig[];
  public get alternativeNameServerConfig() {
    return this.interpolationForAttribute('alternative_name_server_config') as any;
  }
  public set alternativeNameServerConfig(value: DnsPolicyAlternativeNameServerConfig[] ) {
    this._alternativeNameServerConfig = value;
  }
  public resetAlternativeNameServerConfig() {
    this._alternativeNameServerConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternativeNameServerConfigInput() {
    return this._alternativeNameServerConfig
  }

  // networks - computed: false, optional: true, required: false
  private _networks?: DnsPolicyNetworks[];
  public get networks() {
    return this.interpolationForAttribute('networks') as any;
  }
  public set networks(value: DnsPolicyNetworks[] ) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DnsPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DnsPolicyTimeouts ) {
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
      enable_inbound_forwarding: cdktf.booleanToTerraform(this._enableInboundForwarding),
      enable_logging: cdktf.booleanToTerraform(this._enableLogging),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      alternative_name_server_config: cdktf.listMapper(dnsPolicyAlternativeNameServerConfigToTerraform)(this._alternativeNameServerConfig),
      networks: cdktf.listMapper(dnsPolicyNetworksToTerraform)(this._networks),
      timeouts: dnsPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
