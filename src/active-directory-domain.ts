// https://www.terraform.io/docs/providers/google/r/active_directory_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActiveDirectoryDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of delegated administrator account used to perform Active Directory operations. 
If not specified, setupadmin will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain#admin ActiveDirectoryDomain#admin}
  */
  readonly admin?: string;
  /**
  * The full names of the Google Compute Engine networks the domain instance is connected to. The domain is only available on networks listed in authorizedNetworks.
If CIDR subnets overlap between networks, domain creation will fail.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain#authorized_networks ActiveDirectoryDomain#authorized_networks}
  */
  readonly authorizedNetworks?: string[];
  /**
  * The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions, 
https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain#domain_name ActiveDirectoryDomain#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain#id ActiveDirectoryDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource labels that can contain user-provided metadata
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain#labels ActiveDirectoryDomain#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Locations where domain needs to be provisioned. [regions][compute/docs/regions-zones/] 
e.g. us-west1 or us-east4 Service supports up to 4 locations at once. Each location will use a /26 block.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain#locations ActiveDirectoryDomain#locations}
  */
  readonly locations: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain#project ActiveDirectoryDomain#project}
  */
  readonly project?: string;
  /**
  * The CIDR range of internal addresses that are reserved for this domain. Reserved networks must be /24 or larger. 
Ranges must be unique and non-overlapping with existing subnets in authorizedNetworks
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain#reserved_ip_range ActiveDirectoryDomain#reserved_ip_range}
  */
  readonly reservedIpRange: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain#timeouts ActiveDirectoryDomain#timeouts}
  */
  readonly timeouts?: ActiveDirectoryDomainTimeouts;
}
export interface ActiveDirectoryDomainTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain#create ActiveDirectoryDomain#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain#delete ActiveDirectoryDomain#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain#update ActiveDirectoryDomain#update}
  */
  readonly update?: string;
}

export function activeDirectoryDomainTimeoutsToTerraform(struct?: ActiveDirectoryDomainTimeoutsOutputReference | ActiveDirectoryDomainTimeouts | cdktf.IResolvable): any {
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

export class ActiveDirectoryDomainTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ActiveDirectoryDomainTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ActiveDirectoryDomainTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain google_active_directory_domain}
*/
export class ActiveDirectoryDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_active_directory_domain";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain google_active_directory_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActiveDirectoryDomainConfig
  */
  public constructor(scope: Construct, id: string, config: ActiveDirectoryDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'google_active_directory_domain',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
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
    this._admin = config.admin;
    this._authorizedNetworks = config.authorizedNetworks;
    this._domainName = config.domainName;
    this._id = config.id;
    this._labels = config.labels;
    this._locations = config.locations;
    this._project = config.project;
    this._reservedIpRange = config.reservedIpRange;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin - computed: false, optional: true, required: false
  private _admin?: string; 
  public get admin() {
    return this.getStringAttribute('admin');
  }
  public set admin(value: string) {
    this._admin = value;
  }
  public resetAdmin() {
    this._admin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminInput() {
    return this._admin;
  }

  // authorized_networks - computed: false, optional: true, required: false
  private _authorizedNetworks?: string[]; 
  public get authorizedNetworks() {
    return cdktf.Fn.tolist(this.getListAttribute('authorized_networks'));
  }
  public set authorizedNetworks(value: string[]) {
    this._authorizedNetworks = value;
  }
  public resetAuthorizedNetworks() {
    this._authorizedNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedNetworksInput() {
    return this._authorizedNetworks;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
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

  // locations - computed: false, optional: false, required: true
  private _locations?: string[]; 
  public get locations() {
    return this.getListAttribute('locations');
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
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
    return this._project;
  }

  // reserved_ip_range - computed: false, optional: false, required: true
  private _reservedIpRange?: string; 
  public get reservedIpRange() {
    return this.getStringAttribute('reserved_ip_range');
  }
  public set reservedIpRange(value: string) {
    this._reservedIpRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedIpRangeInput() {
    return this._reservedIpRange;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ActiveDirectoryDomainTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ActiveDirectoryDomainTimeouts) {
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
      admin: cdktf.stringToTerraform(this._admin),
      authorized_networks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authorizedNetworks),
      domain_name: cdktf.stringToTerraform(this._domainName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._locations),
      project: cdktf.stringToTerraform(this._project),
      reserved_ip_range: cdktf.stringToTerraform(this._reservedIpRange),
      timeouts: activeDirectoryDomainTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
