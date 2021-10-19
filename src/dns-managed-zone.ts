// https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsManagedZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * A textual description field. Defaults to 'Managed by Terraform'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html#description DnsManagedZone#description}
  */
  readonly description?: string;
  /**
  * The DNS name of this managed zone, for instance "example.com.".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html#dns_name DnsManagedZone#dns_name}
  */
  readonly dnsName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html#force_destroy DnsManagedZone#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * A set of key/value label pairs to assign to this ManagedZone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html#labels DnsManagedZone#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * User assigned name for this resource.
Must be unique within the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html#name DnsManagedZone#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html#project DnsManagedZone#project}
  */
  readonly project?: string;
  /**
  * The zone's visibility: public zones are exposed to the Internet,
while private zones are visible only to Virtual Private Cloud resources. Default value: "public" Possible values: ["private", "public"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html#visibility DnsManagedZone#visibility}
  */
  readonly visibility?: string;
  /**
  * dnssec_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html#dnssec_config DnsManagedZone#dnssec_config}
  */
  readonly dnssecConfig?: DnsManagedZoneDnssecConfig;
  /**
  * forwarding_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html#forwarding_config DnsManagedZone#forwarding_config}
  */
  readonly forwardingConfig?: DnsManagedZoneForwardingConfig;
  /**
  * peering_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html#peering_config DnsManagedZone#peering_config}
  */
  readonly peeringConfig?: DnsManagedZonePeeringConfig;
  /**
  * private_visibility_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html#private_visibility_config DnsManagedZone#private_visibility_config}
  */
  readonly privateVisibilityConfig?: DnsManagedZonePrivateVisibilityConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html#timeouts DnsManagedZone#timeouts}
  */
  readonly timeouts?: DnsManagedZoneTimeouts;
}
export interface DnsManagedZoneDnssecConfigDefaultKeySpecs {
  /**
  * String mnemonic specifying the DNSSEC algorithm of this key Possible values: ["ecdsap256sha256", "ecdsap384sha384", "rsasha1", "rsasha256", "rsasha512"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html#algorithm DnsManagedZone#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Length of the keys in bits
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html#key_length DnsManagedZone#key_length}
  */
  readonly keyLength?: number;
  /**
  * Specifies whether this is a key signing key (KSK) or a zone
signing key (ZSK). Key signing keys have the Secure Entry
Point flag set and, when active, will only be used to sign
resource record sets of type DNSKEY. Zone signing keys do
not have the Secure Entry Point flag set and will be used
to sign all other types of resource record sets. Possible values: ["keySigning", "zoneSigning"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html#key_type DnsManagedZone#key_type}
  */
  readonly keyType?: string;
  /**
  * Identifies what kind of resource this is
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html#kind DnsManagedZone#kind}
  */
  readonly kind?: string;
}

function dnsManagedZoneDnssecConfigDefaultKeySpecsToTerraform(struct?: DnsManagedZoneDnssecConfigDefaultKeySpecs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    key_length: cdktf.numberToTerraform(struct!.keyLength),
    key_type: cdktf.stringToTerraform(struct!.keyType),
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}

export interface DnsManagedZoneDnssecConfig {
  /**
  * Identifies what kind of resource this is
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html#kind DnsManagedZone#kind}
  */
  readonly kind?: string;
  /**
  * Specifies the mechanism used to provide authenticated denial-of-existence responses.
non_existence can only be updated when the state is 'off'. Possible values: ["nsec", "nsec3"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html#non_existence DnsManagedZone#non_existence}
  */
  readonly nonExistence?: string;
  /**
  * Specifies whether DNSSEC is enabled, and what mode it is in Possible values: ["off", "on", "transfer"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html#state DnsManagedZone#state}
  */
  readonly state?: string;
  /**
  * default_key_specs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html#default_key_specs DnsManagedZone#default_key_specs}
  */
  readonly defaultKeySpecs?: DnsManagedZoneDnssecConfigDefaultKeySpecs[];
}

function dnsManagedZoneDnssecConfigToTerraform(struct?: DnsManagedZoneDnssecConfigOutputReference | DnsManagedZoneDnssecConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    non_existence: cdktf.stringToTerraform(struct!.nonExistence),
    state: cdktf.stringToTerraform(struct!.state),
    default_key_specs: cdktf.listMapper(dnsManagedZoneDnssecConfigDefaultKeySpecsToTerraform)(struct!.defaultKeySpecs),
  }
}

export class DnsManagedZoneDnssecConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string | undefined; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string | undefined) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind
  }

  // non_existence - computed: true, optional: true, required: false
  private _nonExistence?: string | undefined; 
  public get nonExistence() {
    return this.getStringAttribute('non_existence');
  }
  public set nonExistence(value: string | undefined) {
    this._nonExistence = value;
  }
  public resetNonExistence() {
    this._nonExistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonExistenceInput() {
    return this._nonExistence
  }

  // state - computed: false, optional: true, required: false
  private _state?: string | undefined; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string | undefined) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state
  }

  // default_key_specs - computed: false, optional: true, required: false
  private _defaultKeySpecs?: DnsManagedZoneDnssecConfigDefaultKeySpecs[] | undefined; 
  public get defaultKeySpecs() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('default_key_specs') as any;
  }
  public set defaultKeySpecs(value: DnsManagedZoneDnssecConfigDefaultKeySpecs[] | undefined) {
    this._defaultKeySpecs = value;
  }
  public resetDefaultKeySpecs() {
    this._defaultKeySpecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultKeySpecsInput() {
    return this._defaultKeySpecs
  }
}
export interface DnsManagedZoneForwardingConfigTargetNameServers {
  /**
  * Forwarding path for this TargetNameServer. If unset or 'default' Cloud DNS will make forwarding
decision based on address ranges, i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go
to the Internet. When set to 'private', Cloud DNS will always send queries through VPC for this target Possible values: ["default", "private"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html#forwarding_path DnsManagedZone#forwarding_path}
  */
  readonly forwardingPath?: string;
  /**
  * IPv4 address of a target name server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html#ipv4_address DnsManagedZone#ipv4_address}
  */
  readonly ipv4Address: string;
}

function dnsManagedZoneForwardingConfigTargetNameServersToTerraform(struct?: DnsManagedZoneForwardingConfigTargetNameServers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forwarding_path: cdktf.stringToTerraform(struct!.forwardingPath),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
  }
}

export interface DnsManagedZoneForwardingConfig {
  /**
  * target_name_servers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html#target_name_servers DnsManagedZone#target_name_servers}
  */
  readonly targetNameServers: DnsManagedZoneForwardingConfigTargetNameServers[];
}

function dnsManagedZoneForwardingConfigToTerraform(struct?: DnsManagedZoneForwardingConfigOutputReference | DnsManagedZoneForwardingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_name_servers: cdktf.listMapper(dnsManagedZoneForwardingConfigTargetNameServersToTerraform)(struct!.targetNameServers),
  }
}

export class DnsManagedZoneForwardingConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // target_name_servers - computed: false, optional: false, required: true
  private _targetNameServers?: DnsManagedZoneForwardingConfigTargetNameServers[]; 
  public get targetNameServers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('target_name_servers') as any;
  }
  public set targetNameServers(value: DnsManagedZoneForwardingConfigTargetNameServers[]) {
    this._targetNameServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameServersInput() {
    return this._targetNameServers
  }
}
export interface DnsManagedZonePeeringConfigTargetNetwork {
  /**
  * The id or fully qualified URL of the VPC network to forward queries to.
This should be formatted like 'projects/{project}/global/networks/{network}' or
'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html#network_url DnsManagedZone#network_url}
  */
  readonly networkUrl: string;
}

function dnsManagedZonePeeringConfigTargetNetworkToTerraform(struct?: DnsManagedZonePeeringConfigTargetNetworkOutputReference | DnsManagedZonePeeringConfigTargetNetwork): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_url: cdktf.stringToTerraform(struct!.networkUrl),
  }
}

export class DnsManagedZonePeeringConfigTargetNetworkOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // network_url - computed: false, optional: false, required: true
  private _networkUrl?: string; 
  public get networkUrl() {
    return this.getStringAttribute('network_url');
  }
  public set networkUrl(value: string) {
    this._networkUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkUrlInput() {
    return this._networkUrl
  }
}
export interface DnsManagedZonePeeringConfig {
  /**
  * target_network block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html#target_network DnsManagedZone#target_network}
  */
  readonly targetNetwork: DnsManagedZonePeeringConfigTargetNetwork;
}

function dnsManagedZonePeeringConfigToTerraform(struct?: DnsManagedZonePeeringConfigOutputReference | DnsManagedZonePeeringConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_network: dnsManagedZonePeeringConfigTargetNetworkToTerraform(struct!.targetNetwork),
  }
}

export class DnsManagedZonePeeringConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // target_network - computed: false, optional: false, required: true
  private _targetNetwork?: DnsManagedZonePeeringConfigTargetNetwork; 
  private __targetNetworkOutput = new DnsManagedZonePeeringConfigTargetNetworkOutputReference(this as any, "target_network", true);
  public get targetNetwork() {
    return this.__targetNetworkOutput;
  }
  public putTargetNetwork(value: DnsManagedZonePeeringConfigTargetNetwork) {
    this._targetNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNetworkInput() {
    return this._targetNetwork
  }
}
export interface DnsManagedZonePrivateVisibilityConfigNetworks {
  /**
  * The id or fully qualified URL of the VPC network to bind to.
This should be formatted like 'projects/{project}/global/networks/{network}' or
'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html#network_url DnsManagedZone#network_url}
  */
  readonly networkUrl: string;
}

