// https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsManagedZoneConfig extends cdktf.TerraformMetaArguments {
  /** A textual description field. Defaults to 'Managed by Terraform'. */
  readonly description?: string;
  /** The DNS name of this managed zone, for instance "example.com.". */
  readonly dnsName: string;
  readonly forceDestroy?: boolean;
  /** A set of key/value label pairs to assign to this ManagedZone. */
  readonly labels?: { [key: string]: string };
  /** User assigned name for this resource.
Must be unique within the project. */
  readonly name: string;
  readonly project?: string;
  /** The zone's visibility: public zones are exposed to the Internet,
while private zones are visible only to Virtual Private Cloud resources. Default value: "public" Possible values: ["private", "public"] */
  readonly visibility?: string;
  /** dnssec_config block */
  readonly dnssecConfig?: DnsManagedZoneDnssecConfig[];
  /** forwarding_config block */
  readonly forwardingConfig?: DnsManagedZoneForwardingConfig[];
  /** peering_config block */
  readonly peeringConfig?: DnsManagedZonePeeringConfig[];
  /** private_visibility_config block */
  readonly privateVisibilityConfig?: DnsManagedZonePrivateVisibilityConfig[];
  /** timeouts block */
  readonly timeouts?: DnsManagedZoneTimeouts;
}
export interface DnsManagedZoneDnssecConfigDefaultKeySpecs {
  /** String mnemonic specifying the DNSSEC algorithm of this key Possible values: ["ecdsap256sha256", "ecdsap384sha384", "rsasha1", "rsasha256", "rsasha512"] */
  readonly algorithm?: string;
  /** Length of the keys in bits */
  readonly keyLength?: number;
  /** Specifies whether this is a key signing key (KSK) or a zone
signing key (ZSK). Key signing keys have the Secure Entry
Point flag set and, when active, will only be used to sign
resource record sets of type DNSKEY. Zone signing keys do
not have the Secure Entry Point flag set and will be used
to sign all other types of resource record sets. Possible values: ["keySigning", "zoneSigning"] */
  readonly keyType?: string;
  /** Identifies what kind of resource this is */
  readonly kind?: string;
}

function dnsManagedZoneDnssecConfigDefaultKeySpecsToTerraform(struct?: DnsManagedZoneDnssecConfigDefaultKeySpecs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    key_length: cdktf.numberToTerraform(struct!.keyLength),
    key_type: cdktf.stringToTerraform(struct!.keyType),
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}

export interface DnsManagedZoneDnssecConfig {
  /** Identifies what kind of resource this is */
  readonly kind?: string;
  /** Specifies the mechanism used to provide authenticated denial-of-existence responses.
non_existence can only be updated when the state is 'off'. Possible values: ["nsec", "nsec3"] */
  readonly nonExistence?: string;
  /** Specifies whether DNSSEC is enabled, and what mode it is in Possible values: ["off", "on", "transfer"] */
  readonly state?: string;
  /** default_key_specs block */
  readonly defaultKeySpecs?: DnsManagedZoneDnssecConfigDefaultKeySpecs[];
}

function dnsManagedZoneDnssecConfigToTerraform(struct?: DnsManagedZoneDnssecConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    non_existence: cdktf.stringToTerraform(struct!.nonExistence),
    state: cdktf.stringToTerraform(struct!.state),
    default_key_specs: cdktf.listMapper(dnsManagedZoneDnssecConfigDefaultKeySpecsToTerraform)(struct!.defaultKeySpecs),
  }
}

export interface DnsManagedZoneForwardingConfigTargetNameServers {
  /** Forwarding path for this TargetNameServer. If unset or 'default' Cloud DNS will make forwarding
decision based on address ranges, i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go
to the Internet. When set to 'private', Cloud DNS will always send queries through VPC for this target Possible values: ["default", "private"] */
  readonly forwardingPath?: string;
  /** IPv4 address of a target name server. */
  readonly ipv4Address: string;
}

function dnsManagedZoneForwardingConfigTargetNameServersToTerraform(struct?: DnsManagedZoneForwardingConfigTargetNameServers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    forwarding_path: cdktf.stringToTerraform(struct!.forwardingPath),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
  }
}

export interface DnsManagedZoneForwardingConfig {
  /** target_name_servers block */
  readonly targetNameServers: DnsManagedZoneForwardingConfigTargetNameServers[];
}

function dnsManagedZoneForwardingConfigToTerraform(struct?: DnsManagedZoneForwardingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    target_name_servers: cdktf.listMapper(dnsManagedZoneForwardingConfigTargetNameServersToTerraform)(struct!.targetNameServers),
  }
}

export interface DnsManagedZonePeeringConfigTargetNetwork {
  /** The id or fully qualified URL of the VPC network to forward queries to.
This should be formatted like 'projects/{project}/global/networks/{network}' or
'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}' */
  readonly networkUrl: string;
}

function dnsManagedZonePeeringConfigTargetNetworkToTerraform(struct?: DnsManagedZonePeeringConfigTargetNetwork): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    network_url: cdktf.stringToTerraform(struct!.networkUrl),
  }
}

