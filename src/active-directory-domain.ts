// https://www.terraform.io/docs/providers/google/r/active_directory_domain.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActiveDirectoryDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of delegated administrator account used to perform Active Directory operations. 
If not specified, setupadmin will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain.html#admin ActiveDirectoryDomain#admin}
  */
  readonly admin?: string;
  /**
  * The full names of the Google Compute Engine networks the domain instance is connected to. The domain is only available on networks listed in authorizedNetworks.
If CIDR subnets overlap between networks, domain creation will fail.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain.html#authorized_networks ActiveDirectoryDomain#authorized_networks}
  */
  readonly authorizedNetworks?: string[];
  /**
  * The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions, 
https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain.html#domain_name ActiveDirectoryDomain#domain_name}
  */
  readonly domainName: string;
  /**
  * Resource labels that can contain user-provided metadata
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain.html#labels ActiveDirectoryDomain#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Locations where domain needs to be provisioned. [regions][compute/docs/regions-zones/] 
e.g. us-west1 or us-east4 Service supports up to 4 locations at once. Each location will use a /26 block.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain.html#locations ActiveDirectoryDomain#locations}
  */
  readonly locations: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain.html#project ActiveDirectoryDomain#project}
  */
  readonly project?: string;
  /**
  * The CIDR range of internal addresses that are reserved for this domain. Reserved networks must be /24 or larger. 
Ranges must be unique and non-overlapping with existing subnets in authorizedNetworks
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain.html#reserved_ip_range ActiveDirectoryDomain#reserved_ip_range}
  */
  readonly reservedIpRange: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain.html#timeouts ActiveDirectoryDomain#timeouts}
  */
  readonly timeouts?: ActiveDirectoryDomainTimeouts;
}
export interface ActiveDirectoryDomainTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain.html#create ActiveDirectoryDomain#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain.html#delete ActiveDirectoryDomain#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain.html#update ActiveDirectoryDomain#update}
  */
  readonly update?: string;
}

function activeDirectoryDomainTimeoutsToTerraform(struct?: ActiveDirectoryDomainTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain.html google_active_directory_domain}
*/
export class ActiveDirectoryDomain extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain.html google_active_directory_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActiveDirectoryDomainConfig
  */
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
    return this.getStringAttribute('admin');
  }
  public set admin(value: string ) {
    this._admin = value;
  }
  public resetAdmin() {
    this._admin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminInput() {
    return this._admin
  }

  // authorized_networks - computed: false, optional: true, required: false
  private _authorizedNetworks?: string[];
  public get authorizedNetworks() {
    return this.getListAttribute('authorized_networks');
  }
  public set authorizedNetworks(value: string[] ) {
    this._authorizedNetworks = value;
  }
  public resetAuthorizedNetworks() {
    this._authorizedNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedNetworksInput() {
    return this._authorizedNetworks
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName: string;
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
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

  // locations - computed: false, optional: false, required: true
  private _locations: string[];
  public get locations() {
    return this.getListAttribute('locations');
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // reserved_ip_range - computed: false, optional: false, required: true
  private _reservedIpRange: string;
  public get reservedIpRange() {
    return this.getStringAttribute('reserved_ip_range');
  }
  public set reservedIpRange(value: string) {
    this._reservedIpRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedIpRangeInput() {
    return this._reservedIpRange
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ActiveDirectoryDomainTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ActiveDirectoryDomainTimeouts ) {
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
      admin: cdktf.stringToTerraform(this._admin),
      authorized_networks: cdktf.listMapper(cdktf.stringToTerraform)(this._authorizedNetworks),
      domain_name: cdktf.stringToTerraform(this._domainName),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      locations: cdktf.listMapper(cdktf.stringToTerraform)(this._locations),
      project: cdktf.stringToTerraform(this._project),
      reserved_ip_range: cdktf.stringToTerraform(this._reservedIpRange),
      timeouts: activeDirectoryDomainTimeoutsToTerraform(this._timeouts),
    };
  }
}
