// https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessContextManagerServicePerimeterConfig extends cdktf.TerraformMetaArguments {
  /** Description of the ServicePerimeter and its use. Does not affect
behavior. */
  readonly description?: string;
  /** Resource name for the ServicePerimeter. The short_name component must
begin with a letter and only include alphanumeric and '_'.
Format: accessPolicies/{policy_id}/servicePerimeters/{short_name} */
  readonly name: string;
  /** The AccessPolicy this ServicePerimeter lives in.
Format: accessPolicies/{policy_id} */
  readonly parent: string;
  /** Specifies the type of the Perimeter. There are two types: regular and
bridge. Regular Service Perimeter contains resources, access levels,
and restricted services. Every resource can be in at most
ONE regular Service Perimeter.

In addition to being in a regular service perimeter, a resource can also
be in zero or more perimeter bridges. A perimeter bridge only contains
resources. Cross project operations are permitted if all effected
resources share some perimeter (whether bridge or regular). Perimeter
Bridge does not contain access levels or services: those are governed
entirely by the regular perimeter that resource is in.

Perimeter Bridges are typically useful when building more complex
topologies with many independent perimeters that need to share some data
with a common perimeter, but should not be able to share data among
themselves. Default value: "PERIMETER_TYPE_REGULAR" Possible values: ["PERIMETER_TYPE_REGULAR", "PERIMETER_TYPE_BRIDGE"] */
  readonly perimeterType?: string;
  /** Human readable title. Must be unique within the Policy. */
  readonly title: string;
  /** Use explicit dry run spec flag. Ordinarily, a dry-run spec implicitly exists
for all Service Perimeters, and that spec is identical to the status for those
Service Perimeters. When this flag is set, it inhibits the generation of the
implicit spec, thereby allowing the user to explicitly provide a
configuration ("spec") to use in a dry-run version of the Service Perimeter.
This allows the user to test changes to the enforced config ("status") without
actually enforcing them. This testing is done through analyzing the differences
between currently enforced and suggested restrictions. useExplicitDryRunSpec must
bet set to True if any of the fields in the spec are set to non-default values. */
  readonly useExplicitDryRunSpec?: boolean;
  /** spec block */
  readonly spec?: AccessContextManagerServicePerimeterSpec[];
  /** status block */
  readonly status?: AccessContextManagerServicePerimeterStatus[];
  /** timeouts block */
  readonly timeouts?: AccessContextManagerServicePerimeterTimeouts;
}
export interface AccessContextManagerServicePerimeterSpecVpcAccessibleServices {
  /** The list of APIs usable within the Service Perimeter.
Must be empty unless 'enableRestriction' is True. */
  readonly allowedServices?: string[];
  /** Whether to restrict API calls within the Service Perimeter to the
list of APIs specified in 'allowedServices'. */
  readonly enableRestriction?: boolean;
}

function accessContextManagerServicePerimeterSpecVpcAccessibleServicesToTerraform(struct?: AccessContextManagerServicePerimeterSpecVpcAccessibleServices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedServices),
    enable_restriction: cdktf.booleanToTerraform(struct!.enableRestriction),
  }
}

export interface AccessContextManagerServicePerimeterSpec {
  /** A list of AccessLevel resource names that allow resources within
the ServicePerimeter to be accessed from the internet.
AccessLevels listed must be in the same policy as this
ServicePerimeter. Referencing a nonexistent AccessLevel is a
syntax error. If no AccessLevel names are listed, resources within
the perimeter can only be accessed via GCP calls with request
origins within the perimeter. For Service Perimeter Bridge, must
be empty.

Format: accessPolicies/{policy_id}/accessLevels/{access_level_name} */
  readonly accessLevels?: string[];
  /** A list of GCP resources that are inside of the service perimeter.
Currently only projects are allowed.
Format: projects/{project_number} */
  readonly resources?: string[];
  /** GCP services that are subject to the Service Perimeter
restrictions. Must contain a list of services. For example, if
'storage.googleapis.com' is specified, access to the storage
buckets inside the perimeter must meet the perimeter's access
restrictions. */
  readonly restrictedServices?: string[];
  /** vpc_accessible_services block */
  readonly vpcAccessibleServices?: AccessContextManagerServicePerimeterSpecVpcAccessibleServices[];
}

function accessContextManagerServicePerimeterSpecToTerraform(struct?: AccessContextManagerServicePerimeterSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accessLevels),
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    restricted_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.restrictedServices),
    vpc_accessible_services: cdktf.listMapper(accessContextManagerServicePerimeterSpecVpcAccessibleServicesToTerraform)(struct!.vpcAccessibleServices),
  }
}