export interface DnsManagedZonePeeringConfig {
  /** target_network block */
  readonly targetNetwork: DnsManagedZonePeeringConfigTargetNetwork[];
}

function dnsManagedZonePeeringConfigToTerraform(struct?: DnsManagedZonePeeringConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    target_network: cdktf.listMapper(dnsManagedZonePeeringConfigTargetNetworkToTerraform)(struct!.targetNetwork),
  }
}

export interface DnsManagedZonePrivateVisibilityConfigNetworks {
  /** The id or fully qualified URL of the VPC network to bind to.
This should be formatted like 'projects/{project}/global/networks/{network}' or
'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}' */
  readonly networkUrl: string;
}

function dnsManagedZonePrivateVisibilityConfigNetworksToTerraform(struct?: DnsManagedZonePrivateVisibilityConfigNetworks): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    network_url: cdktf.stringToTerraform(struct!.networkUrl),
  }
}

export interface DnsManagedZonePrivateVisibilityConfig {
  /** networks block */
  readonly networks: DnsManagedZonePrivateVisibilityConfigNetworks[];
}

function dnsManagedZonePrivateVisibilityConfigToTerraform(struct?: DnsManagedZonePrivateVisibilityConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    networks: cdktf.listMapper(dnsManagedZonePrivateVisibilityConfigNetworksToTerraform)(struct!.networks),
  }
}

export interface DnsManagedZoneTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function dnsManagedZoneTimeoutsToTerraform(struct?: DnsManagedZoneTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class DnsManagedZone extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DnsManagedZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dns_managed_zone',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._dnsName = config.dnsName;
    this._forceDestroy = config.forceDestroy;
    this._labels = config.labels;
    this._name = config.name;
    this._project = config.project;
    this._visibility = config.visibility;
    this._dnssecConfig = config.dnssecConfig;
    this._forwardingConfig = config.forwardingConfig;
    this._peeringConfig = config.peeringConfig;
    this._privateVisibilityConfig = config.privateVisibilityConfig;
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

  // dns_name - computed: false, optional: false, required: true
  private _dnsName: string;
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean;
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean ) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy
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

  // name_servers - computed: true, optional: false, required: false
  public get nameServers() {
    return this.getListAttribute('name_servers');
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

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string;
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string ) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility
  }

  // dnssec_config - computed: false, optional: true, required: false
  private _dnssecConfig?: DnsManagedZoneDnssecConfig[];
  public get dnssecConfig() {
    return this.interpolationForAttribute('dnssec_config') as any;
  }
  public set dnssecConfig(value: DnsManagedZoneDnssecConfig[] ) {
    this._dnssecConfig = value;
  }
  public resetDnssecConfig() {
    this._dnssecConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecConfigInput() {
    return this._dnssecConfig
  }

  // forwarding_config - computed: false, optional: true, required: false
  private _forwardingConfig?: DnsManagedZoneForwardingConfig[];
  public get forwardingConfig() {
    return this.interpolationForAttribute('forwarding_config') as any;
  }
  public set forwardingConfig(value: DnsManagedZoneForwardingConfig[] ) {
    this._forwardingConfig = value;
  }
  public resetForwardingConfig() {
    this._forwardingConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingConfigInput() {
    return this._forwardingConfig
  }

  // peering_config - computed: false, optional: true, required: false
  private _peeringConfig?: DnsManagedZonePeeringConfig[];
  public get peeringConfig() {
    return this.interpolationForAttribute('peering_config') as any;
  }
  public set peeringConfig(value: DnsManagedZonePeeringConfig[] ) {
    this._peeringConfig = value;
  }
  public resetPeeringConfig() {
    this._peeringConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringConfigInput() {
    return this._peeringConfig
  }

  // private_visibility_config - computed: false, optional: true, required: false
  private _privateVisibilityConfig?: DnsManagedZonePrivateVisibilityConfig[];
  public get privateVisibilityConfig() {
    return this.interpolationForAttribute('private_visibility_config') as any;
  }
  public set privateVisibilityConfig(value: DnsManagedZonePrivateVisibilityConfig[] ) {
    this._privateVisibilityConfig = value;
  }
  public resetPrivateVisibilityConfig() {
    this._privateVisibilityConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateVisibilityConfigInput() {
    return this._privateVisibilityConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DnsManagedZoneTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DnsManagedZoneTimeouts ) {
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
      dns_name: cdktf.stringToTerraform(this._dnsName),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      visibility: cdktf.stringToTerraform(this._visibility),
      dnssec_config: cdktf.listMapper(dnsManagedZoneDnssecConfigToTerraform)(this._dnssecConfig),
      forwarding_config: cdktf.listMapper(dnsManagedZoneForwardingConfigToTerraform)(this._forwardingConfig),
      peering_config: cdktf.listMapper(dnsManagedZonePeeringConfigToTerraform)(this._peeringConfig),
      private_visibility_config: cdktf.listMapper(dnsManagedZonePrivateVisibilityConfigToTerraform)(this._privateVisibilityConfig),
      timeouts: dnsManagedZoneTimeoutsToTerraform(this._timeouts),
    };
  }
}
