// https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DnsManagedZoneConfig extends TerraformMetaArguments {
  /** A textual description field. Defaults to 'Managed by Terraform'. */
  readonly description?: string;
  /** The DNS name of this managed zone, for instance "example.com.". */
  readonly dnsName: string;
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
export interface DnsManagedZoneForwardingConfigTargetNameServers {
  /** Forwarding path for this TargetNameServer. If unset or 'default' Cloud DNS will make forwarding
decision based on address ranges, i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go
to the Internet. When set to 'private', Cloud DNS will always send queries through VPC for this target Possible values: ["default", "private"] */
  readonly forwardingPath?: string;
  /** IPv4 address of a target name server. */
  readonly ipv4Address: string;
}
export interface DnsManagedZoneForwardingConfig {
  /** target_name_servers block */
  readonly targetNameServers: DnsManagedZoneForwardingConfigTargetNameServers[];
}
export interface DnsManagedZonePeeringConfigTargetNetwork {
  /** The id or fully qualified URL of the VPC network to forward queries to.
This should be formatted like 'projects/{project}/global/networks/{network}' or
'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}' */
  readonly networkUrl: string;
}
export interface DnsManagedZonePeeringConfig {
  /** target_network block */
  readonly targetNetwork: DnsManagedZonePeeringConfigTargetNetwork[];
}
export interface DnsManagedZonePrivateVisibilityConfigNetworks {
  /** The id or fully qualified URL of the VPC network to bind to.
This should be formatted like 'projects/{project}/global/networks/{network}' or
'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}' */
  readonly networkUrl: string;
}
export interface DnsManagedZonePrivateVisibilityConfig {
  /** networks block */
  readonly networks: DnsManagedZonePrivateVisibilityConfigNetworks[];
}
export interface DnsManagedZoneTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DnsManagedZone extends TerraformResource {

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
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // dns_name - computed: false, optional: false, required: true
  private _dnsName: string;
  public get dnsName() {
    return this._dnsName;
  }
  public set dnsName(value: string) {
    this._dnsName = value;
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

  // name_servers - computed: true, optional: false, required: true
  public get nameServers() {
    return this.getListAttribute('name_servers');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string;
  public get visibility() {
    return this._visibility;
  }
  public set visibility(value: string | undefined) {
    this._visibility = value;
  }

  // dnssec_config - computed: false, optional: true, required: false
  private _dnssecConfig?: DnsManagedZoneDnssecConfig[];
  public get dnssecConfig() {
    return this._dnssecConfig;
  }
  public set dnssecConfig(value: DnsManagedZoneDnssecConfig[] | undefined) {
    this._dnssecConfig = value;
  }

  // forwarding_config - computed: false, optional: true, required: false
  private _forwardingConfig?: DnsManagedZoneForwardingConfig[];
  public get forwardingConfig() {
    return this._forwardingConfig;
  }
  public set forwardingConfig(value: DnsManagedZoneForwardingConfig[] | undefined) {
    this._forwardingConfig = value;
  }

  // peering_config - computed: false, optional: true, required: false
  private _peeringConfig?: DnsManagedZonePeeringConfig[];
  public get peeringConfig() {
    return this._peeringConfig;
  }
  public set peeringConfig(value: DnsManagedZonePeeringConfig[] | undefined) {
    this._peeringConfig = value;
  }

  // private_visibility_config - computed: false, optional: true, required: false
  private _privateVisibilityConfig?: DnsManagedZonePrivateVisibilityConfig[];
  public get privateVisibilityConfig() {
    return this._privateVisibilityConfig;
  }
  public set privateVisibilityConfig(value: DnsManagedZonePrivateVisibilityConfig[] | undefined) {
    this._privateVisibilityConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DnsManagedZoneTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DnsManagedZoneTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      dns_name: this._dnsName,
      labels: this._labels,
      name: this._name,
      project: this._project,
      visibility: this._visibility,
      dnssec_config: this._dnssecConfig,
      forwarding_config: this._forwardingConfig,
      peering_config: this._peeringConfig,
      private_visibility_config: this._privateVisibilityConfig,
      timeouts: this._timeouts,
    };
  }
}