export interface AccessContextManagerServicePerimeterStatusVpcAccessibleServices {
  /** The list of APIs usable within the Service Perimeter.
Must be empty unless 'enableRestriction' is True. */
  readonly allowedServices?: string[];
  /** Whether to restrict API calls within the Service Perimeter to the
list of APIs specified in 'allowedServices'. */
  readonly enableRestriction?: boolean;
}

function accessContextManagerServicePerimeterStatusVpcAccessibleServicesToTerraform(struct?: AccessContextManagerServicePerimeterStatusVpcAccessibleServices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedServices),
    enable_restriction: cdktf.booleanToTerraform(struct!.enableRestriction),
  }
}

export interface AccessContextManagerServicePerimeterStatus {
  /** A list of AccessLevel resource names that allow resources within
the ServicePerimeter to be accessed from the internet.
AccessLevels listed must be in the same policy as this
ServicePerimeter. Referencing a nonexistent AccessLevel is a
syntax error. If no AccessLevel names are listed, resources within
the perimeter can only be accessed via GCP calls with request
origins within the perimeter. For Service Perimeter Bridge, must
be empty.

Format: accessPolicies/{policy_id}/accessLevels/{access_level_name} */
  readonly accessLevels?: string[];
  /** A list of GCP resources that are inside of the service perimeter.
Currently only projects are allowed.
Format: projects/{project_number} */
  readonly resources?: string[];
  /** GCP services that are subject to the Service Perimeter
restrictions. Must contain a list of services. For example, if
'storage.googleapis.com' is specified, access to the storage
buckets inside the perimeter must meet the perimeter's access
restrictions. */
  readonly restrictedServices?: string[];
  /** vpc_accessible_services block */
  readonly vpcAccessibleServices?: AccessContextManagerServicePerimeterStatusVpcAccessibleServices[];
}

function accessContextManagerServicePerimeterStatusToTerraform(struct?: AccessContextManagerServicePerimeterStatus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accessLevels),
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    restricted_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.restrictedServices),
    vpc_accessible_services: cdktf.listMapper(accessContextManagerServicePerimeterStatusVpcAccessibleServicesToTerraform)(struct!.vpcAccessibleServices),
  }
}

export interface AccessContextManagerServicePerimeterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function accessContextManagerServicePerimeterTimeoutsToTerraform(struct?: AccessContextManagerServicePerimeterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class AccessContextManagerServicePerimeter extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AccessContextManagerServicePerimeterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_access_context_manager_service_perimeter',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._parent = config.parent;
    this._perimeterType = config.perimeterType;
    this._title = config.title;
    this._useExplicitDryRunSpec = config.useExplicitDryRunSpec;
    this._spec = config.spec;
    this._status = config.status;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

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

  // parent - computed: false, optional: false, required: true
  private _parent: string;
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent
  }

  // perimeter_type - computed: false, optional: true, required: false
  private _perimeterType?: string;
  public get perimeterType() {
    return this.getStringAttribute('perimeter_type');
  }
  public set perimeterType(value: string ) {
    this._perimeterType = value;
  }
  public resetPerimeterType() {
    this._perimeterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perimeterTypeInput() {
    return this._perimeterType
  }

  // title - computed: false, optional: false, required: true
  private _title: string;
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // use_explicit_dry_run_spec - computed: false, optional: true, required: false
  private _useExplicitDryRunSpec?: boolean;
  public get useExplicitDryRunSpec() {
    return this.getBooleanAttribute('use_explicit_dry_run_spec');
  }
  public set useExplicitDryRunSpec(value: boolean ) {
    this._useExplicitDryRunSpec = value;
  }
  public resetUseExplicitDryRunSpec() {
    this._useExplicitDryRunSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useExplicitDryRunSpecInput() {
    return this._useExplicitDryRunSpec
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: AccessContextManagerServicePerimeterSpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: AccessContextManagerServicePerimeterSpec[] ) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
  }

  // status - computed: false, optional: true, required: false
  private _status?: AccessContextManagerServicePerimeterStatus[];
  public get status() {
    return this.interpolationForAttribute('status') as any;
  }
  public set status(value: AccessContextManagerServicePerimeterStatus[] ) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AccessContextManagerServicePerimeterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AccessContextManagerServicePerimeterTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      parent: cdktf.stringToTerraform(this._parent),
      perimeter_type: cdktf.stringToTerraform(this._perimeterType),
      title: cdktf.stringToTerraform(this._title),
      use_explicit_dry_run_spec: cdktf.booleanToTerraform(this._useExplicitDryRunSpec),
      spec: cdktf.listMapper(accessContextManagerServicePerimeterSpecToTerraform)(this._spec),
      status: cdktf.listMapper(accessContextManagerServicePerimeterStatusToTerraform)(this._status),
      timeouts: accessContextManagerServicePerimeterTimeoutsToTerraform(this._timeouts),
    };
  }
}