function dnsManagedZonePrivateVisibilityConfigNetworksToTerraform(struct?: DnsManagedZonePrivateVisibilityConfigNetworks): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_url: cdktf.stringToTerraform(struct!.networkUrl),
  }
}

export interface DnsManagedZonePrivateVisibilityConfig {
  /**
  * networks block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html#networks DnsManagedZone#networks}
  */
  readonly networks: DnsManagedZonePrivateVisibilityConfigNetworks[];
}

function dnsManagedZonePrivateVisibilityConfigToTerraform(struct?: DnsManagedZonePrivateVisibilityConfigOutputReference | DnsManagedZonePrivateVisibilityConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    networks: cdktf.listMapper(dnsManagedZonePrivateVisibilityConfigNetworksToTerraform)(struct!.networks),
  }
}

export class DnsManagedZonePrivateVisibilityConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // networks - computed: false, optional: false, required: true
  private _networks?: DnsManagedZonePrivateVisibilityConfigNetworks[]; 
  public get networks() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('networks') as any;
  }
  public set networks(value: DnsManagedZonePrivateVisibilityConfigNetworks[]) {
    this._networks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks
  }
}
export interface DnsManagedZoneTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html#create DnsManagedZone#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html#delete DnsManagedZone#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html#update DnsManagedZone#update}
  */
  readonly update?: string;
}

function dnsManagedZoneTimeoutsToTerraform(struct?: DnsManagedZoneTimeoutsOutputReference | DnsManagedZoneTimeouts): any {
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

export class DnsManagedZoneTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html google_dns_managed_zone}
*/
export class DnsManagedZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_dns_managed_zone";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone.html google_dns_managed_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsManagedZoneConfig
  */
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

  // dns_name - computed: false, optional: false, required: true
  private _dnsName?: string; 
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
  private _forceDestroy?: boolean | cdktf.IResolvable | undefined; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy') as any;
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable | undefined) {
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
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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

  // name_servers - computed: true, optional: false, required: false
  public get nameServers() {
    return this.getListAttribute('name_servers');
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

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string | undefined; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string | undefined) {
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
  private _dnssecConfig?: DnsManagedZoneDnssecConfig | undefined; 
  private __dnssecConfigOutput = new DnsManagedZoneDnssecConfigOutputReference(this as any, "dnssec_config", true);
  public get dnssecConfig() {
    return this.__dnssecConfigOutput;
  }
  public putDnssecConfig(value: DnsManagedZoneDnssecConfig | undefined) {
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
  private _forwardingConfig?: DnsManagedZoneForwardingConfig | undefined; 
  private __forwardingConfigOutput = new DnsManagedZoneForwardingConfigOutputReference(this as any, "forwarding_config", true);
  public get forwardingConfig() {
    return this.__forwardingConfigOutput;
  }
  public putForwardingConfig(value: DnsManagedZoneForwardingConfig | undefined) {
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
  private _peeringConfig?: DnsManagedZonePeeringConfig | undefined; 
  private __peeringConfigOutput = new DnsManagedZonePeeringConfigOutputReference(this as any, "peering_config", true);
  public get peeringConfig() {
    return this.__peeringConfigOutput;
  }
  public putPeeringConfig(value: DnsManagedZonePeeringConfig | undefined) {
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
  private _privateVisibilityConfig?: DnsManagedZonePrivateVisibilityConfig | undefined; 
  private __privateVisibilityConfigOutput = new DnsManagedZonePrivateVisibilityConfigOutputReference(this as any, "private_visibility_config", true);
  public get privateVisibilityConfig() {
    return this.__privateVisibilityConfigOutput;
  }
  public putPrivateVisibilityConfig(value: DnsManagedZonePrivateVisibilityConfig | undefined) {
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
  private _timeouts?: DnsManagedZoneTimeouts | undefined; 
  private __timeoutsOutput = new DnsManagedZoneTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DnsManagedZoneTimeouts | undefined) {
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
      dnssec_config: dnsManagedZoneDnssecConfigToTerraform(this._dnssecConfig),
      forwarding_config: dnsManagedZoneForwardingConfigToTerraform(this._forwardingConfig),
      peering_config: dnsManagedZonePeeringConfigToTerraform(this._peeringConfig),
      private_visibility_config: dnsManagedZonePrivateVisibilityConfigToTerraform(this._privateVisibilityConfig),
      timeouts: dnsManagedZoneTimeoutsToTerraform(this._timeouts),
    };
  }
}
