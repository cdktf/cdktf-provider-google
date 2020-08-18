// https://www.terraform.io/docs/providers/google/r/active_directory_domain.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ActiveDirectoryDomainConfig extends TerraformMetaArguments {
  /** The name of delegated administrator account used to perform Active Directory operations. 
If not specified, setupadmin will be used. */
  readonly admin?: string;
  /** The full names of the Google Compute Engine networks the domain instance is connected to. The domain is only available on networks listed in authorizedNetworks.
If CIDR subnets overlap between networks, domain creation will fail. */
  readonly authorizedNetworks?: string[];
  /** The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions, 
https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains. */
  readonly domainName: string;
  /** Resource labels that can contain user-provided metadata */
  readonly labels?: { [key: string]: string };
  /** Locations where domain needs to be provisioned. [regions][compute/docs/regions-zones/] 
e.g. us-west1 or us-east4 Service supports up to 4 locations at once. Each location will use a /26 block. */
  readonly locations: string[];
  readonly project?: string;
  /** The CIDR range of internal addresses that are reserved for this domain. Reserved networks must be /24 or larger. 
Ranges must be unique and non-overlapping with existing subnets in authorizedNetworks */
  readonly reservedIpRange: string;
  /** timeouts block */
  readonly timeouts?: ActiveDirectoryDomainTimeouts;
}
export interface ActiveDirectoryDomainTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ActiveDirectoryDomain extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ActiveDirectoryDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'google_active_directory_domain',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._admin = config.admin;
    this._authorizedNetworks = config.authorizedNetworks;
    this._domainName = config.domainName;
    this._labels = config.labels;
    this._locations = config.locations;
    this._project = config.project;
    this._reservedIpRange = config.reservedIpRange;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin - computed: false, optional: true, required: false
  private _admin?: string;
  public get admin() {
    return this._admin;
  }
  public set admin(value: string | undefined) {
    this._admin = value;
  }

  // authorized_networks - computed: false, optional: true, required: false
  private _authorizedNetworks?: string[];
  public get authorizedNetworks() {
    return this._authorizedNetworks;
  }
  public set authorizedNetworks(value: string[] | undefined) {
    this._authorizedNetworks = value;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName: string;
  public get domainName() {
    return this._domainName;
  }
  public set domainName(value: string) {
    this._domainName = value;
  }

  // fqdn - computed: true, optional: false, required: true
  public get fqdn() {
    return this.getStringAttribute('fqdn');
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

  // locations - computed: false, optional: false, required: true
  private _locations: string[];
  public get locations() {
    return this._locations;
  }
  public set locations(value: string[]) {
    this._locations = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // reserved_ip_range - computed: false, optional: false, required: true
  private _reservedIpRange: string;
  public get reservedIpRange() {
    return this._reservedIpRange;
  }
  public set reservedIpRange(value: string) {
    this._reservedIpRange = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ActiveDirectoryDomainTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ActiveDirectoryDomainTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      admin: this._admin,
      authorized_networks: this._authorizedNetworks,
      domain_name: this._domainName,
      labels: this._labels,
      locations: this._locations,
      project: this._project,
      reserved_ip_range: this._reservedIpRange,
      timeouts: this._timeouts,
    };
  }
}
